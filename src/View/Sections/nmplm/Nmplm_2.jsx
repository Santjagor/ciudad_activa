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
                </div>
            </div>
        </div>
    )
}