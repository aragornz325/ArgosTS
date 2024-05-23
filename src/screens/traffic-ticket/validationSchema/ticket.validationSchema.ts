import * as Yup from 'yup';

export const TrafficTicketSchema = Yup.object().shape({
  name: Yup.string().min(4).required('Required'),
  licenseNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  carColor: Yup.string().min(4).required('Required'),
  carMake: Yup.string().min(4).required('Required'),
  carModel: Yup.string().min(4).required('Required'),
});