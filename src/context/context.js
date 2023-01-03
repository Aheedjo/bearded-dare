import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [active, setActive] = useState("home");

    const toggleNav = () => {
        setShowNav(!showNav);
        closeCart();
    };

    const closeNav = () => {
        setShowNav(false);
    };

    const toggleCart = () => {
        setShowCart(!showCart);
    };

    const closeCart = () => {
        setShowCart(false);
    };

    return (
        <AppContext.Provider
            value={{
                showNav,
                toggleNav,
                closeNav,
                showCart,
                toggleCart,
                closeCart,
                active,
                setActive,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
