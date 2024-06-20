import * as SQLite from 'expo-sqlite';



// Función para crear la tabla si no existe
export const initializeDatabase = async () => {
     const db = await SQLite.openDatabaseAsync('argos_local_db');
    try {
        await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS traffic_tickets (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            date TEXT,
            location TEXT,
            plateNumber TEXT,
            vehicleBrand TEXT,
            vehicleModel TEXT,
            modelYear INTEGER,
            color TEXT,
            typeOfService TEXT,
            infractionCode TEXT,
            lawArticleNumber TEXT,
            observations TEXT,
            driverName TEXT,
            driverLicenseNumber TEXT,
            driverAddress TEXT,
            driverPhone TEXT,
            driverEmail TEXT,
            latitude REAL,
            longitude REAL,
            photo TEXT
        )`);
        console.log('Tabla traffic_tickets creada o ya existía.');
    } catch (error) {
        console.error('Error al crear la tabla:', error);
    }
};