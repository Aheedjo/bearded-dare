import styles from "../styles/About.module.scss";

const About = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>scelerisque Viverr qua proin ultrices in.</h1>
            </header>
            <section className={styles.imagesCont}>
                <div className={`${styles.image} ${styles.imageEnd}`}></div>
                <div className={styles.imageL}>
                    <div className={`${styles.imageS} ${styles.image}`}></div>
                    <div className={`${styles.imageB} ${styles.image}`}></div>
                </div>
                <div className={`${styles.image} ${styles.imageC}`}></div>
                <div className={styles.imageR}>
                    <div className={`${styles.image} ${styles.imageS}`}></div>
                    <div className={`${styles.image} ${styles.imageB}`}></div>
                </div>
                <div className={`${styles.image} ${styles.imageEnd}`}></div>
            </section>
            <section className={styles.textCont1}>
                <div className={styles.textWrapper}>
                    <h4>scelerisque Viv quam .</h4>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,{" "}
                    </p>
                </div>
                <div className={styles.textWrapper}>
                    <h4>scelerisque Viv quam .</h4>
                    <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                        consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,{" "}
                    </p>
                </div>
            </section>
            <section className={styles.textCont2}>
                <div className={styles.image}></div>
                <div className={styles.textWrapper}>
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing.</h4>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ullam dolores nesciunt soluta
                        aperiam ducimus quasi doloremque! Ut corporis dolor recusandae, repellendus suscipit illum aut?
                        Pariatur nemo corporis officiis nobis delectus necessitatibus adipisci facere, minus, laborum
                        eos hic quos fugit, voluptates quisquam inventore fuga voluptate.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, consequatur nobis earum cum
                        veniam dolor ipsam non fugit vitae quo asperiores voluptatem ratione. Harum, commodi!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, consequatur nobis earum cum
                        veniam dolor ipsam non fugit vitae quo asperiores voluptatem ratione. Harum, commodi!
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, nihil.</p>
                </div>
            </section>
        </main>
    );
};

export default About;
