import styles from './Footer.module.css'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <div className={styles.container}>
            <img src="bot_img.png" alt="bot" className={styles.bot} />
            <div className={styles.buttonContainer}>
                <a className={styles.icon} href="https://www.instagram.com/ciudad_activatandil/" target='_blank'>
                    <AiFillInstagram />
                </a>
            </div>
        </div>
    )
}