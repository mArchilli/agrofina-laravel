import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function CultivosDashboard({ cultivos }) {
    const { auth } = usePage().props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [cultivoToDelete, setCultivoToDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const filteredCultivos = cultivos.filter(cultivo =>
        cultivo.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (cultivo.descripcion && cultivo.descripcion.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleDelete = (cultivo) => {
        setCultivoToDelete(cultivo);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (cultivoToDelete) {
            router.delete(route('admin.cultivos.destroy', cultivoToDelete.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setCultivoToDelete(null);
                },
            });
        }
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title="Cultivos - Dashboard" />

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
                                <Link
                                    href={route('admin.agronews.index')}
                                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                >
                                    AgroNews
                                </Link>
                            </nav>

                            {/* User Info & Actions - Desktop */}
                            <div className="hidden md:flex items-center gap-4">
                                {/* User Card */}
                                <div className="flex items-center gap-3 px-4 py-2 backdrop-blur-xl bg-emerald-50/80 rounded-2xl border-2 border-emerald-200/50">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">
                                        {auth.user.name.charAt(0).toUpperCase()}
                                    </div>
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-gray-800">{auth.user.name}</p>
                                        <p className="text-xs text-emerald-600 font-medium">Administrador</p>
                                    </div>
                                </div>

                                {/* Volver al sitio */}
                                <Link
                                    href={route('dashboard')}
                                    className="px-4 py-2 rounded-xl border-2 border-emerald-300 text-emerald-700 font-medium hover:bg-emerald-50 transition-all duration-300"
                                >
                                    Volver al sitio
                                </Link>

                                {/* Cerrar Sesión con gradiente y shimmer */}
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
                                {/* User Info */}
                                <div className="p-4 border-b-2 border-emerald-200/50 bg-gradient-to-r from-emerald-50/50 to-lime-50/50">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-lime-500 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30">
                                            {auth.user.name.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{auth.user.name}</p>
                                            <p className="text-sm text-emerald-600 font-medium">Administrador</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Navigation Links */}
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
                                    <Link
                                        href={route('admin.agronews.index')}
                                        className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                    >
                                        <span>📰</span>
                                        <span>AgroNews</span>
                                    </Link>
                                </div>

                                {/* Actions */}
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
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    {/* Título y botón */}
                    <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 via-lime-600 to-emerald-500 bg-clip-text text-transparent mb-2">
                                Gestión de Cultivos
                            </h1>
                            <p className="text-gray-600">Administra y organiza todos los cultivos del sistema</p>
                        </div>
                        <Link
                            href={route('admin.cultivos.create')}
                            className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Nuevo Cultivo
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </Link>
                    </div>

                    {/* Buscador */}
                    <div className="mb-6 backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl p-6">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <svg className="h-6 w-6 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder="Buscar cultivos por nombre o descripción..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="block w-full pl-12 pr-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/20 transition-all duration-300"
                            />
                        </div>
                        {searchTerm && (
                            <p className="mt-3 text-sm text-emerald-600 font-medium">
                                Mostrando {filteredCultivos.length} de {cultivos.length} cultivos
                            </p>
                        )}
                    </div>

                    {/* Cards Grid */}
                    {filteredCultivos.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredCultivos.map((cultivo) => (
                                <div key={cultivo.id} className="group backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl hover:shadow-2xl hover:border-emerald-300/60 transition-all duration-300 overflow-hidden">
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                                                    {cultivo.nombre}
                                                </h3>
                                                {cultivo.descripcion && (
                                                    <p className="text-sm text-gray-600 line-clamp-2">
                                                        {cultivo.descripcion}
                                                    </p>
                                                )}
                                            </div>
                                            <span
                                                className={`flex-shrink-0 ml-2 px-3 py-1 text-xs font-bold rounded-full ${
                                                    cultivo.activo
                                                        ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30'
                                                        : 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/30'
                                                }`}
                                            >
                                                {cultivo.activo ? 'Activo' : 'Inactivo'}
                                            </span>
                                        </div>

                                        <div className="flex items-center text-sm text-gray-500 mb-4">
                                            <svg className="w-4 h-4 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {new Date(cultivo.created_at).toLocaleDateString()}
                                        </div>

                                        <div className="flex gap-2 pt-4 border-t-2 border-emerald-200/40">
                                            <Link
                                                href={route('admin.cultivos.show', cultivo.id)}
                                                className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-blue-200/60 text-blue-700 font-medium hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                </svg>
                                                Ver
                                            </Link>
                                            <Link
                                                href={route('admin.cultivos.edit', cultivo.id)}
                                                className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-amber-200/60 text-amber-700 font-medium hover:bg-amber-50 hover:border-amber-300 transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                Editar
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(cultivo)}
                                                className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-red-200/60 text-red-700 font-medium hover:bg-red-50 hover:border-red-300 transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                                Eliminar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl p-12">
                            <div className="text-center">
                                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-to-br from-emerald-400 to-lime-400 flex items-center justify-center mb-6 shadow-xl shadow-emerald-500/30">
                                    <svg
                                        className="h-12 w-12 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    {searchTerm ? 'No se encontraron cultivos' : 'No hay cultivos'}
                                </h3>
                                <p className="text-gray-600 mb-6">
                                    {searchTerm
                                        ? 'Intenta con otro término de búsqueda'
                                        : 'Comienza creando un nuevo cultivo para gestionar tu catálogo.'}
                                </p>
                                {!searchTerm && (
                                    <Link
                                        href={route('admin.cultivos.create')}
                                        className="inline-flex items-center px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold shadow-xl shadow-emerald-500/30 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-300 hover:scale-105"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        Crear Primer Cultivo
                                    </Link>
                                )}
                            </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Modal de confirmación de eliminación */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-[100] overflow-y-auto">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
                        <div 
                            className="fixed inset-0 backdrop-blur-sm bg-gray-900/50 transition-opacity"
                            onClick={() => {
                                setShowDeleteModal(false);
                                setCultivoToDelete(null);
                            }}
                        ></div>
                        
                        <div className="relative inline-block align-middle backdrop-blur-2xl bg-white/90 rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full sm:p-6 border-2 border-red-200/50">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 shadow-xl shadow-red-500/30 sm:mx-0">
                                    <svg
                                        className="h-8 w-8 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        Eliminar cultivo
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        ¿Estás seguro que deseas eliminar el cultivo <span className="font-bold text-gray-800">"{cultivoToDelete?.nombre}"</span>?
                                    </p>
                                    <p className="text-sm text-red-600 font-medium mt-2">
                                        Esta acción no se puede deshacer.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse gap-3">
                                <button
                                    type="button"
                                    onClick={confirmDelete}
                                    className="w-full inline-flex justify-center items-center rounded-xl px-6 py-3 bg-gradient-to-r from-red-600 to-orange-600 text-base font-semibold text-white shadow-xl shadow-red-500/30 hover:shadow-2xl hover:shadow-red-500/40 transition-all duration-300 sm:w-auto hover:scale-105"
                                >
                                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Eliminar
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowDeleteModal(false);
                                        setCultivoToDelete(null);
                                    }}
                                    className="mt-3 w-full inline-flex justify-center items-center rounded-xl border-2 border-gray-300 px-6 py-3 backdrop-blur-xl bg-white/80 text-base font-medium text-gray-700 hover:bg-gray-50 transition-all duration-300 sm:mt-0 sm:w-auto"
                                >
                                    Cancelar
                                </button>
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