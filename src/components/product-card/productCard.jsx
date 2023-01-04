import React from "react";
import Button from "../button/Button";
import styles from "./productCard.module.scss";

const ProductCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.image}></div>
            <div className={styles.details}>
                <div>
                    <h4 className={styles.name}>Name name namw</h4>
                    <h4 className={styles.price}># 1000</h4>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet elit consectetur adipisicing. Nemo, voluptatum!
                    </p>
                </div>
                <div className={styles.quantityCont}>
                    <p className={styles.down}>-</p>
                    <p className={styles.value}>1</p>
                    <p className={styles.up}>+</p>
                </div>
            </div>
            <Button text="Add to cart" width="full" />
        </div>
    );
};

export default ProductCard;
