import React, { useState, useEffect } from 'react';
import {FlatList, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { getTrafficTickets } from './queries/misMultas.query';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-ui-lib';


const MisMultas: React.FC = () => {
  const [multas, setMultas] = useState<iTraffic[] | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<iTraffic | null>(null);

  useEffect(() => {
    getTrafficTickets().then((response) => {
      if (response && response.length > 0) {
        const formattedResponse = response.map((ticket) => ({
          ...ticket,
          date: ticket.date ? new Date(ticket.date) : null,
        }));
        setMultas(formattedResponse);
      }
    });
  }, []);

  const renderItem = ({ item, index }: { item: iTraffic; index: number }) => (
    <TouchableOpacity style={styles.ticketItem} onPress={() => setSelectedTicket(item)}>
      <Image source={{ uri: item.photo?.toString() }} style={styles.ticketImage} />
      <Text style={styles.ticketText}>{item.plateNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#0072ff', '#53A2D6']} style={styles.container}>
      <ScrollView 
      contentContainerStyle={styles.detailsContainer}>
        {selectedTicket ? (
          <>
            <Card
            height={120}
            flex
            activeOpacity={1}
            marginR-20>
              <Card.Image source={{uri:selectedTicket.photo?.toString()}} style={styles.selectedImage}/>
              <Card.Section
              content={[{text: `Fecha: ${selectedTicket.date?.toLocaleDateString()}`, style: styles.detailText},]}
              />
            </Card>
            
            
          </>
        ) : (
          <Text style={styles.noTicketsText}>Selecciona una multa para ver los detalles</Text>
        )}
      </ScrollView>
      {multas && multas.length > 0 ? (
        <View style={styles.ticketListContainer}>
          <FlatList
            data={multas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.ticketList}
            showsHorizontalScrollIndicator={true}
          />
        </View>
      ) : (
        <Text style={styles.noTicketsText}>No hay multas</Text>
      )}
    </LinearGradient>
  );
};

export default MisMultas;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  detailText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  ticketListContainer: {
    height: 120,
    borderTopWidth: 1,
    borderTopColor: '#fff',
    paddingVertical: 10,
  },
  ticketList: {
    paddingVertical: 20,
  },
  ticketItem: {
    marginRight: 10,
    alignItems: 'center',
  },
  ticketImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  ticketText: {
    color: '#fff',
    marginTop: 5,
  },
  selectedImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
  },
  noTicketsText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
});





interface iTraffic {
  id: number;
  date: Date | null;
  location: string | null;
  plateNumber: string | null;
  vehicleBrand: string | null;
  vehicleModel: string | null;
  modelYear: string | null;
  color: string | null;
  typeOfService: string | null;
  infractionCode: string | null;
  lawArticleNumber: string | null;
  observations?: string | null;
  driverName: string | null;
  driverLicenseNumber: string | null;
  driverAddress: string | null;
  driverPhone: string | null;
  driverEmail: string | null;
  latitude: number | null;
  longitude: number | null;
  photo: string | null;
}

