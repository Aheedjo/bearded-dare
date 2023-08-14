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

    const validateForm = (e) => {
        e.preventDefault();
        console.log("clci");
        firstName === '' ?? setFirstNameError('This field is required');
        lastName === '' ?? setLastNameError('This field is required');
        validateEmail(email) ?? setEmailError('Please enter a valid email address');
        (phone === '' && isNaN(Number(phone))) ?? setPhoneError('Please enter a valid phone number');
        address === '' ?? setAddressError('This field is required');
        state === '' ?? setStateError('This field is required');
        localGovernment === '' ?? setLocalGovernmentError('This field is required');

        return (
            firstNameError !== '' ||
            lastNameError !== '' ||
            emailError !== '' ||
            phoneError !== '' ||
            addressError !== '' ||
            stateError !== '' ||
            localGovernmentError !== ''
        );
    }

    const validateEmail = (email) => {
        const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;   
        return regex.test(email);
    }

    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Sample product",
            description: "This is a sample description description",
            price: 50000,
            category: 'hair',
            image: "/../../assets/photo.webp"
        },
        {
            id: 2,
            name: "Sample product",
            description: "This is a sample description description",
            price: 50000,
            category: 'hair',
            image: "/../../assets/photo.webp"
        },
        {
            id: 3,
            name: "Sample product",
            description: "This is a sample description description",
            price: 50000,
            category: 'merch',
            image: "/../../assets/photo.webp"
        },
        {
            id: 4,
            name: "Sample product",
            description: "This is a sample description description",
            price: 50000,
            category: 'merch',
            image: "/../../assets/photo.webp"
        },
        {
            id: 5,
            name: "Sample product",
            description: "This is a sample description description",
            price: 50000,
            category: 'hair',
            image: "/../../assets/photo.webp"
        },
    ]);

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
                handleSubmit,
                products
            }}
        >
            { children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
