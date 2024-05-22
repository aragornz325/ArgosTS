import * as Yup from 'yup';

export const TrafficTicketSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  licenseNumber: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  carColor: Yup.string().required('Required'),
  carMake: Yup.string().required('Required'),
  carModel: Yup.string().required('Required'),
});