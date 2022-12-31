import React from "react";
import Nav from "../components/nav/Nav";
import Footer from "../components/footer/Footer";

const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;
