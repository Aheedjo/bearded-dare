import { useGlobalContext } from "../../context/context";
import Link from "next/link";
import styles from "./MobileNav.module.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import {
    AiFillCloseCircle,
    AiOutlineInstagram,
    AiOutlineMail,
    AiOutlinePhone,
    AiOutlineTwitter,
    AiFillFacebook,
} from "react-icons/ai";

const MobileNav = () => {
    const { showNav, toggleNav, closeNav } = useGlobalContext();

    return (
        <>
            <div className={styles.hamburger} onClick={toggleNav}>
                <RxHamburgerMenu className={styles.hamburgerImg} />
            </div>

            <div className={showNav ? `${styles.mobileMenuCont} ${styles.active}` : styles.mobileMenuCont}>
                <div className={styles.backdrop} onClick={closeNav}></div>
                <div className={showNav ? `${styles.mobileMenu} ${styles.active}` : styles.mobileMenu}>
                    <div>
                        <div className={styles.close} onClick={toggleNav}>
                            <AiFillCloseCircle className={styles.closeImg} />
                        </div>
                        <nav className={styles.links} onClick={closeNav}>
                            <div className={styles.link}>
                                <Link href="/">Home</Link>
                            </div>
                            <div className={styles.link}>
                                <Link href="/About">About</Link>
                            </div>
                            <div className={styles.link}>
                                <Link href="/Products">Products</Link>
                            </div>
                            <div className={styles.link}>
                                <Link href="/Contact">Contact</Link>
                            </div>
                        </nav>
                    </div>
                    <div className={styles.contactDetails}>
                        <div className={styles.contact}>
                            <AiOutlinePhone />
                            <p>+23481 2345 6789</p>
                        </div>
                        <div className={styles.contact}>
                            <AiOutlineMail />
                            <p>Mail@examplemail.com</p>
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
                </div>
            </div>
        </>
    );
};

export default MobileNav;
