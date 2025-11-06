import { Head, Link, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ShowCultivo({ cultivo }) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title={`Cultivo: ${cultivo.nombre}`} />

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
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        
                        {/* Título y acciones */}
                        <div className="mb-8">
                            <div className="backdrop-blur-2xl bg-white/60 rounded-2xl p-6 border-2 border-emerald-200/40 shadow-xl">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div>
                                        <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-2">
                                            Detalles del Cultivo
                                        </h1>
                                        <p className="text-gray-700">
                                            Información completa de: <span className="font-bold text-emerald-700">{cultivo.nombre}</span>
                                        </p>
                                    </div>
                                    <div className="flex flex-wrap gap-3">
                                        <Link
                                            href={route('admin.cultivos.edit', cultivo.id)}
                                            className="inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-xl bg-emerald-50/80 border-2 border-emerald-300 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                                        >
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Editar
                                        </Link>
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
                        </div>
                        
                        {/* Información Principal */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl overflow-hidden mb-8">
                            <div className="px-6 py-5 bg-gradient-to-r from-emerald-50/80 to-lime-50/80 border-b-2 border-emerald-200/40">
                                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center mr-3 shadow-lg shadow-emerald-500/30">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5l4-4 4 4" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">Información del Cultivo</h3>
                                        <p className="text-sm text-gray-600 font-medium">Detalles completos del cultivo</p>
                                    </div>
                                </h3>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Datos básicos */}
                                    <div className="backdrop-blur-xl bg-white/80 rounded-xl p-5 border-2 border-blue-200/40">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-2 shadow-lg shadow-blue-500/30">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            Datos Básicos
                                        </h4>
                                        <dl className="space-y-4">
                                            <div>
                                                <dt className="text-sm font-bold text-gray-600 mb-1">ID:</dt>
                                                <dd className="text-sm text-gray-900 font-semibold backdrop-blur-xl bg-blue-50/80 px-3 py-2 rounded-lg">
                                                    #{cultivo.id}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-bold text-gray-600 mb-1">Nombre del Cultivo:</dt>
                                                <dd className="text-lg font-bold text-gray-900 backdrop-blur-xl bg-emerald-50/80 px-3 py-2 rounded-lg">
                                                    {cultivo.nombre}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-bold text-gray-600 mb-1">Estado:</dt>
                                                <dd>
                                                    <span className={`inline-flex items-center px-4 py-2 text-sm font-bold rounded-xl shadow-lg ${
                                                        cultivo.activo
                                                            ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-emerald-500/30'
                                                            : 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-red-500/30'
                                                    }`}>
                                                        <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                                        {cultivo.activo ? '✅ Activo' : '❌ Inactivo'}
                                                    </span>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>

                                    {/* Fechas */}
                                    <div className="backdrop-blur-xl bg-white/80 rounded-xl p-5 border-2 border-purple-200/40">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-2 shadow-lg shadow-purple-500/30">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            Fechas
                                        </h4>
                                        <dl className="space-y-4">
                                            <div>
                                                <dt className="text-sm font-bold text-gray-600 mb-1">Fecha de creación:</dt>
                                                <dd className="text-sm text-gray-900 font-semibold backdrop-blur-xl bg-purple-50/80 px-3 py-2 rounded-lg">
                                                    {new Date(cultivo.created_at).toLocaleDateString('es-ES', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-bold text-gray-600 mb-1">Última actualización:</dt>
                                                <dd className="text-sm text-gray-900 font-semibold backdrop-blur-xl bg-purple-50/80 px-3 py-2 rounded-lg">
                                                    {new Date(cultivo.updated_at).toLocaleDateString('es-ES', {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                        hour: '2-digit',
                                                        minute: '2-digit'
                                                    })}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                </div>

                                {/* Descripción */}
                                {cultivo.descripcion && (
                                    <div className="mt-8 pt-6 border-t-2 border-emerald-200/40">
                                        <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-2 shadow-lg shadow-indigo-500/30">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                                </svg>
                                            </div>
                                            Descripción
                                        </h4>
                                        <div className="backdrop-blur-xl bg-indigo-50/90 px-5 py-4 rounded-xl border-2 border-indigo-200/50">
                                            <p className="text-gray-800 leading-relaxed font-medium">
                                                {cultivo.descripcion}
                                            </p>
                                        </div>
                                    </div>
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
                                    Funcionalidades
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Acciones disponibles para este cultivo</p>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-emerald-200/40">
                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center mr-2 shadow-lg shadow-emerald-500/30">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            Acciones Disponibles
                                        </h4>
                                        <ul className="text-sm text-gray-700 space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span className="font-medium">Asociar con productos específicos</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span className="font-medium">Editar información y descripción</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span className="font-medium">Activar o desactivar según necesidades</span>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-blue-200/40">
                                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-2 shadow-lg shadow-blue-500/30">
                                                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                            Información del Sistema
                                        </h4>
                                        <ul className="text-sm text-gray-700 space-y-2">
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span className="font-medium">Relación many-to-many con productos</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span className="font-medium">Búsqueda y filtrado disponible</span>
                                            </li>
                                            <li className="flex items-start">
                                                <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                                <span className="font-medium">{cultivo.activo ? '✅ Visible en formularios' : '❌ Oculto en formularios'}</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </main>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
            `}} />
        </>
    );
}