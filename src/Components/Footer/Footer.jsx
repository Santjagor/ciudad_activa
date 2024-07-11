import styles from './Footer.module.css'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <div className={styles.container}>
            <a className={styles.icon} href="https://www.facebook.com/NicoCarrilloTandil" target='_blank'>
                <AiFillFacebook />
            </a>
            {/* <a className={styles.icon} href="">
                <AiFillInstagram />
            </a> */}
        </div>
    )
}