import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Button from "../components/button/Button";
import Input from "../components/input/Input";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
    return (
        <main className={styles.container}>
            <div className={styles.contactDetails}>
                <header>
                    <h2>Contact</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis beatae fugit tempore earum
                        molestiae totam, repellat ipsum aliquam voluptatum!
                    </p>
                </header>
                <div className={styles.emailPhone}>
                    <div>
                        <AiOutlineMail />
                        <p>mail@email.com</p>
                    </div>
                    <div>
                        <AiOutlinePhone />
                        <p>+234 912 3456 789</p>
                    </div>
                </div>
                <div className={styles.socialLinks}>
                    <Link href={""}>
                        <AiOutlineInstagram className={styles.socialLink} />
                    </Link>
                    <Link href={""}>
                        <AiOutlineTwitter className={styles.socialLink} />
                    </Link>
                    <Link href={""}>
                        <AiFillFacebook className={styles.socialLink} />
                    </Link>
                    <Link href={""}>
                        <AiOutlineInstagram className={styles.socialLink} />
                    </Link>
                </div>
            </div>
            <div className={styles.formCont}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. repellat ipsum aliquam voluptatum!</p>
                <form className={styles.form}>
                    <div>
                        <div>
                            <Input placeholder="Name" />
                            <Input placeholder="Email" />
                        </div>
                        <div>
                            <Input placeholder="Phone" />
                            <Input placeholder="Subject" />
                        </div>
                        <div>
                            <textarea name="" id={styles.input} cols="30" rows="8" placeholder="Message"></textarea>
                        </div>
                    </div>
                    <Button text={"Submit Message"} />
                </form>
            </div>
        </main>
    );
};

export default Contact;
