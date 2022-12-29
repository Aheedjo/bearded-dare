import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Nav from "../components/nav/Nav";
import Button from "../components/button/Button";
import Footer from "../components/footer/Footer";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { benefits, testimonials } from "../data/data";

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

            <section className={`${styles.aboutSection} ${styles.container}`}>
                <div className={styles.imagesCont}>
                    <div className={styles.image1}></div>
                    <div className={styles.image2}></div>
                </div>
                <div className={styles.textCont}>
                    <h3>
                        About <br /> Bearded Dare.
                    </h3>
                    <div className={styles.text}>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem.
                        </p>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                            est, qui dolorem. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                            fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                            porro quisquam est, qui dolorem.
                        </p>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                        </p>
                    </div>
                </div>
            </section>

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

            <section className={`${styles.benefitsSection} ${styles.container}`}>
                <h3>
                    Benefits of using <br /> Bearded Dare.
                </h3>
                <div className={styles.benefitsCont}>
                    {benefits.map((benefit) => {
                        return (
                            <div key={benefit.id} className={styles.benefit}>
                                <div className={styles.icon}></div>
                                <h4 className={styles.name}>{benefit.name}</h4>
                                <p className={styles.text}>{benefit.text}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            <section className={`${styles.testimonialsSection} ${styles.container}`}>
                <h3>Testimonials.</h3>
                <div className={styles.testimonialsCont}>
                    {testimonials.map((testimonial) => {
                        const { id, avatar, name, position, text } = testimonial;

                        return (
                            <div key={id} className={styles.testimonial}>
                                <p className={styles.text}>{text}</p>
                                <div className={styles.details}>
                                    <div className={styles.avatar}></div>
                                    <p className={styles.name}>
                                        {name}, {position}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            <Footer />
        </>
    );
}
