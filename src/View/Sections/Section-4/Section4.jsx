import style from '../Section.module.css'
import SidePanel from '../../../Components/SidePanel/SidePanel'

export default function Section() {

    const points = [

    ]

    return (
        <div>
            <div className={style.container}>
                <div id='Inicio' className={style.title}>Producción</div>
                <div className={style.articleContainer}>

                </div>
                <SidePanel points={points} />
            </div>
        </div>
    )
}