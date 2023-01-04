import React from "react";
import ProductCard from "../components/product-card/productCard";
import styles from "../styles/Product.module.scss";

const Product = () => {
    return (
        <main className={styles.container}>
            <header>
                <h2>Lorem ipsum dolor sit.</h2>
            </header>
            <section className={styles.wrapper}>
                <ProductCard />
                <div className={styles.text}>
                    <div className={styles.about}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellat similique quasi
                            illo ullam, iusto voluptatibus ea esse? Adipisci dolore quis suscipit perferendis harum
                            deserunt ab facere temporibus corrupti, eligendi maiores. Exercitationem eius error aliquam?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, nemo!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nemo, mollitia quisquam
                            illum temporibus cupiditate aperiam sed quos, maxime sit aut hic quae itaque eveniet. At
                            impedit quaerat autem mollitia? Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div className={styles.ingredents}>
                        <h3>Ingredents</h3>
                        <div className={styles.wrapper}>
                            <div className={styles.ingredent}>
                                <h5 className={styles.name}>Name Name</h5>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <p>100% | 0.8g</p>
                            </div>
                            <div className={styles.ingredent}>
                                <h5 className={styles.name}>Name Name</h5>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <p>100% | 0.8g</p>
                            </div>
                            <div className={styles.ingredent}>
                                <h5 className={styles.name}>Name Name</h5>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <p>100% | 0.8g</p>
                            </div>
                            <div className={styles.ingredent}>
                                <h5 className={styles.name}>Name Name</h5>
                                <p className={styles.description}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                                <p>100% | 0.8g</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.images}>
                <div className={styles.imgWrapper}>
                    <div className={styles.img}></div>
                    <div className={styles.img}></div>
                </div>
                <div className={styles.imgWrapper}>
                    <div className={styles.img}></div>
                    <div className={styles.img}></div>
                </div>
            </section>
        </main>
    );
};

export default Product;
