import styles from "../styles/Thankyou.module.scss";
import Button from "../components/button/Button";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Thankyou = () => {
    return (
        <main className={styles.container}>
            <div className={styles.image}></div>
            <div>
                <div className={styles.text}>
                    <h1>
                        Thank you for shopping <br /> with us!
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab in ratione <br /> ad atque dolor
                        molestiae.
                    </p>
                </div>
                <div className={styles.contact}>
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
                <Button text="Continue shopping?" />
            </div>
        </main>
    );
};

export default Thankyou;
