import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.scss";
import logo from "../../assets/logo.svg";
import { AiOutlineInstagram, AiOutlineTwitter, AiFillFacebook } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <div className={styles.logo}>
                        <Image className={styles.image} src={logo} alt="Logo"></Image>
                    </div>{" "}
                    <nav className={styles.links}>
                        <div className={styles.link}>
                            <Link href="/">Home</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href="/About">About</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href="/products">Products</Link>
                        </div>
                        <div className={styles.link}>
                            <Link href="/contact">Contact</Link>
                        </div>
                    </nav>
                </div>
                <div>
                    <p className={styles.copyright}>© Bearded Dare, Inc. 2022.</p>
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
            </div>
        </footer>
    );
};

export default Footer;
