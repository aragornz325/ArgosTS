import { SignInValues } from "../interfaces/signIn.interface";

const useSignIn = () => {
    const handleSubmit = async (values:SignInValues ) => {
        console.log(values);
    }

    return {
        handleSubmit
    };

};

export default useSignIn;