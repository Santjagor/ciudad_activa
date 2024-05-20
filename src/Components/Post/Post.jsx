import styles from './Post.module.css'
import { blog } from '../../Data/Data'
import { useLocation } from 'react-router-dom';

export default function Post() {
    const location = useLocation()
    const sectionId = location.pathname.split('/')[2]

    return (
        <div>
            <div>
                {`Post N° ${sectionId}`}
            </div>
        </div>
    )
}