import React, { useState, useEffect } from 'react';
import {FlatList, View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Modal } from 'react-native';
import { getTrafficTickets } from './queries/misMultas.query';
import { LinearGradient } from 'expo-linear-gradient';
import { Card } from 'react-native-paper';
import MapView, { Marker } from 'react-native-maps';

const MisMultas = () => {
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

  const [modalVisible, setModalVisible] = useState(false);
  const [modalImageUri, setModalImageUri] = useState(null);

  const openModal = (uri ) => {
    setModalImageUri(uri);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalImageUri(null);
  };

  const renderItem = ({ item }: { item: iTraffic }) => (
    <TouchableOpacity style={styles.ticketItem} onPress={() => setSelectedTicket(item)}>
      <Image source={{ uri: item.photo?.toString() }} style={styles.ticketImage} />
      <Text style={styles.ticketText}>{item.plateNumber}</Text>
    </TouchableOpacity>
  );

  return (
    <LinearGradient colors={['#0072ff', '#53A2D6']} style={styles.container}>
      {selectedTicket ? (
        <ScrollView contentContainerStyle={styles.detailsContainer}>
          <Card style={styles.selectedTicketCard}>
            <TouchableOpacity onPress={() => openModal(selectedTicket.photo?.toString())}>
              <Image source={{ uri: selectedTicket.photo?.toString() }} style={styles.selectedImage} />
            </TouchableOpacity>
            <View style={styles.detailsWrapper}>
              <Text style={styles.detailTitle}>Detalles de la Multa</Text>
              <Text style={styles.headDetailText}>Fecha:</Text>
              <Text style={styles.detailText}>{selectedTicket.date?.toLocaleDateString()}</Text>
              <Text style={styles.headDetailText}>Ubicación:</Text>
              <Text style={styles.detailText}>{selectedTicket.location}</Text>
              <Text style={styles.headDetailText}>Patente:</Text>
              <Text style={styles.detailText}>{selectedTicket.plateNumber}</Text>
              <Text style={styles.headDetailText}>Marca del Vehículo:</Text>
              <Text style={styles.detailText}>{selectedTicket.vehicleBrand}</Text>
              <Text style={styles.headDetailText}>Modelo del Vehículo:</Text>
              <Text style={styles.detailText}>{selectedTicket.vehicleModel}</Text>
              <Text style={styles.headDetailText}>Año del Modelo:</Text>
              <Text style={styles.detailText}>{selectedTicket.modelYear}</Text>
              <Text style={styles.headDetailText}>Color:</Text>
              <Text style={styles.detailText}>{selectedTicket.color}</Text>
              <Text style={styles.headDetailText}>Tipo de Servicio:</Text>
              <Text style={styles.detailText}>{selectedTicket.typeOfService}</Text>
              <Text style={styles.headDetailText}>Código de Infracción: </Text>
              <Text style={styles.detailText}>{selectedTicket.infractionCode}</Text>
              <Text style={styles.headDetailText}>Artículo de la Ley:</Text>
              <Text style={styles.detailText}>{selectedTicket.lawArticleNumber}</Text>
              <Text style={styles.headDetailText}>Nombre del Conductor:</Text>
              <Text style={styles.detailText}>{selectedTicket.driverName}</Text>
              <Text style={styles.headDetailText}>Número de Licencia:</Text>
              <Text style={styles.detailText}>{selectedTicket.driverLicenseNumber}</Text>
              <Text style={styles.headDetailText}>Dirección del Conductor:</Text>
              <Text style={styles.detailText}>{selectedTicket.driverAddress}</Text>
              <Text style={styles.headDetailText}>Teléfono del Conductor:</Text>
              <Text style={styles.detailText}>{selectedTicket.driverPhone}</Text>
              <Text style={styles.headDetailText}>Email del Conductor:</Text>
              <Text style={styles.detailText}>{selectedTicket.driverEmail}</Text>
              <Text style={styles.headDetailText}>Observaciones:</Text>
              <Text style={styles.detailText}>{selectedTicket.observations}</Text>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                  latitude: selectedTicket.latitude ? selectedTicket.latitude : 0,
                  longitude:selectedTicket.longitude ? selectedTicket.longitude : 0,
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
                zoomControlEnabled={true}
                
              >
                <Marker
                key={selectedTicket.id}
                coordinate={
                  {
                    latitude: selectedTicket.latitude ? selectedTicket.latitude : 0,
                    longitude:selectedTicket.longitude ? selectedTicket.longitude : 0,
                }
                }
                />
                  
            
                                     
              </MapView>
          </Card>
        </ScrollView>
      ) : (
        <Text style={styles.noTicketsText}>Selecciona una multa para ver los detalles</Text>
      )}
      {multas && multas.length > 0 ? (
        <View style={styles.ticketListContainer}>
          <FlatList
            data={multas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            contentContainerStyle={styles.ticketList}
          />
        </View>
      ) : (
        <Text style={styles.noTicketsText}>No hay multas</Text>
      )}

      <Modal visible={modalVisible} transparent={true} onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalCloseButton} onPress={closeModal}>
            <Text style={styles.modalCloseText}>Cerrar</Text>
          </TouchableOpacity>
          <Image source={{ uri: modalImageUri ? modalImageUri : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930' }} style={styles.modalImage} />
        </View>
      </Modal>
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
    flexGrow: 1,
    alignItems: 'center',
    padding: 10,
  },
  selectedTicketCard: {
    backgroundColor: '#FFFFFF93',
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
  detailsWrapper: {
    marginTop: 20,
  },
  detailTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0072ff',
    marginBottom: 10,
    alignSelf: 'center',
  },
  detailText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    borderBottomColor: '#CD42E9',
    borderBottomWidth: 1,
  },
  headDetailText:{
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
    
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
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  ticketText: {
    color: '#fff',
    marginTop: 5,
  },
  selectedImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  noTicketsText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalCloseButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
  },
  modalCloseText: {
    color: '#0072ff',
    fontWeight: 'bold',
  },
  modalImage: {
    width: 300,
    height: 300,
  },
  map: {
    width: '100%',
    height: 200,
    marginTop: 20,
    borderRadius: 10,
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

