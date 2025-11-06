import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function ProductosDashboard({ auth, productos, categorias }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [processingToggle, setProcessingToggle] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(productos.data || []);
        } else {
            setFilteredProducts((productos.data || []).filter(
                producto => producto.categoria_id == selectedCategory
            ));
        }
    }, [selectedCategory, productos.data]);

    const handleDelete = (producto) => {
        setProductToDelete(producto);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (productToDelete) {
            router.delete(route('admin.productos.destroy', productToDelete.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setProductToDelete(null);
                },
            });
        }
    };

    const handleToggleStatus = (producto) => {
        setProcessingToggle(producto.id);
        router.patch(route('admin.productos.toggle-status', producto.id), {}, {
            onSuccess: () => {
                setProcessingToggle(null);
            },
            onError: () => {
                setProcessingToggle(null);
            }
        });
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title="Productos - Dashboard" />

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
                                        📢 Novedades
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
                    {/* Sección de Header con Título y Botón */}
                    <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-lime-600 text-transparent bg-clip-text">
                                Gestión de Productos
                            </h1>
                            <p className="text-gray-600 mt-2">Administra el catálogo de productos agroquímicos</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Link
                                href={route('dashboard')}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-50 backdrop-blur-sm"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Panel de administración
                            </Link>
                            <Link
                                href={route('admin.productos.create')}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Nuevo Producto
                            </Link>
                        </div>
                    </div>

                    {/* 4 Mini-Cards de Gestión */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                        {/* Categorías */}
                        <Link
                            href={route('admin.categorias')}
                            className="group relative overflow-hidden backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl p-6 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-500"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">Categorías</h3>
                                <p className="text-sm text-gray-600">Gestionar categorías</p>
                            </div>
                        </Link>

                        {/* Cultivos */}
                        <Link
                            href={route('admin.cultivos')}
                            className="group relative overflow-hidden backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl p-6 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-green-500/30 hover:scale-105 transition-all duration-500"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-green-500/20 to-green-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">Cultivos</h3>
                                <p className="text-sm text-gray-600">Gestionar cultivos</p>
                            </div>
                        </Link>

                        {/* Principios Activos */}
                        <Link
                            href={route('admin.principios-activos')}
                            className="group relative overflow-hidden backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl p-6 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-purple-500/30 hover:scale-105 transition-all duration-500"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-purple-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">Principios Activos</h3>
                                <p className="text-sm text-gray-600">Gestionar principios</p>
                            </div>
                        </Link>

                        {/* Árboles de Recomendación */}
                        <Link
                            href={route('admin.arboles-recomendacion')}
                            className="group relative overflow-hidden backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl p-6 shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-amber-500/30 hover:scale-105 transition-all duration-500"
                        >
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                            <div className="relative">
                                <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">Árboles</h3>
                                <p className="text-sm text-gray-600">Recomendaciones</p>
                            </div>
                        </Link>
                    </div>

                    {/* Filtro de Categorías */}
                    <div className="mb-6 backdrop-blur-xl bg-white/60 border border-emerald-200/50 rounded-2xl p-6 shadow-lg shadow-emerald-500/20">
                        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <label htmlFor="category-filter" className="text-sm font-semibold text-gray-800">
                                    Filtrar por categoría:
                                </label>
                                <select
                                    id="category-filter"
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl px-4 py-2 pr-10 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3cpath%20d%3D%22M7%207l3-3%203%203m0%206l-3%203-3-3%22%20stroke%3D%22%239CA3AF%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3c%2Fsvg%3E')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat"
                                >
                                    <option value="all">Todas las categorías</option>
                                    {categorias && categorias.map((categoria) => (
                                        <option key={categoria.id} value={categoria.id}>
                                            {categoria.nombre}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 backdrop-blur-xl bg-emerald-50/80 border border-emerald-200/50 rounded-xl">
                                <span className="text-sm font-semibold text-emerald-700">
                                    {filteredProducts.length}
                                </span>
                                <span className="text-sm text-gray-600">
                                    de {productos.data?.length || 0} productos
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Grid de Productos */}
                    {/* Grid de Productos */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredProducts.map((producto) => (
                            <div key={producto.id} className="group relative overflow-hidden backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl shadow-lg shadow-emerald-500/20 hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-500">
                                {/* Barra superior degradada */}
                                <div className="h-1 bg-gradient-to-r from-emerald-500 via-lime-500 to-yellow-500"></div>
                                
                                {/* Imagen del producto */}
                                <div className="aspect-w-16 aspect-h-9 w-full h-48 bg-gradient-to-br from-emerald-50/50 to-lime-50/50 overflow-hidden">
                                    {producto.imagen ? (
                                        <img
                                            src={producto.imagen}
                                            alt={producto.nombre}
                                            className="w-full h-full object-contain p-4"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-2xl flex items-center justify-center">
                                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 112.828 2.828L16 19M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Contenido de la tarjeta */}
                                <div className="p-5">
                                    {/* Header con Nombre y Estado */}
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-lg font-bold text-gray-900 truncate flex-1 mr-2">
                                            {producto.nombre}
                                        </h3>
                                        <span
                                            className={`inline-flex px-3 py-1 text-xs font-bold rounded-lg shadow-sm ${
                                                producto.activo
                                                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                                    : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                            }`}
                                        >
                                            {producto.activo ? 'Activo' : 'Inactivo'}
                                        </span>
                                    </div>

                                    {/* Información del Producto */}
                                    <div className="space-y-2 mb-4">
                                        <p className="text-sm text-gray-700">
                                            <span className="font-semibold text-gray-800">Categoría:</span>{' '}
                                            <span className="text-emerald-700">{producto.categoria?.nombre || 'Sin categoría'}</span>
                                        </p>
                                        {producto.principio_activo && (
                                            <p className="text-sm text-gray-700">
                                                <span className="font-semibold text-gray-800">Principio activo:</span>{' '}
                                                <span className="text-emerald-700">{producto.principio_activo}</span>
                                            </p>
                                        )}
                                        {producto.descripcion && (
                                            <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                                                {producto.descripcion}
                                            </p>
                                        )}
                                    </div>

                                    {/* Footer con Fecha y Acciones */}
                                    <div className="flex items-center justify-between pt-4 border-t border-emerald-200/30">
                                        <span className="text-xs text-gray-500 font-medium">
                                            {new Date(producto.created_at).toLocaleDateString()}
                                        </span>
                                        <div className="flex gap-2">
                                            {/* Toggle Estado */}
                                            <button
                                                onClick={() => handleToggleStatus(producto)}
                                                disabled={processingToggle === producto.id}
                                                className={`p-2 rounded-xl transition-all duration-300 ${
                                                    producto.activo 
                                                        ? 'bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white shadow-lg shadow-yellow-500/30'
                                                        : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg shadow-green-500/30'
                                                } ${processingToggle === producto.id ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110'}`}
                                                title={producto.activo ? 'Desactivar' : 'Activar'}
                                            >
                                                {processingToggle === producto.id ? (
                                                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                ) : producto.activo ? (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                )}
                                            </button>

                                            {/* Editar */}
                                            <Link
                                                href={route('admin.productos.edit', producto.id)}
                                                className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/30 hover:scale-110 transition-all duration-300"
                                                title="Editar"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </Link>

                                            {/* Eliminar */}
                                            <button
                                                onClick={() => handleDelete(producto)}
                                                className="p-2 rounded-xl border-2 border-red-500 text-red-600 hover:bg-red-500 hover:text-white hover:scale-110 transition-all duration-300"
                                                title="Eliminar"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Estado Vacío */}
                    {filteredProducts.length === 0 && (
                        <div className="backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl p-12 text-center shadow-xl shadow-emerald-500/20">
                            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-lime-500 rounded-full flex items-center justify-center">
                                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">No hay productos</h3>
                            <p className="text-gray-600 mb-6">
                                {selectedCategory
                                    ? 'No hay productos en esta categoría'
                                    : 'Comienza agregando tu primer producto al catálogo'}
                            </p>
                            {!selectedCategory && (
                                <Link
                                    href={route('admin.productos.create')}
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Crear Producto
                                </Link>
                            )}
                        </div>
                    )}
                </main>

                {/* Modal de confirmación de eliminación */}
                {showDeleteModal && (
                    <div className="fixed inset-0 z-50 overflow-y-auto animate-fadeIn">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            {/* Overlay */}
                            <div className="fixed inset-0 backdrop-blur-sm bg-gray-900/50 transition-opacity"></div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                            
                            {/* Modal Panel */}
                            <div className="inline-block align-bottom backdrop-blur-xl bg-white/90 border border-emerald-200/40 rounded-2xl px-4 pt-5 pb-4 text-left overflow-hidden shadow-2xl shadow-emerald-500/30 transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                                <div className="sm:flex sm:items-start">
                                    {/* Icono de Advertencia */}
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 sm:mx-0 sm:h-12 sm:w-12">
                                        <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                    </div>
                                    
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                        <h3 className="text-xl leading-6 font-bold text-gray-900 mb-4">
                                            Eliminar producto
                                        </h3>
                                        
                                        {/* Información del producto */}
                                        {productToDelete && (
                                            <div className="backdrop-blur-xl bg-emerald-50/80 border border-emerald-200/50 rounded-xl p-4 mb-4">
                                                <div className="flex items-start space-x-4">
                                                    {/* Imagen del producto */}
                                                    <div className="w-16 h-16 bg-white rounded-xl border-2 border-emerald-200/50 flex-shrink-0 overflow-hidden">
                                                        {productToDelete.imagen ? (
                                                            <img
                                                                src={productToDelete.imagen}
                                                                alt={productToDelete.nombre}
                                                                className="w-full h-full object-contain"
                                                            />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center">
                                                                <svg className="w-6 h-6 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 112.828 2.828L16 19M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                </svg>
                                                            </div>
                                                        )}
                                                    </div>
                                                    
                                                    {/* Información del producto */}
                                                    <div className="flex-1 min-w-0">
                                                        <h4 className="text-sm font-bold text-gray-900 truncate">
                                                            {productToDelete.nombre}
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            <span className="font-medium">Categoría:</span> {productToDelete.categoria?.nombre || 'Sin categoría'}
                                                        </p>
                                                        {productToDelete.principio_activo && (
                                                            <p className="text-sm text-gray-600">
                                                                <span className="font-medium">Principio activo:</span> {productToDelete.principio_activo}
                                                            </p>
                                                        )}
                                                        <div className="mt-2">
                                                            <span
                                                                className={`inline-flex px-2 py-1 text-xs font-semibold rounded-lg ${
                                                                    productToDelete.activo
                                                                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                                                        : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                                                }`}
                                                            >
                                                                {productToDelete.activo ? 'Activo' : 'Inactivo'}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-600">
                                                ¿Estás seguro que deseas eliminar este producto? Esta acción eliminará toda la información asociada, incluyendo imágenes y documentos PDF.
                                            </p>
                                            <div className="mt-3 p-3 backdrop-blur-xl bg-yellow-50/80 border border-yellow-300/50 rounded-xl">
                                                <p className="text-sm text-yellow-800">
                                                    <span className="font-bold">⚠️ Advertencia:</span> Esta acción no se puede deshacer.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Botones de Acción */}
                                <div className="mt-6 sm:mt-5 flex flex-col-reverse sm:flex-row sm:justify-end gap-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowDeleteModal(false);
                                            setProductToDelete(null);
                                        }}
                                        className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-2.5 rounded-xl border-2 border-emerald-300 text-emerald-700 font-semibold hover:bg-emerald-50 transition-all duration-300"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        type="button"
                                        onClick={confirmDelete}
                                        className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold shadow-lg shadow-red-500/30 hover:shadow-xl hover:scale-105 transition-all duration-300"
                                    >
                                        Sí, eliminar producto
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <style jsx="true">{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </>
    );
}