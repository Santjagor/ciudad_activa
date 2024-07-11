import styles from './Blog.module.css'
import { blog } from '../../Data/Data'
import { useState } from 'react'

export default function Blog() {
    const [numPosts, setNumPosts] = useState(6)
    let lastPosts = blog.slice(0, numPosts)
    const showMorePosts = () => {
        if (numPosts - 1 <= blog.length - 1) {
            setNumPosts(numPosts + 3)
            lastPosts = blog.slice(0, numPosts)
            let scrollCoord = window.scrollY + 300
            setTimeout(() => {
                window.scrollTo({ top: scrollCoord, left: 0, behavior: 'smooth' });
            }, 1);
        }
    }
    return (
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
    )
}