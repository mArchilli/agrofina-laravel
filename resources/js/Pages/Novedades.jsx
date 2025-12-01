import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const bannerImg = '/images/novedades/banner-novedades.jpg';

export default function Novedades({ novedades, filters }) {
    const [search, setSearch] = useState(filters.search || '');
    const [order, setOrder] = useState(filters.order || 'desc');

    const handleFilter = () => {
        router.get(route('novedades'), 
            { search, order }, 
            { 
                preserveState: true, 
                preserveScroll: true,
                replace: true 
            }
        );
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleFilter();
        }
    };

    return (
        <GuestLayout container={false}>
            <Head title="Novedades" />
            <div className="w-full">
                <Hero />
                <FiltersBar 
                    search={search}
                    setSearch={setSearch}
                    order={order}
                    setOrder={setOrder}
                    total={novedades.total}
                    handleFilter={handleFilter}
                    handleKeyPress={handleKeyPress}
                />
                <NovedadesGrid novedades={novedades} />
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
                        Mantente informado sobre las últimas novedades, anuncios y actualizaciones
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                            href="/"
                            className="group inline-flex items-center justify-center rounded-md bg-[#00833E] px-4 py-2.5 font-medium text-white shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-translate-x-1">
                                <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Volver al inicio
                        </Link>
                        <Link
                            href={route('contacto')}
                            className="inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-4 py-2.5 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
                        >
                            Contactar
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function FiltersBar({ search, setSearch, order, setOrder, total, handleFilter, handleKeyPress }) {
    return (
        <div className="mx-auto max-w-7xl px-4 py-6">
            <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl shadow-md ring-1 ring-emerald-200/60 p-6">
                <div className="flex flex-col lg:flex-row gap-4 items-stretch">
                    {/* Buscador */}
                    <div className="flex-1">
                        <label className="block text-sm font-semibold text-emerald-900 mb-2">
                            Buscar novedades
                        </label>
                        <div className="relative">
                            <svg 
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Buscar por título o contenido..."
                                className="w-full pl-12 pr-12 py-3 bg-white border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all shadow-sm hover:border-emerald-300"
                            />
                            {search && (
                                <button
                                    onClick={() => setSearch('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Filtro de orden */}
                    <div className="lg:w-64">
                        <label className="block text-sm font-semibold text-emerald-900 mb-2">
                            Ordenar por fecha
                        </label>
                        <div className="relative">
                            <svg 
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
                            </svg>
                            <select
                                value={order}
                                onChange={(e) => setOrder(e.target.value)}
                                className="w-full pl-12 pr-10 py-3 bg-white border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all appearance-none cursor-pointer shadow-sm hover:border-emerald-300"
                            >
                                <option value="desc">Más reciente primero</option>
                                <option value="asc">Más antigua primero</option>
                            </select>
                            <svg 
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-emerald-600 pointer-events-none" 
                                fill="none" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </div>

                    {/* Botón de búsqueda */}
                    <div className="lg:w-auto flex items-end">
                        <button
                            onClick={handleFilter}
                            className="w-full lg:w-auto group inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Buscar
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

function NovedadesGrid({ novedades }) {
    if (!novedades || !novedades.data || novedades.data.length === 0) {
        return (
            <div className="mx-auto max-w-7xl px-4 py-12">
                <div className="text-center py-12 bg-white rounded-lg shadow">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">No hay novedades disponibles</h3>
                    <p className="mt-2 text-sm text-gray-500">Próximamente se publicarán novedades.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-7xl px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {novedades.data.map((novedad) => (
                    <NovedadCard key={novedad.id} novedad={novedad} />
                ))}
            </div>
            
            {/* Paginación */}
            {novedades.last_page > 1 && (
                <Pagination links={novedades.links} />
            )}
        </div>
    );
}

function Pagination({ links }) {
    return (
        <nav className="flex items-center justify-center gap-2 mt-8">
            {links.map((link, index) => {
                // Parsear el label para mostrar símbolos más bonitos
                let label = link.label;
                if (label === '&laquo; Previous') {
                    label = (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    );
                } else if (label === 'Next &raquo;') {
                    label = (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    );
                }

                return (
                    <Link
                        key={index}
                        href={link.url || '#'}
                        preserveScroll
                        className={`
                            inline-flex items-center justify-center min-w-[2.5rem] h-10 px-3 rounded-lg font-medium text-sm transition-all duration-200
                            ${link.active 
                                ? 'bg-[#00833E] text-white shadow-md' 
                                : link.url 
                                    ? 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300 hover:border-[#00833E] hover:text-[#00833E]' 
                                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }
                        `}
                        disabled={!link.url}
                    >
                        {label}
                    </Link>
                );
            })}
        </nav>
    );
}

function NovedadCard({ novedad }) {
    // Extraer texto plano del HTML generado por QuillJS
    const extractPlainText = (html) => {
        if (typeof window === 'undefined') return '';
        const div = document.createElement('div');
        div.innerHTML = html || '';
        return div.textContent || div.innerText || '';
    };

    const plainText = extractPlainText(novedad.texto);
    const preview = plainText.length > 180 ? plainText.substring(0, 180) + '...' : plainText;

    // Formatear fecha
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('es-AR', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        }).format(date);
    };

    // Obtener primera imagen si existe
    const firstImage = novedad.imagenes && Array.isArray(novedad.imagenes) && novedad.imagenes.length > 0 
        ? novedad.imagenes[0] 
        : null;

        console.log(firstImage.path);

    return (
        <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
            {firstImage && (
                <div className="w-full h-48 bg-gray-200 overflow-hidden flex-shrink-0">
                    <img 
                        src={firstImage.path} 
                        alt={novedad.titulo}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <time dateTime={novedad.fecha_carga}>
                        {formatDate(novedad.fecha_carga)}
                    </time>
                </div>
                
                <h2 className="text-xl font-semibold text-emerald-600 mb-3 line-clamp-2">
                    {novedad.titulo}
                </h2>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {preview}
                </p>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                        {novedad.imagenes && Array.isArray(novedad.imagenes) && novedad.imagenes.length > 0 && (
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                {novedad.imagenes.length}
                            </span>
                        )}
                        {novedad.archivos && Array.isArray(novedad.archivos) && novedad.archivos.length > 0 && (
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                                {novedad.archivos.length}
                            </span>
                        )}
                    </div>
                    
                    <Link
                        href={route('novedades.show', novedad.id)}
                        className="group inline-flex items-center gap-2 text-[#00833E] font-medium text-sm hover:text-[#006830] transition-colors"
                    >
                        Ver más
                        <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>
        </article>
    );
}
