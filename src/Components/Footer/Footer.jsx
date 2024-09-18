import styles from './Footer.module.css'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <div className={styles.container}>
            <a className={styles.icon} href="https://www.instagram.com/ciudad_activatandil/" target='_blank'>
                <AiFillInstagram />
            </a>
        </div>
    )
}