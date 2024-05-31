import * as Yup from 'yup';

export const ProfileSchema = Yup.object().shape({
    firstName: Yup.string().optional().nullable(),
    lastName: Yup.string().optional().nullable(),
    age: Yup.number().optional().positive().integer().nullable(),
    phone: Yup.string().required().nullable(),
    city: Yup.string().required().nullable(),
    country: Yup.string().required().nullable(),
    postalCode: Yup.string().required().nullable(),
    address: Yup.string().required().nullable(),
    gender: Yup.string().optional().nullable(),
    dateOfBirth: Yup.date().optional().nullable(),
    bio: Yup.string().optional().nullable(),
    socialMediaLinks: Yup.string().optional().nullable(),
    interests: Yup.string().optional().nullable(),
    education: Yup.string().optional().nullable(),
    employment: Yup.string().optional().nullable(),
});