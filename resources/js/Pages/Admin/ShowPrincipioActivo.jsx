import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function ShowPrincipioActivo({ principioActivo }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const handleDelete = () => {
        if (confirm(`¿Estás seguro de que deseas eliminar el principio activo "${principioActivo.nombre}"?`)) {
            window.location.href = route('principios-activos.destroy', { principio_activo: principioActivo.id });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                            Detalle del Principio Activo
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Información completa de: <span className="font-medium">{principioActivo.nombre}</span>
                        </p>
                    </div>
                    <div className="flex space-x-3">
                        <Link
                            href={route('principios-activos.edit', { principio_activo: principioActivo.id })}
                            className="inline-flex items-center px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Editar
                        </Link>
                        <Link
                            href={route('principios-activos.index')}
                            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver al Listado
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title={principioActivo.nombre} />

            <div className="py-8">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 space-y-8">
                    
                    {/* Información Principal */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{principioActivo.nombre}</h3>
                                        <p className="text-sm text-gray-600">ID: {principioActivo.id}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                        principioActivo.activo 
                                            ? 'bg-green-100 text-green-800 border border-green-200' 
                                            : 'bg-red-100 text-red-800 border border-red-200'
                                    }`}>
                                        <div className={`w-2 h-2 rounded-full mr-2 ${
                                            principioActivo.activo ? 'bg-green-500' : 'bg-red-500'
                                        }`}></div>
                                        {principioActivo.activo ? 'Activo' : 'Inactivo'}
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Información Básica */}
                                <div className="space-y-6">
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                            </svg>
                                            Nombre del Principio Activo
                                        </h4>
                                        <p className="text-lg font-semibold text-gray-900 bg-gray-50 rounded-lg p-3 border border-gray-200">
                                            {principioActivo.nombre}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            Estado
                                        </h4>
                                        <div className={`p-3 rounded-lg border-2 ${
                                            principioActivo.activo 
                                                ? 'bg-green-50 border-green-200' 
                                                : 'bg-red-50 border-red-200'
                                        }`}>
                                            <div className="flex items-center">
                                                <div className={`w-3 h-3 rounded-full mr-3 ${
                                                    principioActivo.activo ? 'bg-green-500' : 'bg-red-500'
                                                }`}></div>
                                                <span className={`text-sm font-medium ${
                                                    principioActivo.activo ? 'text-green-800' : 'text-red-800'
                                                }`}>
                                                    {principioActivo.activo ? 'Principio Activo Activo' : 'Principio Activo Inactivo'}
                                                </span>
                                            </div>
                                            <p className={`text-xs mt-2 ${
                                                principioActivo.activo ? 'text-green-700' : 'text-red-700'
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
                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            Fecha de Creación
                                        </h4>
                                        <p className="text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200">
                                            {principioActivo.created_at ? new Date(principioActivo.created_at).toLocaleDateString('es-ES', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            }) : 'No disponible'}
                                        </p>
                                    </div>

                                    <div>
                                        <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                            <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                            </svg>
                                            Última Modificación
                                        </h4>
                                        <p className="text-gray-700 bg-gray-50 rounded-lg p-3 border border-gray-200">
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
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Descripción
                                    </h4>
                                    <div className="bg-indigo-50 rounded-lg p-4 border border-indigo-200">
                                        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                                            {principioActivo.descripcion}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Acciones */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 bg-gradient-to-r from-slate-50 to-gray-50 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                                </svg>
                                Acciones Disponibles
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">Operaciones que puedes realizar con este principio activo</p>
                        </div>
                        
                        <div className="p-6">
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                <Link
                                    href={route('principios-activos.edit', { principio_activo: principioActivo.id })}
                                    className="flex items-center justify-center px-4 py-3 bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 rounded-lg transition-colors duration-200 group"
                                >
                                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Editar Principio Activo
                                </Link>

                                <Link
                                    href={route('principios-activos.index')}
                                    className="flex items-center justify-center px-4 py-3 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg transition-colors duration-200 group"
                                >
                                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                    Ver Todos los Principios Activos
                                </Link>

                                <button
                                    onClick={() => setShowDeleteModal(true)}
                                    className="flex items-center justify-center px-4 py-3 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg transition-colors duration-200 group"
                                >
                                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg>
                                    Eliminar Principio Activo
                                </button>
                            </div>

                            {/* Información adicional */}
                            <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                                <div className="flex">
                                    <svg className="w-5 h-5 text-amber-400 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                    <div>
                                        <h3 className="text-sm font-medium text-amber-800">Consideraciones importantes</h3>
                                        <div className="text-sm text-amber-700 mt-1 space-y-1">
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
            </div>

            {/* Modal de confirmación de eliminación */}
            {showDeleteModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
                    <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
                        <div className="mt-3">
                            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                                <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                </svg>
                            </div>
                            <div className="mt-2 px-7 py-3">
                                <h3 className="text-lg font-medium text-gray-900">¿Confirmar eliminación?</h3>
                                <p className="text-sm text-gray-500 mt-2">
                                    ¿Estás seguro de que deseas eliminar el principio activo "<strong>{principioActivo.nombre}</strong>"? 
                                    Esta acción no se puede deshacer y se perderán todas las relaciones con productos.
                                </p>
                            </div>
                            <div className="items-center px-4 py-3">
                                <div className="flex space-x-3">
                                    <button
                                        onClick={() => setShowDeleteModal(false)}
                                        className="px-4 py-2 bg-gray-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="px-4 py-2 bg-red-600 text-white text-base font-medium rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}