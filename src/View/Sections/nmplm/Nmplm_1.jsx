import style from '../Section.module.css'
import NmplmBanner from '../../../Components/NmplmBanner/NmplmBanner'

export default function Section({ handleSections }) {
    return (
        <div>
            <div className={style.container}>
                <NmplmBanner handleSections={handleSections} />
                <br />
                <img src="NMPLM2_1.png" alt="NMPLM2_1" className={style.nmplmImage} />
                <div className={style.articleContainer}>
                    <div className={style.nmplm_text_strong}>"El futuro ya llegó, llegó como vos no lo esperabas, todo un palo, ya lo ves”</div>
                    <div className={style.nmplm_text_strong}>Patricio Rey</div>
                    <br />
                    <div className={style.nmplm_title_2}>Desvalorización del trabajo, poder cognitivo y endeudamiento en el mundo actual</div>
                    <br />
                    <br />
                    <img src="NMPLM2_2.png" alt="NMPLM2_2" className={style.image} />
                    <br />
                    <br />
                    <div className={style.text}>CARACTERIZACIÓN</div>
                    <div className={style.text}><strong>DESVALORIZACIÓN DEL TRABAJO</strong></div>
                    <div className={style.text}>
                        Vivimos en un contexto de predominancia de lo inmaterial, esto es, el dominio del alma sin cuerpo de la tecnología, en forma de software. Esto se denomina industria 4.0, que tiene que ver con algo más complejo que introducir internet en un proceso industrial. No se trata solo de robótica, sino de tres tecnologías simultáneas: la difusión de internet en la producción, la aparición de plataformas y el desarrollo de algoritmos. De esta manera se integran objetos con internet (Internet de las cosas), se extraen datos de esa interacción y se automatizan más y más las funciones.
                    </div>
                    <div className={style.text}>
                        La industria 1.0, o primer revolución industrial, surgió en 1784 con la máquina vapor de tela, la 2.0 en 1870 con la primera cinta transportadora eléctrica en los mataderos de Cincinnati, y la 3.0 en 1960 con el controlador lógico modicon en usa (automatización industrial).
                    </div>
                    <div className={style.text}>
                        Las primeras revoluciones industriales, la 1.0 y 2.0, se definen por una fuente de energía: el vapor y la electricidad, aunque la segunda agrega un proceso productivo que es la cadena de montaje, y 3.0, que es la automatización. Un ejemplo de esta última, en 1978 General Motors instaló el primer robot industrial para tareas de soldadura y ensamblaje.
                    </div>
                    <div className={style.text}>
                        De estas 4 etapas capitalistas, la 1.0, se produce por la proletarización de miles de campesinos por privatización de los campos comunes en el siglo 16 y 17, y la apertura del mercado textil de la India y América, fue el paralelo a la Revolución Francesa que ocurrió al mismo tiempo.
                    </div>
                    <div className={style.text}>
                        La industria 2.0, se detonó por la crisis de 1873, la primera depresión moderna. Muchos países empezaron a pensar cómo proteger sus economías. Esta fue la sociedad industrial que conocemos, con la cuadrícula corporativa de grandes empresas monopólicas, sindicatos y estado de bienestar. La mayoría del mundo se organizó de esa manera, y la otra mitad, el comunismo, se organizó de manera similar, pero sin propiedad individual o propiedad privada.
                    </div>
                    <div className={style.text}>
                        Luego, la 3.0 la originan técnicos del periodo anterior, los creadores son exfuncionarios del departamento de guerra durante la Segunda Guerra Mundial de Estados Unidos en la costa oeste. Empiezan con la incorporación tecnológica a la producción y esbozos de emprendedurismo. También se combina con la contracultura joven estadounidense y el repudio a la organización fordista de la vida, influidos por el Mayo Francés. Ya se veía, a partir del año 73, la crisis del petróleo, la inflación, las huelgas y las tomas de fábricas características de esa época. Primero, Reagan y Thatcher aplicaron el modelo neoliberal en el mundo, y después se consolidó con el neoliberalismo progresista de Bill Clinton y Tony Blair.
                    </div>
                    <div className={style.text}>
                        El punto de partida de este punto de inflexión es el surgimiento de la ideología californiana de la incorporación tecnológica a la producción, la aparición de los garajes emprendedores y las diferentes crisis de la sociedad industrial.
                    </div>
                    <div className={style.text}>
                        Posteriormente el capitalismo 4.0 nace luego del derribo de las torres gemelas: Las grandes empresas tecnológicas se incorporan en articulación con el distintos gobiernos para la transformación global en seguridad y vigilancia desde 3 aspectos: internet para controlar a personas y objetos, la plataforma para bajar costos y start up (empresas tecnológicas) para absorber capitales. Todo esto se combina en un proceso económico con; malestar del trabajo, el fin de la igualdad, y el estancamiento del mundo.
                    </div>
                    <div className={style.text}>
                        Entre la revolución 3.0 y la 4.0 se conjugan dos aspectos que golpean a la organización obrera. La atomización espacial que significa que los empleos no se dan en el mismo lugar físico ni en el mismo tiempo determinado y las nuevas formas de comunicación que aíslan más a los sujetos: crece el desempleo y también el sobre empleo para llegar a fin de mes.
                    </div>
                    <div className={style.text}>
                        Con respecto al malestar del trabajo, podemos destacar la destrucción de empleos que trae aparejado la tecnología, aunque sobreviven algunos trabajos creativos, afectivos y físicos de baja calificación. Lo cual no desaparece el trabajo, más bien lo polariza, entre de baja y alta remuneración. Las nuevas condiciones de trabajo son frágiles e inestables como la precarización de la economía colaborativa como pedidos ya, Uber o Airbnb. Y aunque da mayor autonomía y tiempo libre, el salario ya no es estable, ni hay seguro de salud, ni jubilaciones, ni seguridad social. El trabajador intermedio, como el oficialista, será reemplazado por un algoritmo, y se mantendrán algunos otros trabajos, como el albañil y la mucama en negro.
                    </div>
                    <div className={style.text}>
                        Todo esto ha generado en nuestras sociedades un cuadrilátero de envidia: una élite creativa y bien remunerada, el administrativo con pocas funciones, el obrero hábil y mal pago, y el "planero" que se miran con recelo y votan en consecuencia.
                    </div>
                    <div className={style.text}>
                        A mitad de siglo se suponía que con la sociedad industrial, la igualdad iba a ser un hecho en el mundo. Pero actualmente hay una disparidad muy grande. Sólo crecen los sueldos gerenciales. Hubo una migración no del campo a la ciudad, como en su momento, sino de la industria a la economía de servicios.
                    </div>
                    <div className={style.text}>
                        Las instituciones de la sociedad industrial ya no cumplen el rol igualador en la actualidad y hay una concentración del capital, el ahorro, la inversión, la herencia, y las rentas inmobiliarias y financieras.
                    </div>
                    <div className={style.text}>
                        En la mitad del siglo, en la sociedad industrial, se logró generar una economía más igualitaria después de un siglo de explotación, pero recién a partir de la destrucción de capital que causaron las dos grandes guerras, lo que implicó el avance de la economía proteccionista de los países.
                    </div>
                    <div className={style.text}>
                        Otra característica actual es el estancamiento económico mundial. Le podríamos agregar a esto que ya se ha usado más de la mitad del petróleo en el mundo y los demás recursos naturales no renovables, sumado al calentamiento global.
                    </div>
                    <div className={style.text}>
                        En los años ochenta, una característica fue la deslocalización, es decir, generar cadenas globales de valor. Actualmente, las casas matrices han decidido replegar su producción porque es más económico producir con robots que con trabajadores del tercer mundo. Y porque sus países, también así lo demandan, la victoria de Trump da cuenta de eso.
                    </div>
                    <div className={style.text}>
                        Latinoamérica, en este contexto, no aprovechó los quince años de buenos precios internacionales. Si bien se logró distribuir y tener políticas distributivas, no se logró avanzar en la tecnificación y en la industrialización como se hicieron los países asiáticos. Nuestra América solamente se recostó sobre sus ventajas comparativas.
                    </div>
                    <div className={style.text}>
                        No podemos seguir confiando en la reserva de trabajadores baratos y recursos naturales para nuestros países.
                    </div>
                    <br />
                    <img src="NMPLM2_2.png" alt="NMPLM2_2" className={style.image} />
                    <br />
                    <br />
                    <div className={style.text}><strong>PODER COGNITIVO </strong></div>
                    <div className={style.text}>
                        En un contexto económico de deterioro que trae esta nueva etapa del capitalismo 4.0, es común que la mayoría sienta ansiedad, depresión y falta de esperanza por las condiciones de empleo terriblemente tenues. También, que se haya logrado persuadir a tantos trabajadores de que se acepte este deterioro y que se asume como natural. Esto ha generado una privatización del estrés. Margaret Tacher dijo que no había alternativa en la implementación del neoliberalismo y desde entonces se lo quiere instalar como el único sistema posible. Esto, entre otras cosas, ha llevado a que muchos movimientos populares y de izquierda no supieran o no pudieran dar respuesta a una consecuencia, que es la desintegración de la vieja base de poder industrial de los trabajadores.
                    </div>
                    <div className={style.text}>
                        El avance de la globalización cambió manufacturas por la computarización, sumando la precarización del trabajo y la intensificación de la cultura del consumo. Muchas fuerzas populares corren el riesgo de desaparecer en la medida que permanezca pegada a los supuestos del viejo mundo declinante, no entiendan el nuevo mundo post laboral.
                    </div>
                    <div className={style.text}>
                        Se debe empujar en ese nuevo tablero más que construir una versión mitigada del despliegue neoliberal. Muchos cuadros políticos han sucumbido/ traicionado, ante una forma colectiva de depresión clínica, déficit motivacional e incapacidad de actuar.
                    </div>
                    <div className={style.text}>
                        Hay una descomposición de la colectividad y un avance del juego de la competencia individualista, forzando a los trabajadores al compromiso del llamado desarrollo profesional continuo para poder obtener empleo. En el cual el trabajador debe estar siempre disponible en el marco de la aceleración en el intercambio de información que ya no pueden procesar conscientemente.
                    </div>
                    <div className={style.text}>
                        Es que una de las consecuencias tecnológicas es que no se cuenta con un espacio externo en el que uno pueda descansar y recuperarse de ellas, porque el trabajo ya no se limita a un lugar o un horario. El vínculo con la tecnología es permanente y lo paradójico es que esto no se experimenta necesariamente como algo displacentero. Ya ni siquiera puede un trabajador ir de vacaciones sin llevarse la oficina a cuestas.
                    </div>
                    <div className={style.text}>
                        El capital actual enferma al trabajador, y le vende las drogas para que se sienta mejor. Las causas sociales y políticas del estrés quedan de lado y el descontento se individualiza e interioriza. Se deja de lado las raíces sociales de la infelicidad, como el individualismo competitivo y la desigualdad y la injusta distribución del ingreso.
                    </div>
                    <div className={style.text}>
                        Claramente, los vínculos en nuestra historia con la felicidad están asociados y se logran con la participación comunitaria, pública, política en la sociedad, el fortalecimiento de los lazos sociales y claramente con la distribución del ingreso. Por otro lado, el neoliberalismo ofrece la autorrealización que llaman igualdad de oportunidades.
                    </div>
                    <div className={style.text}>
                        Se ha despolitizado de manera planificada el estrés y se trabaja en ejes de autoayuda tratando de convencer al individuo de que es dueño de su propio destino, sin tener en cuenta el contexto.
                    </div>
                    <div className={style.text}>
                        La privatización del estrés tiene que ver con la destrucción del concepto de lo público, de lo común, de lo comunitario, de lo político. Debemos vincular la salud mental al problema de recuperar lo público, lo común, el destino colectivo de la sociedad.
                    </div>
                    <div className={style.text}>
                        Mientras todo esto pasa, emerge una especie de autonomismo de derecha llamado a restituir las viejas tradiciones. El neoliberalismo captó el deseo de los trabajadores convenciendo de liberarse de las restricciones del capitalismo industrial, cambiándolo por el consumismo individualista miserable al que nos han llevado.
                    </div>
                    <div className={style.text}>
                        No necesitamos volver a las formaciones sociales que ya han fracasado. Tenemos que reconstruir la esfera política, pública, comunitaria, democrática.
                    </div>
                    <div className={style.text}>
                        Las recientes irrupciones de militancias de distintos sectores juveniles, feministas, ambientalistas, sociales y las explosiones de rabia pública y colectiva son un camino a seguir. Contra las numerosas patologías con las que se nos inocula el capitalismo comunicativo.
                    </div>
                    <div className={style.text}>
                        La precarización del trabajo, la intensificación de la cultura del consumo, los mecanismos de control social, la gerencialización de la política, la mercantilización de la educación, generan el aumento de los padecimientos mentales orientados a bloquear toda capacidad colectiva de transformación.
                    </div>
                    <br />
                    <img src="NMPLM2_2.png" alt="NMPLM2_2" className={style.image} />
                    <br />
                    <br />
                    <div className={style.text}><strong>ENDEUDAMIENTO</strong></div>
                    <div className={style.text}>
                        Los mecanismos de deuda y endeudamiento de países y personas, son un esquema de transferencia de recursos de la población a los acreedores, un poderoso mecanismo de explotación. El crédito es un instrumento de explotación que se apropia del trabajo, captura plusvalía. Los propietarios del capital se transforman en capitalistas financieros o rentistas. La especulación financiera o la acumulación financiera está imbricada con la propiedad privada y el patrimonio en esta etapa del capitalismo. El capital financiero asume la tarea de capitalista colectivo. Las compañías financieras, de seguros y las inmobiliarias ocupan la mayoría de la facturación en el mundo capitalista actual. Por ejemplo, las industrias automotrices tienen su propio mecanismo de crédito dirigido al consumo.
                    </div>
                    <div className={style.text}>
                        La relación entre propietario y no propietario de capital o la relación de fuerzas de las fuerzas fundadas en la propiedad es la misma relación de acreedor - deudor. Es una relación de poder. Por eso hablamos de economía de la deuda. La deuda de los países es lo mismo que el recorte de las políticas sociales y el ajuste. Es quien determina los recortes presupuestarios. No es que hay una economía virtual y otra economía real. Hay una relación de poder entre acreedores y deudores que es la misma relación que de propietarios y no propietarios. La relación de poder entre acreedores y deudores es el núcleo estratégico de las políticas neoliberales.
                    </div>
                    <div className={style.text}>
                        El avance del capital financiero encontró lugar con el déficit público de finales de los setenta, (Nacimiento del capitalismo 3.0) que abrió la puerta a la economía de la deuda. Se aumentó la tasa de interés pasando del nueve al veinte por ciento y se generaron endeudamiento acumulativo de los estados como deuda pública y de los países que es la deuda externa. Y esto profundizó el programa político neoliberal.
                    </div>
                    <div className={style.text}>
                        El otrora estado benefactor, o sea, las jubilaciones, las vacaciones y los servicios sociales que las luchas sociales arrancaron la acumulación capitalista décadas atrás están siendo totalmente erosionadas por los mecanismos de deuda. Además, que se avanza en la privatización de los servicios del estado benefactor. Las privatizaciones de estas políticas sociales han generado la individualización de la política social y hacen de la protección social una función empresarial. La deuda actúa como una depredación contra la sociedad en su conjunto y como un dispositivo de redistribución regresiva a los ingresos, pero sobre todo actúa sobre las subjetividades colectivas individuales. Se transforma el dinero en deuda y la deuda en propiedad. En las últimas décadas se ha pasado de la regulación fordista industrial que privilegió al polo productivo a una regulación financiera que pone en primer plano al polo financiero y acreedor. Hoy en día la relación acreedor - deuda se superpone a la relación capital trabajo. Esto genera una subjetividad de la culpa en la mayoría de los trabajadores. Es la captación de plusvalía por otros medios.
                    </div>
                    <div className={style.text}>
                        La deuda es una relación de poder universal, aún quienes son demasiados pobres deben pagar los intereses de los países acreedores ante la necesidad de reembolsar la deuda pública. Todos estamos en deuda con el Dios capital. Esto modela la subjetividad de las naciones y de los pueblos.
                    </div>
                    <div className={style.text}>
                        En la actualidad, hablamos de crisis financiera, de crisis nuclear, de crisis alimentaria, de crisis climática, pero las crisis dan cuenta de que también puede haber una oportunidad que las resuelva, en este caso estamos en un punto de inflexión. Más bien esta crisis del capitalismo se parece a una catástrofe sin resolución. El capital produce un poder nuclear militar capaz de destruir varios planetas a la vez, multiplica la fabricación de bienes de consumo y decuplica la contaminación del agua, el aire, el suelo y descompone el clima la productividad agrícola y al mismo tiempo que nos alimenta nos envenena. A su vez, el capitalismo cognitivo destruye el sistema público de formación en todos los niveles, el capitalismo cultural produce conformismo que no tiene igual en la historia de la sociedad, donde la imagen neutraliza toda imaginación. Por eso hablamos de dispositivos de anti producción como forma inseparable del capitalismo actual.
                    </div>
                    <div className={style.text}>
                        A partir de ahora tenemos que reactivar la lucha, incluso en este terreno obstaculizado y desterritorializado. Buscando nuevas solidaridades, alianzas entre lo económico, lo político y lo social para enfrentar este capitalismo financiero destructivo.
                    </div>
                    <br />
                    <div className={style.text}><strong>LECTURA COMPLEMENTARIA:</strong></div>
                    <ul className={style.list}>
                        <li>¿POR QUÉ EL CAPITALISMO PUEDE SOÑAR Y NOSOTROS NO? De Alejandro Galliano.</li>
                        <li>LA PRIVATIZACIÓN DEL ESTRÉS. De Mark Fisher.</li>
                        <li>LA FÁBRICA DEL HOMBRE ENDEUDADO. De Mauricio Lazzarato.</li>
                    </ul>
                    <br />
                    <br />
                    <br />
                </div>
            </div>
        </div>
    )
}