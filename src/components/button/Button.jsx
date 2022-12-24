import styles from "./Button.module.scss";

const Button = ({ text, bg }) => {
    return <button className={`${styles.btn} ${styles[bg]}`}>{text}</button>;
};

export default Button;
