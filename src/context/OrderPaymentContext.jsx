import { createContext, useContext, useState } from "react";

export const orderPaymentContext = createContext();

export const usePayment = () => useContext(orderPaymentContext);

const PaymentProvider = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false); // Modal state

    const handlePayment = () => {
        setIsOpen(true); // Open modal
    };

    const handleClose = () => {
        setIsOpen(false); // Close modal
    };

    return (
        <orderPaymentContext.Provider value={{ isOpen, handlePayment, handleClose }}>
            {children}
        </orderPaymentContext.Provider>
    );
};

export default PaymentProvider;
