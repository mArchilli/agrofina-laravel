<?php

namespace Database\Seeders;

use App\Models\Novedad;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Termwind\Components\Raw;

class NovedadSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        #region Novedad 1: Agrofina, presente en el Evento de Sustentabilidad de Los Grobo, en Carlos Casares (BA)
        Novedad::create([
            'titulo' => 'Agrofina, presente en el Evento de Sustentabilidad de Los Grobo, en Carlos Casares (BA)',
            'texto' => '<p>Con el objetivo de mostrar las prácticas sustentables en relación al Día del Medio Ambiente, Grupo Los Grobo/Agrofina llevó a cabo la Jornada de Prácticas sustentables en la agricultura de hoy y mañana en Carlos Casares.</p>
            <p>La idea no fue solo dar a conocer las Buenas Prácticas agrícolas en el campo sino también mostrar en términos de sustentabilidad lo que se hace internamente como empresa.</p>
            
            <p>De la mano de Hugo March pudimos compartir algunas muestras sobre la calidad de nuestras formulaciones con el objetivo de demostrar que la sustentabilidad está presente en la síntesis y formulación de nuestros productos. Nos acompañó Agrícola Testa y compartió información sobre cómo ser sustentables también en el proceso de aplicación.</p>
            
            <p>De igual modo, Campo Limpio también participó hablando sobre manejo de envases vacíos y cómo lograr tener mayor disposición final de los envases. Una empresa comprometida con la sustentabilidad cuida a la naturaleza, pero también se preocupa por generar un equilibrio y darle valor a sus empleados, socios estratégicos, productores y la sociedad en general. Ese es nuestro objetivo.</p>
            <br>
            ><p>¡Gracias Carlos e Ignacio Testa y Leandro Brambilla por acompañarnos! ¡Hasta la próxima!</p>',
            'imagenes' => [
                [
                    'nombre' => 'Agrofina en Evento de Sustentabilidad',
                    'path' => '/images/novedades/agrofina-novedad-13-6-23.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2023, 6, 13),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 2: Agrofina, presente en el último Congreso Argentino de Malezas
        Novedad::create([
            'titulo' => 'Agrofina, presente en el último Congreso Argentino de Malezas',
            'texto' => '<p>Los días 14 y 15 de septiembre estuvimos presentes en el IV Congreso Argentino de Malezas de la ASACIM en el Hotel Sheraton de Mar del Plata.</p>
            <p>Participamos con nuestro Stand donde los visitantes pudieron sacarse una foto como Hilario y Hortensia, nuestros protagonistas de la campaña digital de productos en Redes Sociales. ¡Todos participaron por premios exclusivos de Agrofina!. Los ganadores del sorteo fueron: Gabriel Picapietra y Victoria Buratovich</p>
            <p>Además, participamos en las siguientes charlas:</p>

            <p>– Sustentabilidad desde el desarrollo de las formulaciones. <strong>Hugo March</strong></p>
            <p>– Origen de la versión sustentable del lactofen. <strong>Héctor Di Loreto</strong></p>',
            'imagenes' => [
                [
                    'nombre' => 'Agrofina en Ultimo Congreso Argentino de Malezas',
                    'path' => '/images/novedades/agrofina-novedad-16-9-23.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2023, 9, 16),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 3: Agrofina, presente en la edición 2023 del ya tradicional Congreso Maizar
        Novedad::create([
            'titulo' => 'Agrofina, presente en la edición 2023 del ya tradicional Congreso Maizar',
            'texto' => '<p>Un evento importante para conocer lo que se viene en la próxima campaña de Maíz. Además, siempre es un espacio más que bienvenido para reencontrarnos con colegas y clientes.</p>

            <p>El 31 de mayo pasado estuvimos acompañando el Congreso Maizar 2023 en el Goldencenter de la Ciudad de Buenos Aires, con el objetivo de sumarnos a los conceptos de Bioeconomía que requiere de múltiples actores y una construcción interactiva para el crecimiento de una economía rica e inclusiva.</p>',
            'imagenes' => [
                [
                    'nombre' => 'Agrofina en Congreso Maizar 2023',
                    'path' => '/images/novedades/agrofina-novedad-maizar.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2023, 6, 13),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 4: Agrofina, presente en la última edición de la Jornada Nacional de Maní
        Novedad::create([
            'titulo' => 'Agrofina, presente en la última edición de la Jornada Nacional de Maní',
            'texto' => '<p>El 21 de septiembre estuvimos presentes en la XXXVIII Jornada Nacional del Maní y le agradecemos a nuestro equipo por la presencia y a todo el público presente por su apoyo.</p>

            <p>El tema de nuestra exposición fue: “Evaluación de la eficacia de la mezcla racemica <i>(rs)-lactofen y del isomero (s)-lactofen sobre amaranthus palmeri.</i>”</p>

            <p>Disertante: <strong>Ing. Agr. Lisandro Guerrieri, Gerente de Desarrollo y Servicio Técnico de Agrofina.</strong></p>',
            'imagenes' => [
                [
                    'nombre' => 'Agrofina en Jornada Nacional del Maní',
                    'path' => '/images/novedades/agrofina-novedad-25-9-23.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2023, 9, 25),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 5: Agrofina, presente en el Congreso de Distribuidores del Agro (CDA)
        Novedad::create([
            'titulo' => 'Agrofina, presente en el Congreso de Distribuidores del Agro (CDA)',
            'texto' => '<p>Fuimos parte de la segunda edición del “CDA” bajo el lema: El canal le habla al canal. Tuvimos la oportunidad de recibir a amigos, clientes y proveedores en nuestro stand.</p>

            <p>También participamos de charlas que nos dejaron mensajes inspiradores y llenos de energía para seguir brindando herramientas a los productores y con el apoyo de nuestra Red de Distribución, partners fundamentales en nuestra propuesta comercial.</p>
            <p> Felicitaciones al Equipo organizador del Congreso (link a url: <a target="_blank" style="color: #22c55e;" href="https://www.instagram.com/cda_canal_distribucion_agro/">https://www.instagram.com/cda_canal_distribucion_agro/</a>) y muy especialmente a Luis Mogni.</p>

            <p>¡Hasta el próximo CDA!</p>',
            'imagenes' => [
                [
                    'nombre' => 'Agrofina en Congreso de Distribuidores del Agro (CDA)',
                    'path' => '/images/novedades/agrofina-novedad-26-4-24.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2024, 4, 26),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 6: Anticipando el manejo fitosanitario de la Soja con nuevos productos; con L. Sifreddi y L. Guerrieri
        Novedad::create([
            'titulo' => 'Anticipando el manejo fitosanitario de la Soja con nuevos productos; con L. Sifreddi y L. Guerrieri',
            'texto' => '<p>Una conversación orientada al cultivo de Soja y su protección fitosanitaria, sobre la base de la llegada de El Niño. En Agrositio.</p>

            <p>No te pierdas la conversación que tuvieron Luis Siffredi y Lisandro Guerrieri en el canal AgroSitio, donde contaron las novedades en protección fitosanitaria para la soja, el impacto de El Niño en los cultivos y los últimos lanzamientos de los productos de Agrofina.</p>
            <br>
            <p>Mirá el video completo: </p>
            <br>
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
                <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/_PXRc3rMhyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>',
            'imagenes' => [
                [
                    'nombre' => 'Anticipando el manejo fitosanitario de la Soja',
                    'path' => '/images/novedades/agrofina-novedad-20-10-25.png'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2025, 10, 20),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 7: Grupo Los Grobo presentó su Reporte de Sustentabilidad 2022-2023
        Novedad::create([
            'titulo' => 'Grupo Los Grobo presentó su Reporte de Sustentabilidad 2022-2023',
            'texto' => '<p>Con mucho orgullo presentamos una nueva edición del Reporte de Sustentabilidad de Grupo Los Grobo que refleja nuestra trayectoria de casi 40 años en la industria de los agronegocios.</p>
            <p>En este último ejercicio, afianzamos nuestro compromiso con la sustentabilidad a través de la adhesión a las iniciativas de Pacto Global y los Principios para el Empoderamiento de las Mujeres (WEPs), ambas promovidas por Naciones Unidas.</p>
            <div style="text-align: center; margin: 20px 0;">
                <a href="/PDFs/novedades/Los Grobo - Reporte Sustentabilidad 2022-2023.pdf" download class="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200" style="background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600;">REPORTE PERIODO 2022 - 2023 DE GRUPO LOS GROBO</a>
            </div>
            <p>La estrategia de sustentabilidad que aplicamos se basa en 4 pilares:</p>
            <ul>
                <li>Agricultura sostenible.</li>
                <li>Conciencia sustentable en el uso de los recursos.</li>
                <li>Nuestras personas.</li>
                <li>Nuestra comunidad.</li>
            </ul>
            <br>
            <p>Todo es posible GRACIAS al esfuerzo diario de las personas que forman parte del Grupo.</p>
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
                <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/YSso3c9dn2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            ',
            'imagenes' => [
                [
                    'nombre' => 'Grupo Los Grobo Reporte de Sustentabilidad 2022-2023',
                    'path' => '/images/novedades/agrofina-novedad-13-3-24.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2024, 3, 13),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 8: Información Relevante Respecto al Concurso Preventivo de Acreedores
        Novedad::create([
            'titulo' => 'Información Relevante Respecto al Concurso Preventivo de Acreedores',
            'texto' => '<p>Poder Judicial de la Nación JUZGADO COMERCIAL 12</p>
            <p>EDICTO BOLETIN OFICIAL</p>
            <br>
            <p>El Juzg. Nac. de 1ra. Instancia en lo Comercial N°12 a cargo del Dr. Hernán D. Papa, Sec. N° 24 a cargo del Dr. Ricardo Daniel Zmuda, sito en M. T. de Alvear 1840 PB, CABA, hace saber por cinco días en los autos “AGROFINA S.A. s/CONCURSO PREVENTIVO” Expte. Nro. 151/2025 con fecha 03.02.2025 se presentó en concurso preventivo AGROFINA S.A., CUIT 30-59272454-1, con domicilio en Suipacha 1.111 piso 18° de la CABA, habiéndose producido su apertura el 20.02.2025, fijándose el siguiente cronograma: hasta el 24.06.2025 podrán los acreedores con asistencia letrada ingresar digitalmente sus insinuaciones junto con toda la documentación respaldatoria en el “INCIDENTE DE INSINUACION DE CREDITOS EN LOS TERMINOS DEL ART. 32, LEY 24.522” (Nro. 151/2025/1), a cuyo fin deberán dar estricto cumplimiento a lo dispuesto con fecha 20.02.2025 a lo que se remite (v. pto. IV ap. “J 2°”).</p>
            <br>
            <p>En tal incidente deberán también formularse digitalmente las observaciones a que alude el art. 34 LCQ y sus contestaciones, según lo autorizado en dicho decisorio. El arancel previsto por el artículo 32 LCQ deberá abonarse por transferencia a la Caja de Ahorros en $ del BANCO GALICIA MÁS, Nro. De cuenta: 616-6-09374-4, CBU: 1500616700061660937446 y Alias: PALOMA.LODO.PERU de titularidad de José Escandell y otros, CUIT 20-93390304-5. A los fines de presentar su solicitud en formato papel los acreedores que no cuenten con asistencia letrada deberán solicitar turno a la sindicatura ESTUDIO ESCANDELL – LOPEZ CEPERO -con domicilio en Tte. Gral. Perón 1509 Piso 9°, CABA y tel.+54 011-44018375, mediante email a notif.judiciales@estudioehq.com.ar.</p>
            <br>
            <p>A tal fin, deberán dar estricto cumplimiento a las pautas fijadas en el pto. IV ap. “J 2°” del decisorio de fecha 20.02.2025 a lo que se remite. El síndico presentará los informes que disponen los arts. 35 y 39 LCQ los días 12.09.2025 y 06.03.2026 -respectivamente-. La fecha para dictar el auto verificatorio vence el 20.11.2025. La audiencia informativa se llevará a cabo el 27.08.2026 a las 10 hs., en la sala de audiencias del tribunal. Buenos Aires, 06 de marzo de 2025.</p>
            <br>
            <p>RICARDO DANIEL ZMUDA SECRETARIO</p>
            <div style="text-align: left; margin: 20px 0;">
                <a href="/PDFs/novedades/agrofina-boletin-oficial.pdf" download class="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200" style="background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600;">Descargar edicto PDF</a>
            </div>
            ',
            'imagenes' => [
                [
                    'nombre' => 'Agrofina Boletín Oficial',
                    'path' => '/images/novedades/agrofina-novedad-26-3-25.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2025, 3, 26),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 9: Innovación, compromiso y generación de empleo: una empresa del agro camina firme rumbo al medio siglo de vida
        Novedad::create([
            'titulo' => 'Innovación, compromiso y generación de empleo: una empresa del agro camina firme rumbo al medio siglo de vida',
            'texto' => '<p>Agrofina nació hace 45 años y posee una importante planta de síntesis y formulación en Zárate, en el norte bonaerense. Por Infocampo.</p>
            <p>Cuando promediaba la década del 90’, de la mano de la siembra directa llegó a la Argentina una revolución productiva para el agro. Los productores agrícolas modificaron su manera de sembrar y con ello una nueva oferta de productos comenzaron a ser verdaderos aliados de la eficiencia.</p>
            <p>En ese camino, Agrofina reimpulsó la producción de sus líneas de trabajo en síntesis y formulaciones y dio un verdadero salto. La enorme planta de producción que la compañía de 45 años de experiencia en la agroindustria argentina posee en el Parque Industrial de Zárate, en Buenos Aires, da cuenta de ello.</p>
            <p>En los primeros días de enero de 2024 un equipo de Infocampo caminó por sus instalaciones y conoció cómo trabajan en una empresa que se destaca por la producción de soluciones para el sector agropecuario.</p>
            <p>De lunes a sábado, en turnos laborales que comienzan a primera hora y finalizan entrada la noche, Agrofina está en movimiento de la mano de más de casi 140 empleados que acuden a diario a su planta zarateña. Se trata de unos 87 operarios de planta y el resto investigadores y analistas de laboratorio, más personal de puestos de conducción.</p>
            <p>“El camino comienza en el año 78’, con un pequeño laboratorio, un “spin-off” de otra empresa en donde básicamente lo que se pretendía era vender servicios de tecnología. El desarrollo de fitosanitarios era un laboratorio que no tenía una planta industrial. Casi dos décadas después, en 1997, se instala la planta en este lugar con una capacidad mucho menor que la actual, aproximadamente una décima parte”, contó Héctor Di Loreto, gerente de Laboratorio de Desarrollo de Agrofina.</p>
            <p>A partir de allí las cosas tomaron otra velocidad. La coincidencia temporal con la llegada de la siembra directa tuvo una correcta lectura de parte de la empresa, sobre la cual se posaron los ojos del Grupo Los Grobo, gran potenciador de su desarrollo actual.</p>
            <p>“Sin embargo esa misma genética continuó a lo largo del tiempo con una planta industrial que nos permitió desarrollar nuestros propios productos que antes hacíamos en plantas de terceros. Ahora contamos con un gran equipo multidisciplinario”, afirmó Di Loreto.</p>
            <p>Fernando Lapis es el gerente de Planta, y comanda la logística de una multiplicidad de factores que son los que generan a diario las producciones de herbicidas, fungicidas, insecticidas, fitorreguladores y coadyuvantes. En 2004 llegó a la compañía y con el tiempo se fue desarrollando a la par del crecimiento de Agrofina.</p>
            <p>“Hemos evolucionado mucho. Originalmente esta planta sintetizaba todas las moléculas que después formulaba y envasaba, mientras que hoy el foco está puesto en sintetizar una cantidad importante de moléculas, y hay otros productos que formulamos a partir de ingredientes activos importados”, detalló Lapis.</p>
            <p>Hoy en día las opciones son producir lo que le llega al productor, o también la generación de los ingredientes activos que luego se procesan en otras plantas. Sin embargo el concepto principal, aseguran, está dado por las ventanas que abre ser una planta “multiproducto”.</p>
            <p>A la hora de la comparación con los estándares de calidad y producción que existen en el Exterior, en Agrofina se sienten tranquilos. La exportación no es una meca a la cual busquen dirigirse en estos tiempos, fundamentalmente por lo desafiante que resulta abastecer a los productores argentinos.</p>
            <p>“Eso se logra con los mismos estándares que tiene cualquier planta del exterior, como seguridad, calidad y procesamiento. O también el ratio de productividad. Porque plantas que hagan síntesis de varios productos como ésta casi que no hay ninguna hoy por hoy”, aseguró Lapis.</p>
            <br>
            <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
                <iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://www.youtube.com/embed/3QGuedIL2RM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div><br>
            <strong>EL MANO A MANO CON EL PRODUCTOR</strong><br>
            <p>La otra faceta de la empresa está en la cercanía que desarrolla para con los productores agropecuarios. Y la persona que lleva los hilos de esa relación y recibe de primera mano las devoluciones del sector primario argentino es Lisandro Guerrieri, el Gerente de Desarrollo Técnico.</p>
            <p>Guerrieri sostuvo que “una de las características que tiene Agrofina es tener productos de muy buena calidad, pero también por el hecho de estar al lado del productor en el momento en que prueba estos productos”.</p>
            <p>“Y además los estamos invitando constantemente a lo que son ensayos de campo de investigación y desarrollo. Todo nuestro portfolio está testeado a campo y siempre estamos buscando que la eficacia sea la máxima”, puntualizó.</p>
            <p>Por eso, en pleno contexto del pasaje de la sequía a los números y probabilidades que acerca el fenómeno del Niño, la eficacia y el control de los costos será una de las claves de los productores.</p>
            <p>Por eso, en esa línea Fernando Lapis graficó la confianza con la que empezaron el nuevo año. “Agrofina viene con una línea muy fuerte de expandirse y de asociarse de manera comprometida con los clientes, darles soluciones y acompañarlos”.</p>
            “Con el clima que se ha modificado en relación a 2023 y con lo que nosotros venimos haciendo, las perspectivas son mucho mejores que las que tuvimos el año pasado”, cerró Lapis. → <a target="_blank" style="color: #22c55e;" href="https://www.infocampo.com.ar/">infocampo.com.ar</a>',
            'imagenes' => [
                [
                    'nombre' => 'Innovación, compromiso y generación de empleo Agrofina',
                    'path' => '/images/novedades/agrofina-novedad-30-1-24.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2024, 1, 30),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 10: Malezas: cómo trabaja la empresa que más ingredientes activos sintetiza en el país
        Novedad::create([
            'titulo' => 'Malezas: cómo trabaja la empresa que más ingredientes activos sintetiza en el país',
            'texto' => '<p>Referentes de Agrofina contaron el trabajo de la compañía en investigación y reflexionaron sobre el momento de la ciencia argentina. Durante el Congreso Argentino de Malezas.</p>
            <p>“Yo empecé con el Conicet trabajando en un tema totalmente distinto al agro, y llegué al campo años después. En ese momento descubrí un mundo fascinante con muchísimas oportunidades”</p>
            <p>Las palabras corresponden a Héctor Di Loreto, investigador, especialista en Química Orgánica de la Universidad de La Plata, donde actualmente sigue siendo docente. Pero también, Di Loreto es el actual gerente de investigación y desarrollo de Agrofina.</p>
            <p>La empresa tuvo presencia en el último Congreso Argentino de Malezas, en Mar del Plata, y el especialista fue uno de los voceros de la firma.</p>
            <p>Acompañado por Hugo March, jefe de desarrollo de formulaciones, dialogó con Infocampo y explicó el momento de la actividad en un contexto en el cual la problemática preocupa al sector.</p>
            <p>“Las empresas que estamos trabajando para el campo tenemos infinitas posibilidades de desarrollarnos, de poder mejorar un activo que tenemos en Argentina, que es nuestra tierra, mejorar los cultivos, mejorar la eficacia y el rendimiento”, afirmó.</p>
            <p>“Es lógico, por ejemplo, que no podamos hacer un uso agrícola de tierras que pertenecen a parques nacionales. Entonces hay que lograr la mayor eficiencia posible con los recursos que tenemos y con una demanda cada vez mayor con una población que crece”, estimó.</p>
            <br>
            <p>EL DESAFÍO DE PRODUCIR MÁS Y FRENAR A LAS MALEZAS</p>
            <p>Según cálculos de organismos oficiales, la industria espera unas 10.000 millones de personas para el 2050 como población mundial. “O antes”, aclaró.</p>
            <p>“Por eso digo que lamentablemente no hay una buena sinergia en la Argentina entre el sistema científico y las universidades. Yo pertenezco todavía a la universidad, soy profesor de la Universidad Nacional de La Plata, y allí hemos intentado hacer muchos convenios entre la industria y la Universidad y el Conicet“, contó.</p>
            <p>Pero aclaró: “Los tiempos son distintos en Argentina: no funciona como en Europa, no funciona como en Estados Unidos, como en otros países en donde la práctica usual es tener convenios entre el sistema científicos y el sistema privado”, ejemplificó.</p>
            <p>Yo necesito un Conicet más ágil. Cuando nació, tenía una gran proporción de investigación básica y una poca cantidad de investigación aplicada, hoy se está tendiendo a igualar”, expresó.</p>
            <br>
            <p>LA INVESTIGACIÓN EN AGROFINA</p>
            <p>Hugo March, por su parte, detalló el trabajo que realizan puertas adentro de la compañía. “El trabajo de laboratorio en investigación y desarrollo es muy bueno para nosotros. Es muy buen ejercicio porque no es rutinario”, contó.</p>
            <p>“Tenemos un vínculo muy continuo con marketing y servicio técnico de la empresa, que son los ingenieros agrónomos que analizan la problemática del campo. Con ellos tenemos reuniones muy seguidas y analizamos la factibilidad de desarrollar productos que ya están en el mercado y los productos nuevos, analizamos la problemática y buscamos soluciones factibles que puedan estar disponibles en un tiempo máximo de cinco años”, explicó.</p>
            <p>Al trabajar con patentes vencidas, la obligatoriedad de la empresa pasa por comenzar el camino del desarrollo mucho antes de que el producto quede “liberado”. Y en ese tiempo se vuelve clave la aprobación del Senasa.</p>
            <p>Agrofina es hoy la la segunda empresa en Argentina que comenzó a sintetizar ingredientes activos. “Pero somos los que más cantidad de ingredientes activos sintetizamos. Tenemos más de 100 ingredientes activos sintetizados y validados”, remarcó.</p>
            <p>En ese camino de prueba y error la factibilidad del producto se vuelve clave a la hora de lanzarlo al mercado.<p>
            <p>“En el laboratorio de desarrollo de formulaciones analizamos cómo se va a vender ese ingrediente activo y ahí es donde le ponemos mucha cabeza, porque es cómo el producto va a interactuar con el blanco al que va a controlar. Entonces tenemos que buscar todos los componentes de esa formulación que mantengan estable al formulado dentro del bidón y que mantengan un caldo de aplicación que sea lo mejor y lo más efectivo posible”, detalló.</p>
            <p>“Los tres están contenidos y vigilados por un sistema de gestión integral porque desde el inicio del desarrollo ya trabajamos en la parte ambiental”, expuso.</p>
            <br>
            <p>EL CONGRESO DE MALEZAS</p>
            <p>Para March “es fundamental estar presente en estos en estos congresos”. “Acá se ve la problemática, se ve lo que va a venir y ahí junto con el equipo técnico, que estamos todos acá, estamos viendo qué aspecto nuevo se puede venir”, indicó.</p>
            <p>Para Di Loreto, “la problemática de las malezas nos viene ganando”. “Si uno ve el progreso de las malezas resistentes las mismas crecen geométricamente y las nuevas tecnologías por momentos no alcanzan. Y hay que hacer uso de las viejas herramientas de los 80’, que en algún momento van a dejar de alcanzar. Es decir que la problemática es cada vez mayor”, apuntó. <a target="_blank" style="color: #22c55e;" href="https://www.infocampo.com.ar/">→ infocampo.com.ar</a></p>
            
            ',
            'imagenes' => [
                [
                    'nombre' => 'Malezas cómo trabaja la empresa Agrofina',
                    'path' => '/images/novedades/agrofina-novedad-3-10-23.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2023, 10, 3),
            'activo' => true,
        ]);
        #endregion

        #region Novedad 11: ¿Quién es Agrofina? La ex Ipesa ahora es una pujante firma de agroquímicos del Grupo Los Grobo
        Novedad::create([
            'titulo' => '¿Quién es Agrofina? La ex Ipesa ahora es una pujante firma de agroquímicos del Grupo Los Grobo',
            'texto' => '<p></p>
            <p>En su ejercicio cerrado en septiembre de 2022, la empresa facturó poco más de 14.300 millones de pesos y obtuvo un resultado operativo de 1.087 millones. En cuanto a su deuda bancaria, según los registros del BCRA, asciende a poco más de 5.870 millones.</p>
            <p>Agrofina es una compañía que opera en el sector agropecuario argentino desde hace 42 años. Perteneciente al Grupo Los Grobo y por tanto, y junto a Los Grobo Agroperuaria, compone un negocio integrado y diversificado que se focaliza en la venta de insumos agrícolas, producción de granos, acopio y comercialización de granos.</p>
            <p>Pero la agroquímica es más antigua que Los Grobo. Los antecedentes de la firma se remontan a 1978, bajo el nombre de Ipesa, fue fundada por capitales brasileños. En aquel entonces comenzó a operar como proveedor de tecnología para la producción de agroquímicos, prestando servicios de desarrollo tecnológico y de investigación en Guatemala y Brasil.</p>
            <p>Luego, a lo largo de la década del 90, comenzó a producir sus propios fitosanitarios en plantas de terceros en Argentina y a vender en el mercado local.</p>
            <p>Recién en 1997 finalizó la construcción de su planta industrial en la ciudad de Zárate. Más tarde, en 2007 fue adquirida por el fondo Matlin Patterson, y finalmente en 2013 pasó a estar bajo la órbita del  Grupo Los Grobo. Poco tiempo después, en 2017, el fondo Victoria Capital Partners -también controlante de Los Grobo- se quedó con su mayoría accionaria.</p>
            <p>Según explican fuentes del sector, el mercado de fitosanitarios argentino mueve alrededor de 3.600 millones de dólares al año y está dominado por empresas multinacionales. En este contexto Agrofina tiene una participación aproximada en torno al 3,5%, manteniéndose dentro de las diez más grandes en su rubro.</p>
            <p>En la actualidad, Agrofina sintetiza y formula más de 30 productos y tiene registrados más de 170. De esta manera, presenta un mix de ventas altamente diversificado en relación con los cultivos (barbecho químico, soja, girasol, arroz, maní, poroto, maíz, trigo, pastura y cebada, entre otros), como así también en función del tipo de producto (insecticidas, herbicidas, fungicidas, curasemillas, fitoreguladores y coadyuvantes).</p>
            <p>La comercialización la ejecuta a través de distribuidores y de forma directa a productores, contando con una base de clientes amplia y diversificada. La red comercial de Los Grobo, que se caracteriza por la diversificación geográfica y el establecimiento en las zonas más importantes de la Argentina, le provee a Agrofina sinergias operacionales, comerciales y logísticas. Sin embargo, las ventas de la compañía se concentran en las provincias de Córdoba, Santa Fe y Entre Ríos (representan más del 60% total). La compañía ofrece a sus clientes la posibilidad de hacer canje y pago con granos.</p>
            <p>Según explican desde la empresa, uno de sus principales activos es su planta de Zárate, provincia de Buenos Aires. “El equipamiento productivo es del tipo batch (producción por lotes), y mediante un proceso productivo flexible permite la elaboración en escala de diferentes productos con tiempos de producción acordes a las exigencias del mercado, siendo las operaciones principales la síntesis y formulación de más de 35 productos finales a lo largo de un año”.</p>
            <p>La planta alberga un laboratorio de control de calidad propio. Y cuenta con “equipamiento de última generación para ensayos fisicoquímicos y un sistema que permite asegurar la trazabilidad de todos los componentes de los productos, avalando de esta forma una calidad óptima para el cliente”, detallan desde Agrofina.</p>
            <p>Esta planta opera actualmente en torno al 75% de su capacidad, sin problemas para abastecer la demanda interna de fitosanitarios. El principal costo que debe asumir la empresa es la compra de insumos. Opera con diversos proveedores locales e internacionales, éstos últimos principalmente de China, de donde provienen los principios activos fundamentales para la producción de agroquímicos. Estas materias primas representan aproximadamente 70% del total de las compras que hace la compañía.</p>
            <p>Según detallan desde la calificadora de Riesgo Fix, de todas formas Agrofina precisa elevados niveles de inversión para mantener su estructura, el cual estuvo en torno a 2,3 millones de dólares promedio los últimos 3 años y correspondió a mantenimiento y acondicionamiento de planta.</p>
            <p>En este contexto, la calificadora de riesgo explicó: “A partir del control de Victoria Capital Partners, el grupo persigue la consolidación de un modelo de negocio agropecuario integrando la comercialización de agroquímicos, acopio y demás servicios con la producción. Las sinergias de ambas compañías y la reducción de costos ha sido el foco del grupo en los últimos 18 meses, con resultados visibles en su desempeño operacional. Hacia adelante, para Agrofina se espera continuar con el desarrollo de productos propios apalancando las ventas en el posicionamiento de mercado y diversificación geográfica de Los Grobo Agropecuaria”.</p>
            <p>Agrofina es controlada por Victoria Capital Partners a través de Agrofina Holding LLC con el 65,81%, Los Grobo Agropecuaria SA con el 29,57%, Grupo los Grobo LLP y Grupo Los Grobo SA con el 3,95% y 0,67% respectivamente.</p>
            <p>En su ejercicio cerrado en septiembre de 2022, la empresa facturó poco más de 14.300 millones de pesos y obtuvo un resultado operativo de 1.087 millones. En cuanto a su deuda bancaria, según los registros del BCRA, asciende a poco más de 5.870 millones.</p>
            <p>A diferencia de otras grandes empresas del agro, Agrofina tiene la mayor parte de su deuda con la banca privada, el 23% del total tomada con el Banco Santander, el 15% con el Galicia, el 14% con el HSBC y otro 14% con el Superville, entre otras <a target="_blank" style="color: #22c55e;" href="https://www.bichosdecampo.com/">→ bichosdecampo.com</a></p>
            
            ',
            'imagenes' => [
                [
                    'nombre' => '¿Quién es Agrofina? La ex Ipesa ahora es una pujante firma de agroquímicos del Grupo Los Grobo',
                    'path' => '/images/novedades/agrofina-novedad-29-5-23.jpg'
                ]
            ],
            'archivos' => [],
            'fecha_carga' => Carbon::create(2023, 5, 29),
            'activo' => true,
        ]);
        #endregion

        
        //NO BORRAS ESPACIO
        //NO BORRAS ESPACIO
    }
}
