import styles from './NavbarMobile.module.css'
import { useLocation } from 'react-router-dom'
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCloseSquare } from "react-icons/ai";

export default function NavbarMobile({ navigate, toggleSideMenu, sideMenu, setSideMenu }) {
    const location = useLocation()
    const goToHome = () => {
        setSideMenu(false)
        navigate('/')
    }
    return (
        <div className={styles.container}>
            <div className={styles.ncContainer}>
                <img onClick={goToHome} className={styles.logo} src="Logo4Nav.png" alt="logo" loading='lazy' />
            </div>
            <div className={styles.buttonContainer}>
                {
                    sideMenu
                        ?
                        <AiFillCloseSquare onClick={toggleSideMenu} className={styles.menuIcon} />
                        :
                        <AiOutlineMenu onClick={toggleSideMenu} className={styles.menuIcon} />
                }
            </div>
        </div>
    )
}