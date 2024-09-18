import style from '../Section.module.css'
import SidePanel from '../../../Components/SidePanel/SidePanel'

export default function Section() {

    const points = [
        "Inicio",
        "Proyecto Ordenanza",
        "De las funciones",
        "De la autoridad de seguimiento y aplicación",
        "De la constitución del foro",
    ]

    return (
        <div>
            <div className={style.container}>
                <div className={style.topImageContainer}>
                    <img src="banner-foro.png" alt="" className={style.topImage} />
                </div>
                <div id='Inicio' className={style.title}>Proyecto Presentado</div>
                <div className={style.articleContainer}>
                    <hr />

                    <div className={style.subtitle}>VISTO</div>
                    <div className={style.text}>La Ley Provincial de Seguridad 12154 sancionada en 1998; Y</div>
                    <div className={style.subtitle_2}>Considerando</div>
                    <div className={style.text}>Que, la seguridad es un tema integral que excede ampliamente lo puramente policial.</div>
                    <div className={style.text}>Que, se debe actuar sobre las causas de la violencia social con todos los instrumentos disponibles.</div>
                    <div className={style.text}>Que, es necesario el control comunitario del funcionamiento policial</div>
                    <div className={style.text}>Que, es importante entender que los foros no son espacios de representación, sino de participación, favoreciendo la más amplia participación comunitaria.</div>
                    <div className={style.text}>Que, consideramos que un ejercicio real del Estado democrático es que los ciudadanos conozcan adecuadamente sus normas, a sus representantes, los derechos que le corresponden y las vías para peticionarlos.</div>
                    <div className={style.text}>Que, es necesario construir una nueva concepción del SER CIUDADANO como sujeto de derechos y obligaciones, que se siente protagonista, junto con el Estado, de este desafío que es la participación comunitaria en relación a la seguridad y a la justicia.</div>
                    <div className={style.text}>Que, la cuestión securitaria pone en juego los derechos básicos de la ciudadanía y la capacidad del Estado para articular las convenciones democráticas.</div>
                    <div className={style.text}>Que, se torna sumamente importante la discusión de propuestas de prevención comunitaria sobre la violencia.</div>
                    <div className={style.text}>Que, es imprescindible la necesidad de escuelas de Participación Ciudadana en seguridad.</div>
                    <div className={style.text}>Que, la articulación para construir cercanía entre los vecinos y las autoridades policiales, judiciales y políticas es sumamente necesaria en la sociedad actual.</div>
                    <div className={style.text}>Que, es importante que la ciudadanía pueda acceder a información en calidad y cantidad para poder opinar, recuperar la palabra y ser parte de la toma de decisiones sobre sus prioridades.</div>
                    <div className={style.text}>Que, es importante que los vecinos puedan trabajar en la prevención situacional, que implican acciones que se realizan para reducir las estructuras que favorecen la comisión de determinados delitos.</div>
                    <div className={style.text}>Que, los vecinos son sujetos de derechos políticos y sociales que no agotan su cometido en el puro hecho de votar, sino que tienen derecho a informarse, a peticionar y a proponer.</div>
                    <div className={style.text}>Que, el enfoque de Seguridad Ciudadana prioriza la seguridad de las personas; los ciudadanos son receptores de las políticas de seguridad, siendo estos los destinatarios principales de las políticas de seguridad.</div>
                    <div className={style.text}>Que, la Seguridad, si bien sigue siendo una responsabilidad indelegable del Estado, es una problemática que incumbe a la sociedad. La sociedad víctima de la violencia, resulta re-victimizada nuevamente cuando no se escucha lo que tiene para decir.</div>
                    <div className={style.text}>Que, las policías más modernas del mundo se organizan hoy de un modo descentralizado, en razón de la mayor eficiencia de acción.</div>
                    <div className={style.text}>Que la policía es un servicio público y es importante que la ciudadanía pueda evaluar dicho servicio.</div>
                    <div className={style.text}>Que, es vital que el servicio policial responda a las necesidades concretas de las comunidades, atienda sus particularidades, guardando proximidad respecto de ellas.</div>
                    <div className={style.text}>Que la importancia del trabajo con la juventud, como ciclo etario, es decisivo para revertir la reproducción intergeneracional de la exclusión y la violencia.</div>
                    <div className={style.text}>Que, hay que trabajar en las causas que generan violencia y el delito, como la pobreza, la desocupación, la marginalidad y el deterioro de la contención familiar y escolar.</div>
                    <div className={style.text}>Que, es necesario la apertura de espacios comunitarios que permitan contribuir a armar un nuevo estilo de ciudadanía, para abordar la problemática compleja y multicausal de la inseguridad ciudadana.</div>
                    <div className={style.text}>Que los conflictos sociales son fenómenos complejos y multicausales, por tanto, no se trata de clausurar las respuestas a la intervención exclusiva del Ministerio de Seguridad o a la Secretaría de Protección Ciudadana. Se debe intervenir con otras áreas del Estado para tener múltiples respuestas.</div>
                    <div className={style.text}>Que, según la ley 12154, la seguridad es un derecho de los habitantes de la Provincia de Buenos Aires y un deber de su Gobierno promover la efectiva participación comunitaria en la elaboración, implementación y control de las políticas de seguridad pública, conforme a la presente Ley.</div>
                    <div className={style.text}>Que, según dicha norma, la participación comunitaria se efectiviza en la actuación en los Foros Vecinales de Seguridad, los Foros Municipales de Seguridad, los Foros Departamentales de Seguridad, y por los Defensores Municipales de la Seguridad.</div>
                    <div className={style.text}>Que rige una tasa municipal afectada exclusivamente a temas de seguridad y accion comunitaria y preventiva.</div>
                    <hr />

                    <div id='Proyecto Ordenanza' className={style.subtitle}>PROYECTO DE ORDENANZA</div>
                    <div className={style.subtitle_2}>FOROS BARRIALES DE SEGURIDAD</div>
                    <div className={style.subtitle_2}>ALCANCE</div>
                    <div className={style.text}><strong>ART 1.- </strong>Créase en la ciudad de Tandil la figura de los Foros Barriales de Seguridad de acuerdo a la Ley Provincial Nº 12154.</div>
                    <div className={style.text}><strong>ART 2.- </strong>Se entiende por <strong><em>Foros Barriales de Seguridad</em></strong> a aquella organización vecinal nucleada en el ámbito territorial de cada comisaría. El foro vecinal estará integrado por las entidades comunitarias correspondientes a la jurisdicción de cada comisaría.</div>
                    <div className={style.text}><strong>ART 3.- </strong>Configúrese un Registro Municipal oficial en la Secretaria de Protección Ciudadana para la inscripción de todas las personas, y organizaciones intermedias interesadas en participar en el Foro Barrial.</div>
                    <div className={style.text}><strong>ART 4.- </strong>El Foro Barrial estará integrado y podrán participar asociaciones civiles, iglesias, clubes, sindicatos, sociedades de fomento, escuelas, bibliotecas, entidades de bien público y ciudadanos en forma individual, previa inscripción de todos ellos en el registro municipal. Estos se organizarán y funcionarán según criterios de flexibilidad y operatividad.</div>

                    <div id='De las funciones' className={style.subtitle}>DE LAS FUNCIONES.</div>
                    <div className={style.text}><strong>ART 5.- </strong>Las funciones del Foro Barrial serán, en cumplimiento del artículo 16 de la Ley 12154, las siguientes:</div>
                    <ul className={style.list}>
                        <li>Entender e intervenir en todas las cuestiones atinentes a la seguridad pública vecinal.</li>
                        <li>Generar diagnósticos de la seguridad</li>
                        <li>Planificar acciones de prevención</li>
                        <li>Implementar un sistema de evaluación del servicio policial</li>
                        <li>Realizar propuestas de mejoramiento del servicio policial</li>
                        <li>Proponer e intervenir en planes y proyectos de prevención situacional, como:</li>
                        <ul className={style.list}>
                            <li>Mejoras de espacios públicos para su recuperación</li>
                            <li>Colocación de luminarias</li>
                            <li>Limpiezas de baldíos</li>
                            <li>Recuperación de espacios públicos</li>
                            <li>Corredores seguros y</li>
                            <li>Mapas del delito vecinales</li>
                        </ul>
                        <li>Trabajar las causas del delito: Proponer programas y acciones para la prevención comunitaria de la violencia; con iniciativas deportivas, sociales, culturales y productivas para jóvenes, para los cuales se desarrollará articulación con diferentes esferas del estado, fortaleciendo en el entramado barrial y la articulación comunitaria con escuelas, clubes, comedores, iglesias y organizaciones sociales. También brindar espacios de asesoramiento a jóvenes en riesgo de ingresar al sistema penal.</li>
                        <li>Informar y asesorar a los vecinos acerca de toda cuestión o asunto atinente a la seguridad pública y / o la violencia de género y trabajar en esquemas de formación y capacitación en seguridad ciudadana y participación comunitaria de los miembros del foro y la comunidad en general.</li>
                        <li>Invitar a las reuniones y dialogar con autoridades Provinciales, Judiciales, Policiales, Municipales y Legislativas para tratar asuntos de la seguridad ciudadana en el ámbito del foro y para el trabajo articulado y colaborativo.</li>
                    </ul>

                    <div id='De la autoridad de seguimiento y aplicación' className={style.subtitle}>DE LA AUTORIDAD DE SEGUIMIENTO Y APLICACIÓN.</div>
                    <div className={style.text}><strong>ART 6.- </strong>Confórmese el Consejo Local  de Promoción, Seguimiento y Aplicación de los Foros Barriales, el cual estará integrado por la Secretaría/o de Protección Ciudadana, la presidencia de la Comisión de Seguridad, Género y DDHH y la autoridad del Foro Municipal, cuyas funciones serán; la de promocionar y supervisar la evolución y funcionamiento de los Foros Barriales y la de definir o establecer criterios de resolución o interpretación en caso de discordancia en los propios foros barriales.</div>
                    <div className={style.text}><strong>ART 7.- </strong>La convocatoria inicial para la reunión constitutiva será potestad del Consejo Local  de Promoción, Seguimiento y Aplicación de los Foros Barriales en base a un listado de aspirantes inscriptos por jurisdicción y en el registro municipal.</div>
                    <div className={style.text}><strong>ART 8.- </strong>El Consejo Local  de Promoción, Seguimiento y Aplicación de los Foros Barriales  realizará publicaciones por medios digitales, radiales y periódicos para difundir tanto la inscripción de aspirantes como la reunión constitutiva.</div>
                    <div className={style.text}><strong>ART 9.- </strong>El Consejo Local de Seguimiento y Aplicación de los Foros Barriales elaborará y difundirá programas formativos en seguridad ciudadana y comunitaria en articulación con la  subsecretaría de Participación Ciudadana de la provincia de Buenos Aires.</div>

                    <div id='De la constitución del foro' className={style.subtitle}>DE LA CONSTITUCIÓN DEL FORO.</div>
                    <div className={style.text}><strong>ART 10.- </strong>La asamblea constitutiva de conformación del Foro será presidida por el/la Secretario/a de Protección Ciudadana y el/la Presidente/a de la Comisión de Seguridad, Derechos Humanos y Género del Honorable Concejo Deliberante y el/la Presidente/a del Foro Municipal de Seguridad.</div>
                    <div className={style.text}><strong>ART 11.- </strong>El Órgano Deliberativo de cada Foro Barrial estará integrado por los representantes nominados por cada entidad u organización inscripta, en la cantidad de hasta 2 integrantes por organización.</div>
                    <div className={style.text}><strong>ART 12.- </strong>La asamblea constitutiva, convocará dentro de los 30 días de conformada, a la primera reunión del Foro Barrial, fijando día, hora y lugar, para la distribución de roles y/o cargos y el correspondiente orden del día.</div>
                    <div className={style.text}><strong>ART 13.- </strong>La comisión directiva de cada foro barrial  contará como mínimo de un presidente/a y un secretario/a.</div>
                    <div className={style.text}><strong>ART 14.- </strong>Definidas las autoridades, el foro tendrá otros 45 días para  dictar su propio Reglamento Interno, el cual será elevado junto con las autoridades designadas al Consejo de Seguimiento y Aplicación.</div>
                    <div className={style.text}><strong>ART 15.- </strong>El Foro Barrial tendrá una periodicidad de funcionamiento cada 30 días como mínimo.</div>
                    <div className={style.text}><strong>ART 16.- </strong>La Comisión directiva del foro podrá contar, si así lo requiere, de: vocales, secretarios de acción social, prensa, y otras secretarías y vocalías que defina el foro en su reglamento interno.</div>
                    <div className={style.text}><strong>ART 17.- </strong>El mandato de los integrantes de los Foros Barriales será de 1 año no pudiendo ser reelegido en forma consecutiva.</div>
                    <div className={style.text}><strong>ART 18.- </strong>Cada Foro deberá representar la complejidad de su jurisdicción, procurando que haya representantes de todas las zonas y barrios que lo componen. Podrá invitar a sus reuniones a diferentes vecinos o grupos de vecinos, no agrupados en entidades, para dialogar diferentes temas vinculados a la seguridad.</div>
                    <div className={style.text}><strong>ART 19.- </strong>En caso de registrarse conflictos y/o cuestiones de interpretación, intervendrá en su resolución la autoridad de Seguimiento y Aplicación.</div>
                    <div className={style.text}><strong>ART 20.- </strong>De Forma.</div>
                </div>
                <SidePanel points={points} />
            </div>
        </div>
    )
}