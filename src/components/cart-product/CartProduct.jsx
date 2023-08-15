import { useGlobalContext } from "../../context/context";
import styles from "./CartProduct.module.scss";

const CartProduct = () => {
    return (
        <div className={styles.cartProduct}>
            <div className={styles.image}></div>
            <div>
                <div>
                    <p className={styles.name}>Name name</p>
                    <p className={styles.price}>N 100</p>
                </div>            
                <div className={styles.quantityCont}>
                    <span>+</span>
                    <span>1</span>
                    <span>-</span>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;
