import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";
import { BsArrowRightCircleFill } from "react-icons/bs";

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <Nav />
                <section className={styles.heroSection}>
                    <div className={`${styles.content} ${styles.container}`}>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className={styles.text}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque earum magni quis,
                            totam , dolores laudantium harum perspiciatis incidunt fugiat sapiente.
                        </p>
                        <div className={styles.viewProductsCont}>
                            <p>View Products</p>
                            <BsArrowRightCircleFill className={styles.arrow} />
                        </div>
                    </div>
                </section>
            </header>

            <section className={styles.productsSection}>
                <div className={styles.product}>
                    <div className={`${styles.content} ${styles.container}`}>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className={styles.price}># 1000</p>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque earum magni quis,
                            totam , dolores laudantium harum perspiciatis incidunt fugiat sapiente.
                        </p>
                        <Button text={"Order now"} bg="dark" />
                    </div>
                </div>
                <div className={styles.product}>
                    <div className={`${styles.content} ${styles.container}`}>
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p className={styles.price}># 1000</p>
                        <p className={styles.description}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum atque earum magni quis,
                            totam , dolores laudantium harum perspiciatis incidunt fugiat sapiente.
                        </p>
                        <Button text={"Order now"} bg="light" />
                    </div>
                </div>
            </section>
        </>
    );
}
