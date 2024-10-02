import { createContext,useState } from "react";

export const CatagoryContext = createContext();


//provider component 
export const CatagoryProvider = ({children}) => {
    const [selectCatagory,setSelectCatagory] = useState('all')

        return(
            <CatagoryContext.Provider value={{selectCatagory,setSelectCatagory}}>
                {children}
            </CatagoryContext.Provider>
        );
};