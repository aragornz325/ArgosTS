import axios from "axios";
import { SignInValues } from "../interfaces/signIn.interface";


export const signInQuery = async (values:SignInValues) => {
 try {
    const response = await axios.post("http://localhost:4000/signin", {
        email: values.email,
        password: values.password
      });
        return response;
 } catch (error) {
    console.log(error);
 }
}