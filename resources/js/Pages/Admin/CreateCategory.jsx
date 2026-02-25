import { Head, Link, useForm, usePage, router } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateCategory() {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '',
        descripcion: '',
        activo: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        post(route('admin.categorias.store'), {
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
            <Head title="Crear Categoría" />
            
            {/* Fondo blanco con gradientes verdes-amarillos */}
            <div className="min-h-screen relative overflow-hidden bg-white">
                {/* Efectos de luz ambiental estáticos */}
                <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-400/35 via-lime-400/25 to-yellow-400/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-lime-400/35 via-green-400/25 to-emerald-400/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-green-300/20 via-lime-300/15 to-yellow-300/20 rounded-full blur-3xl"></div>

                {/* Header Superior */}
                <header className="relative z-50 backdrop-blur-xl bg-white/80 border-b border-emerald-200/50 shadow-2xl shadow-emerald-500/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo */}
                            <Link href={route('dashboard')}>
                                <img src="/images/logo-login.png" alt="Agrofina" className="h-12 w-auto transition-transform duration-300 hover:scale-105" />
                            </Link>

                            {/* Navegación entre secciones - Desktop */}
                            <nav className="hidden md:flex items-center gap-2">
                                <Link
                                    href={route('admin.productos')}
                                    className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30"
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
                                {/* Usuario */}
                                <div className="flex items-center gap-3 px-4 py-2.5 backdrop-blur-xl bg-emerald-50/80 rounded-2xl border border-emerald-200/50">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">{auth.user.name}</p>
                                        <p className="text-xs text-emerald-600">Administrador</p>
                                    </div>
                                </div>

                                {/* Volver al sitio */}
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-300 text-emerald-700 hover:text-emerald-900 hover:bg-emerald-50 transition-all duration-300"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    <span className="text-sm font-medium">Volver al sitio</span>
                                </Link>

                                {/* Cerrar Sesión */}
                                <button
                                    onClick={handleLogout}
                                    className="relative overflow-hidden px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    <span className="relative z-10 text-sm">Cerrar Sesión</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 -translate-x-full animate-shimmer"></div>
                                </button>
                            </div>

                            {/* Botón Menú Hamburguesa - Mobile */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/50 text-emerald-700 hover:bg-emerald-100 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {mobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Menú Mobile - Dropdown */}
                    {mobileMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 right-0 backdrop-blur-xl bg-white/95 border-b border-emerald-200/50 shadow-2xl shadow-emerald-500/20 animate-fadeIn">
                            <div className="max-w-7xl mx-auto px-4 py-6 space-y-4">
                                {/* Usuario Info */}
                                <div className="flex items-center gap-3 px-4 py-3 backdrop-blur-xl bg-emerald-50/80 rounded-2xl border border-emerald-200/50">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-800">{auth.user.name}</p>
                                        <p className="text-xs text-emerald-600">Administrador</p>
                                    </div>
                                </div>

                                {/* Navegación */}
                                <nav className="space-y-2">
                                    <Link
                                        href={route('admin.productos')}
                                        className="block px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30"
                                    >
                                        📦 Productos
                                    </Link>
                                    <Link
                                        href={route('admin.novedades.index')}
                                        className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                    >
                                        📢 Novedades
                                    </Link>
                                </nav>

                                {/* Acciones */}
                                <div className="space-y-2 pt-4 border-t border-emerald-200/30">
                                    <Link
                                        href="/"
                                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-all duration-300 font-semibold"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Volver al sitio
                                    </Link>
                                    <button
                                        onClick={handleLogout}
                                        className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                                    >
                                        Cerrar Sesión
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </header>

                {/* Contenido Principal */}
                <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Título y Botón Volver */}
                    <div className="mb-8 animate-fadeIn">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-2">
                                    Crear Nueva Categoría
                                </h2>
                                <p className="text-gray-600">
                                    Organiza tus productos creando una nueva categoría
                                </p>
                            </div>
                            <Link
                                href={route('admin.productos')}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-50 backdrop-blur-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Volver a Gestión de productos
                            </Link>
                        </div>
                    </div>

                    {/* Indicador de Paso */}
                    <div className="mb-8 animate-fadeIn">
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl p-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-lime-600 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-lg">
                                    1
                                </div>
                                <span className="text-lg font-semibold text-gray-900">Información de la Categoría</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 animate-fadeIn">
                        {/* Información Principal */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border-b-2 border-emerald-200/40">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a1.994 1.994 0 01-1.414.586H7a4 4 0 01-4-4V7a4 4 0 014-4z" />
                                        </svg>
                                    </div>
                                    Datos de la Categoría
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 ml-13">Información básica para organizar tus productos</p>
                            </div>
                            
                            <div className="p-8 space-y-6">
                                {/* Nombre de la categoría */}
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-800 mb-2">
                                        Nombre de la Categoría <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 shadow-lg"
                                        placeholder="Ej: Herbicidas, Insecticidas, Fertilizantes..."
                                        required
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.nombre}
                                        </p>
                                    )}
                                </div>

                                {/* Descripción */}
                                <div>
                                    <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-800 mb-2">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="descripcion"
                                        rows={4}
                                        value={data.descripcion}
                                        onChange={(e) => setData('descripcion', e.target.value)}
                                        className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 shadow-lg resize-none"
                                        placeholder="Describe el tipo de productos que incluye esta categoría..."
                                    />
                                    <p className="text-xs text-gray-600 mt-2">
                                        Ayuda a los usuarios a entender qué productos pertenecen a esta categoría
                                    </p>
                                    {errors.descripcion && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.descripcion}
                                        </p>
                                    )}
                                </div>

                                {/* Estado activo */}
                                <div className="backdrop-blur-xl bg-emerald-50/80 border-2 border-emerald-300/60 rounded-xl p-5 shadow-lg">
                                    <div className="flex items-start space-x-3">
                                        <input
                                            type="checkbox"
                                            id="activo"
                                            checked={data.activo}
                                            onChange={(e) => setData('activo', e.target.checked)}
                                            className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-emerald-300 rounded-lg mt-0.5 cursor-pointer"
                                        />
                                        <div className="flex-1">
                                            <label htmlFor="activo" className="text-sm font-bold text-gray-900 block cursor-pointer">
                                                Categoría activa
                                            </label>
                                            <p className="text-xs text-gray-700 mt-1">
                                                Las categorías activas aparecerán disponibles en el formulario de productos
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {errors.activo && (
                                    <p className="text-red-600 text-sm mt-2 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.activo}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Información Adicional */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border-b-2 border-blue-200/40">
                                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mr-3 shadow-lg">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    Información Importante
                                </h3>
                                <p className="text-sm text-gray-600 mt-2 ml-13">Tips y consideraciones sobre las categorías</p>
                            </div>
                            
                            <div className="p-8">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="backdrop-blur-xl bg-white/80 border-2 border-emerald-200/40 rounded-xl p-6 shadow-lg">
                                        <h4 className="font-bold text-gray-900 flex items-center mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-lg flex items-center justify-center mr-2 shadow">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            Buenas Prácticas
                                        </h4>
                                        <ul className="text-sm text-gray-700 space-y-3">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                <span>Usa nombres claros y descriptivos</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                <span>Agrega una descripción informativa</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                <span>Evita nombres duplicados</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="backdrop-blur-xl bg-white/80 border-2 border-blue-200/40 rounded-xl p-6 shadow-lg">
                                        <h4 className="font-bold text-gray-900 flex items-center mb-4">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-2 shadow">
                                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            Funcionalidades
                                        </h4>
                                        <ul className="text-sm text-gray-700 space-y-3">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                <span>Organiza productos por tipo</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                <span>Facilita la búsqueda y filtrado</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                                                <span>Puedes editarla después de crearla</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl p-8">
                            <div className="flex flex-col-reverse sm:flex-row gap-4 justify-end">
                                <Link
                                    href={route('admin.categorias')}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-gray-400 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold hover:from-emerald-700 hover:to-lime-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 shadow-lg animate-shimmer"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Creando categoría...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                            Crear Categoría
                                        </>
                                    )}
                                </button>
                            </div>
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
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}} />
        </>
    );
}