import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

const dropdowns = [
  {
    title: 'Principio de la calidad, seguridad, salud en el trabajo y ambiente',
    content: (
      <div>
        <img src="/images/calidad-seguridad-salud.jpg" alt="Calidad, Seguridad y Salud" className="w-full mb-4 rounded-lg" />
        <ol className="list-decimal pl-6 text-gray-800 space-y-2">
          <li>Asegurar el cumplimiento sistemático de las obligaciones legales aplicables a nuestra actividad, como así también aquellos requisitos corporativos a los que la organización deba adherir.</li>
          <li>Crear y mantener un ambiente de trabajo seguro y saludable, mejorando en forma progresiva nuestros estándares operativos de Seguridad Personal y de Proceso así como los de Higiene y Salud laboral.</li>
          <li>Generar conciencia dentro del ámbito de gestión de nuestro negocio, sobre la importancia del cuidado ambiental, la responsabilidad individual en la operación y la integración de estos conceptos en un modelo eficaz de gestión ambiental, a través de la formulación de distintas acciones.</li>
          <li>Mejorar continuamente la eficiencia de nuestros procesos, logrando que los mismos sean sostenibles en el tiempo y buscando optimizar el uso de los recursos, entregando en forma previsible y ambientalmente segura, productos y servicios competitivos, de la calidad especificada.</li>
          <li>Participar de la integración de la cadena de valor agroalimentaria, garantizando la confiabilidad y seguridad de nuestros productos en cada una de sus etapas, tendiendo a una Gestión Responsable de Productos y Tecnologías.</li>
          <li>Capacitar y desarrollar las competencias de todo el personal, maximizando sus potencialidades y el compromiso de los involucrados en los procesos, de modo que los mismos sean desarrollados de manera responsable.</li>
          <li>Evaluar periódicamente el desempeño de la organización respecto a los distintos  riesgos, con el objetivo de prevenirlos, minimizarlos o eliminarlos cuando sea posible.</li>
        </ol>
        <p className="mt-4 text-gray-800">La difusión, comprensión, aplicación y cumplimiento de esta Política es responsabilidad de todas y cada una de las personas que forman AGROFINA en función de sus competencias, capacitación y autoridad.</p>
      </div>
    ),
    icon: (
      <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 2l7 4v6c0 5-3.5 9.74-7 10-3.5-.26-7-5-7-10V6l7-4z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Normas de Calidad/Medioambiente',
    content: (
      <div className="space-y-4 text-gray-800">
        <img src="/images/normascalidad-ma.jpg" alt="Normas de Calidad y Medioambiente" className="w-full mb-4 rounded-lg object-cover" />
        <p className="text-emerald-700 font-semibold">
          Agrofina ha implementado un Sistema de Gestión de la Calidad (SGC) en el Centro de Desarrollo Analítico basado en los requisitos de la norma ISO 17025:2005 y los Principios de las Buenas Prácticas de Laboratorio de la OCDE y mediante el cual garantiza los resultados de ensayo de sus productos, avalados por autoridades nacionales e internacionales.
        </p>
        <p className="text-sm text-gray-700">
          El Laboratorio ha sido declarado en conformidad con los Principios de las Buenas Prácticas de Laboratorio de la OCDE por el Organismo Argentino de Acreditación con el Registro de Conformidad Nº 03
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/pdfs/products/Agrofina-CertificadoBPL-2021-ESP.pdf" download className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition text-center">Descargar certificado de conformidad (pdf)</a>
          <a href="/pdfs/products/Agrofina-CertificadoBPL-2021-ENG.pdf" download className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition text-center">Download the Certificate of Compliance (pdf)</a>
        </div>
        <p>
          Así, esta certificación garantiza que nuestro laboratorio cuenta con la más alta solvencia técnica y capacidad para producir resultados absolutamente válidos en cada uno de nuestros procesos.
        </p>
        <h4 className="font-semibold text-emerald-700 mt-4">Medioambiente y Salud y Seguridad en el Trabajo</h4>
        <p>
          El Centro de I+D y el Centro de Desarrollo Analítico han implementado un <b>Sistema de Gestión Integrado (SGI)</b> asegurando que en el diseño y desarrollo de los productos se tengan en cuenta sus potenciales aspectos ambientales y las tareas se desarrollen considerando los peligros para la salud y seguridad de los trabajadores.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a href="/pdfs/products/Agrofina-MedioAmbiental-SST-2019.pdf" download className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition text-center">Descargar Política de Medio Ambiente y SST (pdf)</a>
          <a href="/pdfs/products/Agrofina-CertificadoIQNET-14001.pdf" download className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition text-center">Descargar certificado de conformidad ISO 14001 (pdf)</a>
          <a href="/pdfs/products/Agrofina-CertificadoIQNET-45001.pdf" download className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition text-center">Descargar certificado de conformidad ISO 45001 (pdf)</a>
        </div>
      </div>
    ),
    icon: (
      <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="10" r="5" />
        <circle cx="12" cy="10" r="2.5" />
        <path d="M12 15v5" />
        <path d="M12 20l-2.5-2.5" />
        <path d="M12 20l2.5-2.5" />
      </svg>
    ),
  },
  {
    title: 'Gestion de Residuos',
    content: (
      <div className="text-gray-800 space-y-4">
  <p className="text-emerald-700 font-semibold">Agrofina desarrolla un modelo de gestión ambiental focalizado en la disminución de impactos. De este modo, el objetivo general de su política ambiental es producir en forma sustentable, conservando el medioambiente y haciendo un uso racional de los factores de producción.</p>
  <p><span className="text-emerald-700 font-semibold">Para ello se compromete a:</span></p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Respetar y cumplir las normas ambientales vigentes, así como exigir su cumplimiento para todos los actores que participan en la red.</li>
          <li>Gestionar las distintas actividades a través de la incorporación de mejores tecnologías y procesos de producción que apunten a la eco-eficiencia (minimizar la relación insumo/producto).</li>
          <li>Evaluar los impactos de las diferentes actividades y establecer los controles correspondientes.</li>
          <li>Generar conciencia tanto de colaboradores como de la sociedad en su conjunto, sobre la importancia no sólo en el cuidado del medioambiente sino de la responsabilidad de cada uno, e integrarla en la construcción de un modelo de gestión medioambiental, a través de distintas estrategias y planes.</li>
        </ul>
        <p>El cumplimiento de estos objetivos es monitoreado en forma sistemática, y funciona como un insumo para la detección de oportunidades de mejora.</p>
  <h4 className="font-semibold text-emerald-700 mt-4">Programa de Gestión de Residuos</h4>
        <p>Planta Zarate, minimiza su impacto ambiental en sus instalaciones de Secado Spray donde sus efluentes líquidos son tratados.</p>
        <p>El programa de Gestión de Residuos de Agrofina contiene, entre otros, instructivos y procedimientos estandarizados para la caracterización, clasificación, transporte y disposición final de residuos (especiales, no especiales y domiciliarios).</p>
      </div>
    ),
    icon: (
      <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="6" y="7" width="12" height="13" rx="2" />
        <path d="M9 10v6M12 10v6M15 10v6" />
        <path d="M4 7h16M10 4h4a1 1 0 011 1v2H9V5a1 1 0 011-1z" />
      </svg>
    ),
  },
  {
    title: 'Manual de Manipulacion de Agroquimicos',
    content: (
      <div className="text-gray-800 space-y-4 md:flex md:items-start md:gap-6">
        <img src="/images/manual-manip-agroq.jpg" alt="Manual de Manipulación de Agroquímicos" className="w-full md:w-48 md:h-auto rounded-lg object-cover mb-4 md:mb-0" />
        <div className="flex-1 flex flex-col justify-between h-full">
          <p className="mb-4">
            Agrofina cuenta con un Manual de Manejo de Materiales que reúne las prácticas seguras para la manipulación, almacenamiento y despacho de productos fitosanitarios. Este manual está a disposición de sus clientes en cada uno de los puntos de distribución a lo largo y ancho del país.
          </p>
            <a
              href="/pdfs/products/Agrofina-ManualManejoMateriales.pdf"
              download
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded shadow transition w-auto max-w-xs text-center"
            >
              Descargar el manual (PDF)
            </a>
        </div>
      </div>
    ),
    icon: (
      <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <path d="M8 6h8M8 10h8M8 14h4" />
        <path d="M12 18h0" />
      </svg>
    ),
  },
];

export default function Politicas() {
  const [open, setOpen] = useState(null);
  return (
    <GuestLayout container={false}>
      <Head title="Políticas" />
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Políticas">
        <div
          className="h-[46vh] md:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/images/politicas.jpg)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Políticas</h1>
            <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">Nuestras políticas</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#politicas-contenido" className="inline-flex items-center justify-center rounded-md bg-lime-500 px-5 py-3 font-medium text-black shadow hover:bg-lime-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5">
                  <path d="M6 9l6 6 6-6" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ver más
              </a>
              <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section id="politicas-contenido" className="bg-white py-12">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="w-full text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Políticas</h2>
            <div className="my-4">
              <div
                className="rounded-full"
                style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
              />
            </div>
            <p className="text-lg text-emerald-800 mb-6">
              Agrofina es una empresa de desarrollo, manufactura y comercialización de productos para la Protección de Cultivos líder, con proyección global, de calidad, capaz de diseñar y producir las especialidades más adecuadas para cada mercado.
            </p>
            <p className="text-lg text-gray-800 mb-6">
              La Dirección de AGROFINA, enfatizando sus valores de Pasión por lo que hacemos, Compromiso con los resultados, la innovación y la mejora continua, así como el logro de la Sustentabilidad, tanto en lo económico, lo social, y lo ambiental, y con el objetivo de liderar una transformación de la Industria, poniendo a disposición de sus clientes productos de alta calidad, obtenidos a través de procesos de producción limpios, técnicamente eficientes y seguros, creados a partir de la investigación y el desarrollo de nuestros profesionales, al tiempo que genera el mejor ambiente para el desarrollo de los talentos que trabajan en la empresa y para agregar valor a sus clientes, proveedores e inversores, establece un Sistema Integral de Gestión que incluye las perspectivas de la calidad, seguridad, salud en el trabajo y ambiente, asumiendo el compromiso de aplicar, en la toma de decisiones a todo nivel.
            </p>
          </div>
          <div className="w-full mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {dropdowns.map((item, idx) => {
                const isOpen = open === idx;
                return (
                  <div
                    key={item.title}
                    className={`border border-emerald-200 rounded-lg bg-emerald-50 overflow-hidden transition-all duration-300 ${isOpen ? 'md:col-span-2' : ''}`}
                  >
                    <button
                      className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                      onClick={() => setOpen(isOpen ? null : idx)}
                      aria-expanded={isOpen}
                    >
                      <span className="flex items-center">{item.icon}{item.title}</span>
                      <svg className={`w-5 h-5 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ease-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
                      aria-hidden={!isOpen}
                    >
                      <div className="px-5 pt-4 pb-4 text-gray-700">
                        {item.content || <span className="italic text-emerald-700/80">Próximamente…</span>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
