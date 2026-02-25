import { Head, Link, useForm, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function CreatePrincipioActivo() {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '',
        descripcion: '',
        activo: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        post(route('admin.principios-activos.store'), {
            onSuccess: () => {
                reset();
            },
        });
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title="Crear Principio Activo" />

            {/* Fondo con gradientes estáticos */}
            <div className="fixed inset-0 bg-white -z-10">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/35 via-lime-400/25 to-yellow-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-lime-400/30 via-emerald-400/20 to-cyan-400/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-yellow-400/20 via-emerald-400/15 to-lime-400/10 rounded-full blur-3xl"></div>
            </div>

            <div className="min-h-screen">
                {/* Header */}
                <header className="relative z-50 h-20 backdrop-blur-xl bg-white/80 border-b-2 border-emerald-200/50 shadow-2xl shadow-emerald-500/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                        <div className="flex justify-between items-center h-full">
                            {/* Logo */}
                            <Link href={route('dashboard')} className="flex items-center group">
                                <img 
                                    src="/images/logo-login.png" 
                                    alt="Agrofina Logo" 
                                    className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center gap-2">
                                <Link
                                    href={route('admin.productos')}
                                    className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30 transition-all duration-300"
                                >
                                    Productos
                                </Link>
                                <Link
                                    href={route('admin.novedades.index')}
                                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                >
                                    Novedades
                                </Link>
                            </nav>

                            {/* User Info & Actions - Desktop */}
                            <div className="hidden md:flex items-center gap-4">
                                {/* User Card */}
                                <div className="flex items-center gap-3 px-4 py-2 backdrop-blur-xl bg-emerald-50/80 rounded-2xl border-2 border-emerald-200/50">
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-gray-800">{auth.user.name}</p>
                                        <p className="text-xs text-emerald-600 font-medium">Administrador</p>
                                    </div>
                                </div>

                                {/* Volver al sitio */}
                                <Link
                                    href="/"
                                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-50 backdrop-blur-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Volver al sitio
                                </Link>

                                {/* Cerrar Sesión */}
                                <button
                                    onClick={handleLogout}
                                    className="relative px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-medium shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden group hover:scale-105"
                                >
                                    <span className="relative z-10">Cerrar Sesión</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </button>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-xl bg-emerald-50/80 border-2 border-emerald-200/50 text-emerald-700 hover:bg-emerald-100/80 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>

                        {/* Mobile Navigation Dropdown */}
                        {mobileMenuOpen && (
                            <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 backdrop-blur-xl bg-white/95 rounded-2xl border-2 border-emerald-200/50 shadow-2xl shadow-emerald-500/20 overflow-hidden animate-fadeIn">
                                <div className="p-4 border-b-2 border-emerald-200/50 bg-gradient-to-r from-emerald-50/50 to-lime-50/50">
                                    <div>
                                        <p className="font-semibold text-gray-800">{auth.user.name}</p>
                                        <p className="text-sm text-emerald-600 font-medium">Administrador</p>
                                    </div>
                                </div>

                                <div className="p-2">
                                    <Link
                                        href={route('admin.productos')}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-lime-500 text-white font-medium shadow-lg shadow-emerald-500/30 mb-2"
                                    >
                                        <span>🌱</span>
                                        <span>Productos</span>
                                    </Link>
                                    <Link
                                        href={route('admin.novedades.index')}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300 mb-2"
                                    >
                                        <span>📢</span>
                                        <span>Novedades</span>
                                    </Link>
                                </div>

                                <div className="p-4 border-t-2 border-emerald-200/50 space-y-2 bg-gradient-to-r from-emerald-50/30 to-lime-50/30">
                                    <Link
                                        href={route('dashboard')}
                                        className="block w-full px-4 py-2 text-center rounded-xl border-2 border-emerald-300 text-emerald-700 font-medium hover:bg-emerald-50 transition-all duration-300"
                                    >
                                        Volver al sitio
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-medium shadow-lg shadow-emerald-500/30"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                {/* Main Content */}
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Título y botón volver */}
                    <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-lime-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                                Crear Nuevo Principio Activo
                            </h1>
                            <p className="text-gray-600">Agrega un nuevo principio activo al catálogo</p>
                        </div>
                        <Link
                            href={route('admin.principios-activos')}
                            className="inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 text-emerald-700 font-medium hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver a Principios Activos
                        </Link>
                    </div>

                    {/* Indicador de Paso */}
                    <div className="mb-6 backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl p-4">
                        <div className="flex items-center">
                            <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-lime-500 text-white rounded-xl flex items-center justify-center text-base font-bold shadow-lg shadow-emerald-500/30">
                                1
                            </div>
                            <span className="ml-3 text-base font-semibold text-gray-800">Información del Principio Activo</span>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Información Principal */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-emerald-50/80 to-lime-50/80 border-b-2 border-emerald-200/40">
                                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    Datos del Principio Activo
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Información básica del principio activo</p>
                            </div>
                            
                            <div className="p-6 space-y-6">
                                {/* Nombre del principio activo */}
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-bold text-gray-900 mb-2">
                                        Nombre del Principio Activo <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                                        placeholder="Ej: Glifosato, 2,4-D, Atrazina..."
                                        required
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.nombre}
                                        </p>
                                    )}
                                </div>

                                {/* Descripción */}
                                <div>
                                    <label htmlFor="descripcion" className="block text-sm font-bold text-gray-900 mb-2">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="descripcion"
                                        rows={4}
                                        value={data.descripcion}
                                        onChange={(e) => setData('descripcion', e.target.value)}
                                        className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                                        placeholder="Describe las características del principio activo, su modo de acción, grupo químico, etc..."
                                    />
                                    <p className="text-xs text-gray-500 mt-2">
                                        Información técnica sobre el principio activo que ayude a identificarlo y utilizarlo
                                    </p>
                                    {errors.descripcion && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.descripcion}
                                        </p>
                                    )}
                                </div>

                                {/* Estado activo */}
                                <div className="flex items-start space-x-3 p-4 backdrop-blur-xl bg-emerald-50/80 rounded-xl border-2 border-emerald-300/60">
                                    <input
                                        type="checkbox"
                                        id="activo"
                                        checked={data.activo}
                                        onChange={(e) => setData('activo', e.target.checked)}
                                        className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-emerald-300 rounded mt-0.5"
                                    />
                                    <div className="flex-1">
                                        <label htmlFor="activo" className="text-sm font-bold text-gray-900 block">
                                            Principio activo activo
                                        </label>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Los principios activos marcados como activos estarán disponibles para usar en productos
                                        </p>
                                    </div>
                                </div>
                                {errors.activo && (
                                    <p className="text-red-600 text-sm mt-2 flex items-center font-medium">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.activo}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Información Adicional */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-blue-200/40 rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border-b-2 border-blue-200/40">
                                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Información Importante
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Tips y consideraciones sobre los principios activos</p>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-emerald-200/40">
                                        <h4 className="font-bold text-gray-900 flex items-center mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center mr-2 shadow-lg shadow-emerald-500/30">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            Buenas Prácticas
                                        </h4>
                                        <ul className="text-sm text-gray-700 space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                Usa nombres técnicos precisos
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                Incluye información sobre el modo de acción
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                Evita nombres duplicados o similares
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-blue-200/40">
                                        <h4 className="font-bold text-gray-900 flex items-center mb-3">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-2 shadow-lg shadow-blue-500/30">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            Funcionalidades
                                        </h4>
                                        <ul className="text-sm text-gray-700 space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                Se utilizará en formularios de productos
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                Facilita la búsqueda y clasificación
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                Puedes editarlo después de crearlo
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-end">
                            <Link
                                href={route('admin.principios-activos')}
                                className="inline-flex items-center justify-center px-6 py-3 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-gray-300 text-base font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
                            >
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                                Cancelar
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="group relative inline-flex items-center justify-center px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white text-base font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center">
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creando principio activo...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Crear Principio Activo
                                        </>
                                    )}
                                </span>
                                {!processing && (
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                )}
                            </button>
                        </div>
                    </form>
                </main>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-shimmer {
                    background-size: 200% 200%;
                    animation: shimmer 3s ease-in-out infinite;
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}} />
        </>
    );
}