import styles from './Home.module.css'
import { sections, blog } from '../../Data/Data'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Home({ handleSections }) {
    const [numPosts, setNumPosts] = useState(3)
    const navigate = useNavigate()

    let lastPosts = blog.slice(0, numPosts)

    const showMorePosts = () => {
        if (numPosts - 1 <= blog.length - 1) {
            setNumPosts(numPosts + 3)
            lastPosts = blog.slice(0, numPosts)
        }
    }

    return (
        <div>
            <div className={styles.mainImageContainer}>
                <img className={styles.mainImage} src="imagen-principal.jpg" alt="" />
                <img onClick={() => { navigate('/main-article') }} className={styles.logo} src="Logo.png" alt="" />
                <div onClick={() => { navigate('/main-article') }} className={styles.text_logo}>Gobierno Abierto - Participación Ciudadana</div>
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
            <div id='blog' className={styles.blogContainer}>
                <div className={styles.title}>ULTIMAS NOTICIAS</div>
                <div className={styles.postContainer}>
                    {lastPosts.map(post => {
                        return (
                            <div
                                className={styles.post}
                                key={post.id}
                                id={post.id}
                            >
                                <img className={styles.postImage} src={post.image}></img>
                                <div className={styles.postTitle}>{post.title}</div>
                                <hr />
                                <div className={styles.postDescription}>{post.description}</div>
                                <a href={post.url} target='_blank'>
                                    <div id={post.id} className={styles.viewMore}>Ver más</div>
                                </a>
                            </div>
                        )
                    })}
                </div>
                {
                    numPosts - 1 <= blog.length - 1
                        ?
                        <div className={styles.morePosts} onClick={showMorePosts}>Más Noticias</div>
                        :
                        <></>
                }
            </div>
        </div>
    )
}