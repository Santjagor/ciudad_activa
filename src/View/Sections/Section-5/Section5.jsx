import style from '../Section.module.css'
import SidePanel from '../../../Components/SidePanel/SidePanel'

export default function Section() {

    const points = [
        "Documento 1",
        "Documento 2",
        "Documento 3",
    ]

    return (
        <div>
            <div className={style.container}>
                <div id='Inicio' className={style.title}>Dialogos para activar</div>
                <div className={style.articleContainer}>
                    <hr />
                    <div id={points[0]}></div>
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
                    <br />
                    <br />
                    <br />
                    <hr />
                    <div id={points[1]}></div>
                    <br />
                    <br />
                    <br />
                    <div className={style.subtitle_2}>Documento 2</div>
                    <div className={style.text}><strong>Presentación</strong></div>
                    <div className={style.text}>
                        En el marco del primer encuentro, a modo de ensayo, de los miembros de la mesa
                        política de la usina de pensamiento, Centinela Sur (en adelante CS) y de los distintos
                        actores/referentes del ámbito local, se dio un interesante marco de discusión con el Padre
                        Andrés Pérez, párroco de Nuestra Señora del Carmen y Capellán en la Unidad
                        Penitenciaria de Barker, en torno a los principales temas y ejes de debate por estos
                        tiempos, entre los que se encuentra la inseguridad, el avance del hambre, el desempleo y
                        la mirada de la clase media frente al actual escenario Nacional.
                    </div>
                    <img src="dpa2.webp" alt="dpa2" className={style.image} />
                    <br />
                    <br />
                    <div className={style.text}><strong>En contexto</strong></div>
                    <div className={style.text}>
                        Como se viene dando en la mayoría de los espacios de debate, que giran en torno
                        al escenario político presente, sus variables económicas, sociales, el impacto de las
                        medidas recientes y – sobre todo – las proyecciones futuras del país, emergen ciertos
                        elementos que pugnan por identificar las características de un modelo visible.
                    </div>
                    <div className={style.text}>
                        No sin que esto se revista de contradicciones y divergencias entre la realidad
                        cotidiana – impuestazos, caída de la producción, pérdida de la capacidad adquisitiva de
                        los sectores menos favorecidos – y el impacto de lo simbólico como justificativo del
                        ideario libertario y su impronta anti Estado – desguace del Estado, cierre de emblemas de
                        lo público, TELAM, etc. En un aparente juego de suma cero, lo que se obtiene de un lado
                        – el triunfo de lo simbólico y su discursiva – se pierde del otro – la estrepitosa caída de
                        sectores sociales que apostaron al cambio como eje de una mejor calidad de vida – y en
                        el centro, la desdichada clase media que se codea con la pobreza, la marginalidad y el
                        descontento.
                    </div>
                    <div className={style.text}>
                        En este contexto, nuestro invitado, a quien vamos a denominar “el comerciante”,
                        rompe el hielo y va al hueso; nos advierte que el denominado progresismo, en la historia
                        reciente, se ha enamorado de “lo social”, impregnando la agenda con esa visión. Sin
                        embargo, la consecuencia directa de aquello es el déficit que hoy existe en cuanto a la
                        generación de recursos y su lógica re distribución.
                    </div>
                    <div className={style.text}>
                        Esta actualidad, en palabras del mismo autor, vuelve extremadamente compleja la
                        posibilidad de materializar la generación de recursos a través de la articulación de
                        procesos virtuosos que tengan al capital privado, al frente. No oculta, el comerciante, su
                        inclinación ideológica y, por ende, el destino de su voto en las últimas urnas.
                    </div>
                    <div className={style.text}>
                        Se auto define como un defensor del libre mercado y la teoría del derrame. Cree
                        en la libre competencia, basada en la teoría liberal clásica, y la considera el motor del
                        entusiasmo que lleve a los empresarios e inversores, a confiar en el país; un país que,
                        necesariamente, requiere del establecimiento de elementos que comprueben que hay un
                        rumbo, con sentido y estrategia. Eso, hoy, sigue ausente.
                    </div>
                    <div className={style.text}>
                        Yendo al plano local y dialogando sobre el disparador que plantea cuál es el
                        escenario en el que se deben desenvolver las PYMES locales, el comerciante declara sin
                        preámbulos: “para manejar el negocio, la inflación es un escenario positivo”. Sucede que,
                        frente a un marco de deflación, la Argentina se vuelva cara en dólares y todo el frente de
                        importación contribuye a elevar los costos y, por ende, contraer las ventas del sector. La
                        inflación alta, corrige.
                    </div>
                    <div className={style.text}>
                        ¿Cómo se enfrenta la pérdida del poder adquisitivo y la caída del empleo formal
                        desde las PYMES? Para el referente local la desregulación del mercado va a favorecer la
                        generación de empleo y, por ende, va a mejorar la calidad de vida del trabajador; es un
                        mecanismo virtuoso, no sin el Estado, pero sí con un sector privado “liberado” de
                        presiones impositivas, obligaciones en el ámbito del derecho laboral, con impuestos y
                        servicios que acompañen a los sectores que impulsan el crecimiento – la Tasa Única de
                        Actividad Económica, TUAE, hoy se lleva un alto porcentaje dentro del rubro, ya que
                        está sujeta a la facturación de la empresa, solo por mencionar un ejemplo respecto a la
                        distorsión impositiva actual.
                    </div>
                    <div className={style.text}>
                        No obstante, y sin dejar de lado el presente complejo que atraviesa el país, el
                        comerciante apuesta a la promoción y el desarrollo, sobre la base de la desregulación y la
                        libertad del mercado; este mecanismo, en sus palabras, “incentiva la RSE, y derrama
                        beneficios a la sociedad”. Pero, además, debe estar apoyado sobre pilares fundamentales,
                        tales como reglas claras para los inversores, subvención de tasas para los sectores
                        productivos, líneas de apoyo a las PYMES, mecanismos de control efectivo del destino y
                        el proceso de inversión. El ejemplo en la cuidad, nos dice, es el sector de las tecnologías,
                        los denominados TIC’s, que explican el sector de mayor crecimiento y el de menos
                        regulación.
                    </div>
                    <div className={style.text}>
                        Frente a la triada planteada por el comerciante, como la base de “salida” – <strong>Estado
                            mínimo-desregulación-libre mercado</strong> – surge su contracara histórica. El desarrollo de los
                        grandes centros de poder se nutrió, necesaria e inexorablemente, de procesos marcados
                        por una fuerte presencia del <strong>Estado protector</strong>; no hay registros de potencias emergentes
                        sin el proteccionismo como la base de su desarrollo, protegiendo su industria, la
                        generación de conocimiento, con un Estado garante de esos procesos. El desafío,
                        entonces, en el plano nacional, será la forma en la que ese liberalismo tan deseado, pueda
                        anclarse en un escenario de apertura deliberada, desregulación y ausencia del Estado.
                    </div>
                    <div className={style.text}>
                        El aspecto social, más allá de dialogar profundo sobre las PYMES, su rol y su
                        presente pensando en el futuro del país, no estuvo ausente a la cita. Para nuestro invitado,
                        la clave está en desarrollar mecanismos que tiendan a fortalecer la <strong>especialización por
                            sectores</strong>, según su demanda, y apuntar al viejo concepto de las <strong>ventajas comparativas</strong>. Y,
                        en este sentido, resalta el rol de las universidades – como usinas generadoras de esos
                        recursos – que contribuyan a reducir el desempleo. Aquí sí es necesario un Estado
                        presente, contribuyendo a visibilizar el empleo informal y conducirlo hacia la
                        formalización, partiendo de la generación de actividades en el marco de la demanda
                        productiva y de servicios. <strong>Si vamos a potenciar la agricultura de cercanía para satisfacer
                            demandas de proximidad, generemos más agricultores.</strong>
                    </div>
                    <div className={style.text}>
                        Un tema que no estuvo ausente, fue el de la marginalidad y su impacto en un
                        Tandil que, a los ojos del visitante, se muestra pujante, casi sin fisuras y con una mirada
                        al progreso constante, siendo una de las ciudades intermedias de mayor auge en la
                        provincia de Buenos Aires. Al respecto, el referente comercial, reconoce que en la ciudad
                        se observa con mucha preocupación el avance del delito, la delincuencia, la droga y, por
                        ende la marginalidad y exclusión de sectores de la sociedad que se ven atravesados por
                        estos fenómenos de época. En este sentido, y coincidiendo en varios puntos, volvimos al
                        rol (necesario) de las PYMES y de la RSE; sobre todo desde el punto de vista de
                        acompañar a las usinas generadores de estos recursos, capacitando, acompañando en la
                        elaboración de estadísticas serias, con información detallada respecto a los nichos a
                        potenciar para lograr empleo genuino que apoye a un sector, el de las empresas, que
                        explica en el país el 80% del empleo privado, y que ha generado entre 2019-2023 más de
                        quinientos mil puesto de trabajo formales.
                    </div>
                    <div className={style.text}>
                        Para esto, y en consideración del comerciante, es necesaria la tan discutida
                        reforma laboral, no cualquier reforma. El progresismo ha renegado de la idea de discutir
                        estos temas – no solo los laborales, sino los relativos a la seguridad y el punitivismo – y
                        la derecha los ha hecho propios, incorporando una agenda simbólica (las fotos de los
                        funcionarios de seguridad, sobre todo, vinculadas con escenas que se observan en Centro
                        América) pero también material.
                    </div>
                    <div className={style.text}>
                        Hay que ir, siguiendo con el pensamiento del referente PYME, hacia leyes
                        laborales más flexibles, hacia la reducción de la judicialización de las relaciones
                        laborales, y hacia la disminución de los aportes directos de la patronal (para que un
                        empleado se lleve USD 600 a su casa, el empresario debe aportar USD 1500 todos los
                        meses).
                    </div>
                    <br />
                    <div className={style.text}><strong>Pensar para desarrollar</strong></div>
                    <div className={style.text}>
                        Al final de este enriquecedor encuentro, surgieron una serie de coincidencias –
                        esto es lo rico de encuentros descontracturados, en el ámbito de un conversatorio – que
                        disparan, además, elementos para pensar y desarrollar. <strong>“Ningún ser humano se niega a
                            un abrazo”</strong>, sentencia el comerciante, al tiempo que afirma que la educación es la base
                        para el desarrollo, en cualquier ámbito – es el verdadero instrumento de cambio – y que
                        debemos ir hacia la “formación por especialidad, de manera curricular y en los niveles de
                        educación media y alta”.
                    </div>
                    <div className={style.text}>
                        Concluyendo, y en busca de disparadores que aporten a una realidad mejor para
                        todos y todas, el comerciante nos deja lo que él cree pueden ser ejes para trabajar a futuro:
                    </div>
                    <ul className={style.list}>
                        <li>Salud pública para el tandilenses (diferenciado al vecino de otras localidades);</li>
                        <li>Educación. Curricular y extra curricular, que articule con el proceso de
                            planificación estratégica;</li>
                        <li>Seguridad. Con una visión menos propagandística y más integrada (Nación y
                            Provincia); las policías locales eran más cercanas y tenían una mayor
                            aproximación a las problemáticas;</li>
                        <li>Infraestructura. Sin inversión real desde hace varios años. La Cooperativa Vial es
                            un ejemplo a seguir, en este sentido.</li>
                        <li>Tratamiento de residuos. Separación de origen</li>
                        <li>Discapacidad. Hoy Tandil no es una ciudad amigable con el sector; esto se ve,
                            sobre todo, en los edificios de toda la administración pública.</li>
                    </ul>
                    <div className={style.text_strong}>"Qué maravilloso es que nadie tenga que esperar ni un segundo para empezar a mejorar el mundo."</div>
                    <div className={style.text_strong}>Ana Frank</div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <hr />
                    <div id={points[2]}></div>
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
                <SidePanel points={points} />
            </div>
        </div>
    )
}