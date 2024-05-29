import styles from './Post.module.css'
import { blog } from '../../Data/Data'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Post() {
    const location = useLocation()
    const postId = Number(location.pathname.split('/')[2])
    const post = blog.filter(p => p.id === postId)[0]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.post}>
                <p className={styles.date}>{post.date}</p>
                <h1 className={styles.title}>{post.title}</h1>
                <h3 className={styles.subtitle}>{post.subtitle}</h3>
                <img className={styles.image} src={post.image1.url}></img>
                <div className={styles.imageDescription}>{post.image1.description}</div>
                <p className={styles.body}>{post.body1}</p>
                <img className={styles.image} src={post.image2.url}></img>
                <div className={styles.imageDescription}>{post.image2.description}</div>
                <p className={styles.body}>{post.body2}</p>
                <img className={styles.image} src={post.image3.url}></img>
                <div className={styles.imageDescription}>{post.image3.description}</div>
                <p className={styles.body}>{post.body3}</p>
            </div>
        </div>
    )
}