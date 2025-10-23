
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

const leftDropdowns = [
  { title: 'Mision, Vision y Valores', content: (
    <div className="space-y-6">
      <div>
        <h3 className="text-emerald-800 text-lg font-bold mb-1">Misión</h3>
        <p>Queremos liderar la transformación de la Industria de los Productos para Protección de Cultivos poniendo a disposición de nuestros clientes productos de alta calidad, obtenidos a través de procesos de producción limpios, técnicamente eficientes y seguros para el medio ambiente, creados a partir de la investigación y el desarrollo de nuestros profesionales.</p>
        <p>Queremos ser el mejor ambiente para el desarrollo de los talentos que trabajan con Nosotros y el mejor aliado para agregar valor a nuestros clientes, proveedores e inversores.</p>
      </div>
      <div>
        <h3 className="text-emerald-800 text-lg font-bold mb-1">Visión</h3>
        <p>Vemos una agricultura que se transforma gracias a la convergencia de nuevas tecnologías y a productores que requieren de nuevas soluciones, basadas en productos y servicios innovadores. En Agrofina aceptamos estos nuevos desafíos y los asumimos con compromiso y pasión.</p>
        <p>Somos una empresa de Protección de Cultivos líder, con proyección global, de calidad, capaz de diseñar y producir las especialidades más adecuadas para cada mercado.</p>
  <p><strong>Los tiempos que vendrán requieren Inteligencia Productiva.</strong></p>
      </div>
      <div>
        <h3 className="text-emerald-800 text-lg font-bold mb-1">Valores</h3>
        <ul className="list-disc pl-5 text-emerald-800">
          <li><span className="text-gray-800">Pasión por lo que hacemos.</span></li>
          <li><span className="text-gray-800">Compromiso con los resultados, la innovación y la mejora continua.</span></li>
          <li><span className="text-gray-800">Nuestro propósito es la sustentabilidad, tanto en lo económico, social, como en lo ambiental.</span></li>
        </ul>
      </div>
    </div>
  ), icon: (
    <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
  ) },
  { title: 'Historia', content: (
    <div className="space-y-4">
      <p className="text-emerald-800">Agrofina es una compañía, con 40 años en el mercado, que se especializa en el desarrollo, la producción y la comercialización de productos para la protección de cultivos.</p>
      <p>Su fundación se remonta al año 1978 cuando comenzó a operar bajo el nombre de Ipesa. Años más tarde, en 2007, fue adquirida por el fondo de origen norteamericano MatlinPatterson, tomando su actual denominación.</p>
      <p>En el 2013 Agrofina es adquirida por el grupo empresario privado de capitales locales, Los Grobo Agropecuaria S.A.</p>
      <p>En diciembre de 2016 Victoria Capital Partners (VCP) firma líder independiente enfocada en inversiones de private equity en América del Sur. A través del fondo VSAP Agriservices LP adquiere junto a un grupo de co-inversores el control de Grupo Los Grobo LLC (actualmente detenta el 76,03%).</p>
      <p>Agrofina bajo la nueva gestión, aspira a consolidarse como una empresa de desarrollo de conocimiento y tecnología aplicadas a la generación de soluciones sustentables para la protección de los cultivos de sus clientes.</p>
    </div>
  ), icon: (
    <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v4.2c0 .3.16.57.42.7l3 1.8" strokeLinecap="round" />
      <path d="M4 4v4h4" strokeLinecap="round" />
      <path d="M4.5 7A9 9 0 1 1 3 12" strokeLinecap="round" />
    </svg>
  ) },
  { title: 'Relaciones con la comunidad', content: (
    <div className="space-y-4">
      <p>Agrofina trabaja junto con otras empresas del Polo Industrial de Zárate y Campana, en AcercaRSE, un modelo de articulación público-privada único en el país.</p>
      <p className="text-emerald-800">Sus objetivos son el desarrollo de la región, la confianza mútua de los actores con el fin de lograr sinergia y capital social, el fortalecimiento del vínculo con la comunidad local y sus instituciones (escuelas, ONGs, etc).</p>
      {/* Imagen AcercaRSE */}
      <div className="flex justify-center my-4">
        <img src="/images/acercarse.png" alt="AcercaRSE" className="rounded shadow max-w-xs w-full" />
      </div>
  <p>Si bien cada compañía realiza su aporte individual, el proyecto se gestiona en conjunto. De esta forma, el armado, implementación, administración y seguimiento del proyecto se realiza en una mesa compartida.</p>
  <p className="text-emerald-800">Asimismo, Agrofina colabora, en acciones puntuales, con la red Solidagro en Charatá, para programas de desarrollo comunitario e intergración social de zonas de menores recursos.</p>
      {/* Contenedor informativo */}
      <div className="bg-gray-100 border border-gray-300 rounded p-4 flex gap-3 items-start mt-6">
        <span className="mt-1">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#999" />
            <text x="12" y="17" textAnchor="middle" fontSize="14" fill="white" fontFamily="Arial, Helvetica, sans-serif" fontWeight="bold">i</text>
          </svg>
        </span>
        <div className="space-y-1 text-sm">
          <div>
            Conozca más sobre ArcerCaRSE:
            <a href="/PDFs/products/Agrofina-Acercarse.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-medium hover:underline ml-1">aquí</a>
          </div>
          <div>
            Contáctenos para más información:<br />
            <a href="mailto:analia.ayala@losgrobo.com" className="text-emerald-700 font-medium">analia.ayala@losgrobo.com</a>
          </div>
        </div>
      </div>
    </div>
  ), icon: (
    <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <circle cx="12" cy="7" r="3" />
      <path d="M5.5 21v-2a4.5 4.5 0 019 0v2" />
      <circle cx="5" cy="10" r="2.5" />
      <circle cx="19" cy="10" r="2.5" />
      <path d="M3 21v-1.5a3.5 3.5 0 013.5-3.5" />
      <path d="M21 21v-1.5a3.5 3.5 0 00-3.5-3.5" />
    </svg>
  ) },
];
const centerDropdown = { title: 'Reporte de sustentabilidad', content: (
  <div>
    <p>En Agrofina brindamos soluciones para el desarrollo de una agricultura sustentable, con un profundo conocimiento del sector y las necesidades futuras de nuestros clientes. El contexto actual de sustentabilidad nos impone nuevos desafíos, que como empresa líder queremos asumir. El área de Sustentabilidad tiene como objetivo gestionar las contribuciones ambientales, sociales y de gobierno corporativo y contamos con una planificación estratégica con objetivos específicos en esta materia.</p>
    <p className="mt-4">Te invitamos a conocer todas nuestras contribuciones a través del Reporte de Sustentabilidad, el mismo realizado bajo los estándares GRI, ISO 26000 y SASB</p>
  </div>
), icon: (
  <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4" /></svg>
) };
const rightDropdowns = [
  { title: 'Informacion financiera', content: (
    <div>
      <a
        href="https://www.cnv.gov.ar/SitioWeb/Empresas/Empresa/30592724541"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-700 font-medium hover:underline"
      >
        Ver información adicional de nuestra compañía en la Comisión Nacional de Valores (CNV) de la República Argentina
      </a>
    </div>
  ), icon: (
    <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="7" width="20" height="10" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10h.01M6 14h.01M18 10h.01M18 14h.01" />
    </svg>
  ) },
  { title: 'Estatuto Social', content: (
    <div>
      <a
        href="https://www.cnv.gov.ar/SitioWeb/Empresas/Empresa/30592724541?fdesde=8/6/2017"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-700 font-medium hover:underline"
      >
        Ver información adicional de nuestra compañía en la Comisión Nacional de Valores (CNV) de la República Argentina
      </a>
    </div>
  ), icon: (
    <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <line x1="8" y1="8" x2="16" y2="8" />
      <line x1="8" y1="12" x2="16" y2="12" />
      <line x1="8" y1="16" x2="13" y2="16" />
    </svg>
  ) },
  { title: 'Etica y Cumplimiento', content: (
    <div>
      <a
        href="https://www.grupolosgrobo.com/acerca-de-los-grobo/etica-cumplimiento"
        target="_blank"
        rel="noopener noreferrer"
        className="text-emerald-700 font-medium hover:underline"
      >
        Ver información adicional de nuestra compañía en el Sitio Web de Grupo Los Grobo
      </a>
    </div>
  ), icon: (
    <svg className="w-6 h-6 text-emerald-700 mr-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" /></svg>
  ) },
];

