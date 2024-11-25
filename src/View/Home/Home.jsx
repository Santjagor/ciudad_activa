import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SectionCards from '../../Components/SectionCards/SectionCards'
import Blog from '../../Components/Blog/Blog'
import { sections, dpa } from '../../Data/Data'
import SeparationBar from '../../Components/SeparationBar/SeparationBar'

export default function Home({ handleSections }) {
    const navigate = useNavigate()
    useEffect(() => {
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <div>
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src="imagen-principal.webp" alt="" loading='lazy' />
                <img onClick={() => { navigate('/ciudad-que-late') }} className={styles.logo} src="Logo4.png" alt="" loading='lazy' />
            </div>

            <SectionCards handleSections={handleSections} />

            {/* <SeparationBar /> */}
            <br /><br /><br />
            <div className={styles.dpaContainer}>
                <img className={styles.dpaImage} src="banner-dpa.png" alt="" />
                <div className={styles.dpaTitle}>DIALOGOS PARA ACTIVAR</div>
                <div className={styles.dpaButtonContainer}>
                    {dpa.map(d => {
                        return (
                            <div
                                id={d.url}
                                className={styles.dpaButton}
                                onClick={handleSections}>
                                {d.title}
                            </div>
                        )
                    })}
                </div>
            </div>
            <br /><br /><br />
            {/* <SeparationBar /> */}

            <Blog />
        </div>
    )
}