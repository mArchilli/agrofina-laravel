import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function AgroNews({ agroNews = [] }) {
  return (
    <GuestLayout container={false}>
      <Head title="AgroNews" />
      {/* HERO */}
      <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - AgroNews">
        <div
          className="h-[46vh] md:h-screen w-full bg-cover bg-center"
          style={{ backgroundImage: `url(/images/agronews-fondo.jpg)` }}
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">AgroNews</h1>
            <p className="mt-2 text-lg md:text-2xl font-medium text-white/90 drop-shadow">Conocé y descarga todas las ediciones</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="#agronews-content" className="group inline-flex items-center justify-center rounded-md bg-[#00833E] px-5 py-3 font-medium text-white shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                  <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Ver más
              </a>
              <a href="/contacto" className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50">
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section id="agronews-content" className="bg-white py-12">
        <div className="mx-auto max-w-7xl w-full px-4">
          <div className="w-full text-left mb-8">
            <p className="text-lg text-gray-800 mb-8">
              A través de nuestro nuevo boletín mensual, al que llamamos "AgroNews", vas a poder enterarte sobre las acciones que llevamos a cabo desde Agrofina para dar respuesta a las necesidades de nuestros clientes. Asimismo, conocer las últimas novedades del mercado. ¡Descargalo gratis!
            </p>
            
            {agroNews.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {agroNews.map((item) => (
                  <div key={item.id} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 flex-1">{item.title}</h3>
                        <svg className="w-8 h-8 text-red-600 flex-shrink-0 ml-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10,19L12,15H9V10H13V12L11,16H14V19H10Z"/>
                        </svg>
                      </div>
                      
                      {item.description && (
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{item.description}</p>
                      )}
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <span className="bg-gray-100 px-2 py-1 rounded">{item.formatted_file_size}</span>
                      </div>
                      
                      <a 
                        href={item.file_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-4 rounded shadow transition-all duration-300 hover:scale-105 text-center"
                      >
                        <div className="flex items-center justify-center">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Descargar PDF
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-500 text-lg">No hay ediciones disponibles en este momento</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </GuestLayout>
  );
}
