import { Head, Link, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ShowPrincipioActivo({ principioActivo }) {
    const { auth } = usePage().props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        router.delete(route('admin.principios-activos.destroy', { principio_activo: principioActivo.id }));
        setShowDeleteModal(false);
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title={principioActivo.nombre} />

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
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                        
                        {/* Título y acciones */}
                        <div className="backdrop-blur-2xl bg-white/60 rounded-2xl p-6 border-2 border-emerald-200/40 shadow-xl">
                            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent mb-2">
                                        Detalle del Principio Activo
                                    </h1>
                                    <p className="text-gray-700">
                                        Viendo información completa de: <span className="font-bold text-emerald-700">{principioActivo.nombre}</span>
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">
                                    <Link
                                        href={route('admin.principios-activos.edit', { principio_activo: principioActivo.id })}
                                        className="inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-xl bg-emerald-50/80 border-2 border-emerald-300 text-sm font-semibold text-emerald-700 hover:bg-emerald-100 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Editar
                                    </Link>
                                    <Link
                                        href={route('admin.principios-activos')}
                                        className="inline-flex items-center px-4 py-2 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-gray-300 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-300"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Volver al Listado
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                        {/* Información Principal */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-5 bg-gradient-to-r from-emerald-50/80 to-lime-50/80 border-b-2 border-emerald-200/40">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                                    <div className="flex items-center">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center mr-4 shadow-lg shadow-emerald-500/30">
                                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-900">{principioActivo.nombre}</h3>
                                            <p className="text-sm text-gray-600 font-medium">ID: {principioActivo.id}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center">
                                        <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold shadow-lg ${
                                            principioActivo.activo 
                                                ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-emerald-500/30' 
                                                : 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-red-500/30'
                                        }`}>
                                            <div className={`w-3 h-3 rounded-full mr-2 ${
                                                principioActivo.activo ? 'bg-white' : 'bg-white'
                                            }`}></div>
                                            {principioActivo.activo ? '✅ Activo' : '❌ Inactivo'}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-8">
                                    {/* Información Básica */}
                                    <div className="space-y-6">
                                        <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-emerald-200/40">
                                            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center mr-2 shadow-lg shadow-emerald-500/30">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                                    </svg>
                                                </div>
                                                Nombre del Principio Activo
                                            </h4>
                                            <p className="text-lg font-bold text-gray-900 backdrop-blur-xl bg-emerald-50/80 rounded-xl p-3 border-2 border-emerald-200/50">
                                                {principioActivo.nombre}
                                            </p>
                                        </div>

                                        <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-blue-200/40">
                                            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mr-2 shadow-lg shadow-blue-500/30">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                Estado
                                            </h4>
                                            <div className={`p-4 rounded-xl border-2 ${
                                                principioActivo.activo 
                                                    ? 'backdrop-blur-xl bg-emerald-50/90 border-emerald-300' 
                                                    : 'backdrop-blur-xl bg-red-50/90 border-red-300'
                                            }`}>
                                                <div className="flex items-center">
                                                    <div className={`w-4 h-4 rounded-full mr-3 ${
                                                        principioActivo.activo ? 'bg-gradient-to-r from-emerald-500 to-lime-500 shadow-lg shadow-emerald-500/50' : 'bg-gradient-to-r from-red-500 to-orange-500 shadow-lg shadow-red-500/50'
                                                    }`}></div>
                                                    <span className={`text-sm font-bold ${
                                                        principioActivo.activo ? 'text-emerald-800' : 'text-red-800'
                                                    }`}>
                                                        {principioActivo.activo ? '✅ Principio Activo Activo' : '❌ Principio Activo Inactivo'}
                                                    </span>
                                                </div>
                                                <p className={`text-xs mt-2 font-medium ${
                                                    principioActivo.activo ? 'text-emerald-700' : 'text-red-700'
                                                }`}>
                                                    {principioActivo.activo 
                                                        ? 'Este principio activo está disponible para usar en productos' 
                                                        : 'Este principio activo no está disponible para usar en productos'
                                                    }
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fechas del Sistema */}
                                    <div className="space-y-6">
                                        <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-purple-200/40">
                                            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mr-2 shadow-lg shadow-purple-500/30">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                </div>
                                                Fecha de Creación
                                            </h4>
                                            <p className="text-gray-800 font-semibold backdrop-blur-xl bg-purple-50/80 rounded-xl p-3 border-2 border-purple-200/50">
                                                {principioActivo.created_at ? new Date(principioActivo.created_at).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                }) : 'No disponible'}
                                            </p>
                                        </div>

                                        <div className="backdrop-blur-xl bg-white/80 rounded-xl p-4 border-2 border-orange-200/40">
                                            <h4 className="text-sm font-bold text-gray-900 mb-3 flex items-center">
                                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mr-2 shadow-lg shadow-orange-500/30">
                                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                    </svg>
                                                </div>
                                                Última Modificación
                                            </h4>
                                            <p className="text-gray-800 font-semibold backdrop-blur-xl bg-orange-50/80 rounded-xl p-3 border-2 border-orange-200/50">
                                                {principioActivo.updated_at ? new Date(principioActivo.updated_at).toLocaleDateString('es-ES', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                }) : 'No disponible'}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Descripción */}
                                {principioActivo.descripcion && (
                                    <div className="mt-8 pt-6 border-t-2 border-emerald-200/40">
                                        <h4 className="text-sm font-bold text-gray-900 mb-4 flex items-center">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mr-2 shadow-lg shadow-indigo-500/30">
                                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                            Descripción
                                        </h4>
                                        <div className="backdrop-blur-xl bg-indigo-50/90 rounded-xl p-5 border-2 border-indigo-200/50">
                                            <p className="text-gray-800 whitespace-pre-wrap leading-relaxed font-medium">
                                                {principioActivo.descripcion}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Acciones */}
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-gray-200/40 rounded-2xl shadow-xl overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-slate-50/80 to-gray-50/80 border-b-2 border-gray-200/40">
                                <h3 className="text-lg font-bold text-gray-900 flex items-center">
                                    <svg className="w-6 h-6 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                    </svg>
                                    Acciones Disponibles
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Operaciones que puedes realizar con este principio activo</p>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    <Link
                                        href={route('admin.principios-activos.edit', { principio_activo: principioActivo.id })}
                                        className="flex items-center justify-center px-6 py-4 backdrop-blur-xl bg-emerald-50/90 hover:bg-emerald-100/90 text-emerald-700 border-2 border-emerald-300 rounded-xl transition-all duration-300 group font-semibold shadow-lg shadow-emerald-500/20 hover:scale-105"
                                    >
                                        <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg>
                                        Editar Principio Activo
                                    </Link>

                                    <Link
                                        href={route('admin.principios-activos')}
                                        className="flex items-center justify-center px-6 py-4 backdrop-blur-xl bg-blue-50/90 hover:bg-blue-100/90 text-blue-700 border-2 border-blue-300 rounded-xl transition-all duration-300 group font-semibold shadow-lg shadow-blue-500/20 hover:scale-105"
                                    >
                                        <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                        </svg>
                                        Ver Todos
                                    </Link>

                                    <button
                                        onClick={() => setShowDeleteModal(true)}
                                        className="flex items-center justify-center px-6 py-4 backdrop-blur-xl bg-red-50/90 hover:bg-red-100/90 text-red-700 border-2 border-red-300 rounded-xl transition-all duration-300 group font-semibold shadow-lg shadow-red-500/20 hover:scale-105"
                                    >
                                        <svg className="w-6 h-6 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Eliminar
                                    </button>
                                </div>

                                {/* Información adicional */}
                                <div className="mt-6 p-5 backdrop-blur-xl bg-amber-50/90 border-2 border-amber-300 rounded-xl shadow-lg shadow-amber-500/20">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <svg className="w-6 h-6 text-amber-500 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-amber-900">⚠️ Consideraciones importantes</h3>
                                            <div className="text-sm text-amber-800 mt-2 space-y-1 font-medium">
                                                <p>• Al eliminar un principio activo, se perderán todas las relaciones con productos existentes</p>
                                                <p>• Los principios activos inactivos no aparecerán en los formularios de creación de productos</p>
                                                <p>• Puedes reactivar un principio activo en cualquier momento desde la edición</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Modal de confirmación de eliminación */}
            {showDeleteModal && (
                <div className="fixed inset-0 backdrop-blur-sm bg-gray-900/50 overflow-y-auto h-full w-full z-50 animate-fadeIn">
                    <div className="relative top-20 mx-auto p-5 w-full max-w-md">
                        <div className="backdrop-blur-2xl bg-white/90 rounded-2xl shadow-2xl border-2 border-red-200/50">
                            <div className="p-6">
                                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-lg shadow-red-500/30">
                                    <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <div className="mt-5 text-center">
                                    <h3 className="text-xl font-bold text-gray-900">⚠️ ¿Confirmar eliminación?</h3>
                                    <p className="text-sm text-gray-700 mt-3 font-medium">
                                        ¿Estás seguro de que deseas eliminar el principio activo "<strong className="text-red-700">{principioActivo.nombre}</strong>"? 
                                    </p>
                                    <p className="text-sm text-red-600 mt-2 font-semibold">
                                        Esta acción no se puede deshacer y se perderán todas las relaciones con productos.
                                    </p>
                                </div>
                                <div className="mt-6 flex gap-3">
                                    <button
                                        onClick={() => setShowDeleteModal(false)}
                                        className="flex-1 px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-gray-300 text-gray-700 text-base font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="flex-1 px-4 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white text-base font-semibold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 hover:scale-105"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

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