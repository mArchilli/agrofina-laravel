import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

const bannerImg = '/images/novedades/banner-novedades.jpg';

export default function ShowNovedad({ novedad }) {
    return (
        <GuestLayout container={false}>
            <Head title={novedad.titulo} />
            <div className="w-full">
                <Hero />
                <Breadcrumbs novedad={novedad} />
                <NovedadContent novedad={novedad} />
            </div>
        </GuestLayout>
    );
}

function Hero() {
    return (
        <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Novedades">
            <div
                className="h-[46vh] md:h-screen w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImg})` }}
                aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
            <div className="absolute inset-0 flex items-end">
                <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
                    <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-white drop-shadow">
                        Novedades Agrofina
                    </h1>
                    <p className="mt-2 max-w-2xl text-white/85 text-sm md:text-base">
                        Información detallada de la novedad
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                            href={route('novedades')}
                            className="inline-flex items-center justify-center rounded-md bg-[#00833E] px-4 py-2.5 font-medium text-white shadow hover:bg-[#00994C] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Volver a novedades
                        </Link>
                        <Link
                            href={route('contacto')}
                            className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-4 py-2.5 font-medium text-white backdrop-blur hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        >
                            Contactar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Breadcrumbs({ novedad }) {
    return (
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl w-full px-4 py-4 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
                <li>
                    <Link href="/" className="hover:underline text-gray-700">Inicio</Link>
                </li>
                <li aria-hidden className="text-gray-400">/</li>
                <li>
                    <Link href={route('novedades')} className="hover:underline text-gray-700">Novedades</Link>
                </li>
                <li aria-hidden className="text-gray-400">/</li>
                <li className="text-gray-900 font-medium truncate max-w-xs">{novedad.titulo}</li>
            </ol>
        </nav>
    );
}

function NovedadContent({ novedad }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('es-AR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }).format(date);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 py-8 pb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header */}
                <div className="border-b border-gray-200 px-6 py-8 md:px-8">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <time dateTime={novedad.fecha_carga}>
                            {formatDate(novedad.fecha_carga)}
                        </time>
                    </div>
                    <h1 className="text-3xl md:text-4xl font-bold text-emerald-600">
                        {novedad.titulo}
                    </h1>
                </div>

                {/* Content */}
                <div className="px-6 py-8 md:px-8">
                    {/* Imágenes */}
                    {novedad.imagenes && novedad.imagenes.length > 0 && (
                        <div className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Imágenes
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {novedad.imagenes.map((imagen, index) => (
                                    <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                                        <img 
                                            src={imagen.path} 
                                            alt={`${novedad.titulo} - Imagen ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Texto content */}
                    <div className="prose prose-lg max-w-none mb-8">
                        <div 
                            className="text-gray-700 leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: novedad.texto }}
                        />
                    </div>

                    {/* Archivos PDFs */}
                    {novedad.archivos && novedad.archivos.length > 0 && (
                        <div className="border-t border-gray-200 pt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                Archivos adjuntos
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {novedad.archivos.map((archivo, index) => (
                                    <a
                                        key={index}
                                        href={archivo.path}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:border-[#00833E] hover:bg-gray-50 transition-all"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                                            <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {archivo.nombre}
                                            </p>
                                            <p className="text-xs text-gray-500">PDF</p>
                                        </div>
                                        <svg className="w-5 h-5 text-gray-400 group-hover:text-[#00833E] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer actions */}
                <div className="border-t border-gray-200 px-6 py-6 md:px-8 bg-gray-50">
                    <div className="flex flex-wrap gap-3 justify-between items-center">
                        <Link
                            href={route('novedades')}
                            className="group inline-flex items-center gap-2 text-gray-700 font-medium hover:text-[#00833E] transition-colors"
                        >
                            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver a novedades
                        </Link>
                        <Link
                            href={route('contacto')}
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#00833E] text-white font-medium rounded-md hover:bg-[#006830] transition-colors shadow hover:shadow-lg"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contactar
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
