import axios from "axios";
import { SignInValues } from "../interfaces/signIn.interface";
import config from "../../../config/config";


export const signInQuery = async (values: SignInValues) => {
   try {
       const response = await axios.post(
           `${config.backend.baseURL}/auth/login`,
           {
               email: values.email,
               password: values.password,
           },
           {
               headers: {
                   "Content-Type": "application/json",
                   "x-api-key": config.backend.apiKey,
               },
           }
       );
         console.log(response);
       if (response.status !== 201) {
             throw new Error("Error");
         }
         return response.data;
   } catch (error) {
       console.log(error);
   }
};