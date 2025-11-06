import { Head, Link, router, usePage } from '@inertiajs/react';
import { useState, useMemo } from 'react';

export default function NovedadesDashboard({ auth, novedades }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleDelete = (id) => {
        if (confirm('¿Está seguro de que desea eliminar esta novedad?')) {
            router.delete(route('admin.novedades.destroy', id));
        }
    };

    const handleToggle = (id) => {
        router.patch(route('admin.novedades.toggle', id));
    };

    const handleLogout = () => {
        router.post(route('logout'));
    };

    // Obtener años y meses únicos de las novedades
    const availableDates = useMemo(() => {
        const years = new Set();
        const months = new Set();
        
        novedades.forEach(novedad => {
            const fecha = new Date(novedad.fecha_carga);
            years.add(fecha.getFullYear());
            months.add(fecha.getMonth());
        });

        return {
            years: Array.from(years).sort((a, b) => b - a),
            months: Array.from(months).sort((a, b) => a - b)
        };
    }, [novedades]);

    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    // Filtrar novedades
    const filteredNovedades = novedades.filter((novedad) => {
        const matchesSearch = novedad.titulo.toLowerCase().includes(searchTerm.toLowerCase());
        
        const fecha = new Date(novedad.fecha_carga);
        const matchesYear = selectedYear === '' || fecha.getFullYear() === parseInt(selectedYear);
        const matchesMonth = selectedMonth === '' || fecha.getMonth() === parseInt(selectedMonth);

        return matchesSearch && matchesYear && matchesMonth;
    });

    return (
        <>
            <Head title="Novedades Dashboard" />

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
                                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                >
                                    Productos
                                </Link>
                                <Link
                                    href={route('admin.novedades.index')}
                                    className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30"
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
                                        className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
                                    >
                                        📦 Productos
                                    </Link>
                                    <Link
                                        href={route('admin.novedades.index')}
                                        className="block px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30"
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
                    {/* Header de la sección */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 animate-fadeIn">
                        <div className="flex-1">
                            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
                                Gestión de <span className="bg-gradient-to-r from-emerald-600 via-lime-500 to-yellow-500 bg-clip-text text-transparent">Novedades</span>
                            </h1>
                            <p className="text-emerald-700/80 mt-2">Administra las novedades del sitio</p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                            <Link
                                href={route('dashboard')}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-50 backdrop-blur-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Panel de Administración
                            </Link>
                            <Link
                                href={route('admin.novedades.create')}
                                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                                Nueva Novedad
                            </Link>
                        </div>
                    </div>

                    {/* Buscador y Filtros */}
                    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4 animate-fadeIn">
                        {/* Buscador */}
                        <div className="md:col-span-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Buscar por título..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full rounded-xl backdrop-blur-xl bg-white/60 border-2 border-emerald-200/50 pl-10 pr-4 py-3 focus:border-emerald-500 focus:ring-0 focus:bg-white/80 transition-all shadow-lg shadow-emerald-500/10"
                                />
                                <svg className="absolute left-3 top-3.5 h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Filtro por Año */}
                        <div>
                            <select
                                value={selectedYear}
                                onChange={(e) => setSelectedYear(e.target.value)}
                                className="w-full rounded-xl backdrop-blur-xl bg-white/60 border-2 border-emerald-200/50 px-4 py-3 focus:border-emerald-500 focus:ring-0 focus:bg-white/80 transition-all shadow-lg shadow-emerald-500/10 text-gray-700 font-medium"
                            >
                                <option value="">Todos los años</option>
                                {availableDates.years.map(year => (
                                    <option key={year} value={year}>{year}</option>
                                ))}
                            </select>
                        </div>

                        {/* Filtro por Mes */}
                        <div>
                            <select
                                value={selectedMonth}
                                onChange={(e) => setSelectedMonth(e.target.value)}
                                className="w-full rounded-xl backdrop-blur-xl bg-white/60 border-2 border-emerald-200/50 px-4 py-3 focus:border-emerald-500 focus:ring-0 focus:bg-white/80 transition-all shadow-lg shadow-emerald-500/10 text-gray-700 font-medium"
                            >
                                <option value="">Todos los meses</option>
                                {availableDates.months.map(month => (
                                    <option key={month} value={month}>{monthNames[month]}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    {/* Grid de Cards de Novedades */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {filteredNovedades.length > 0 ? (
                            filteredNovedades.map((novedad) => (
                                <div
                                    key={novedad.id}
                                    className="group backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl shadow-2xl shadow-emerald-500/20 hover:scale-105 hover:shadow-emerald-500/30 transition-all duration-300 overflow-hidden animate-fadeIn"
                                >
                                    {/* Header de la Card con gradient */}
                                    <div className="relative h-2 bg-gradient-to-r from-emerald-500 via-lime-500 to-yellow-500"></div>
                                    
                                    <div className="p-6">
                                        {/* Título y Estado */}
                                        <div className="flex items-start justify-between gap-3 mb-4">
                                            <h3 className="text-lg font-bold text-gray-800 line-clamp-2 flex-grow">
                                                {novedad.titulo}
                                            </h3>
                                            <span
                                                className={`inline-flex flex-shrink-0 rounded-full px-3 py-1 text-xs font-bold shadow-lg ${
                                                    novedad.activo
                                                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white'
                                                        : 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
                                                }`}
                                            >
                                                {novedad.activo ? 'Activa' : 'Inactiva'}
                                            </span>
                                        </div>

                                        {/* Fecha */}
                                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                                            <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <span className="font-semibold">
                                                {new Date(novedad.fecha_carga).toLocaleDateString('es-AR', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>

                                        {/* Estadísticas */}
                                        <div className="grid grid-cols-2 gap-3 mb-4">
                                            <div className="backdrop-blur-xl bg-blue-50/80 border border-blue-200/40 rounded-xl px-3 py-2.5 shadow-lg">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-600 font-medium">Imágenes</p>
                                                        <p className="text-xl font-bold text-blue-700">
                                                            {novedad.imagenes?.length || 0}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="backdrop-blur-xl bg-red-50/80 border border-red-200/40 rounded-xl px-3 py-2.5 shadow-lg">
                                                <div className="flex items-center gap-2">
                                                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <p className="text-xs text-gray-600 font-medium">Archivos</p>
                                                        <p className="text-xl font-bold text-red-700">
                                                            {novedad.archivos?.length || 0}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Extracto del contenido */}
                                        <div className="border-t border-emerald-200/30 pt-4 mb-4">
                                            <div 
                                                className="text-sm text-gray-600 line-clamp-3"
                                                dangerouslySetInnerHTML={{ 
                                                    __html: novedad.texto?.substring(0, 150) + '...' || 'Sin contenido'
                                                }}
                                            />
                                        </div>

                                        {/* Botones de acción */}
                                        <div className="flex gap-2">
                                            {/* Botón toggle */}
                                            <button
                                                onClick={() => handleToggle(novedad.id)}
                                                className={`flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white shadow-lg hover:scale-105 transition-all duration-300 ${
                                                    novedad.activo
                                                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                                                        : 'bg-gradient-to-r from-green-500 to-emerald-500'
                                                }`}
                                                title={novedad.activo ? 'Desactivar' : 'Activar'}
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    {novedad.activo ? (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                                    ) : (
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    )}
                                                </svg>
                                                {novedad.activo ? 'Desactivar' : 'Activar'}
                                            </button>

                                            {/* Botón editar */}
                                            <Link
                                                href={route('admin.novedades.edit', novedad.id)}
                                                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-bold shadow-lg hover:scale-105 transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                </svg>
                                            </Link>

                                            {/* Botón eliminar */}
                                            <button
                                                onClick={() => handleDelete(novedad.id)}
                                                className="px-4 py-2.5 rounded-xl border-2 border-red-300 text-red-700 text-xs font-bold hover:bg-red-50 hover:scale-105 transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            // Estado vacío
                            <div className="col-span-full">
                                <div className="backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-3xl p-16 text-center shadow-2xl shadow-emerald-500/20 animate-fadeIn">
                                    <div className="max-w-md mx-auto">
                                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400/20 to-lime-400/20 flex items-center justify-center">
                                            <svg className="h-10 w-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-800 mb-2">No se encontraron novedades</h3>
                                        <p className="text-gray-600">Intenta con otros filtros o crea una nueva novedad</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Contador */}
                    <div className="mt-8 text-center">
                        <span className="inline-flex items-center px-6 py-3 rounded-xl backdrop-blur-xl bg-emerald-50/80 border border-emerald-200/50 text-sm font-semibold text-emerald-700 shadow-lg">
                            Mostrando {filteredNovedades.length} de {novedades.length} novedades
                        </span>
                    </div>
                </main>
            </div>

            {/* Animaciones CSS */}
            <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                .animate-shimmer {
                    animation: shimmer 2s infinite;
                }
            `}</style>
        </>
    );
}
