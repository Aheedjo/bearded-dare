import styles from "./Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import Cart from "../cart/Cart";
import MobileNav from "../mobile-nav/MobileNav";
import { useGlobalContext } from "../../context/context";

const Nav = () => {
    const { active, setActive } = useGlobalContext();

    return (
        <div className={styles.navWrapper}>
            <div className={styles.navCont}>
                <div className={styles.logo}>
                    <Image className={styles.image} src={logo} alt="Logo"></Image>
                </div>
                <nav className={styles.links}>
                    <div className={styles.link}>
                        <Link href="/" className={active == "home" ?? "active"}>
                            Home
                        </Link>
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
                <div className={styles.hamburgerXcart}>
                    <Cart />
                    <MobileNav />
                </div>
            </div>
        </div>
    );
};

export default Nav;
