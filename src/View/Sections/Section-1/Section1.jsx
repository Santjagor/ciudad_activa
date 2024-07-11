import style from '../Section.module.css'
import Index from '../../../Components/Index/Index'

export default function Section() {

    const points = [
        "Inicio",
        "Participación y control comunitario",
        "Equidad",
        "Calidad, Seguridad y Sustentabilidad",
        "Ordenador Urbano y Ecológico",
    ]

    return (
        <div>
            <div className={style.container}>
                <div className={style.articleContainer}>
                    <div id='Inicio' className={style.subtitle}>Transporte público eficiente</div>
                    <div className={style.text}>El transporte público nos da la oportunidad de problematizar la movilidad urbana en su conjunto, generando aportes para reducir la siniestralidad creciente, la congestión, favorecer la movilidad activa y mitigar daños ambientales, así como el modelo de ciudad que queremos, entendiendo que el Transporte Público de Pasajeros (TPP) es mucho más que cómo nos movemos, es una herramienta de desarrollo de la ciudad y de acceso a los diferentes servicios públicos y privados que esta brinda, un igualador que reduce las desigualdades entre el vecino que vive en cualquiera de los diferentes territorios que componen nuestra ciudad.</div>
                    <div className={style.text}>Entendiendo lo anterior tenemos una serie de ejes que creemos que deben configurar el pliego y en consecuencia están atados a una serie de propuestas de modificación.</div>

                    <div id='Participación y control comunitario' className={style.subtitle}>1. Participación y Control Comunitario</div>
                    <div className={style.text}>El primero es el ordenador de cómo deben construirse las políticas públicas en general, y este pliego en particular, que es desde la Participación Comunitaria, la cual tiene dos aspectos centrales: <em>la formulación y el control</em>. En cuanto a lo primero hay que priorizar la <em>perspectiva del usuario</em> para modificar el nuevo ordenamiento del TPP, buscando en espacios participativos territoriales o sectoriales las diferentes mejoras y deficiencias que se plantean para un servicio público que está creado para el uso del ciudadano. La definición del pliego tiene que ser desde una articulación tripartita que priorice a los usuarios y que sea complementada por la visión del Estado y las Concesionarias. Desde el Estado se tiene que aportar la visión de proyecto de ciudad, de orientación estratégica del crecimiento, de síntesis de las demandas del usuario adaptadas a la factibilidad planteada por las empresas de transporte. Por parte de las empresas concesionarias creemos que el principio de rentabilidad debe estar acompañado con la sustentabilidad y factibilidad del servicio, partiendo de la base de que las mismas cuentan con condiciones diferenciadas garantizadas por el Estado.</div>
                    <div className={style.text}>En cuanto al control, la propuesta es facilitar, <strong>expandir y publicitar los canales de denuncia</strong>, propuestas, peticiones, reclamos y sugerencias, es decir, que sean todos los posibles: vinculados a la aplicación, página web, teléfono, etc. Todo lo anterior sumado al  medio físico de denuncia en papel mediante un libro de quejas ante la autoridad de aplicación y ante la empresa, la cual deberá informar automáticamente a la autoridad de aplicación.</div>
                    <div className={style.text}>Todos estos canales deben ser centralizados por la autoridad de aplicación, la cual debe avanzar en mejoras, sanciones y seguimiento de las denuncias individuales como en la <strong>elaboración de estadísticas de denuncias y la creación de un índice de satisfacción del usuario</strong> para poder evaluar el servicio en su integralidad y aportar mejoras. Esto debe ser de acceso público y elaborado periódicamente, permitiendo el involucramiento de los usuarios en dicho proceso, convirtiéndolos en protagonistas de una auditoría social continua.</div>
                    <div className={style.text}>Para poder realizar estos reclamos es necesaria <strong>la clara identificación de los choferes así como de las unidades</strong>, en un sistema similar al de los taxis y remises en el cual el usuario no tenga que pedir al chofer sus datos sino que sean de visibilidad plena.</div>

                    <div id='Equidad' className={style.subtitle}>2. Equidad</div>
                    <div className={style.text}>El transporte tiene que tener un principio de equidad ya que es la condición de posibilidad para reducir las diferencias territoriales de acceso a bienes y servicios públicos y privados, de ejercer el derecho a la ciudad así como otros derechos consagrados como la educación, la salud, etc. En este sentido  llevamos adelante el impulso a la <strong>incorporación de la SUBE</strong>, con la consecuente incorporación de diferentes usuarios a la Tarifa Social, entre ellos el <strong>Boleto Universitario Gratuito</strong>, la ampliación de la PASE y la figura del usuario frecuente tanto para trabajadores formales como informales.</div>
                    <div className={style.text}>A su vez el TPP tiene que <strong>garantizar el acceso a los servicios públicos</strong>, como son el hospital en el caso de la salud, el cual tiene que estar conectado con mayor cantidad de líneas para permitir llegar con el menor recorrido a pie. </div>
                    <div className={style.text}>Otro servicio público que debe ser considerado esencial, debido a su importancia y a su difícil acceso por la zona en la que se encuentra, es el campus universitario. En este sentido proponemos <strong>la ampliación de los días y horarios de las diferentes líneas al campus</strong>, incluyendo sábados y domingos (para las cursadas de fin de semana que no son pocas), así como la incorporación de un horario nocturno así como su extensión (actualmente no hay nocturno al campus), tanto para estudiantes que viven en las residencias como para garantizar cursadas, seminarios y posgrados que son habituales los fines de semana. Proponemos que <strong>la línea 504 - Verde llegue al campus</strong> para ampliar la conexión del transporte con la Universidad, estableciendo la misma como cabecera de la mayoría de las líneas de la ciudad. Esto permitirá una mayor conexión de los barrios más cercanos al campus como de la Universidad Barrial, dependencia de la universidad que tiene que combinar boleto para cubrir las cuadras que la separan con el campus.</div>
                    <div className={style.text}>Finalmente introducir el <strong>Boleto Combinado Tandil (BCT)</strong> es una política de equidad que potencia los programas ya existentes para los boletos subsidiados del PAMPAM y la PASE ya que elimina el sobre-boleto que tienen que pagar los usuarios que forman parte de estos programas. Estos usuarios <strong>en el caso de que combinen únicamente pagarán el boleto del primer colectivo</strong>. A su vez se busca <strong>extender el tiempo de combinación de 45 minutos a una hora</strong> en todos los casos del boleto combinado, esto permitirá integrar de una mejor manera las frecuencias que tengan horarios más espaciados.</div>
                    <div className={style.text}>Se entiende que si algunos recorridos actuales no garantizan la llegada de un punto a otro de la ciudad, esta deficiencia no puede quedar a cargo de los usuarios y usuarias. Sobre todo, cuando hablamos de los sectores de la economía popular y de menos recursos.</div>
                    <div className={style.text}>Para quienes se desempeñan en relación de dependencia por ejemplo, y concurren diariamente a su trabajo, la figura comercial de inclusión es <strong>Abono Transporte Tandil</strong>. Idea que acompañamos como superadora del viejo  Boleto Obrero, que es un acierto de este pliego y nos parece complementaria de los atributos sociales de la SUBE.</div>
                    <div className={style.text}>Otra modificación importante para los trabajadores de la ciudad es la <strong>ampliación del horario nocturno de domingo a jueves hasta las 24:00 hs y viernes y sábado hasta la 01:00 de la mañana</strong>. Creemos que esta ampliación es un reclamo histórico de trabajadores con jornadas que se extienden hasta la nocturnidad, sobre todo los vinculados al sector gastronómico. También es una demanda que se da en sintonía con el crecimiento natural de la ciudad,  y el turismo, que implicó una ampliación de la variada oferta nocturna. Sumado a esto proponemos que se puedan ampliar las frecuencias en los horarios de salida escolares para evitar la congestión de los micros y garantizar un seguro tránsito de estudiantes y padres.</div>

                    <div id='Calidad, Seguridad y Sustentabilidad' className={style.subtitle}>3. Calidad, Seguridad y Sustentabilidad</div>
                    <div className={style.text}>El TPP  debe perseguir el objetivo de la sustentabilidad, donde la rentabilidad es complementaria de  su objetivo de garantizar el derecho a la ciudad, a la movilidad, la educación, salud, etc. No desestimamos que el servicio tiene que tener los márgenes suficientes para poder reinvertir, mejorar y ser atractivo para las concesionarias. Para esto, nuestro enfoque es que <strong>la calidad sea una apuesta a generar masividad</strong>. En los puntos anteriores planteamos que una visión central para diseñar el sistema es que sea elaborado primordialmente con la visión de los usuarios, cuestión que abona a la masividad del servicio, así como planteamos que se debe garantizar un servicio equitativo que cubra las diferentes demandas sociales con los aportes del Estado.</div>
                    <div className={style.text}><em>Garantizar la calidad del servicio tiene que ser prioritario</em>, por lo que parte de eso tiene que ser mejorar la seguridad y condiciones en la cual se brinda el mismo. En este sentido incorporamos que <strong>las empresas tienen que realizar las capacitaciones que sean solicitadas por el Municipio</strong>, particularmente impulsamos la <strong>capacitación en materia de género para el personal de las empresas</strong>, que les permita abordar situaciones de violencia y transformar prácticas vinculadas a esta temática.</div>
                    <div className={style.text}>Por otro lado proponemos <strong>la clara señalización de las paradas</strong> mediante una identificación que marque qué línea y cuales recorridos pasan por esa parada, a la vez que <strong>cada cierta cantidad de paradas haya cartelería obligatoria</strong> que detalle el recorrido de la línea.</div>
                    <div className={style.text}>Complementario a lo anterior, desde el poder concedente se deben garantizar <strong>garitas - refugios  que de manera progresiva cubran la totalidad de las paradas</strong>, para que no sea una complicación esperar el micro los días de lluvia, frío intenso, en la oscuridad u otras inclemencias del tiempo y dureza meteorológica características de nuestra ciudad. Para que de esta manera la población  sepa que cada cierta cantidad de cuadras hay un espacio seguro, mantenido e iluminado para esperar. Esto es importante para brindar un servicio de calidad.</div>
                    <div className={style.text}>Sumado a este fortalecimiento del TPP proponemos sumar progresivamente carriles exclusivos. La creación de una red vial del transporte público  es clave para el fortalecimiento del sistema y aumentar el IPK. Significa valorar la función social que este cumple.</div>
                    <div className={style.text}>Un punto central tiene que ser también la <strong>accesibilidad</strong>. En este sentido proponemos que <strong>la adaptación de los transportes existentes sumado a la incorporación de nuevas unidades ya adaptadas sea al ritmo de una por línea y por año.</strong></div>

                    <div id='Ordenador Urbano y Ecológico' className={style.subtitle}>4. Ordenador Urbano y Ecológico</div>
                    <div className={style.text}>El último punto es poner a consideración el rol de ordenador urbano y del tránsito que tiene el TPP lo que <strong>puede aportar a mejorar dos problemáticas emergentes de la ciudad: Ambiente y Tránsito</strong>. Este último se ve agravado por el crecimiento del parque automotor en los últimos años, además de las problemáticas de educación vial y siniestralidad que atraviesan la ciudad. Sin embargo un mayor uso del TPP permitiría menos congestiones de tránsito y circulación en vehículos privados que redundaría en menos siniestros. Por otro lado, la utilización de medios de transporte masivos y menos vehículos privados reduce el consumo de combustibles y emisiones. Una constante <strong>campaña de concientización compartida por el Estado y las Empresas para fomentar el uso del micro en detrimento del transporte privado</strong> aportaría a concebir el aporte del TPP en este sentido.</div>
                    <div className={style.text}>Finalmente proponemos la <strong>aplicación e integración del subsistema de transporte público de bicicletas (TPB) con el transporte público de pasajeros (TPP)</strong>. Este subsistema ha sido largamente demorado desde la sanción de la Ordenanza 14.710 que impulsaba dentro del sistema SUMO el servicio de bicicletas públicas. Por eso, proponemos que el Municipio adopte la incorporación de estaciones automatizadas año a año,   para su puesta en marcha y promover el uso de la bicicleta como práctica saludable y complementaria del TPP.</div>
                </div>
                <Index points={points} />
            </div>
        </div>
    )
}