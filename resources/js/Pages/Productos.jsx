import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';

const bannerImg = '/images/img-products.jpg';

export default function Productos({ 
    productos, 
    categorias, 
    cultivos, 
    principiosActivos, 
    arbolesRecomendacion,
    filtros 
}) {
    const [selectedCategoria, setSelectedCategoria] = useState(filtros.categoria || '');
    const [selectedCultivos, setSelectedCultivos] = useState(
        filtros.cultivo ? (Array.isArray(filtros.cultivo) ? filtros.cultivo : filtros.cultivo.split(',')) : []
    );
    const [cultivosExpanded, setCultivosExpanded] = useState(false);
    const [cultivoSearch, setCultivoSearch] = useState('');
    const [selectedPrincipioActivo, setSelectedPrincipioActivo] = useState(filtros.principio_activo || '');
    const [selectedArbolRecomendacion, setSelectedArbolRecomendacion] = useState(filtros.arbol_recomendacion || '');

    const toggleCultivo = (cultivoId) => {
        setSelectedCultivos(prev => {
            if (prev.includes(cultivoId.toString())) {
                return prev.filter(id => id !== cultivoId.toString());
            } else {
                return [...prev, cultivoId.toString()];
            }
        });
    };

    const handleFilter = () => {
        const params = {};
        if (selectedCategoria) params.categoria = selectedCategoria;
        if (selectedCultivos.length > 0) params.cultivo = selectedCultivos.join(',');
        if (selectedPrincipioActivo) params.principio_activo = selectedPrincipioActivo;
        if (selectedArbolRecomendacion) params.arbol_recomendacion = selectedArbolRecomendacion;

        router.get(route('productos'), params, {
            preserveState: true,
            preserveScroll: true,
        });
    };

    const handleReset = () => {
        setSelectedCategoria('');
        setSelectedCultivos([]);
        setSelectedPrincipioActivo('');
        setSelectedArbolRecomendacion('');
        setCultivosExpanded(false);
        setCultivoSearch('');
        
        router.get(route('productos'), {}, {
            preserveState: true,
            preserveScroll: false,
        });
    };

    return (
        <GuestLayout container={false}>
            <Head title="Productos" />
            
            <div className="w-full">
                <Hero />
                <Breadcrumbs />
                
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 space-y-8">

                {/* Filtros */}
                <div id="filtros-productos" className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-semibold text-emerald-900 flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filtrar Productos
                        </h2>
                    </div>
                    
                    <div className="space-y-4">
                        {/* Primera fila - Filtros de selección simple */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Filtro Categoría */}
                            <div>
                                <label className="block text-sm font-medium text-emerald-800 mb-2">
                                    Categoría
                                </label>
                                <select
                                    value={selectedCategoria}
                                    onChange={(e) => setSelectedCategoria(e.target.value)}
                                    className="w-full rounded-lg border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 shadow-sm transition-all duration-200"
                                >
                                    <option value="">Todas las categorías</option>
                                    {categorias.map((cat) => (
                                        <option key={cat.id} value={cat.id}>
                                            {cat.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Filtro Principio Activo */}
                            <div>
                                <label className="block text-sm font-medium text-emerald-800 mb-2">
                                    Principio Activo
                                </label>
                                <select
                                    value={selectedPrincipioActivo}
                                    onChange={(e) => setSelectedPrincipioActivo(e.target.value)}
                                    className="w-full rounded-lg border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 shadow-sm transition-all duration-200"
                                >
                                    <option value="">Todos los principios activos</option>
                                    {principiosActivos.map((pa) => (
                                        <option key={pa.id} value={pa.id}>
                                            {pa.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Filtro Árbol de Recomendación */}
                            <div>
                                <label className="block text-sm font-medium text-emerald-800 mb-2">
                                    Árbol de Recomendación
                                </label>
                                <select
                                    value={selectedArbolRecomendacion}
                                    onChange={(e) => setSelectedArbolRecomendacion(e.target.value)}
                                    className="w-full rounded-lg border-emerald-300 focus:border-emerald-500 focus:ring-emerald-500 shadow-sm transition-all duration-200"
                                >
                                    <option value="">Todos</option>
                                    {arbolesRecomendacion.map((ar) => (
                                        <option key={ar.id} value={ar.id}>
                                            {ar.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Segunda fila - Filtro Cultivos (selección múltiple) */}
                        <div className="pt-2 border-t border-emerald-200/50">
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium text-emerald-800">
                                    Cultivos {selectedCultivos.length > 0 && (
                                        <span className="ml-1.5 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-emerald-600 rounded-full">
                                            {selectedCultivos.length}
                                        </span>
                                    )}
                                </label>
                                <button
                                    type="button"
                                    onClick={() => setCultivosExpanded(!cultivosExpanded)}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium text-emerald-700 bg-emerald-100 rounded-lg hover:bg-emerald-200 transition-colors duration-200"
                                >
                                    {cultivosExpanded ? (
                                        <>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                            </svg>
                                            Contraer
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                            Expandir
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Buscador de cultivos */}
                            <div className="mb-3">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Buscar cultivo..."
                                        value={cultivoSearch}
                                        onChange={(e) => {
                                            setCultivoSearch(e.target.value);
                                            if (e.target.value && !cultivosExpanded) {
                                                setCultivosExpanded(true);
                                            }
                                        }}
                                        className="block w-full pl-9 pr-3 py-1.5 border border-emerald-300 rounded-lg leading-5 bg-white placeholder-gray-300 focus:outline-none focus:placeholder-gray-400 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 sm:text-sm transition duration-150 ease-in-out"
                                    />
                                </div>
                            </div>
                            
                            <div className={`transition-all duration-300 ease-in-out ${
                                cultivosExpanded ? 'max-h-96' : 'max-h-24'
                            } overflow-y-auto overflow-x-hidden`}>
                                <div className="flex flex-wrap gap-2 p-3 bg-white rounded-lg border border-emerald-300">
                                    {cultivos.filter(c => c.nombre.toLowerCase().includes(cultivoSearch.toLowerCase())).length === 0 ? (
                                        <p className="text-sm text-emerald-600/70 py-2 w-full text-center">No se encontraron cultivos</p>
                                    ) : (
                                        cultivos
                                            .filter(c => c.nombre.toLowerCase().includes(cultivoSearch.toLowerCase()))
                                            .map((cultivo) => {
                                            const isSelected = selectedCultivos.includes(cultivo.id.toString());
                                            return (
                                                <button
                                                    key={cultivo.id}
                                                    type="button"
                                                    onClick={() => toggleCultivo(cultivo.id)}
                                                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                                        isSelected
                                                            ? 'bg-emerald-600 text-white shadow-md hover:bg-emerald-700 scale-105'
                                                            : 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 hover:border-emerald-300'
                                                    }`}
                                                >
                                                    {isSelected && (
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    )}
                                                    {cultivo.nombre}
                                                </button>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                            
                            {selectedCultivos.length > 0 && (
                                <button
                                    type="button"
                                    onClick={() => setSelectedCultivos([])}
                                    className="mt-2 text-xs text-emerald-600 hover:text-emerald-800 font-medium flex items-center gap-1 transition-colors duration-200"
                                >
                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Limpiar selección de cultivos
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Botones de acción */}
                    <div className="mt-4 flex gap-3">
                        <button
                            onClick={handleFilter}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Aplicar Filtros
                        </button>
                        <button
                            onClick={handleReset}
                            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-emerald-300 bg-white px-6 py-2.5 font-semibold text-emerald-700 transition-all duration-300 hover:bg-emerald-50 hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                            Limpiar Filtros
                        </button>
                    </div>
                </div>

                {/* Contador de resultados */}
                <div className="flex items-center justify-between">
                    <p className="text-sm text-emerald-700">
                        {productos.length === 0 ? (
                            <span className="font-medium">No se encontraron productos</span>
                        ) : (
                            <>
                                Mostrando <span className="font-semibold">{productos.length}</span> 
                                {productos.length === 1 ? ' producto' : ' productos'}
                            </>
                        )}
                    </p>
                </div>

                {/* Grid de productos */}
                {productos.length === 0 ? (
                    <div className=" rounded-2xl p-12 text-center ring-1 ring-emerald-200/60">
                        <svg className="mx-auto h-16 w-16 text-emerald-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <h3 className="text-xl font-semibold text-emerald-800 mb-2">
                            No hay productos disponibles
                        </h3>
                        <p className="text-emerald-700/80">
                            Intenta ajustar los filtros para ver más resultados
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {productos.map((producto) => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))}
                    </div>
                )}
            </div>
        </div>
        </GuestLayout>
    );
}

function ProductCard({ producto }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-emerald-200/60 shadow-sm transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-emerald-400/90 hover:-translate-y-1 flex flex-col">
            {/* Imagen del producto */}
            <div className="relative aspect-square bg-gradient-to-br from-emerald-50 to-lime-50 overflow-hidden">
                {producto.imagen_portada ? (
                    <img
                        src={`${producto.imagen_portada}`}
                        alt={producto.nombre}
                        className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
                        loading="lazy"
                    />
                ) : producto.imagen ? (
                    <img
                        src={`${producto.imagen}`}
                        alt={producto.nombre}
                        className="absolute inset-0 h-full w-full object-contain transition-all duration-300 group-hover:scale-110"
                        loading="lazy"
                    />
                ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-20 h-20 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                    </div>
                )}
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Nombre del producto */}
                <h3 className="text-lg font-bold text-emerald-900 mb-3 group-hover:text-emerald-700 transition-colors duration-200">
                    {producto.nombre}
                </h3>

                {/* Información del producto */}
                <div className="space-y-2 flex-grow">
                    {/* Categoría */}
                    {producto.categoria && (
                        <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            <div>
                                <p className="text-xs text-emerald-700/70 font-medium">Categoría</p>
                                <p className="text-sm text-emerald-800 font-semibold">{producto.categoria.nombre}</p>
                            </div>
                        </div>
                    )}

                    {/* Principio Activo */}
                    {producto.principio_activo_id && producto.principio_activo && (
                        <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            <div>
                                <p className="text-xs text-emerald-700/70 font-medium">Principio Activo</p>
                                <p className="text-sm text-emerald-800 font-semibold">{producto.principio_activo.nombre}</p>
                            </div>
                        </div>
                    )}

                    {/* Cultivos */}
                    {producto.cultivos && producto.cultivos.length > 0 && (
                        <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                            <div className="flex-grow">
                                <p className="text-xs text-emerald-700/70 font-medium">Cultivos</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {producto.cultivos.slice(0, 3).map((cultivo) => (
                                        <span
                                            key={cultivo.id}
                                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800"
                                        >
                                            {cultivo.nombre}
                                        </span>
                                    ))}
                                    {producto.cultivos.length > 3 && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                                            +{producto.cultivos.length - 3}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Árboles de Recomendación */}
                    {producto.arboles_recomendacion && producto.arboles_recomendacion.length > 0 && (
                        <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                            </svg>
                            <div className="flex-grow">
                                <p className="text-xs text-emerald-700/70 font-medium">Recomendación</p>
                                <div className="flex flex-wrap gap-1 mt-1">
                                    {producto.arboles_recomendacion.slice(0, 2).map((arbol) => (
                                        <span
                                            key={arbol.id}
                                            className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-lime-100 text-emerald-800"
                                        >
                                            {arbol.nombre}
                                        </span>
                                    ))}
                                    {producto.arboles_recomendacion.length > 2 && (
                                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-lime-100 text-emerald-800">
                                            +{producto.arboles_recomendacion.length - 2}
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Botón Ver más información */}
                <div className="mt-4 pt-4 border-t border-emerald-100">
                    <Link
                        href={route('productos.show', producto.id)}
                        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-emerald-700 hover:shadow-md hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                        Ver más información
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Overlay decorativo */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all duration-300" />
        </div>
    );
}

function Hero() {
    return (
        <section className="relative w-full overflow-hidden h-[46vh]" aria-label="Imagen principal - Productos">
            <div
                className="h-[46vh] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImg})` }}
                aria-hidden
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-transparent" aria-hidden />
            <div className="absolute inset-0 flex items-end">
                <div className="mx-auto max-w-7xl w-full px-4 pb-6 md:pb-10">
                    <h1 className="mt-2 text-3xl md:text-5xl font-semibold text-white drop-shadow">
                        Nuestros Productos
                    </h1>
                    <p className="mt-2 max-w-2xl text-white/85 text-sm md:text-base">
                        Descubrí nuestra línea completa de productos para el agro. Utilizá los filtros para encontrar el producto ideal para tu necesidad.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <a
                            href="#filtros-productos"
                            className="group inline-flex items-center justify-center rounded-md bg-[#00833E] px-4 py-2.5 font-medium text-white shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1">
                                <path d="M6 9l6 6 6-6" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Ver productos
                        </a>
                        <Link
                            href={route('contacto')}
                            className="group inline-flex items-center justify-center rounded-md border border-white/30 bg-white/10 px-4 py-2.5 font-medium text-white backdrop-blur transition-all duration-300 hover:bg-white/20 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 gap-2"
                        >
                            Contactar asesor
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Breadcrumbs() {
    return (
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl w-full px-4 py-4 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
                <li>
                    <Link href="/" className="hover:underline text-gray-700">Inicio</Link>
                </li>
                <li aria-hidden className="text-gray-400">/</li>
                <li className="text-gray-500" aria-current="page">Productos</li>
            </ol>
        </nav>
    );
}

