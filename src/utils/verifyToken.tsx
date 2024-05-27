import { jwtDecode } from "jwt-decode";

const verifyToken = (token: string) => {
    if (!token) {
        return false;
    }
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        return false;
    }
    return true;
}

export default verifyToken;