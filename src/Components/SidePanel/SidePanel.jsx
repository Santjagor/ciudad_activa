import style from './SidePanel.module.css'
import Index from '../../Components/Index/Index'
import BlogCard from '../../Components/BlogCard/BlogCard'

export default function SidePanel({ points }) {
    return (
        <div className={style.container}>
            <Index points={points} />
            <BlogCard />
        </div>
    )
}