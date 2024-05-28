import * as Yup from 'yup';

export const TrafficTicketSchema = Yup.object().shape({ 
  date: Yup.date().required('La fecha es requerida'),
  location: Yup.string().required('La ubicación es requerida'),
  latitude: Yup.number().optional(),
  longitude: Yup.number().required('La longitud es requerida'),
  plateNumber: Yup.string().required('El número de patente es requerido'),
  vehicleBrand: Yup.string().required('La marca del vehículo es requerida'),
  vehicleModel: Yup.string().required('El modelo del vehículo es requerido'),
  modelYear: Yup.number().optional(),
  color: Yup.string().required('El color del vehículo es requerido'),
  typeOfService: Yup.string().required('El tipo de servicio es requerido'),
  infractionCode: Yup.string().optional(),
  lawArticleNumber: Yup.string().optional(),
  observations: Yup.string().required('Las observaciones son requeridas'),
  driverName: Yup.string().optional(),
  driverLicenseNumber: Yup.string().optional(),
  driverAddress: Yup.string().optional(),
  driverPhone: Yup.string().optional(),
  driverEmail: Yup.string().email().optional(),
  photo: Yup.string().required(),
});