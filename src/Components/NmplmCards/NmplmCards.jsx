import styles from './NmplmCards.module.css'
import { nmplm } from '../../Data/Data'

export default function NmplmCards({ handleSections }) {
    return (
        <div className={styles.nmplmContainer}>
            <img src="NMPLM2_1.png" alt="NMPLM2_1" className={styles.nmplm_titleImage} />
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