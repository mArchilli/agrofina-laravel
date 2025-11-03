import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState, useMemo } from 'react';

export default function NovedadesDashboard({ novedades }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleDelete = (id) => {
        if (confirm('¿Está seguro de que desea eliminar esta novedad?')) {
            router.delete(route('admin.novedades.destroy', id));
        }
    };

    const handleToggle = (id) => {
        router.patch(route('admin.novedades.toggle', id));
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
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Gestión de Novedades
                </h2>
            }
        >
            <Head title="Novedades Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Header con botón de crear */}
                            <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">
                                        Listado de Novedades
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        Administra las novedades del sitio
                                    </p>
                                </div>
                                <Link
                                    href={route('admin.novedades.create')}
                                    className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4v16m8-8H4"
                                        />
                                    </svg>
                                    Nueva Novedad
                                </Link>
                            </div>

                            {/* Buscador y Filtros */}
                            <div className="mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                                {/* Buscador */}
                                <div className="md:col-span-1">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Buscar por título..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 focus:border-emerald-500 focus:ring-emerald-500"
                                        />
                                        <svg
                                            className="absolute left-3 top-3 h-5 w-5 text-gray-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                            />
                                        </svg>
                                    </div>
                                </div>

                                {/* Filtro por Año */}
                                <div>
                                    <select
                                        value={selectedYear}
                                        onChange={(e) => setSelectedYear(e.target.value)}
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-emerald-500 focus:ring-emerald-500"
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
                                        className="w-full rounded-lg border border-gray-300 px-4 py-2.5 focus:border-emerald-500 focus:ring-emerald-500"
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
                                            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                                        >
                                            {/* Header de la Card */}
                                            <div className="bg-gradient-to-r from-emerald-50 to-lime-50 px-4 py-3 border-b border-gray-200">
                                                <div className="flex items-start justify-between gap-2">
                                                    <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 flex-grow">
                                                        {novedad.titulo}
                                                    </h3>
                                                    <span
                                                        className={`inline-flex flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                                                            novedad.activo
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-red-100 text-red-800'
                                                        }`}
                                                    >
                                                        {novedad.activo ? 'Activa' : 'Inactiva'}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* Contenido de la Card */}
                                            <div className="p-4 space-y-3">
                                                {/* Fecha */}
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="font-medium">
                                                        {new Date(novedad.fecha_carga).toLocaleDateString('es-AR', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </span>
                                                </div>

                                                {/* Estadísticas */}
                                                <div className="grid grid-cols-2 gap-3">
                                                    <div className="bg-blue-50 rounded-lg px-3 py-2">
                                                        <div className="flex items-center gap-2">
                                                            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                            <div>
                                                                <p className="text-xs text-gray-600">Imágenes</p>
                                                                <p className="text-lg font-bold text-blue-700">
                                                                    {novedad.imagenes?.length || 0}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="bg-red-50 rounded-lg px-3 py-2">
                                                        <div className="flex items-center gap-2">
                                                            <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                            </svg>
                                                            <div>
                                                                <p className="text-xs text-gray-600">Archivos</p>
                                                                <p className="text-lg font-bold text-red-700">
                                                                    {novedad.archivos?.length || 0}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Extracto del contenido */}
                                                <div className="border-t border-gray-100 pt-3">
                                                    <div 
                                                        className="text-sm text-gray-600 line-clamp-3"
                                                        dangerouslySetInnerHTML={{ 
                                                            __html: novedad.texto?.substring(0, 150) + '...' || 'Sin contenido'
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Footer con acciones */}
                                            <div className="bg-gray-50 px-4 py-3 border-t border-gray-200">
                                                <div className="flex gap-2 justify-end">
                                                    {/* Botón toggle */}
                                                    <button
                                                        onClick={() => handleToggle(novedad.id)}
                                                        className={`inline-flex items-center gap-1 rounded px-3 py-1.5 text-xs font-semibold shadow-sm transition-colors ${
                                                            novedad.activo
                                                                ? 'bg-yellow-600 text-white hover:bg-yellow-700'
                                                                : 'bg-green-600 text-white hover:bg-green-700'
                                                        }`}
                                                        title={novedad.activo ? 'Desactivar' : 'Activar'}
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                                                        className="inline-flex items-center gap-1 rounded bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                        </svg>
                                                        Editar
                                                    </Link>

                                                    {/* Botón eliminar */}
                                                    <button
                                                        onClick={() => handleDelete(novedad.id)}
                                                        className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-red-700 transition-colors"
                                                    >
                                                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                        </svg>
                                                        Eliminar
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full">
                                        <div className="text-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <p className="mt-2 text-sm text-gray-500">No se encontraron novedades</p>
                                            <p className="text-xs text-gray-400 mt-1">Intenta con otros filtros o crea una nueva novedad</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Contador */}
                            <div className="mt-4 text-sm text-gray-600">
                                Mostrando {filteredNovedades.length} de {novedades.length} novedades
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
