import { jwtDecode } from "jwt-decode";

const verifyToken = (token: string): boolean => {
    if (!token) {
      return false;
    }
    try {
      const decoded: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        return false;
      }
      return true;
    } catch (error) {
      console.error('Token verification failed', error);
      return false;
    }
  };

export default verifyToken;