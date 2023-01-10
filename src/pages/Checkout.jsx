import React from "react";
import styles from "../styles/Checkout.module.scss";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Checkout = () => {
    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h1>Checkout</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </header>
            <div className={styles.progressBar}>
                <div className={styles.bar}>
                    <div className={styles.progress}>
                        <div className={styles.circle}></div>
                    </div>
                    <div className={styles.circle}></div>
                </div>
                <div className={styles.tags}>
                    <p>
                        Personal <br /> Details
                    </p>
                    <p>
                        Shipping <br /> Details
                    </p>
                    <p>
                        Payment <br /> Details
                    </p>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={`box ${styles.left}`}>
                    <div>
                        <header>
                            <h4>01</h4>
                            <h4>Personal Details</h4>
                        </header>
                        <div className={styles.inputsCont}>
                            <Input placeholder="input" />
                            <Input placeholder="input" />
                            <Input placeholder="input" />
                            <Input placeholder="input" />
                        </div>
                    </div>
                    <div>
                        <header>
                            <h4>02</h4>
                            <h4>Shipping Details</h4>
                        </header>
                        <div>
                            <div className={styles.address}>
                                <Input placeholder="input" />
                            </div>
                            <div className={styles.inputsCont}>
                                <Input placeholder="input" />
                                <Input placeholder="input" />
                                <Input placeholder="input" />
                                <Input placeholder="input" />
                            </div>
                        </div>
                    </div>
                    <div>
                        <header>
                            <h4>03</h4>
                            <h4>Payment Details</h4>
                        </header>
                        <div className={styles.inputsCont}>
                            <Input placeholder="input" />
                            <div>
                                <Input placeholder="input" />
                                <Input placeholder="input" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={`box ${styles.contact}`}>
                        <h4>Help?</h4>
                        <div>
                            <AiOutlinePhone />
                            <div>
                                <span>Call us on</span>

                                <span>+234 912 3456 789</span>
                            </div>
                        </div>
                        <div>
                            <AiOutlineMail />
                            <div>
                                <span>Email us using </span>
                                <span>mail@email.com</span>
                            </div>
                        </div>
                    </div>
                    <div className={`box ${styles.orderSummary}`}>
                        <h4>Order Summary</h4>
                        <div className={styles.orders}>
                            <div className={styles.order}>
                                <div className={styles.image}></div>
                                <div className={styles.details}>
                                    <div>
                                        <p className={styles.name}>Name name</p>
                                        <p className={styles.Price}>N 1000</p>
                                    </div>
                                    <div className={styles.quantityCont}>
                                        <p>+</p>
                                        <p>1</p>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.order}>
                                <div className={styles.image}></div>
                                <div className={styles.details}>
                                    <div>
                                        <p className={styles.name}>Name name</p>
                                        <p className={styles.Price}>N 1000</p>
                                    </div>
                                    <div className={styles.quantityCont}>
                                        <p>+</p>
                                        <p>1</p>
                                        <p>-</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.priceTotal}>
                            <div>
                                <p>Subtotal:</p>
                                <p>N 200, 000</p>
                            </div>
                            <div>
                                <p>shipping:</p>
                                <p>N 1, 000</p>
                            </div>
                            <div className={styles.orderTotal}>
                                <p>Order total:</p>
                                <p>N 201, 000</p>
                            </div>
                        </div>
                        <Button text="Complete" width="full" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
