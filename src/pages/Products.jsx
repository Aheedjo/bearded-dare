import { useGlobalContext } from "../context/context";
import styles from "../styles/Products.module.scss";
import Image from "next/image";
import cart from "../assets/cart.svg";

// import { useAtomValue, useAtom } from "jotai";

const Products = () => {
    const { products } = useGlobalContext();

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h2>Products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </header> 
            <div className={styles.productCategory}>
                <p className={styles.categoryName}>Hair products ({products.filter((product) => product.category === "hair").length})</p>
                <div className={styles.products}>
                    {
                        products.filter((product) => product.category === "hair").map((product) => (
                                <div className={styles.productCont} key={product.id}>
                                    <div className={styles.image}></div>
                                    <Image className={styles.image} src={product.image} width={100} height={100} alt="product-image"></Image>
                                    <div className={styles.details}>
                                        <p className={styles.name}>{product.name}</p>
                                        <p className={styles.price}># {product.price}</p>
                                        <p className={styles.descrption}>{product.description}</p>
                                    </div>
                                    <div className={styles.addToCart}>
                                        <Image className={styles.image} src={cart} alt="cart-image"></Image>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.productCategory}>
                <p className={styles.categoryName}>Merch ({products.filter((product) => product.category === "merch").length})</p>
                <div className={styles.products}>
                    {
                        products.filter((product) => product.category === "merch").map((product) => (
                                <div className={styles.productCont} key={product.id}>
                                    <div className={styles.image}></div>
                                    <div className={styles.details}>
                                        <p className={styles.name}>{product.name}</p>
                                        <p className={styles.price}># {product.price}</p>
                                        <p className={styles.descrption}>{product.description}</p>
                                    </div>
                                    <div className={styles.addToCart}>
                                        <Image className={styles.image} src={cart} alt="cart-image"></Image>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
};

export default Products;
