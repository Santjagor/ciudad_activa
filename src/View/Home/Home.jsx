import styles from './Home.module.css'
import { sections, blog } from '../../Data/Data'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    const lastPosts = blog.slice(0, 6)

    const handleSections = (e) => {
        navigate(`/section/${e.target.id}`)
    }

    const handleBlog = (e) => {
        navigate(`/post/${e.target.id}`)
    }

    return (
        <div>
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src="imagen0.jpg" alt="" />
            </div>
            <div className={styles.sections}>
                {sections.map(sec => {
                    return (
                        <div
                            className={styles.section}
                            key={sec.id}
                            id={sec.id}
                            onClick={handleSections}>
                            {`Sección ${sec.id}`}
                        </div>
                    )
                })}
            </div>
            <div className={styles.blogContainer}>
                <div className={styles.title}>ULTIMAS NOTICIAS</div>
                <div className={styles.postContainer}>
                    {lastPosts.map(post => {
                        return (
                            <div
                                className={styles.post}
                                key={post.id}
                                id={post.id}
                            >
                                <div className={styles.date}>{post.date}</div>
                                <div className={styles.postTitle}>{post.title}</div>
                                <img className={styles.postImage} src={post.mainImage}></img>
                                <div className={styles.postSubtitle}>{post.subtitle}</div>
                                <div className={styles.postBodyContainer}>
                                    <p className={styles.postBody}>{post.body}</p>
                                </div>
                                <div id={post.id} className={styles.viewMore} onClick={handleBlog}>... ver más</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}