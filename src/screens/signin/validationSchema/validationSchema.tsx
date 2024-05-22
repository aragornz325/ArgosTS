import * as yup from 'yup';

const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('el email no es valido')
    .required('el email es requerido'),
  password: yup
    .string()
    .min(5, 'El password debe tener 5 caracteres como minimo')
    .max(20, 'el password debe tener 20 caracteres como maximo')
    .required('El password es requerido'),
});


export default LoginValidationSchema;