import styles from './Home.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import SectionCards from '../../Components/SectionCards/SectionCards'
import Blog from '../../Components/Blog/Blog'

export default function Home({ handleSections }) {
    const navigate = useNavigate()
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])
    return (
        <div>
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src="imagen-principal.jpg" alt="" loading='lazy' />
                <img onClick={() => { navigate('/ciudad-que-late') }} className={styles.logo} src="Logo4.png" alt="" loading='lazy' />
            </div>
            <SectionCards handleSections={handleSections} />
            <Blog />
        </div>
    )
}