import styles from "../styles/Checkout.module.scss";
import Input from "../components/input/Input";
import Button from "../components/button/Button";
import { useGlobalContext } from "../context/context";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { useEffect } from "react";
import { atom } from "jotai";

const Checkout = () => {
    const {
        index,
        nextStep,
        prevStep,
        firstName,
        lastName,
        email,
        phone,
        setFirstName,
        setLastName,
        setEmail,
        setPhone,
        address,
        setAddress,
        state,
        setState,
        localGovernment,
        setLocalGovernment,
        firstNameError,
        lastNameError,
        emailError,
        phoneError,
        addressError,
        stateError,
        localGovernmentError,
        validateForm,
        handleSubmit,
    } = useGlobalContext();

    const onSubmit = (data) => {
        console.log(data);
    };

    useEffect(() => {
        const progressBar = document.querySelector(".progresss");
        if (progressBar) {
            if (index === 1) {
                progressBar.style.width = "8%";
            } else if (index === 2) {
                progressBar.style.width = "51%";
            } else {
                progressBar.style.width = "100%";
            }
        }
    }, [index]);

    return (
        <main className={styles.container}>
            <header className={styles.header}>
                <h2>Checkout</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </header>
            <div className={styles.progressBar}>
                <div className={styles.bar}>
                    <div className={`${styles.progress} progresss`}>
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
                <div className={`box ${styles.left} ${styles.desktop}`}>
                    {/* <form onSubmit={validateForm}> */}
                        <div>
                            <header>
                                <h4>01</h4>
                                <h4>Personal Details</h4>
                            </header>
                            <div className={styles.inputsCont}>
                                <div className={styles.inputCont}>
                                    <div>
                                        <Input
                                            placeholder="First name"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            required
                                        />
                                        <p className={styles.error}>{firstNameError}</p>
                                    </div>
                                </div>
                                <div className={styles.inputCont}>
                                    <div>
                                        <Input
                                            placeholder="last Name"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            required
                                        />
                                        <p className={styles.error}>{lastNameError}</p>
                                    </div>
                                </div>
                                <div className={styles.inputCont}>
                                    <div>
                                        <Input
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <p className={styles.error}>{emailError}</p>
                                    </div>
                                </div>
                                <div className={styles.inputCont}>
                                    <div>
                                        <Input
                                            placeholder="Phone"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            required
                                        />
                                        <p className={styles.error}>{phoneError}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <header>
                                <h4>02</h4>
                                <h4>Shipping Details</h4>
                            </header>
                            <div>
                                <div className={styles.address}>
                                    <div className={styles.inputCont}>
                                        <div>
                                            <Input
                                                placeholder="Address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                required
                                            />
                                            <p className={styles.error}>{addressError}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.inputsCont}>
                                    <div className={styles.inputCont}>
                                        <div>
                                            <Input
                                                placeholder="Local government"
                                                value={localGovernment}
                                                onChange={(e) => setLocalGovernment(e.target.value)}
                                                required
                                            />
                                            <p className={styles.error}>{localGovernmentError}</p>
                                        </div>
                                    </div>
                                    <div className={styles.inputCont}>
                                        <div>
                                            <Input
                                                placeholder="state"
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                            />
                                            <p className={styles.error}>{stateError}</p>
                                        </div>
                                    </div>
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
                                <div className={styles.doubleInput}>
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
                                <span>Call us on:</span>
                                <span>+234 912 3456 789</span>
                            </div>
                        </div>
                        <div>
                            <AiOutlineMail />
                            <div>
                                <span>Email us using:</span>
                                <span>mail@email.com</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`box ${styles.orderSummary} ${styles.desktop}`}>
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
                    <Button text="Complete" width="full" onClick={validateForm} />
                </div>
                {/* </form> */}

                {/* </div> */}
                <div className={styles.mobile}>
                    <form onSubmit={validateForm}>
                        {index === 1 && (
                            <div className={`box ${styles.inputsCont} animate__animated animate__bounceInRight`}>
                                <header>
                                    <h4>01</h4>
                                    <h4>Personal Details</h4>
                                </header>
                                <div className={styles.inputsCont}>
                                    <Input
                                        placeholder="First Name"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required
                                    />
                                    <Input
                                        placeholder="last Name"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        required
                                    />
                                    <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                    <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                                </div>
                            </div>
                        )}
                        {index === 2 && (
                            <div className={`box ${styles.inputsCont} animate__animated animate__bounceInRight`}>
                                <header>
                                    <h4>02</h4>
                                    <h4>Shipping Details</h4>
                                </header>
                                <div className={styles.inputsCont}>
                                    <Input
                                        placeholder="Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        required
                                    />
                                    <Input
                                        placeholder="Local government"
                                        value={localGovernment}
                                        onChange={(e) => setLocalGovernment(e.target.value)}
                                        required
                                    />
                                    <Input
                                        placeholder="state"
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        )}
                        {index === 3 && (
                            <div className={`box ${styles.inputsCont} animate__animated animate__bounceInRight`}>
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
                        )}
                        {index === 4 && (
                            <div className={`box ${styles.orderSummary} animate__animated animate__bounceInRight`}>
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
                                <Button text="Complete" width="full" onClick={validateForm} />
                                {/* <input type="submit" value="submit" /> */}
                            </div>
                        )}

                        {/* sign up, log in, account screen */}
                    </form>
                    <div className={`box ${styles.controls}`}>
                        <div>
                            {index !== 1 && (
                                <p onClick={prevStep} className={styles.backBtn}>
                                    Go back
                                </p>
                            )}
                        </div>
                        {index !== 4 && (
                            <div onClick={nextStep}>
                                <Button text="next" width="small"></Button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Checkout;
