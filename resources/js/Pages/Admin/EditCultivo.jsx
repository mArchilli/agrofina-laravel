import { Head, Link, useForm, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function EditCultivo({ cultivo }) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { data, setData, put, processing, errors } = useForm({
        nombre: cultivo.nombre || '',
        descripcion: cultivo.descripcion || '',
        activo: cultivo.activo || true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.cultivos.update', cultivo.id));
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title={`Editar ${cultivo.nombre}`} />

            {/* Background con círculos de gradiente */}
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-lime-50 to-yellow-50 relative overflow-hidden">
                {/* Círculos decorativos de fondo */}
                <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-emerald-200/30 via-lime-200/30 to-yellow-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-lime-200/30 via-emerald-200/30 to-cyan-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                <div className="fixed top-1/2 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-yellow-200/20 via-emerald-200/20 to-lime-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                {/* Header */}
                <header className="relative z-50 backdrop-blur-xl bg-white/80 border-b-2 border-emerald-200/50 shadow-2xl shadow-emerald-500/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo */}
                            <Link href={route('dashboard')} className="flex items-center group">
                                <img 
                                    src="/images/logo-login.png" 
                                    alt="Logo" 
                                    className="h-12 transition-transform duration-300 group-hover:scale-105" 
                                />
                            </Link>

                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-2">
                                <Link
                                    href={route('admin.productos')}
                                    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-emerald-50/80 transition-all duration-300"
                                >
                                    📦 Productos
                                </Link>
                                <Link
                                    href="#"
                                    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-emerald-50/80 transition-all duration-300"
                                >
                                    📰 Novedades
                                </Link>
                                <Link
                                    href="#"
                                    className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-emerald-50/80 transition-all duration-300"
                                >
                                    🌾 AgroNews
                                </Link>
                            </nav>

                            {/* User Info */}
                            <div className="hidden md:flex items-center space-x-4">
                                <div className="backdrop-blur-xl bg-emerald-50/80 rounded-2xl px-4 py-2 border-2 border-emerald-200/50 shadow-lg shadow-emerald-500/10">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">
                                            {auth.user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">{auth.user.name}</p>
                                            <p className="text-xs text-emerald-600 font-medium">Administrador</p>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href={route('dashboard')}
                                    className="px-4 py-2 rounded-xl border-2 border-emerald-300 text-sm font-semibold text-emerald-700 hover:bg-emerald-50 transition-all duration-300"
                                >
                                    🏠 Volver al sitio
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="group relative px-6 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden"
                                >
                                    <span className="relative z-10">Cerrar Sesión</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                </button>
                            </div>

                            {/* Mobile menu button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-emerald-50"
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

                        {/* Mobile menu */}
                        {mobileMenuOpen && (
                            <div className="md:hidden py-4 border-t border-emerald-200/50 animate-fadeIn">
                                <div className="flex flex-col space-y-2">
                                    <Link
                                        href={route('admin.productos')}
                                        className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-emerald-50/80 transition-all duration-300"
                                    >
                                        📦 Productos
                                    </Link>
                                    <Link
                                        href="#"
                                        className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-emerald-50/80 transition-all duration-300"
                                    >
                                        📰 Novedades
                                    </Link>
                                    <Link
                                        href="#"
                                        className="px-4 py-2 rounded-xl text-sm font-semibold text-gray-700 hover:bg-emerald-50/80 transition-all duration-300"
                                    >
                                        🌾 AgroNews
                                    </Link>
                                    <div className="pt-2 border-t border-emerald-200/50">
                                        <div className="px-4 py-2">
                                            <p className="text-sm font-bold text-gray-900">{auth.user.name}</p>
                                            <p className="text-xs text-emerald-600">Administrador</p>
                                        </div>
                                        <Link
                                            href={route('dashboard')}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50/80 rounded-xl"
                                        >
                                            🏠 Volver al sitio
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-xl"
                                        >
                                            Cerrar Sesión
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </header>

                <main className="relative z-10 py-8">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Título y acciones */}
                        <div className="mb-8">
                            <div className="backdrop-blur-2xl bg-white/60 rounded-2xl p-6 border-2 border-emerald-200/40 shadow-xl">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div>
                                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-2">
                                            Editar Cultivo
                                        </h1>
                                        <p className="text-gray-700">
                                            Modificando: <span className="font-bold text-emerald-700">{cultivo.nombre}</span>
                                        </p>
                                    </div>
                                    <Link
                                        href={route('admin.cultivos')}
                                        className="inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Volver a Cultivos
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Paso indicator */}
                        <div className="mb-8">
                            <div className="backdrop-blur-xl bg-white/80 rounded-2xl p-4 border-2 border-emerald-200/40 shadow-lg">
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-lime-500 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-lg shadow-emerald-500/30">
                                        ✓
                                    </div>
                                    <span className="ml-3 text-sm font-bold text-gray-900">Editando: {cultivo.nombre}</span>
                                </div>
                            </div>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8">
                            {/* Información Principal */}
                            <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl overflow-hidden">
                                <div className="px-6 py-4 bg-gradient-to-r from-emerald-50/80 to-lime-50/80 border-b-2 border-emerald-200/40">
                                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Datos del Cultivo
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">Modifica la información básica del cultivo</p>
                                </div>
                                
                                <div className="p-6 space-y-6">
                                    {/* Nombre del cultivo */}
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-bold text-gray-900 mb-2">
                                            Nombre del Cultivo <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            id="nombre"
                                            value={data.nombre}
                                            onChange={(e) => setData('nombre', e.target.value)}
                                            className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                                            placeholder="Ej: Maíz, Soja, Trigo, Girasol..."
                                            required
                                        />
                                        {errors.nombre && (
                                            <p className="text-red-600 text-sm mt-2 flex items-center font-semibold">
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
                                            className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300 resize-none"
                                            placeholder="Describe las características del cultivo, su uso principal, época de siembra, etc..."
                                        />
                                        <p className="text-xs text-gray-600 mt-2 font-medium">
                                            💡 Información adicional sobre el cultivo que ayude a identificarlo
                                        </p>
                                        {errors.descripcion && (
                                            <p className="text-red-600 text-sm mt-2 flex items-center font-semibold">
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
                                                ✅ Cultivo activo
                                            </label>
                                            <p className="text-xs text-gray-700 mt-1">
                                                Los cultivos activos aparecerán disponibles para asociar con productos
                                            </p>
                                        </div>
                                    </div>
                                    {errors.activo && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center font-semibold">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.activo}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Información del cultivo actual */}
                            <div className="backdrop-blur-2xl bg-white/60 border-2 border-blue-200/40 rounded-2xl shadow-xl overflow-hidden">
                                <div className="px-6 py-4 bg-gradient-to-r from-blue-50/80 to-cyan-50/80 border-b-2 border-blue-200/40">
                                    <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                        <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Información del Cultivo
                                    </h3>
                                    <p className="text-sm text-gray-600 mt-1">Datos actuales del cultivo</p>
                                </div>
                                
                                <div className="p-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-emerald-200/40">
                                            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center mr-2 shadow-lg shadow-emerald-500/30">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                Detalles Actuales
                                            </h4>
                                            <dl className="space-y-3">
                                                <div>
                                                    <dt className="text-sm font-bold text-gray-600">ID:</dt>
                                                    <dd className="text-sm text-gray-900 font-semibold">#{cultivo.id}</dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-bold text-gray-600">Creado:</dt>
                                                    <dd className="text-sm text-gray-900 font-semibold">
                                                        {new Date(cultivo.created_at).toLocaleDateString('es-ES', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </dd>
                                                </div>
                                                <div>
                                                    <dt className="text-sm font-bold text-gray-600">Última actualización:</dt>
                                                    <dd className="text-sm text-gray-900 font-semibold">
                                                        {new Date(cultivo.updated_at).toLocaleDateString('es-ES', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </dd>
                                                </div>
                                            </dl>
                                        </div>
                                        
                                        <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-blue-200/40">
                                            <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-2 shadow-lg shadow-blue-500/30">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                Estado Actual
                                            </h4>
                                            <div className="space-y-3">
                                                <div className="flex items-center">
                                                    <span className={`inline-flex items-center px-4 py-2 text-sm font-bold rounded-xl shadow-lg ${
                                                        cultivo.activo
                                                            ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-emerald-500/30'
                                                            : 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-red-500/30'
                                                    }`}>
                                                        <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                                        {cultivo.activo ? '✅ Activo' : '❌ Inactivo'}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-gray-700 font-medium">
                                                    {cultivo.activo 
                                                        ? 'Este cultivo está disponible para asociar con productos'
                                                        : 'Este cultivo no está disponible actualmente'
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Botones de Acción */}
                            <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                <Link
                                    href={route('admin.cultivos')}
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
                                                Actualizando cultivo...
                                            </>
                                        ) : (
                                            <>
                                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Actualizar Cultivo
                                            </>
                                        )}
                                    </span>
                                    {!processing && (
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
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