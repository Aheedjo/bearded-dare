import { useGlobalContext } from "../../context/context";
import Image from "next/image";
import cart from "../../assets/cart.svg";
import styles from "./Cart.module.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const Cart = () => {
    const { showCart, toggleCart, closeCart } = useGlobalContext();

    return (
        <>
            <div className={styles.cartBtn} onClick={toggleCart}>
                <Image className={styles.image} src={cart} alt="Logo"></Image>
            </div>
            <div className={showCart ? `${styles.cartCont} ${styles.active}` : styles.cartCont}>
                <div className={styles.header}>
                    <p>Cart</p>
                    <AiFillCloseCircle className={styles.close} onClick={toggleCart} />
                </div>
            </div>
            <div className={showCart ?? styles.backdrop} onClick={closeCart}></div>
        </>
    );
};

export default Cart;