export default function Institucional() {
  const [open, setOpen] = useState(null);
  return (
    <GuestLayout container={false}>
      <Head title="Institucional" />
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Institucional">
        <div
          className="h-[46vh] md:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/images/agrofina-institucional.jpg)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Institucional</h1>
            <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">Agrofina: Inteligencia productiva.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#institucional-contenido" className="inline-flex items-center justify-center rounded-md bg-lime-500 px-5 py-3 font-medium text-black shadow hover:bg-lime-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-300 gap-2">
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
      <section id="institucional-contenido" className="bg-white py-12">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="w-full text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800">Nuestra compañía</h2>
          <div className="my-4">
            <div
              className="rounded-full"
              style={{ width: '80px', height: '8px', background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)' }}
            />
          </div>
          <p className="text-lg text-gray-800 mb-6">
            <span className="text-emerald-800">Somos una compañía dedicada a brindar soluciones para el desarrollo de una agricultura sustentable. Elaboramos productos de alto valor agregado para la Protección de Cultivos. En Agrofina, seleccionamos las tecnologías más avanzadas del mundo y las adaptamos al mercado local.</span><br /><br />
            <strong>Somos la única empresa en la región con capacidad para producir con tecnología propia.</strong> En nuestros laboratorios de <Link href="/investigacion-desarrollo" className="text-emerald-700 underline hover:text-emerald-900 transition-colors">Investigación y Desarrollo</Link>, así como en nuestra <Link href="/planta-produccion" className="text-emerald-700 underline hover:text-emerald-900 transition-colors">Planta de Producción</Link>, científicos y profesionales altamente especializados trabajan en la síntesis y formulación de nuestros productos.<br /><br />
            Agrofina sintetiza y formula una amplia variedad de moléculas complejas en su <Link href="/planta-produccion" className="text-emerald-700 underline hover:text-emerald-900 transition-colors">Planta de Producción</Link> en Zárate (BA), instalada sobre un predio de 60 hectáreas.
          </p>
        </div>
  <div className="w-full mt-8 space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-4">
              {leftDropdowns.map((item, idx) => (
                <div key={item.title} className="border border-emerald-200 rounded-lg bg-emerald-50 overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                    onClick={() => setOpen(open === `left-${idx}` ? null : `left-${idx}`)}
                    aria-expanded={open === `left-${idx}`}
                  >
                    <span className="flex items-center">{item.icon}{item.title}</span>
                    <svg className={`w-5 h-5 ml-2 transition-transform ${open === `left-${idx}` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {open === `left-${idx}` && (
                    <div className="px-5 pb-4 text-gray-700 animate-fade-in">
                      {item.content || <span className="italic text-emerald-700/80">Próximamente…</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Columna derecha */}
            <div className="flex flex-col gap-4">
              {rightDropdowns.map((item, idx) => (
                <div key={item.title} className="border border-emerald-200 rounded-lg bg-emerald-50 overflow-hidden">
                  <button
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                    onClick={() => setOpen(open === `right-${idx}` ? null : `right-${idx}`)}
                    aria-expanded={open === `right-${idx}`}
                  >
                    <span className="flex items-center">{item.icon}{item.title}</span>
                    <svg className={`w-5 h-5 ml-2 transition-transform ${open === `right-${idx}` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                  {open === `right-${idx}` && (
                    <div className="px-5 pb-4 text-gray-700 animate-fade-in">
                      {item.content || <span className="italic text-emerald-700/80">Próximamente…</span>}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Botón centrado debajo de las columnas */}
          <div className="flex justify-center mt-4">
            <div className="border border-emerald-200 rounded-lg bg-emerald-50 overflow-hidden w-full max-w-md">
              <button
                className="w-full flex justify-between items-center px-5 py-4 text-left font-semibold text-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 transition"
                onClick={() => setOpen(open === `center` ? null : `center`)}
                aria-expanded={open === `center`}
              >
                <span className="flex items-center">{centerDropdown.icon}{centerDropdown.title}</span>
                <svg className={`w-5 h-5 ml-2 transition-transform ${open === `center` ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {open === `center` && (
                <div className="px-5 pb-4 text-gray-700 animate-fade-in">
                  {centerDropdown.content || <span className="italic text-emerald-700/80">Próximamente…</span>}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* Ancla para contacto */}
      <div id="institucional-contacto" />
    </GuestLayout>
  );
}
