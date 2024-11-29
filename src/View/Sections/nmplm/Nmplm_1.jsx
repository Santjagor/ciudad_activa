import style from '../Section.module.css'
import NmplmBanner from '../../../Components/NmplmBanner/NmplmBanner'

export default function Section({ handleSections }) {
    return (
        <div>
            <div className={style.container}>
                <NmplmBanner handleSections={handleSections} />
                <div id='Inicio' className={style.title}>Dialogos para activar</div>
                <div className={style.articleContainer}>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <div className={style.subtitle_2}>Documento 1</div>
                    <div className={style.text}><strong>Presentación</strong></div>
                    <div className={style.text}>
                        En el marco del primer encuentro, a modo de ensayo, de los miembros de la mesa
                        política de la usina de pensamiento, Centinela Sur (en adelante CS) y de los distintos
                        actores/referentes del ámbito local, se dio un interesante marco de discusión con el Padre
                        Andrés Pérez, párroco de Nuestra Señora del Carmen y Capellán en la Unidad
                        Penitenciaria de Barker, en torno a los principales temas y ejes de debate por estos
                        tiempos, entre los que se encuentra la inseguridad, el avance del hambre, el desempleo y
                        la mirada de la clase media frente al actual escenario Nacional.</div>
                    <br />
                    <img src="dpa1.jpg" alt="dpa1" className={style.image} />
                    <br />
                    <br />
                    <div className={style.text}><strong>En Contexto</strong></div>
                    <div className={style.text}>
                        El objetivo de los encuentros programados por la organización, se centra
                        principalmente en generar un marco de dialogo abierto – no necesariamente agenda de
                        por medio – con el interlocutor seleccionado para la ocasión; abriendo el debate a
                        diferentes referentes, a veces, representantes directos de sectores o rubros específicos;
                        otras veces, se dará en el marco dirigencial – sindical, político, empresarial – siempre con
                        la dinámica de enriquecer las miradas, de nuestra realidad local, pero también la del
                        binomio regional-nacional (y, por qué no?, internacional).
                    </div>
                    <div className={style.text}>
                        Nuestro enfoque es ambicioso, pero tal como expresa el proverbio chino, <strong>hasta el
                            viaje más largo, comienza por el primer paso</strong>. Y, en este primer encuentro, nos centramos
                        en uno de nuestros pilares, fundacionales, que tiene que ver con la participación desde la
                        perspectiva del pensamiento y las ideas.
                    </div>
                    <div className={style.text}>
                        Siempre con la mirada puesta en el preocupante contexto nacional que se
                        desenvuelve con cada vez mayor virulencia, tratamos de enfocar el debate dentro de los
                        escenarios que se gestan en la ciudad, por caso, y de qué manera los mismos van haciendo
                        carne dentro de la sociedad local, impacto de por medio.
                    </div>
                    <div className={style.text}>
                        Andrés nos contó acerca de sus temores, en relación a la profunda crisis social en
                        la que nos vemos inmersos y en cómo la misma, ya está calando hondo dentro de algunos
                        sectores de la ciudad; más allá de que Tandil pareciera tener sus propios anti cuerpos
                        frente a cualquier crisis y sus dosis de minimalismo de las mismas, parecen ser infalibles.
                        Una “foto”, en definitiva, de lo que han sido estos años de gobierno local, que han
                        trascendido los tiempos, y que han sellado una impronta propia frente al contexto:
                        <strong> transitar en la ancha avenida del medio, sin mayores intenciones de explicitar acciones
                            y definiciones de coyuntura.</strong>
                    </div>
                    <div className={style.text}>
                        Una de las acciones que lleva a cabo la parroquia donde Andrés desempeña su
                        incansable tarea de estar junto a los que más lo necesitan, es la de acercar alimentos y
                        otros elementos de primera necesidad a los vecinos. Su sorpresa, según nos confiesa con
                        dolor, fue la enorme asistencia de tandilenses a uno de estos actos de entrega que hace la
                        institución, situación que lo llevó a sintetizar de que la crisis no solo se está sintiendo,
                        sino que se presume mayor a la que vemos – o nos quieren hacer ver – a diario.
                    </div>
                    <div className={style.text}>
                        Este disparador nos llevó a identificar – casi como una constante desde hace veinte
                        años – las consecuencias del retiro del Estado en materia social; no como una entelequia,
                        sino como una película que se filma en tiempo real y en nuestro suelo. Clubes de barrios,
                        instituciones religiosas, organizaciones del tercer sector (por un lado) que ven reducidas
                        sus capacidades de respuesta frente al avance de la crisis, que cada vez más va formando
                        parte del paisaje; y, por otro lado, una realidad – porque nadie está en condiciones de
                        negarla – que se relaciona con una ciudad pujante, que crece, que tiene atributos para
                        “mostrar” al foráneo y que cuenta – además – con una clase media capaz de resistir
                        cualquier intento de <strong>conurbanizar</strong> la joya serrana y poner en discusión una agenda de
                        temas sensibles. Luca diría, “mejor no hablar, de ciertas cosas...”.
                    </div>
                    <div className={style.text}>
                        Este Estado <strong>observador</strong> – contrario al benefactor, referenciando al Estado
                        keynesiano de pos guerra – no parece ser un actor hay que haya que ir a “tocarle la puerta”,
                        para una gran mayoría de tandilenses. En concreto, porque fue tema del encuentro, esto
                        muestra la dificultad para que las problemáticas coyunturales “ganen la calle” en la
                        ciudad. Recientemente se dio una medida de fuerza del gremio ATE, a partir del cierre
                        del CDR local, con un nivel de acatamiento no solo invisible, sino resistido, si sirve de
                        ejemplo claro y concreto.
                    </div>
                    <div className={style.text}>
                        El interrogante, con el que Andrés se sintió familiarizado, corre por estos días – al
                        menos en el marco de quienes vemos y analizamos esta realidad con preocupación, sin
                        que quite esperanza – sobre un sendero marcado por la incertidumbre, respecto al
                        momento donde emergerá por la inercia propia del escenario, el divorcio entre lo
                        discursivo y lo simbólico, por un lado (la abrumadora ingeniería de la pos verdad), y la
                        realidad por el otro (la restitución del impuesto a las ganancias, por mencionar un tema
                        que atraviesa a la tan mencionada clase media).
                    </div>
                    <div className={style.text}>
                        Esto se da en el marco de un – tan innegable como preocupante – descredito de la
                        sociedad en lo que a “soluciones políticas y representativas” se refiere. <strong>Un dato: el
                            pensador contemporáneo N. Chomsky dice que la democracia está en crisis a nivel
                            global, y que la misma, va camino a profundizarse si no se actúa de inmediato.</strong>
                    </div>
                    <div className={style.text}>
                        Solo el necio resistiría la responsabilidad del peronismo y de las fueras políticas
                        progresistas frente al actual contexto – emergencia del liderazgo de Javier Milei y de LLA
                        de por medio – y solo los que decidan edulcorar su mirada (y responsabilidad) desde los
                        sectores llamados a resolver esta crisis, serán meros espectadores de una noche que parece
                        eterna.
                    </div>
                    <div className={style.text}>
                        Andrés nos invitó a reflexionar, sin dejar de lado la realidad que preocupa y nubla
                        la visión, y a trabajar desde los distintos sectores y lugares que ocupamos, desde el dialogo
                        y desde la contención. No toda la clase media adhiere por convicción; no todos los pobres
                        han renunciado a la lucha y a la fe en que el ascenso social y la mejora en las condiciones
                        de vida, aún pueden prevalecer.
                    </div>
                    <div className={style.text}>
                        Andrés nos invitó a reflexionar, sin dejar de lado la realidad que preocupa y nubla
                        la visión, y a trabajar desde los distintos sectores y lugares que ocupamos, desde el dialogo
                        y desde la contención. No toda la clase media adhiere por convicción; no todos los pobres
                        han renunciado a la lucha y a la fe en que el ascenso social y la mejora en las condiciones
                        de vida, aún pueden prevalecer.
                    </div>
                    <div className={style.text}>
                        Andrés nos invitó a reflexionar, sin dejar de lado la realidad que preocupa y nubla
                        la visión, y a trabajar desde los distintos sectores y lugares que ocupamos, desde el dialogo
                        y desde la contención. No toda la clase media adhiere por convicción; no todos los pobres
                        han renunciado a la lucha y a la fe en que el ascenso social y la mejora en las condiciones
                        de vida, aún pueden prevalecer.
                    </div>
                    <div className={style.text}>
                        La síntesis de ese punto es clarificadora: debemos rescatar algo de la resistencia
                        peronista, que emergía con la vuelta de Perón y los procesos revolucionarios que traerían
                        profundos cambios, hacia la segunda mitad del siglo pasado; había allí, algo por lo que
                        pelear y movilizarse. Una resistencia que se forjó en un escenario no tan distinto al que
                        se plantea hoy desde LLA, allá por el 55’ hasta el 73’. Es una advertencia, respecto a la
                        gravedad – en su más amplia definición – de silenciarnos frente a los avances virulentos
                        que vienen y que deben necesariamente contar con resistencia; hablamos, por caso, del
                        llamado al nuevo pacto del 25 de mayo, por parte del primer mandatario, un llamado que
                        no oculta la voluntad de imponer, más que negociar.
                    </div>
                    <div className={style.text}>
                        No está vencido el pueblo que, aún en contextos adversos, puede alzar la mirada
                        y pensar un futuro distinto. Es tarea de todos y todas, los que tenemos la voluntad de
                        participar y “de hacer”, dialogar con la sociedad – no la sesgada y secularizada sino la
                        integrada, pero con realidad diferentes – y construir la necesaria alternativa frente a la
                        crisis. Aglutinar a ese sujeto político que está inmerso en la incertidumbre, agotado de
                        falsas promesas, invisibilizado en su expresión, pero convencido de que este no es el
                        capítulo final.
                    </div>
                    <br />
                    <div className={style.text}><strong>Pensar para desarrollar</strong></div>
                    <div className={style.text}>
                        En este apartado, y a modo de síntesis en pocos caracteres, les dejamos una serie
                        de ideas en clave de pensamientos activos para el desarrollo, que surgieron a partir del
                        nutritivo encuentro con Andrés.
                    </div>
                    <ul className={style.list}>
                        <li>Fortalecer la conversación en el barrio; crear una red de trabajo colaborativo e
                            interdisciplinario;</li>
                        <li>Identificar los elementos positivos que aún subsisten y que, en varios casos,
                            carecen de la contención de las instituciones (sobre todo las relacionadas con el
                            deporte y las actividades recreativas);</li>
                        <li>Trabajar en el armado de estrategias para “nadar sobre la crisis”; en enfoque pro
                            desarrollo socio económico, con esquemas de resolución de problemáticas
                            puntuales;</li>
                        <li>Trabajar en la reducción – diálogos de por medio – del sesgo ideológico y de
                            pensamiento, abrumado por el libertinaje de las redes sociales y las campañas del
                            odio.</li>
                    </ul>
                    <div className={style.text_strong}>“No hay viento favorable, para el que no sabe adónde va”</div>
                    <div className={style.text_strong}>Séneca</div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}