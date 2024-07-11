import style from '../Section.module.css'
import SidePanel from '../../../Components/SidePanel/SidePanel'

export default function Section() {

    const points = [
        "Inicio",
        "Articulos",
    ]

    return (
        <div>
            <div className={style.container}>
                <div id='Inicio' className={style.title}>Vivienda e integración urbana</div>
                <div className={style.articleContainer}>
                    <div className={style.text}>Los datos del último censo reportan que Tandil evidencia el mas bajo nivel de acceso a la vivienda propia en la Provincia de Buenos Aires.</div>
                    <div className={style.text}>La ordenanza Nª 9.865, Plan de Desarrollo Territorial, establece en su principio general, la creación de instrumentos redistributivos de la renta urbana. En dicha ordenanza su capítulo 1º procura asegurar respuestas a las necesidades de los ciudadanos en cuanto a la calidad de vida y la justicia social.</div>
                    <div className={style.text}>Promovemos la reducción de las desigualdades facilitando el acceso a la tierra urbana. Buscando impulsar procesos de mejora e integración socio urbana y  el acceso legal  de los sectores populares a la ciudad.</div>
                    <div className={style.text}>El PDT en su Capítulo III, establece los instrumentos de gestión y desarrollo, como parte del sistema municipal de gestión territorial, entre ellos en su Sección III, la creación del Fondo de Desarrollo Urbano, cuyos fondos deberían ser afectados y  determinados por ordenanza especial del Concejo deliberante a propuesta del Departamento ejecutivo. Cosa que lamentablemente nunca se cumplió.</div>
                    <div className={style.text}>En dicho apartado, establece  los destinos del Fondo de Desarrollo Urbano y los recursos que constituirán dicho fondo.</div>
                    <div className={style.text}>También establece que esto será determinado por el Concejo deliberante mediante ordenanza especial.</div>
                    <div className={style.text}>Comparto la ordenanza presentada, que debemos impulsar para mitigar el problema de déficit habitacional en nuestra ciudad.</div>
                    <hr />

                    <div id='Articulos' className={style.subtitle}>Articulos</div>
                    <div className={style.text}><strong>Artículo 1º: </strong>Modifíquese el articulado de la ordenanza Nº 12680, el cual quedará redactado de la siguiente manera:</div>
                    <div className={style.text}>-Crease como fondo afectado el “Fondo de desarrollo urbano” mediante una cuenta especial creada a tal efecto, el cual será constituido con los siguientes recursos:</div>
                    <ul className={style.list}>
                        <li>Ingresos que se generen por aplicación del tributo por contribución por mejoras establecido en la ordenanza fiscal (capitulo XXVI) e impositiva (capítulo XXXI) o las que en el futuro las reemplacen.</li>
                        <li>Convenios urbanísticos suscriptos y que se suscriban y convaliden en el marco de los establecido por el plan de desarrollo territorial y sus normas complementarias.</li>
                        <li>Cualquier otro recurso que disponga el municipio para la mejora del hábitat y la superación del déficit de vivienda de los sectores populares, y se afectarán de la siguiente manera.</li>
                        <li>Todos los ingresos generados en el marco de lo establecido en el Capítulo III “Instrumentos de promoción y desarrollo”; Sección 1 – Fondo de Desarrollo Urbano; Artículo III.3 del Plan de Desarrollo Territorial, aprobado por la ordenanza Nº 9.865.</li>
                    </ul>
                    <div className={style.text}><strong>Artículo 2º: </strong>Los fondos generados en el marco del artículo 1º serán afectados exclusivamente en la siguiente proporción:</div>
                    <ul className={style.list}>
                        <li><strong>A. </strong>El cincuenta por ciento (50%) de los gastos que demanden la compra y demás tramitaciones vinculadas a cualquier forma de transferencia   de tierras o planes de vivienda que beneficien a sectores de escasos recursos.</li>
                        <li><strong>B. </strong>El otro cincuenta por ciento (50%) para la ejecución de redes de servicios básicos y equipamientos sociales para barrios populares cuyo objetivo sea la integración socio urbana.</li>
                    </ul>
                    <div className={style.text}><strong>Artículo 3º: </strong>Incorpórese al “Fondo de desarrollo urbano” los bienes inmuebles que obtenga el Municipio producto de los convenios urbanísticos citados en el artículo 3º</div>
                    <div className={style.text}><strong>Artículo 4º: </strong>El departamento ejecutivo remitirá cada año para su aprobación las obras que serán financiadas y un informe de las tramitaciones de transferencias de tierras.</div>
                    <div className={style.text}><strong>Artículo 5º: </strong>De forma.</div>
                </div>
                <SidePanel points={points} />
            </div>
        </div>
    )
}