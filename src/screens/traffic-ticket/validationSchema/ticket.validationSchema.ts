import * as Yup from 'yup';

export const TrafficTicketSchema = Yup.object().shape({
  time: Yup.date().required(), 
  date: Yup.date().required(),
  location: Yup.string().required(),
  latitude: Yup.number().optional(),
  longitude: Yup.number().required(),
  plateNumber: Yup.string().required(),
  vehicleBrand: Yup.string().required(),
  modelYear: Yup.number().optional(),
  color: Yup.string().required(),
  typeOfService: Yup.string().required(),
  infractionCode: Yup.string().optional(),
  lawArticleNumber: Yup.string().optional(),
  observations: Yup.string().required(),
  driverName: Yup.string().optional(),
  driverLicenseNumber: Yup.string().optional(),
  driverAddress: Yup.string().optional(),
  driverPhone: Yup.string().optional(),
  driverEmail: Yup.string().email().optional(),
  photo: Yup.string().required(),

});