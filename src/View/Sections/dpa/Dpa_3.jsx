import style from '../Section.module.css'
import DpaBanner from '../../../Components/DpaBanner/DpaBanner'

export default function Section({ handleSections }) {
    return (
        <div>
            <div className={style.container}>
                <DpaBanner handleSections={handleSections} />
                <div id='Inicio' className={style.title}>Dialogos para activar</div>
                <div className={style.articleContainer}>
                    <hr />
                    <br />
                    <br />
                    <br />
                    <div className={style.subtitle_2}>Documento 3</div>
                    <div className={style.text}><strong>Presentación</strong></div>
                    <div className={style.text}>
                        El marco de lo que hemos dado en llamar conversatorios de Centinela Sur,
                        retomamos la senda de encuentros con distintos actores que aportan su mirada, diversa y
                        desde la perspectiva del rol y lugar que ocupan. En esta ocasión, tocó el turno de los
                        medios, elegimos a uno de los referentes más importantes de la ciudad, con amplia
                        trayectoria en el ámbito radial y televisivo.
                    </div>
                    <div className={style.text}>
                        La orden del día para el conversatorio en esta ocasión, giró en torno a temas tales
                        como el rol de los medios frente a la política (pero, sobre todo, frente a esta política); el
                        poder que los mismos ostentan y la influencia frente al público en general; hasta el
                        presente político de la ciudad y el futuro; los temas que importan y preocupan al
                        tandilense y la mirada estratificada de una ciudad de la envergadura de Tandil.
                    </div>
                    <img src="dpa3.jpg" alt="dpa3" className={style.image} />
                    <br />
                    <br />
                    <div className={style.text}><strong>En contexto</strong></div>
                    <div className={style.text}>
                        Las recientes medidas del gobierno nacional se han comportado de una manera
                        lineal, hasta el momento, en el sentido en que brilla por su ausencia el espaldarazo al
                        trabajador; más bien, podríamos indicar todo lo contrario. Caída abrupta del consumo;
                        pérdida del poder adquisitivo de la clase media; caída en picada del salario de los
                        trabajadores; jubilados contra las cuerdas... parece que la “casta” se reconvirtió y tal
                        camaleón, cambio de forma, color y sustancia: ya no es la clase política, sino más bien,
                        los trabajadores, estudiantes, jubilados y pequeños empresarios.
                    </div>
                    <div className={style.text}>
                        En esta dirección, el referente de los medios nos sorprende con un dato, sus
                        ingresos actuales están por debajo de lo que cualquiera pudiera imaginar, teniendo en
                        cuenta la trayectoria de alguien con más de 30 años en los medios y su experiencia, que
                        lo hacen dueño del prime time en el principal multi medio local; para nuestra sorpresa,
                        un empleado de comercio – sin decir con esto que no debiera ser así – gana más que un
                        periodista del medio más importante a nivel local.
                    </div>
                    <div className={style.text}>
                        Y esto tiene una explicación sencilla: sin CCT, sin representación sindical, las
                        “reglas” del mercado hacen su juego. Además, desde el 10 de diciembre en adelante, las
                        partidas presupuestarias de Nación destinadas a la pauta publicitaria, se han visto
                        considerablemente reducidas a una expresión igual a cero... sí, hoy el medio más
                        importante a nivel local, no tiene pauta publicitaria de Nación – como tampoco tienen los
                        demás medios –; ya estaba esto advertido: <strong>no hay plata</strong>. Si bien es cierto que la provincia
                        no ha quitado la pauta, la misma no tiene la relevancia presupuestaria que supo tener; y
                        en el plano local, el Municipio ha dado de baja pautas enteras, en algunos medios,
                        teniendo un impacto directo en la sustentabilidad de los mismos, sobre todo de aquellos
                        que por envergadura y audiencia, ven coartada la posibilidad de sobrevivir por sus propios
                        medios.
                    </div>
                    <div className={style.text}>
                        Yendo hacia una mirada más “política” de la realidad, el hombre de medios nos
                        da su punto de vista; el <strong>balotage</strong> significó el triunfo de un discurso radical, frontal y sin
                        medias tintas. Acaso un “compilado” de odio, frustración, desencanto y descredito,
                        convertido en <strong>oferta electoral</strong>; sin plataforma sólida, sin territorio al estilo del peronismo;
                        sin mucha programática, más que una moto sierra dispuesta a romper, simplemente a
                        romper... entre otras cosas, porque LLA es un “producto” de lo que odia y quiere “la
                        gente”; es la voz de Mirtha Legrand diciendo “lo que la gente quiere”, revirtiendo la carga
                        de la demanda. Así se construye poder, también, en la dinámica política pendular de la
                        Argentina.
                    </div>
                    <div className={style.text}>
                        El acompañamiento de la gente (genérica y a trazo muy grueso) se entremezcla
                        con la resistencia; de ese mismo sujeto, convencido – antes que nada, convencido – de
                        que todo lo anterior, sobre todo si viene con el <strong>ismo</strong> antecedido por <strong>“kirchner”</strong> y por
                        <strong>“peron”</strong>, era sinónimo de opresión, miseria, corrupción y mentiras. Pero esta lógica de la
                        diferenciación, se imprime sobre la base de la aparente necesidad de legitimar acciones
                        políticas a través de la inmediata señalización de <strong>adversarios</strong>; enemigos de distinta
                        índole, pero de peso, tanto material, como simbólico. Nuestro invitado convoca al pasado,
                        en este punto, y nos aclara “el poder se construye alrededor de una estrategia del
                        conflicto... la “casta”, el comunismo de hoy, fueron el campo y Clarín, ayer”. Meta
                        mensaje: si hurgamos en el pasado reciente, no hay mucho de “nuevo”, sino más bien de
                        re adaptación al momento de construir poder material y simbólico.
                    </div>
                    <div className={style.text}>
                        Pero todo esto penetra en el inconsciente colectivo, acompaña su reflexión el
                        hombre de medios, y es en parte lo que explica el “por qué” de la elección de determinadas
                        ofertas electorales. Muy por fuera de los tradicional, es cierto, pero con una férrea alusión
                        a la historia – un poco tergiversada, puede observarse –, invocando épocas del liberalismo
                        estilo Carlos Saúl, hasta pasar por la biblioteca de un Alberdi un tato diferente presentado
                        hoy, en relación a su real mirada liberal; lo que es innegable: un nivel de éxito desde la
                        estrategia de comunicación, que tiene poca oposición.
                    </div>
                    <div className={style.text}>
                        En relación al rol de los medios, en la actualidad, y analizando la brecha entre
                        independencia y pauta estatal, nuestro invitado plantea un disparador lleno de novedad:
                        “los medios están sobrevalorados”. Y esto lo explica a partir de lo que entiende como una
                        debilidad de la política – en su propio accionar – que hace que los medios adquieran una
                        relevancia que, en realidad, no tienen. Esto afecta mayormente al pueblo, impide una
                        orientación directa. Un canal entre la representación y el representado, sin intermediarios;
                        lo que podría compararse con la comunicación y la aguja hipodérmica, donde el mensaje
                        es directo. Milei gana por vías no tradicionales, en definitiva.
                    </div>
                    <div className={style.text}>
                        Los medios y el odio (que parece estar de moda, como instrumento de hacer y
                        decir la política) no pueden quedar fuera del conversatorio. El nómada virtual, un
                        concepto made in Siglo XXI, consume cultura de corto plazo, breve, pero profunda. Allí
                        se imprime el odio; la oferta de ese odio está fuera de encuadre, puede utilizarse para casi
                        cualquier cosa, potencia el individualismo menos virtuoso y le otorga al “grito” y, por
                        ende “al que grita” un poder dogmático. Es el Dios que nos atrae con su ira, aún en contra
                        de nuestros propios intereses (es el hombre que cierra la persiana de su comercio, pero
                        aclara, “es lo que tiene que pasar, para que estemos mejor”).
                    </div>
                    <div className={style.text}>
                        También es cierto, o al menos es lo que pone en la mesa el hombre de medios, que
                        el odio en las redes no nace con LLA y su ejército de <strong>Trolls</strong>. El kirchnerismo hizo de la
                        polarización una verdadera siembra de odio, fueron, dentro de este siglo, pioneros en ese
                        instrumento de dominio de masas. La batalla cultural tiene su lado gris.
                    </div>
                    <div className={style.text}>
                        Por último, pero no por ello de menor importancia, el invitado se despacha
                        dejando más que un título sobre la mesa; fiel a su estilo, apunta: “Argentina necesita un
                        nuevo Perón”; hoy debemos poder identificar un líder con rasgos del General, pero con
                        una mirada acertada de la actualidad – y sus demandas – que ordene, conduzca y proyecte
                        sobre la base de (re) valorizar la política, como un instrumento de percepción positiva
                        dentro del pueblo. Lo contrario de esto, ha sido abrir la puerta a la emergencia del
                        <strong> outsiders</strong>.
                    </div>
                    <div className={style.text}><strong>Pensar para desarrollar</strong></div>
                    <div className={style.text}>
                        Luego de conversar distendidamente sobre temas de interés, relacionados con el
                        escenario nacional, analizando (sobre todo) el rol de los medios y la comunicación,
                        surgieron algunos puntos que el hombre de medios nos dejó para pensar en una ciudad
                        distinta. En este contexto, la consulta final se refirió al Tandil pos Lunghi, a cómo se
                        percibe en la actualidad la foto del sillón de Belgrano al 400 sin el longevo gobernante.
                    </div>
                    <div className={style.text}>
                        Si no surge un nuevo liderazgo desde la política tradicional – ese nuevo Perón que
                        reclama el hombre de medios – la emergencia de un outsiders no es inimaginable. Pero
                        es cierto también que figuras como Iparraguirre y Nicolini han hecho un camino bastante
                        sólido como para aglutinar electores propios y salir a la captación de la diáspora lunghista,
                        sin (hasta el momento) un “señalado” por el líder en quien pensar, urna de por medio.
                    </div>
                    <div className={style.text}>
                        A partir de allí, emergen las tareas...
                    </div>
                    <ul className={style.list}>
                        <li>Pensar la comunicación, lo nuevo y lo viejo, como un elemento central para
                            posicionar un referente, no tan tradicional, pero lejos del outsiders;</li>
                        <li>La figura política debe tener necesariamente “llegada” al empresariado; debe dar
                            garantías de acompañamiento;</li>
                        <li>Se debe trabajar en instrumentos que nutran al Estado de un rol de coordinación
                            y acompañamiento; distinto al de asfixia y asistencialismo que lo han
                            caracterizado en los últimos 20 años;</li>
                        <li>Las organizaciones sociales deben (de)construir su visión negativa, frente a la
                            comunidad; hay que quebrar ese paradigma, ¿cómo?: mostrando gestión y los
                            resultados obtenidos hasta ahora.</li>
                    </ul>
                    <div className={style.text_strong}>“Juntarse es un comienzo. Seguir juntos es un progreso. Trabajar juntos es un éxito”</div>
                    <div className={style.text_strong}>Henry Ford</div>
                </div>
            </div>
        </div>
    )
}