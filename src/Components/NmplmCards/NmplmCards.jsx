import styles from './NmplmCards.module.css'
import { nmplm } from '../../Data/Data'

export default function NmplmCards({ handleSections }) {
    return (
        <div className={styles.nmplmContainer}>
            <img className={styles.nmplmImage} src="banner-dpa.png" alt="" />
            <div className={styles.nmplmTitle}>NUEVAS MELODÍAS PARA LA MILITANCIA</div>
            <div className={styles.nmplmButtonContainer}>
                {nmplm.map(m => {
                    return (
                        <div
                            id={m.url}
                            className={styles.nmplmButton}
                            onClick={handleSections}>
                            {m.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}