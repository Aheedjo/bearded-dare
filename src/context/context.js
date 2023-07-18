import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [showNav, setShowNav] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [active, setActive] = useState("home");
    const [index, setIndex] = useState(1);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [localGovernment, setLocalGovernment] = useState('');
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [addressError, setAddressError] = useState('');
    const [stateError, setStateError] = useState('');
    const [localGovernmentError, setLocalGovernmentError] = useState('');
    const { register, handleSubmit } = useForm();

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

    const nextStep = () => {
        setIndex(index + 1);
    }

    const prevStep = () => {
        setIndex(index - 1);
    }

    const validateForm = () => {
        firstName === '' ?? setFirstNameError('This field is required');
        lastName === '' ?? setLastNameError('This field is required');
        validateEmail(email) ?? setEmailError('Please enter a valid email address');
        (phone === '' && isNaN(Number(phone))) ?? setPhoneError('Please enter a valid phone number');
        address === '' ?? setAddressError('This field is required');
        state === '' ?? setStateError('This field is required');
        localGovernment === '' ?? setLocalGovernmentError('This field is required');
        console.log("clci");

        if (firstNameError !== '' || lastNameError !== '' || emailError !== '' || phoneError !== '' || addressError !== '' || stateError !== '' || localGovernmentError !== '') {
            return false;
        } else {
            return true;
        }
    }

    const validateEmail = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;   
        return regex.test(email);
    }

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
                index,
                setIndex,
                nextStep,
                prevStep,
                firstName,
                lastName,
                email,
                phone,
                setFirstName,
                setLastName,
                setEmail,
                setPhone,
                address,
                setAddress,
                state,
                setState,
                localGovernment,
                setLocalGovernment,
                firstNameError,
                lastNameError,
                emailError,
                phoneError,
                addressError,
                stateError,
                localGovernmentError,
                validateForm,
                register,
                handleSubmit
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
