import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function CategoriasDashboard({ categorias }) {
    const { auth } = usePage().props;
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [categoriaToDelete, setCategoriaToDelete] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const filteredCategorias = categorias.data.filter(categoria =>
        categoria.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (categoria.descripcion && categoria.descripcion.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleDelete = (categoria) => {
        setCategoriaToDelete(categoria);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (categoriaToDelete) {
            router.delete(route('admin.categorias.destroy', categoriaToDelete.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setCategoriaToDelete(null);
                },
            });
        }
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title="Categorías - Dashboard" />
            
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
                                <Link
                                    href={route('admin.agronews.index')}
                                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                >
                                    AgroNews
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
                                        � Novedades
                                    </Link>
                                    <Link
                                        href={route('admin.agronews.index')}
                                        className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                    >
                                        📰 AgroNews
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
                <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Título y Botón Nueva Categoría */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-fadeIn">
                        <div>
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-lime-600 bg-clip-text text-transparent">
                                Gestión de Categorías
                            </h2>
                            <p className="text-gray-600 mt-1">
                                Organiza y administra las categorías de productos
                            </p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href={route('admin.productos')}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-50 backdrop-blur-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Gestión de Productos
                            </Link>
                            <Link
                                href={route('admin.categorias.create')}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold hover:from-emerald-700 hover:to-lime-700 transition-all duration-300 hover:scale-105 shadow-lg animate-shimmer"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Nueva Categoría
                            </Link>
                        </div>
                    </div>

                    {/* Buscador */}
                    <div className="mb-8 animate-fadeIn">
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl p-6">
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                    <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar categorías por nombre o descripción..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full pl-12 pr-4 py-4 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-300 shadow-lg"
                                />
                            </div>
                            {searchTerm && (
                                <p className="mt-3 text-sm text-gray-700 font-medium">
                                    Mostrando {filteredCategorias.length} de {categorias.data.length} categorías
                                </p>
                            )}
                        </div>
                    </div>

                    {/* Cards Grid */}
                    {filteredCategorias.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                            {filteredCategorias.map((categoria) => (
                                <div 
                                    key={categoria.id} 
                                    className="group backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl hover:shadow-2xl hover:border-emerald-300/60 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                                                    {categoria.nombre}
                                                </h3>
                                                {categoria.descripcion && (
                                                    <p className="text-sm text-gray-600 line-clamp-2">
                                                        {categoria.descripcion}
                                                    </p>
                                                )}
                                            </div>
                                            <span
                                                className={`flex-shrink-0 inline-flex px-3 py-1 text-xs font-bold rounded-full shadow-lg ${
                                                    categoria.activo
                                                        ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white'
                                                        : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                                }`}
                                            >
                                                {categoria.activo ? 'Activa' : 'Inactiva'}
                                            </span>
                                        </div>

                                        <div className="space-y-3 mb-6">
                                            <div className="flex items-center text-sm text-gray-700 backdrop-blur-xl bg-white/50 rounded-lg p-2 border border-emerald-200/30">
                                                <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                </svg>
                                                <span className="font-bold text-emerald-600">{categoria.productos_count}</span>
                                                <span className="ml-1">{categoria.productos_count === 1 ? 'producto' : 'productos'}</span>
                                            </div>
                                            <div className="flex items-center text-sm text-gray-700 backdrop-blur-xl bg-white/50 rounded-lg p-2 border border-emerald-200/30">
                                                <svg className="w-5 h-5 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                                {new Date(categoria.created_at).toLocaleDateString()}
                                            </div>
                                        </div>

                                        <div className="flex gap-2 pt-4 border-t-2 border-emerald-200/40">
                                            <Link
                                                href={route('admin.categorias.edit', categoria.id)}
                                                className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl backdrop-blur-xl bg-white/80 border-2 border-amber-200/60 text-amber-700 font-medium hover:bg-amber-50 hover:border-amber-300 transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                                Editar
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(categoria)}
                                                disabled={categoria.productos_count > 0}
                                                className={`flex-1 inline-flex items-center justify-center px-3 py-2 rounded-xl backdrop-blur-xl font-medium transition-all duration-300 ${
                                                    categoria.productos_count > 0
                                                        ? 'bg-white/80 border-2 border-gray-300 text-gray-400 cursor-not-allowed'
                                                        : 'bg-white/80 border-2 border-red-200/60 text-red-700 hover:bg-red-50 hover:border-red-300'
                                                }`}
                                                title={categoria.productos_count > 0 ? 'No se puede eliminar porque tiene productos asociados' : 'Eliminar categoría'}
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
                        <div className="backdrop-blur-2xl bg-white/60 border-2 border-emerald-200/40 rounded-2xl shadow-xl p-12 text-center animate-fadeIn">
                            <svg
                                className="mx-auto h-20 w-20 text-emerald-400 mb-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                                />
                            </svg>
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                {searchTerm ? 'No se encontraron categorías' : 'No hay categorías'}
                            </h3>
                            <p className="text-gray-600 mb-6">
                                {searchTerm
                                    ? 'Intenta con otro término de búsqueda'
                                    : 'Comienza creando una nueva categoría para organizar tus productos.'}
                            </p>
                            {!searchTerm && (
                                <Link
                                    href={route('admin.categorias.create')}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold hover:from-emerald-700 hover:to-lime-700 transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Crear Primera Categoría
                                </Link>
                            )}
                        </div>
                    )}
                </main>
            </div>

            {/* Modal de confirmación de eliminación */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
                    <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
                        <div 
                            className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm transition-opacity"
                            onClick={() => {
                                setShowDeleteModal(false);
                                setCategoriaToDelete(null);
                            }}
                        ></div>
                        
                        <div className="inline-block align-middle backdrop-blur-2xl bg-white/90 rounded-2xl px-6 pt-6 pb-6 text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full border-2 border-red-200/50">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 sm:mx-0 shadow-lg">
                                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left flex-1">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                                        Eliminar categoría
                                    </h3>
                                    <div className="backdrop-blur-xl bg-red-50/80 border-2 border-red-200/60 rounded-xl p-4">
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            ¿Estás seguro que deseas eliminar la categoría <span className="font-bold text-red-600">"{categoriaToDelete?.nombre}"</span>?
                                            <br />
                                            <span className="text-red-600 font-semibold">Esta acción no se puede deshacer.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowDeleteModal(false);
                                        setCategoriaToDelete(null);
                                    }}
                                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-xl border-2 border-gray-300 px-5 py-3 font-semibold text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    Cancelar
                                </button>
                                <button
                                    type="button"
                                    onClick={confirmDelete}
                                    className="flex-1 inline-flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 px-5 py-3 font-semibold text-white hover:from-red-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Eliminar
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