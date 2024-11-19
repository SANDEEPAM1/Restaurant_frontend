import { children, createContext,useContext,useState } from "react";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({children}) =>{
const [isSignUpVisible,setIsSignUpVisible] = useState(false);
const [isLoginVisible,setIsLoginVisible] = useState(false);

const handelLogin = ()=>{
    setIsLoginVisible(true)
}

const handleSignUp = () =>{
    setIsSignUpVisible(true)
}

const handleCloseLogin = () =>{
    setIsLoginVisible(false)
}

const handleCloseSignUp = () =>{
    setIsSignUpVisible(false)
}

return (
    <AuthContext.Provider 
        value={{
            isLoginVisible,
            isSignUpVisible,
            handelLogin,
            handleSignUp,
            handleCloseLogin,
            handleCloseSignUp
        }}
        >
            {children}
        </AuthContext.Provider>
);
}
