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
                    <div className={style.subtitle_2}>Documento 4</div>
                    <div className={style.text}><strong>Presentación</strong></div>
                    <div className={style.text}>
                        En el marco de encuentros conversatorios, con diferentes actores
                        de la comunidad local, buscando siempre la pluralidad de voces y
                        la diversidad de miradas de nuestra realidad, en el marco del
                        despliegue de Ciudad Activa por los distintos entramados locales
                        (y también regionales) se generó un encuentro denominado
                        <strong> "Políticas de Suelo Urbano y Desarrollo Urbano Inteligente"</strong>,
                        en Alberdi 1337 donde se encuentra la cervecería artesanal -
                        emprendimiento local - "Lucre".</div>
                    <div className={style.text}>
                        Con la finalidad de dialogar con especialistas del sector, se debatió
                        sobre la base de responder al interrogante de cómo construir una
                        ciudad con inversión y acceso justo al hábitat. A la cita, de carácter
                        pública y no arancelada, asistieron especialistas de la UNICENCONICET, Agustina Girado, Dana Valente Ezcurra y Alejandro
                        Migueltorena; junto a ellos, el referente de Patria Grande (concejal
                        Mandato Cumplido) Juan Arrizabalaga; el secretario de la
                        Cooperativa Falucho, también concejal Mandato Cumplido, Carlos
                        Mansilla; cerrando el encuentro, el urbanista Juan Duarte,
                        secretario de Hábitat de la vecina localidad de Villa Gesell. </div>
                    <br />
                    <img src="dpa4.png" alt="dpa4" className={style.image} />
                    <br />
                    <br />
                    <div className={style.text}><strong>En Contexto</strong></div>
                    <div className={style.text}>
                        La realidad de la ciudad de Tandil, en materia de suelo urbano - en
                        términos muy amplios - se encuentra atravesada por situaciones de
                        desalojo de predios ocupados, frente a un Estado apático y una
                        comunidad desinformada al calor de la insensibilidad política del
                        recinto deliberativo local; no es menor resaltar, que a excepción
                        del voto del referente del Movimiento Evita, Nicolás Carrillo, la
                        mayoría del HCD votó a favor del desalojo de familias enteras, de
                        un predio cuya ocupación, genera debates en torno a los límites a
                        la propiedad privada, el rol del Estado, la política, la comunidad y
                        los medios.

                    </div>
                    <div className={style.text}>
                        El epicentro del debate gira en torno al estado actual de <strong>Plan de
                            Desarrollo Territorial</strong> del año 2005 (PDT), a su implementación
                        por estos tiempos y al déficit en materia de solución de controversias en torno al hábitat y desarrollo urbano, que genera. En este
                        marco y bajo prerrogativas que invitan al debate y a la reflexión,
                        comenzó a girar la rueda de puntos de vista, miradas objetivas y
                        disparadores…

                    </div>
                    <div className={style.text}>
                        El grupo de investigadores - UNICEN-CONICET - nos aporta una
                        mirada, no solo académica-profesional, sino comprometida. El
                        acceso al hábitat es un tema controversial, desde el punto de vista
                        de la organización social y de la manera en que la misma "ordena"
                        las distintas fricciones que se dan en torno al territorio, la
                        propiedad privada, el rol del Estado y los demás actores sociales.
                    </div>
                    <div className={style.text}>
                        La mirada desde el conocimiento, clarifica, no sólo porque es la
                        fuente del desarrollo, sino porque sienta los principios que rigen el
                        ordenamiento territorial y sus transformaciones; hablamos, en
                        definitiva, de causas estructurales, que profundizan los rincones
                        más profundos de un paradigma que crece: cada vez son más los
                        barrios precarios y asentamientos urbanos de familias numerosas,
                        que incrementan el conflicto por las tierras.

                    </div>
                    <div className={style.text}>
                        Este no es un problema "nuevo"; desde los años '70 del pasado
                        siglo, el acceso al hábitat es un flagelo a nivel mundial que ha
                        convertido a la vivienda, no ya en un valor de uso, sino en un valor
                        de cambio. Existen datos que grafican este punto: el último censo
                        del INDEC nos dice que desde 2010 a 2022, ha crecido 10 puntos el
                        número de inquilinos. En nuestra ciudad, el porcentaje de
                        inquilinos en el 2001 era del 15%, siendo para el 2022 del 29,8%,
                        cifra que se duplica en lo que va del siglo
                    </div>
                    <div className={style.text}>
                        Similares realidades arrojan los números que explican el crecimiento de las viviendas vs la población. Mientras que entre el 2001 y
                        2021, la población creció un 33%, el número de viviendas lo hizo en
                        torno al 97%. Estos datos, no son solo numéricos. Muestran la
                        vulnerabilidad del inquilino, la inquilinización de parte de una
                        sociedad, excluida, marginada; un universo explicado por madres
                        solteras, minorías sexuales (oprimidas), familias que conviven con
                        animales, trabajadores y trabajadoras informales, etc. Sobre todo,
                        porque, en definitiva, hay una tendencia hacia la consideración de
                        que el derecho a la vivienda se erige sobre los cimientos del
                        ámbito privado.
                    </div>
                    <div className={style.text}>
                        Patria Grande se hizo presente, con un referente de peso, que,
                        además, conoce a la perfección la problemática del suelo urbano y
                        la vivienda. <strong> Arrizabalaga</strong> sentencia, la crisis que se desnuda, en el
                        centro del debate, es en realidad de apatía - del poder judicial, de
                        la política, de la sociedad o una importante parte de ella - una
                        insensibilidad que se materializa con un acto que duele: gente en
                        la calle, por falta de acceso (digno) al suelo, a la vivienda.
                    </div>
                    <div className={style.text}>
                        El trasfondo es político, lo que hay que poner en discusión, primero,
                        es la política y su mirada mezquina respecto de este problema. No
                        es casualidad, aunque sí es la primera vez que se da, que el FDT
                        apoye un desalojo; la intencionalidad política marca una agenda,
                        pero también un sentido. Los polígonos del RENABAP son la
                        garantía respecto a la discusión de la propiedad de la tierra.
                    </div>
                    <div className={style.text}>
                        Tandil ha pasado de ser una ciudad de propietarios a una ciudad de
                        inquilinos, de renta urbana, con un fuerte patrón agrario y con un
                        mercado que se muestra con mayores atributos (e injerencia) que
                        el Estado Municipal; esto se da a partir de los '70, con el último
                        gobierno de facto, que dolariza la tierra y la vivienda; esto es crítico,
                        y genera dependencia constante de elementos externos, por la
                        sencilla razón de que se traccionan esos bienes en moneda que no
                        producimos... este es el punto, sin un Estado presente, el mercado
                        impone sus reglas, trillado, pero no por ello menos efectivo. Frente
                        a esto, se deben imponer normas, regulaciones, integración,
                        producción (de bienes y servicios públicos) … y esto, solo lo puede
                        garantizar el propio Estado, no el mercado. Porque el problema, en
                        Tandil, es estructural, de concentración de la tierra - no de déficit
                        de tierras -, que se fortalece a medida que las regulaciones se
                        debilitan en su implementación; un juego de suma cero, donde lo
                        que se "pone" de un lado, se "quita" del otro
                    </div>
                    <div className={style.text}>
                        En Europa, cuna del progreso liberal, de la propiedad privada y del
                        capital, la presencia del Estado en materia de regulación rentista
                        es notoria. Sobre todo, porque se pone foco en la integración, para
                        evitar que sean las ciudades y su "desarrollo" las que expulsen; por
                        eso existen leyes de barrios populares (RENABAP), porque lo que
                        se busca es reducir los "desaparecidos domiciliarios"; también la
                        mirada apunta a la inversión con el Estado al frente, la vivienda
                        pública en alquiler genera integración socio económica, a través
                        del empleo, el consumo, la cercanía de los CAPS a los barrios, las
                        sociedades de fomento, el deporte y la cultura. Se trata de ocupar
                        espacios, de manera pro-positiva, para evitar que el narco-estado
                        prospere, allí donde las instituciones dejan un lugar vacío.
                    </div>
                    <div className={style.text}>
                        El secretario de la Cooperativa Falucho, aborda la historia como
                        punto de partida;<strong> Mansilla </strong>nos adelanta: es momento de resaltar
                        el valor de la cooperación, conjunta... cooperar para construir, no
                        sólo como lema, sino, además, como insumo básico para el
                        progreso.
                    </div>
                    <div className={style.text}>
                        La historia enseña; antes de la existencia del FoNaVi, el fondo para
                        obras de vivienda, urbanización, infraestructura, servicios y equipamiento comunitario, la urbanización se daba de la mano de las
                        cooperativas, se creó una en cada base militar (Córdoba, Comodoro
                        Rivadavia, Tandil), además de una Federación de Cooperativas de
                        Vivienda. Este es el puntapié inicial del proyecto que se convertiría
                        en Cooperativa Falucho.
                    </div>
                    <div className={style.text}>
                        Hoy hay sectores en pugna, en contraposición al pasado; el sector
                        público, el privado y el social están en puja constante. El debate
                        central es de quién es la plusvalía.
                    </div>
                    <div className={style.text}>
                        Con el Estado solo, no alcanza, en este sentido: las cooperativas
                        aportan con valores, con integración, pero, sobre todo, con progreso; un elemento central de la urbanización de las metrópolis -
                        Berlín está construida, en un 30%, sobre la base del trabajo
                        cooperativo.
                    </div>
                    <div className={style.text}>
                        <strong>Juan Duarte</strong> comienza con una máxima que define escenarios, y
                        advierte sobre una realidad: la producción de suelo (urbano) está
                        regida por el mercado; por eso es central la intervención del
                        Estado. Los datos son indicadores, más allá de que a priori, solo
                        expresen números. A lo largo de la historia reciente, la pirámide
                        social en la Argentina, ha incrementado la pobreza - con una amplia
                        base del 56%, seguida de una media del 40%, hasta llegar a la
                        cúspide, del 5% más privilegiado. Pero eso no es todo, solo un 20%
                        de la población de esa pirámide, tiene posibilidades en la actualidad,
                        de llegar a la vivienda propia, ni la totalidad de los pobres, ni la
                        mitad más baja de la clase media, podrán hacerlo.
                    </div>
                    <div className={style.text}>
                        El primer gobierno de Perón llevó adelante una férrea política de
                        regulación del mercado de alquileres (en una Buenos Aires donde
                        el 80% eran inquilinos); es decir, que este asunto es tema de
                        decisiones políticas y de abordar a fondo estas problemáticas de
                        manera integrada, entre los distintos niveles del Estado, Nacional,
                        Provincial y, sobre todo, Municipal. Aquella primera política pública,
                        no consistió en generar suelo urbano, viviendas para los trabajadores, sino en regular un mercado desregulado.

                    </div>
                    <div className={style.text}>
                        El suelo es la mercancía que no tiene relación con el valor del
                        mercado; la valorización la otorga el Estado - la comunidad en su
                        conjunto - y esta es la primera intervención virtuosa que un Estado
                        debe tener; la segunda es la distribución de ese suelo urbano
                        valorizado, porque sólo el Estado tiene los recursos para generar
                        políticas públicas. Y, en este sentido, la participación de los
                        Municipios en la valorización inmobiliaria es central, son la base de
                        esa pirámide.
                    </div>
                    <div className={style.text}>
                        En Singapur, la meca del capitalismo moderno, el 100% de la tierra
                        es pública; esto valoriza el desarrollo. Pero no hay valorización y
                        distribución, en torno a la pulsión entre lo público y lo privado, si
                        no hay un Estado presente y regulador, sobre todo regulador, del
                        mercado. Es que la mercancía inmobiliaria es muy particular, tiene
                        un alto componente especulativo - y más por estas épocas, como
                        "refugio" de inversión - por eso las políticas públicas regulatorias
                        deben ser robustas y continuas. Acompañadas de un esquema de
                        financiamiento con créditos para un mercado inmobiliario
                        empático y también con una mirada social.
                    </div>
                    <br />
                    <div className={style.text}><strong>Pensar para desarrollar</strong></div>
                    <div className={style.text}>
                        El debate enriquece por su contenido, pero también por su
                        integridad y abordaje; una mirada retrospectiva y, a la vez de
                        futuro ¿Es posible un desarrollo urbano consciente, sin la presencia
                        del Estado? Con el mercado solo no alcanza, reza una frase con
                        matriz trillada, lo que complementa es la política pública que se
                        construye con empatía, solidaridad, pero (sobre todo) con decisión
                        y voluntad política.
                    </div>
                    <div className={style.text}>
                        Pensemos juntos ejes de discusión y construcción socio-política
                        en torno a:
                    </div>
                    <ul className={style.list}>
                        <li>Un adecuado cumplimiento del PDT, reconstruyendo su
                            vigencia normativa.</li>
                        <li>El resguardo de los polígonos RENABAP que garantizan las
                            leyes de barrios populares;</li>
                        <li>Instruir al poder político y al resto de los poderes a que
                            obren en función del bien común, con el respaldo de lo
                            público por encima de los intereses del mercado. </li>
                    </ul>
                    <div className={style.text_strong}>"Para que triunfe el mal, sólo es necesario que los buenos no hagan nada”</div>
                    <div className={style.text_strong}>Edmund Burke</div>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}