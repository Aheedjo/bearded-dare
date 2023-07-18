import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, value }) => {
    const { register } = useGlobalContext();
    return <input type="text" id={styles.input} placeholder={placeholder} {...register(value)} />;
};

export default Input;
