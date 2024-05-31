import styles from './Navbar.module.css'


export default function Navbar({ handleBlog, handleSections, navigate }) {
    return (
        <div className={styles.container}>
            <img onClick={() => { navigate('/') }} className={styles.logo} src="Logo2.png" alt="" />
            <div className={styles.buttonContainer}>
                <div id="1" onClick={handleSections} className={styles.button}>UNO</div>
                <div id="2" onClick={handleSections} className={styles.button}>DOS</div>
                <div id="3" onClick={handleSections} className={styles.button}>TRES</div>
                <a onClick={handleBlog} href="#blog">
                    <div className={styles.button}>BLOG</div>
                </a>
            </div>
        </div>
    )
}