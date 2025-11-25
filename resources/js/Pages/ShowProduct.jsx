import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';

const bannerImg = '/images/products/banner-products.jpg';

export default function ShowProduct({ producto }) {
    return (
        <GuestLayout container={false}>
            <Head title={`${producto.nombre} | Productos`} />
            
            <div className="w-full">
                <Hero />
                <Breadcrumbs producto={producto} />
                
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                    {/* Botón Volver */}
                    <div className="mb-6 flex justify-start">
                        <Link
                            href={route('productos')}
                            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-emerald-700 hover:shadow-lg hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver a Productos
                        </Link>
                    </div>

                    {/* Header del producto */}
                    <div className="mb-8">
                        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-emerald-900">
                            {producto.nombre}
                        </h1>
                        <div className="my-3">
                            <div
                                className="rounded-full mx-0"
                                style={{
                                    width: '80px',
                                    height: '8px',
                                    background: 'linear-gradient(90deg, #00833E 0%, #7ED957 100%)'
                                }}
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Imagen del producto */}
                        <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl overflow-hidden ring-1 ring-emerald-200/60 shadow-sm">
                            {producto.imagen ? (
                                <img
                                    src={`${producto.imagen}`}
                                    alt={producto.nombre}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex items-center justify-center h-96">
                                    <svg className="w-32 h-32 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        {/* Información básica */}
                        <div className="space-y-6">
                            {/* Categoría */}
                            {producto.categoria && (
                                <InfoCard
                                    icon={<CategoryIcon />}
                                    title="Categoría"
                                    content={producto.categoria.nombre}
                                />
                            )}

                            {/* Principio Activo */}
                            {producto.principio_activo_id && producto.principio_activo && (
                                <InfoCard
                                    icon={<FlaskIcon />}
                                    title="Principio Activo"
                                    content={producto.principio_activo.nombre}
                                />
                            )}

                            {/* Formulación */}
                            {producto.formulacion && (
                                <InfoCard
                                    icon={<BeakerIcon />}
                                    title="Formulación"
                                    content={producto.formulacion}
                                />
                            )}

                            {/* Cultivos */}
                            {producto.cultivos && producto.cultivos.length > 0 && (
                                <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-xl p-4 ring-1 ring-emerald-200/60 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 text-emerald-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                            </svg>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-sm font-medium text-emerald-700 mb-2">Cultivos</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {producto.cultivos.map((cultivo) => (
                                                    <span
                                                        key={cultivo.id}
                                                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-600 text-white shadow-sm"
                                                    >
                                                        {cultivo.nombre}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col gap-6">
                                {/* PDFs */}
                                {producto.pdfs && producto.pdfs.length > 0 && (
                                    <div className="order-1 lg:order-2 bg-gradient-to-br from-emerald-50 to-lime-50 rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                                        <h3 className="text-xl font-semibold text-emerald-900 mb-4 flex items-center gap-2">
                                            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Documentación Técnica
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {producto.pdfs.map((pdf, index) => (
                                                <a
                                                    key={index}
                                                    href={`${pdf}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-between border border-emerald-300 rounded-lg bg-white px-4 py-3 font-medium text-emerald-800 shadow-sm transition-all duration-300 hover:bg-emerald-50 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                                    download
                                                >
                                                    <span className="text-sm">{producto.nombre} - Documento {index + 1}.pdf</span>
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Descripción */}
                                {producto.descripcion && (
                                    <div className="order-2 lg:order-1 bg-white rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                                        <h3 className="text-xl font-semibold text-emerald-900 mb-4">Descripción</h3>
                                        <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                            {producto.descripcion}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Árboles de Recomendación */}
                            {producto.arboles_recomendacion && producto.arboles_recomendacion.length > 0 && (
                                <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-xl p-4 ring-1 ring-emerald-200/60 shadow-sm">
                                    <div className="flex items-start gap-3">
                                        <div className="flex-shrink-0 text-emerald-600">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                            </svg>
                                        </div>
                                        <div className="flex-grow">
                                            <h4 className="text-sm font-medium text-emerald-700 mb-2">Árbol de Recomendación</h4>
                                            <div className="flex flex-wrap gap-1.5">
                                                {producto.arboles_recomendacion.map((arbol) => (
                                                    <span
                                                        key={arbol.id}
                                                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-600 text-white shadow-sm"
                                                    >
                                                        {arbol.nombre}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Presentación */}
                            {producto.presentacion && (
                                <InfoCard
                                    icon={<PackageIcon />}
                                    title="Presentación"
                                    content={producto.presentacion}
                                />
                            )}

                            {/* Banda Toxicológica */}
                            {producto.banda_toxicologica && (
                                <InfoCard
                                    icon={<ShieldIcon />}
                                    title="Banda Toxicológica"
                                    content={producto.banda_toxicologica}
                                />
                            )}

                            {/* Banda */}
                            {producto.banda && (
                                <InfoCard
                                    icon={<TagIcon />}
                                    title="Banda"
                                    content={producto.banda}
                                />
                            )}
                        </div>
                    </div>



                    {/* Acción */}
                    {producto.accion && (
                        <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">Acción</h3>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {producto.accion}
                            </div>
                        </div>
                    )}

                    {/* Mecanismo de Acción */}
                    {producto.mecanismo_de_accion && (
                        <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">Mecanismo de Acción</h3>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {producto.mecanismo_de_accion}
                            </div>
                        </div>
                    )}

                    {/* Malezas */}
                    {producto.malezas && (
                        <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">Malezas</h3>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {producto.malezas}
                            </div>
                        </div>
                    )}

                    {/* Dosis */}
                    {producto.dosis && (
                        <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">Dosis</h3>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {producto.dosis}
                            </div>
                        </div>
                    )}

                    {/* Recomendaciones de Uso */}
                    {producto.recomendaciones_de_uso && (
                        <div className="mt-6 bg-white rounded-2xl p-6 ring-1 ring-emerald-200/60 shadow-sm">
                            <h3 className="text-xl font-semibold text-emerald-900 mb-4">Recomendaciones de Uso</h3>
                            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                                {producto.recomendaciones_de_uso}
                            </div>
                        </div>
                    )}




                </div>
            </div>
        </GuestLayout>
    );
}

function InfoCard({ icon, title, content }) {
    return (
        <div className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-xl p-4 ring-1 ring-emerald-200/60 shadow-sm">
            <div className="flex items-start gap-3">
                <div className="flex-shrink-0 text-emerald-600">
                    {icon}
                </div>
                <div className="flex-grow">
                    <h4 className="text-sm font-medium text-emerald-700 mb-1">{title}</h4>
                    <p className="text-base font-semibold text-emerald-900">{content}</p>
                </div>
            </div>
        </div>
    );
}

function Hero() {
    return (
        <section className="relative w-full overflow-hidden h-[46vh] md:h-screen" aria-label="Imagen principal - Productos">
            <div
                className="h-[46vh] md:h-screen w-full bg-cover bg-center"
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
                        Información detallada del producto seleccionado
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                        <Link
                            href={route('productos')}
                            className="group inline-flex items-center justify-center rounded-md bg-[#00833E] px-4 py-2.5 font-medium text-white shadow transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00833E] gap-2"
                        >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:-translate-x-1">
                                <path d="M10 3l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            Volver a productos
                        </Link>
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

function Breadcrumbs({ producto }) {
    return (
        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl w-full px-4 py-4 text-sm text-gray-600">
            <ol className="flex flex-wrap items-center gap-2">
                <li>
                    <Link href="/" className="hover:underline text-gray-700">Inicio</Link>
                </li>
                <li aria-hidden className="text-gray-400">/</li>
                <li>
                    <Link href={route('productos')} className="hover:underline text-gray-700">Productos</Link>
                </li>
                <li aria-hidden className="text-gray-400">/</li>
                <li className="text-gray-500" aria-current="page">{producto.nombre}</li>
            </ol>
        </nav>
    );
}

// Iconos
function CategoryIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
    );
}

function FlaskIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
    );
}

function BeakerIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
    );
}

function PackageIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
    );
}

function ShieldIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
    );
}

function TagIcon() {
    return (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
    );
}
