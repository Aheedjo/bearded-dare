import styles from "./Button.module.scss";

const Button = ({ text, width }) => {
    return <button className={`${styles.btn}  ${styles[width]}`}>{text}</button>;
};

export default Button;
