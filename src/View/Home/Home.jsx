import styles from './Home.module.css'
import { sections, blog } from '../../Data/Data'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Home() {
    const navigate = useNavigate()
    const [numPosts, setNumPosts] = useState(3)

    let lastPosts = blog.slice(0, numPosts)

    const handleSections = (e) => {
        navigate(`/section/${e.target.id}`)
    }

    const handleBlog = (e) => {
        navigate(`/post/${e.target.id}`)
    }

    const showMorePosts = () => {
        if (numPosts - 1 <= blog.length - 1) {
            setNumPosts(numPosts + 3)
            lastPosts = blog.slice(0, numPosts)
        }
    }

    return (
        <div>
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src="imagen_principal.jpg" alt="" />
            </div>
            <div className={styles.sections}>
                {sections.map(sec => {
                    return (
                        <div className={styles.sectionContainer}>
                            <img src={sec.image}
                                className={styles.section}
                                key={sec.id}
                                id={sec.id}
                                onClick={handleSections}>
                            </img>
                            <div className={styles.sectionTitle}>{sec.name}</div>
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
                                <img className={styles.postImage} src={post.image1.url}></img>
                                <div className={styles.postSubtitle}>{post.subtitle}</div>
                                <div className={styles.postBodyContainer}>
                                    <p className={styles.postBody}>{post.body1}</p>
                                </div>
                                <div id={post.id} className={styles.viewMore} onClick={handleBlog}>... ver más</div>
                            </div>
                        )
                    })}
                </div>
                <div className={styles.morePosts} onClick={showMorePosts}>Más Noticias</div>
            </div>
        </div>
    )
}