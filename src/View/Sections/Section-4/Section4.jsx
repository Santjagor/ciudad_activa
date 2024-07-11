import style from '../Section.module.css'
import Index from '../../../Components/Index/Index'

export default function Section() {

    const points = [

    ]

    return (
        <div>
            <div className={style.container}>
                <div id='Inicio' className={style.title}>Producción</div>
                <div className={style.articleContainer}>

                </div>
                <Index points={points} />
            </div>
        </div>
    )
}