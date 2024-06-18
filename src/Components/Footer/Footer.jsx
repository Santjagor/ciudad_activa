import styles from './Footer.module.css'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

export default function Footer() {
    return (
        <div className={styles.container}>
            <AiFillFacebook className={styles.icon} />
            <AiFillInstagram className={styles.icon} />
        </div>
    )
}