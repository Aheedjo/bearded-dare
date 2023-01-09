import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder }) => {
    return <input type="text" id={styles.input} placeholder={placeholder} />;
};

export default Input;
