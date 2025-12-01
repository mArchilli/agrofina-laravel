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
            'texto' => 'Con el objetivo de mostrar las prácticas sustentables en relación al Día del Medio Ambiente, Grupo Los Grobo/Agrofina llevó a cabo la Jornada de Prácticas sustentables en la agricultura de hoy y mañana en Carlos Casares.

            La idea no fue solo dar a conocer las Buenas Prácticas agrícolas en el campo sino también mostrar en términos de sustentabilidad lo que se hace internamente como empresa.

            De la mano de Hugo March pudimos compartir algunas muestras sobre la calidad de nuestras formulaciones con el objetivo de demostrar que la sustentabilidad está presente en la síntesis y formulación de nuestros productos. Nos acompañó Agrícola Testa y compartió información sobre cómo ser sustentables también en el proceso de aplicación.

            De igual modo, Campo Limpio también participó hablando sobre manejo de envases vacíos y cómo lograr tener mayor disposición final de los envases. Una empresa comprometida con la sustentabilidad cuida a la naturaleza, pero también se preocupa por generar un equilibrio y darle valor a sus empleados, socios estratégicos, productores y la sociedad en general. Ese es nuestro objetivo.

            ¡Gracias Carlos e Ignacio Testa y Leandro Brambilla por acompañarnos! ¡Hasta la próxima!',
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
            'texto' => 'Los días 14 y 15 de septiembre estuvimos presentes en el IV Congreso Argentino de Malezas de la ASACIM en el Hotel Sheraton de Mar del Plata.

            Participamos con nuestro Stand donde los visitantes pudieron sacarse una foto como Hilario y Hortensia, nuestros protagonistas de la campaña digital de productos en Redes Sociales. ¡Todos participaron por premios exclusivos de Agrofina!. Los ganadores del sorteo fueron: Gabriel Picapietra y Victoria Buratovich

            Además, participamos en las siguientes charlas:

            – Sustentabilidad desde el desarrollo de las formulaciones. Hugo March
            – Origen de la versión sustentable del lactofen. Héctor Di Loreto',
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
            'texto' => 'Un evento importante para conocer lo que se viene en la próxima campaña de Maíz. Además, siempre es un espacio más que bienvenido para reencontrarnos con colegas y clientes.

            El 31 de mayo pasado estuvimos acompañando el Congreso Maizar 2023 en el Goldencenter de la Ciudad de Buenos Aires, con el objetivo de sumarnos a los conceptos de Bioeconomía que requiere de múltiples actores y una construcción interactiva para el crecimiento de una economía rica e inclusiva.',
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
            'texto' => 'El 21 de septiembre estuvimos presentes en la XXXVIII Jornada Nacional del Maní y le agradecemos a nuestro equipo por la presencia y a todo el público presente por su apoyo.

            El tema de nuestra exposición fue: “Evaluación de la eficacia de la mezcla racemica (rs)-lactofen y del isomero (s)-lactofen sobre amaranthus palmeri.”

            Disertante: Ing. Agr. Lisandro Guerrieri, Gerente de Desarrollo y Servicio Técnico de Agrofina.',
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
            'texto' => 'Fuimos parte de la segunda edición del “CDA” bajo el lema: El canal le habla al canal. Tuvimos la oportunidad de recibir a amigos, clientes y proveedores en nuestro stand.

            También participamos de charlas que nos dejaron mensajes inspiradores y llenos de energía para seguir brindando herramientas a los productores y con el apoyo de nuestra Red de Distribución, partners fundamentales en nuestra propuesta comercial.

            Felicitaciones al Equipo organizador del Congreso (link a url: <a target="_blank" style="color: #22c55e;" href="https://www.instagram.com/cda_canal_distribucion_agro/">https://www.instagram.com/cda_canal_distribucion_agro/</a>) y muy especialmente a Luis Mogni.

            ¡Hasta el próximo CDA!',
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
            'texto' => 'Una conversación orientada al cultivo de Soja y su protección fitosanitaria, sobre la base de la llegada de El Niño. En Agrositio.

            No te pierdas la conversación que tuvieron Luis Siffredi y Lisandro Guerrieri en el canal AgroSitio, donde contaron las novedades en protección fitosanitaria para la soja, el impacto de El Niño en los cultivos y los últimos lanzamientos de los productos de Agrofina.
            <br>
            <br>
            Mirá el video completo: 
            <br>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_PXRc3rMhyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
            'texto' => 'Con mucho orgullo presentamos una nueva edición del Reporte de Sustentabilidad de Grupo Los Grobo que refleja nuestra trayectoria de casi 40 años en la industria de los agronegocios.
            <br>
            <br>
            En este último ejercicio, afianzamos nuestro compromiso con la sustentabilidad a través de la adhesión a las iniciativas de Pacto Global y los Principios para el Empoderamiento de las Mujeres (WEPs), ambas promovidas por Naciones Unidas.
            <br>
            <br>
            <div style="text-align: center; margin: 20px 0;">
                <a href="/PDFs/novedades/Los Grobo - Reporte Sustentabilidad 2022-2023.pdf" download class="inline-block px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200" style="background-color: #22c55e; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; display: inline-block; font-weight: 600;">REPORTE PERIODO 2022 - 2023 DE GRUPO LOS GROBO</a>
            </div>
            <br>
            La estrategia de sustentabilidad que aplicamos se basa en 4 pilares:
            <br>
            <br>
            Agricultura sostenible.<br>
            Conciencia sustentable en el uso de los recursos.<br>
            Nuestras personas.<br>
            Nuestra comunidad.<br>
            <br>
            Todo es posible GRACIAS al esfuerzo diario de las personas que forman parte del Grupo.
            <br>
            <br>
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
            'texto' => 'Poder Judicial de la Nación JUZGADO COMERCIAL 12<br>
            EDICTO BOLETIN OFICIAL<br>
            <br>
            El Juzg. Nac. de 1ra. Instancia en lo Comercial N°12 a cargo del Dr. Hernán D. Papa, Sec. N° 24 a cargo del Dr. Ricardo Daniel Zmuda, sito en M. T. de Alvear 1840 PB, CABA, hace saber por cinco días en los autos “AGROFINA S.A. s/CONCURSO PREVENTIVO” Expte. Nro. 151/2025 con fecha 03.02.2025 se presentó en concurso preventivo AGROFINA S.A., CUIT 30-59272454-1, con domicilio en Suipacha 1.111 piso 18° de la CABA, habiéndose producido su apertura el 20.02.2025, fijándose el siguiente cronograma: hasta el 24.06.2025 podrán los acreedores con asistencia letrada ingresar digitalmente sus insinuaciones junto con toda la documentación respaldatoria en el “INCIDENTE DE INSINUACION DE CREDITOS EN LOS TERMINOS DEL ART. 32, LEY 24.522” (Nro. 151/2025/1), a cuyo fin deberán dar estricto cumplimiento a lo dispuesto con fecha 20.02.2025 a lo que se remite (v. pto. IV ap. “J 2°”).<br>
            <br>
            En tal incidente deberán también formularse digitalmente las observaciones a que alude el art. 34 LCQ y sus contestaciones, según lo autorizado en dicho decisorio. El arancel previsto por el artículo 32 LCQ deberá abonarse por transferencia a la Caja de Ahorros en $ del BANCO GALICIA MÁS, Nro. De cuenta: 616-6-09374-4, CBU: 1500616700061660937446 y Alias: PALOMA.LODO.PERU de titularidad de José Escandell y otros, CUIT 20-93390304-5. A los fines de presentar su solicitud en formato papel los acreedores que no cuenten con asistencia letrada deberán solicitar turno a la sindicatura ESTUDIO ESCANDELL – LOPEZ CEPERO -con domicilio en Tte. Gral. Perón 1509 Piso 9°, CABA y tel.+54 011-44018375, mediante email a notif.judiciales@estudioehq.com.ar.<br>
            <br>
            A tal fin, deberán dar estricto cumplimiento a las pautas fijadas en el pto. IV ap. “J 2°” del decisorio de fecha 20.02.2025 a lo que se remite. El síndico presentará los informes que disponen los arts. 35 y 39 LCQ los días 12.09.2025 y 06.03.2026 -respectivamente-. La fecha para dictar el auto verificatorio vence el 20.11.2025. La audiencia informativa se llevará a cabo el 27.08.2026 a las 10 hs., en la sala de audiencias del tribunal. Buenos Aires, 06 de marzo de 2025.<br>
            <br>
            RICARDO DANIEL ZMUDA SECRETARIO
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

        //NO BORRAS ESPACIO
        //NO BORRAS ESPACIO
    }
}
