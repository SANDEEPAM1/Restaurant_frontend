import { jwtDecode } from "jwt-decode";

export const isTokenValid = () =>{
    const token = localStorage.getItem('jwt');
    if(!token) return false;

    try {
        const decodejwt = jwtDecode(token);
        const currntTime = Date.now()/1000;
        return decodejwt.exp>currntTime;
    } catch (error) {
        return false
    }
};

export const getUserRole = () =>{
    const token = localStorage.getItem('jwt')
    if(!token) return null;

    
    try {
        const decodejwt = jwtDecode(token)
        return decodejwt.role;
    } catch (error) {
        return null;
    }
};

export const getUserId = () => {
    const token = localStorage.getItem('jwt');
    if (!token) return null;

    try {
        const decodejwt = jwtDecode(token);
        return decodejwt.UserId; // Replace with the correct property for userId in your token
    } catch (error) {
        return null;
    }
};