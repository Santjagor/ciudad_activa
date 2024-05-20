import styles from './Section.module.css'
import { useLocation } from 'react-router-dom';
import { sections } from '../../Data/Data'

export default function Section() {
    const location = useLocation()
    const sectionId = location.pathname.split('/')[2]

    return (
        <div>
            <div>
                {`Sección N° ${sectionId}`}
            </div>
        </div>
    )
}