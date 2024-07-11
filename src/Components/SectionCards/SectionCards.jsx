import styles from './SectionCards.module.css'
import { sections } from '../../Data/Data'

export default function SectionCards({ handleSections }) {
    return (
        <div className={styles.sections}>
            {sections.map(sec => {
                return (
                    <div key={sec.id} className={styles.sectionContainer}>
                        <img src={sec.image}
                            className={styles.section}
                            id={sec.id}
                            onClick={handleSections}
                            loading='lazy'
                        >
                        </img>
                        <div className={styles.sectionTitle}>{sec.name}</div>
                    </div>
                )
            })}
        </div>
    )
}