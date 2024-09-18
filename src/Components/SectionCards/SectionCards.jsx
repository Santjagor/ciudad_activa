import styles from './SectionCards.module.css'
import { sections } from '../../Data/Data'

export default function SectionCards({ handleSections }) {
    return (
        <>
            <div className={styles.mainSectionContainer}>
                <img src={sections[0].image}
                    className={styles.mainSection}
                    id={sections[0].id}
                    onClick={handleSections}
                    loading='lazy'
                >
                </img>
                <div className={styles.mainSectionTitle}>{sections[0].name}</div>
            </div>
            <div className={styles.sections}>
                {sections.map(sec => {
                    if (sec.id !== 'ciudad-que-late') {
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
                    }
                })}
            </div>
        </>
    )
}