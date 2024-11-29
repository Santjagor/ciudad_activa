import styles from './NmplmBanner.module.css'
import { nmplm } from '../../Data/Data'
import { useLocation } from 'react-router-dom'

export default function DpaBanner({ handleSections }) {
    const location = useLocation()
    return (
        <div className={styles.container}>
            {nmplm.map(d => {
                return (
                    <div id={d.url} className={location.pathname === `/${d.url}` ? styles.buttonInactive : styles.buttonActive} onClick={handleSections}>
                        {d.title}
                    </div>
                )
            })}
        </div>
    )
}