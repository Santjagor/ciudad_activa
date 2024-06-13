import style from './MainArticle.module.css'

export default function MainArticle() {
    return (
        <div className={style.container}>
            <div className={style.topImageContainer}>
                <img className={style.topImage} src="/banner-1.jpg" alt="banner" />
            </div>
            <div className={style.title}>GOBIERNO ABIERTO</div>
            <div className={style.title}>PARTICIPACION CIUDADANA</div>
            <div className={style.title}>PODER VECINAL</div>
            <div className={style.articleContainer}>
                <div className={style.subtitle}>Un desafío en marcha</div>
                <ul className={style.list}>
                    <li>Democratizar la democracia.</li>
                    <li>Redistribuir el poder.</li>
                    <li>Ocupar la política.</li>
                    <li>Gobernabilidad participativa.</li>
                </ul>
                <div className={style.text}>
                    En un tiempo presente signado por diagnósticos críticos, sin esperanza ni aparente respuesta a los problemas
                    cotidianos que atraviesa nuestra sociedad, es tiempo de potenciar la inteligencia colectiva, para abordar la
                    complejidad de la democracia inmersa en una crisis, no solo global, sino estructural; donde sus cimientos han
                    sido erosionados en los últimos veinte años, por una triada apocalíptica:
                    <strong> Crisis política</strong>,
                    <strong> crisis económica</strong>,
                    <strong> crisis social</strong>.
                </div>
                <div className={style.text}>
                    Los ámbitos donde esta potencialidad, la de anteponer lo colectivo por sobre lo individual, se puede desarrollar
                    y manifestar firmemente, no se encuentran solo en lo Nacional – a partir, sobre todo, de la emergencia de la LLA
                    – sino que existen distintos territorios donde esta disputa se hace necesaria. Lo local es el ámbito privilegiado
                    para construir este tipo de experiencias. La desprivatización del Estado exige incrementar el control que la
                    sociedad ejerce sobre sus instituciones y recursos.
                </div>
                <div className={style.box}>
                    <img className={style.image} src="imagen-principal.jpg" alt="" />
                    <div>
                        <div className={style.text}>
                            Frente a la opacidad, el secretismo, el lenguaje críptico y las negociaciones bajo la mesa, proponemos la transparencia,
                            la comunicación permanente, la clarificación de los intereses y actores en cada decisión pública, la conformación de
                            espacios estables de control social con un mínimo nivel de especialización y conocimiento.
                        </div>
                        <div className={style.text}>
                            El gobierno Radical de Miguel Lunghi pone en evidencia su carácter de gobierno cada vez más  cerrado. Todas las decisiones
                            se toman a espaldas de la sociedad, que no participa ni de la formulación ni del control de las políticas públicas.
                            Además, el desgaste  de 20 años de gestión está acompañado de pérdida de políticas estratégicas, falta de cuadros para la
                            gestión y reina la improvisación.
                        </div>
                    </div>
                </div>
                <div className={style.text}>
                    En sus  primeros años de gobierno, esta forma de hacer, sin interacción con la ciudadanía, quedó solapada por el gran
                    momento de crecimiento económico que vivió el país post crisis 2001, donde Tandil se capitalizo con obras de infraestructura,
                    inversión privada, mayor presencia de la UNICEN y embellecimiento urbano.
                </div>
                <div className={style.text}>
                    Pasados los años, con claros signos de estancamiento en la ciudad, es necesario que una nueva generación impulse el protagonismo
                    ciudadano, sobre todo en los aspectos en los que la ciudad se ha quedado rezagada. Los problemas de movilidad urbana son cada
                    vez mayores, la seguridad no tiene conducción política, es imposible acceder a una vivienda y al suelo urbano, y la falta de
                    empatía gubernamental hacia los reclamos de los vecinos es vergonzoso.
                </div>
                <div className={style.text_strong}>
                    Nosotros elegimos una democracia donde el pueblo delibere con sus representantes todo el tiempo, no solo a través de ellos.
                    Con un funcionamiento  cada vez más atento a las demandas de la sociedad.
                </div>
                <div className={style.text}>
                    No entendemos la participación ciudadana como antagónica a la participación política sino como fortalecimiento de la misma.
                    No como fachada o fetiche de debates sectoriales sino como pueblo que se organiza para ser protagonista estratégico del
                    modelo de ciudad que queremos, de fuerte construcción de comunidad. Se trata de una política de largo plazo y estructuradora
                    de la gestión. No simplemente de un dispositivo de legitimación de la autoridad de turno.
                </div>
                <div className={style.box}>
                    <div>
                        <div className={style.text}>
                            Podemos mencionar como esbozo actual de dispositivos de ciudadanía,  el foro de seguridad, o la mesa contra la violencia género:
                            a ambos espacios los tenemos que potenciar, fortalecer y brindar más herramientas. Otros espacios a crear rápidamente si somos
                            gobierno, es el presupuesto participativo, el concejo municipal de hábitat, la elección democrática de los delegados de Vela,
                            Gardey, y otras delegaciones a crearse, audiencias públicas, obras públicas cooperativas para la integración sociourbana,
                            lucha comunitaria de prevención de adicciones,  concejo municipal deportivo, mesa para la preservación de las sierras, etc.
                            La democracia no se reduce al sufragio. El diálogo debe continuar después de las elecciones. Los vecinos deben ser parte de la
                            elaboración y control de las políticas públicas. Más ciudadanía, es sinónimo de  mejores políticas públicas.
                        </div>
                    </div>
                    <img className={style.image} src="imagen-principal.jpg" alt="" />
                </div>
                <div className={style.text_strong}>
                    Las políticas públicas, no se pueden desarrollar a espaldas de la sociedad, sino escuchando e involucrándola todo el tiempo.
                </div>
                <div className={style.text}>
                    Apuntamos a los objetivos de mejorar las condiciones de vida urbana, contribuir a la producción de ciudadanía,
                    la erradicación del clientelismo,  la transparencia de la gestión pública y a la distribución más justa de las
                    inversiones y los recursos públicos. La noción de “gobernabilidad participativa” cobra cuerpo y contenidos reales
                    con estas referencias. La forma de estado democrático con base exclusiva en la democracia representativa se
                    agotó por su creciente distanciamiento de la gente.  Democracia delegativa, y ciudadanía de baja intensidad donde el único
                    capital político es el sufragio, son dos caras del fracaso actual. La democracia moderna se amplió por abajo con
                    la ampliación del sufragio universal, y se estrechó por arriba, dejando en pocas manos la toma de decisiones.
                </div>
                <div className={style.text}>
                    Nadie se realiza en una comunidad que no se realiza, decía el General Perón y agregaba: <strong>
                        ¨El problema del pensamiento
                        democrático futuro está en resolvernos  a dar cabida en su paisaje a la comunidad…¨</strong>
                </div>
                <div className={style.text}>
                    No hay justicia social y libertad sin protagonismo popular ni viceversa. Apuntar al bien común es y debe ser el objetivo compartido.
                </div>
                <div className={style.text}>
                    La desprivatización del Estado exige incrementar el control que la sociedad ejerce sobre sus instituciones y recursos.
                </div>
                <div className={style.text}>
                    “Ni la justicia social ni la libertad, motores de nuestro tiempo, son comprensibles en una comunidad montada sobre seres insectificados.
                    Nuestra comunidad, a la que debemos aspirar, es aquella donde la libertad y la responsabilidad son causa y efecto,
                    en que exista una alegría de ser, fundada en la persuasión de la dignidad propia. Una comunidad donde el individuo tenga realmente
                    algo que ofrecer al bien general, algo que integrar y no solo su presencia muda y temerosa.”
                </div>
            </div>
        </div>
    )
}