import style from './Index.module.css'

export default function Index({ points }) {
    return (
            <div className={style.container}>
                <ul>
                    {
                        points.map(p => {
                            return (
                                <a href={`#${p}`}>
                                    <li>{p}</li>
                                </a>
                            )
                        })
                    }
                </ul>
            </div>
    )
}