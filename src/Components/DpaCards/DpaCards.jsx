import styles from './DpaCards.module.css'
import { dpa } from '../../Data/Data'

export default function DpaCards({ handleSections }) {
    return (
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
    )
}