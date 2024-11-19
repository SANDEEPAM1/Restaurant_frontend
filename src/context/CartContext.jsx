  import { createContext, useReducer } from 'react'
  import CartReducer from './CartReducer';

  export const cartContext = createContext();

  const CartContextProvider = ({children}) => {
      const [cart,dispatch] = useReducer(CartReducer,[])
    return (
      <cartContext.Provider value={{cart,dispatch}}>
              {children}
      </cartContext.Provider>
    )
  }

  export default CartContextProvider