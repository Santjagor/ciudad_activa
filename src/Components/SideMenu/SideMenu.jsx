import style from './SideMenu.module.css'
import { sections } from '../../Data/Data'
import { useLocation } from 'react-router-dom'

export default function SideMenu({ handleBlog, handleSections }) {
    const location = useLocation()
    return (
        <div className={style.container}>
            <div className={style.buttonContainer}>
            <div id='ciudad-que-late' onClick={handleSections} className={location.pathname === `/ciudad-que-late` ? style.button_active : style.button}>Ciudad que late</div>
                {sections.map(section => {
                    return (
                        <div
                            id={section.id}
                            key={section.id}
                            onClick={handleSections}
                            className={location.pathname === `/${section.id}` ? style.button_active : style.button}
                        >
                            {section.name}
                        </div>
                    )
                })}
                <a onClick={handleBlog} href="#noticias">
                    <div className={style.button}>Noticias</div>
                </a>
            </div>
        </div>
    )
}