import styles from './Navbar.module.css'
import { sections } from '../../Data/Data'

export default function Navbar({ handleBlog, handleSections, navigate }) {
    return (
        <div className={styles.container}>
            <div className={styles.ncContainer}>
                <img onClick={() => { navigate('/') }} className={styles.logo} src="Logo2.png" alt="" />
            </div>
            <div className={styles.buttonContainer}>

                {sections.map(section => {
                    return (
                        <div id={section.id} onClick={handleSections} className={styles.button}>{section.name}</div>
                    )
                })}
                <a onClick={handleBlog} href="#blog">
                    <div className={styles.button}>Blog</div>
                </a>
            </div>
        </div>
    )
}