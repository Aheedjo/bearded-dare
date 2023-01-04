import styles from "../styles/Contact.module.scss";
import Button from "../components/button/Button";

const Contact = () => {
    return (
        <main className={styles.container}>
            <header>
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis beatae fugit tempore earum
                    molestiae totam, repellat ipsum aliquam voluptatum!
                </p>
            </header>
            <form action="" className={styles.form}>
                <div>
                    <div>
                        <input type="text" name="" id={styles.input} placeholder="Name" />
                        <input type="text" name="" id={styles.input} placeholder="Email" />
                        <input type="text" name="" id={styles.input} placeholder="Phone" />
                    </div>
                    <div>
                        <input type="text" name="" id={styles.input} placeholder="Subject" />
                    </div>
                    <div>
                        <textarea name="" id={styles.input} cols="30" rows="8" placeholder="Message"></textarea>
                    </div>
                </div>
                <Button text={"Submit Message"} />
            </form>
        </main>
    );
};

export default Contact;
