import styles from "../styles/Products.module.scss";

const Products = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h2>Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </header>
            <div className={styles.productCategory}>
                <p className={styles.categoryName}>Hair products (2)</p>
                <div className={styles.products}>
                    <div className={styles.productCont}>
                        <div className={styles.image}></div>
                        <div className={styles.details}>
                            <p className={styles.name}>Product name</p>
                            <p className={styles.price}># 2000</p>
                            <p className={styles.descrption}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                        <div className={styles.addToCart}></div>
                    </div>
                </div>
            </div>
            <div className={styles.productCategory}>
                <p className={styles.categoryName}>Merch (1)</p>
                <div className={styles.products}>
                    <div className={styles.productCont}>
                        <div className={styles.image}></div>
                        <div className={styles.details}>
                            <p className={styles.name}>Product name</p>
                            <p className={styles.price}># 2000</p>
                            <p className={styles.descrption}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Products;
