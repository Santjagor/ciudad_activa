import styles from './Navbar.module.css'
import { sections } from '../../Data/Data'
import { useLocation } from 'react-router-dom'

export default function Navbar({ handleBlog, handleSections, navigate }) {
    const location = useLocation()
    function compararSinUltimoCaracter(str1, str2) {
        const recortado1 = str1.slice(0, -1);
        const recortado2 = str2.slice(0, -1);
        return recortado1 === recortado2;
    }
    return (
        <div className={styles.container}>
            <div className={styles.ncContainer}>
                <img onClick={() => { navigate('/') }} className={styles.logo} src="Logo4Nav.png" alt="logo" loading='lazy' />
            </div>
            <div className={styles.buttonContainer}>
                <div id='ciudad-que-late' onClick={handleSections} className={location.pathname === `/ciudad-que-late` ? styles.button_active : styles.button}>Ciudad que late</div>
                {sections.map(section => {
                    return (
                        <div
                            id={section.id}
                            key={section.id}
                            onClick={handleSections}
                            className={compararSinUltimoCaracter(`/${section.id}`, location.pathname) ? styles.button_active : styles.button}
                        >
                            {section.name}
                        </div>
                    )
                })}
                <a onClick={handleBlog} href="#noticias">
                    <div className={styles.button}>Noticias</div>
                </a>
            </div>
        </div>
    )
}