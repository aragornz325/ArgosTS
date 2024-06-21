import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import 'reflect-metadata';
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { useDrizzleStudio } from "expo-drizzle-studio-plugin";
import * as SQLite from "expo-sqlite";

import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite/next";
import { useMigrations } from 'drizzle-orm/expo-sqlite/migrator';
import migrations from './drizzle/migrations';

import Main from './src/Main';
import { initializeDatabase } from './db/initdb';

// Inicializar la base de datos SQLite para migraciones

const expoDb = openDatabaseSync("argos_local_db");
const dbMigrations = drizzle(expoDb);

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const { success, error } = useMigrations(dbMigrations, migrations);

  // Mover este hook fuera de la condición para que siempre se ejecute en el mismo orden
  const db = SQLite.openDatabaseSync("argos_local_db");
  useDrizzleStudio(db);

  useEffect(() => {
    async function prepare() {
      try {
        // Evitar que la pantalla de splash se oculte automáticamente
        await SplashScreen.preventAutoHideAsync();

        // Pre-cargar fuentes, hacer cualquier llamada API necesaria aquí
        await Font.loadAsync(Entypo.font);

        // Retraso artificial de dos segundos para simular una carga lenta
        // experiencia. Por favor, elimina esto si copias y pegas el código.
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Indicar a la aplicación que ya está lista para renderizar
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // Esto indica a la pantalla de splash que se oculte inmediatamente
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (error) {
    return (
      <ScrollView>
        <View>
          <Text>Tenemos un problema grave</Text>
          <Text>Migration error: {error.name}</Text>
          <Text>Migration error: {error.stack}</Text>
        </View>
      </ScrollView>
    );
  }

  if (!success) {
    return (
      <View>
        <Text>Migration is in progress...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="dark" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
