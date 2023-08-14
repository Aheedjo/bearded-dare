import React from "react";
import styles from "./Input.module.scss";
import { useGlobalContext } from "../../context/context";

const Input = ({ placeholder, value, onChange = () => {} }) => {
    return <input type="text" id={styles.input} placeholder={placeholder} onChange={onChange} value={value} />;
};

export default Input;