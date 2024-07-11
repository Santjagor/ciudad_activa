import style from './BlogCard.module.css'
import { blog } from '../../Data/Data'
import { useNavigate } from 'react-router-dom'

export default function BlogCard() {
    const navigate = useNavigate()
    return (
        <a onClick={() => { navigate('/') }} className={style.container} href="#noticias">
            <div className={style.header}>ULTIMAS NOTICIAS</div>
            <div className={style.image_container}>
                <img src={blog[0].image} alt="image" />
            </div>
            <div className={style.title}>{blog[0].title}</div>
        </a>
    )
}