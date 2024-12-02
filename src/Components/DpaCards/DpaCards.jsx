import styles from './DpaCards.module.css'
import { dpa } from '../../Data/Data'

export default function DpaCards({ handleSections }) {
    return (
        <div className={styles.dpaContainer}>
            <img src="dpa_cards_title.png" alt="dpa_cards_title" className={styles.dpa_titleImage} />
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