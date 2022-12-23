import styles from "./Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import Cart from "../cart/Cart";
import MobileNav from "../mobile-nav/MobileNav";

const Nav = () => {
    return (
        <>
            <div className={styles.navCont}>
                <div className={styles.logo}>
                    <Image className={styles.image} src={logo} alt="Logo"></Image>
                </div>
                <nav className={styles.links}>
                    <div className={styles.link}>
                        <Link href="">Home</Link>
                    </div>
                    <div className={styles.link}>
                        <Link href="">About</Link>
                    </div>
                    <div className={styles.link}>
                        <Link href="">Products</Link>
                    </div>
                    <div className={styles.link}>
                        <Link href="">Contact</Link>
                    </div>
                </nav>
                <div className={styles.hamburgerXcart}>
                    <Cart />
                    <MobileNav />
                </div>
            </div>
        </>
    );
};

export default Nav;
