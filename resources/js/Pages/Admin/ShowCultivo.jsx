import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';

export default function ShowCultivo({ cultivo }) {
    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                            Detalles del Cultivo
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Información completa de: {cultivo.nombre}
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link
                            href={route('cultivos.edit', cultivo.id)}
                            className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Editar
                        </Link>
                        <Link
                            href={route('cultivos.index')}
                            className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors duration-200"
                        >
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Volver a Cultivos
                        </Link>
                    </div>
                </div>
            }
        >
            <Head title={`Cultivo: ${cultivo.nombre}`} />

            <div className="py-8">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    
                    {/* Información Principal */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-8">
                        <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5l4-4 4 4" />
                                </svg>
                                Información del Cultivo
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">Detalles completos del cultivo</p>
                        </div>
                        
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Datos básicos */}
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Datos Básicos
                                    </h4>
                                    <dl className="space-y-4">
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500 mb-1">ID:</dt>
                                            <dd className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                                                #{cultivo.id}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500 mb-1">Nombre del Cultivo:</dt>
                                            <dd className="text-lg font-semibold text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                                                {cultivo.nombre}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500 mb-1">Estado:</dt>
                                            <dd>
                                                <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-full ${
                                                    cultivo.activo
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {cultivo.activo ? 'Activo' : 'Inactivo'}
                                                </span>
                                            </dd>
                                        </div>
                                    </dl>
                                </div>

                                {/* Fechas */}
                                <div>
                                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        Fechas
                                    </h4>
                                    <dl className="space-y-4">
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500 mb-1">Fecha de creación:</dt>
                                            <dd className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                                                {new Date(cultivo.created_at).toLocaleString()}
                                            </dd>
                                        </div>
                                        <div>
                                            <dt className="text-sm font-medium text-gray-500 mb-1">Última actualización:</dt>
                                            <dd className="text-sm text-gray-900 bg-gray-50 px-3 py-2 rounded-lg">
                                                {new Date(cultivo.updated_at).toLocaleString()}
                                            </dd>
                                        </div>
                                    </dl>
                                </div>
                            </div>

                            {/* Descripción */}
                            {cultivo.descripcion && (
                                <div className="mt-8">
                                    <h4 className="text-lg font-medium text-gray-900 mb-4 flex items-center">
                                        <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                                        </svg>
                                        Descripción
                                    </h4>
                                    <div className="bg-gray-50 px-4 py-3 rounded-lg">
                                        <p className="text-gray-900 leading-relaxed">
                                            {cultivo.descripcion}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Información Adicional */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Funcionalidades
                            </h3>
                            <p className="text-sm text-gray-600 mt-1">Acciones disponibles para este cultivo</p>
                        </div>
                        
                        <div className="p-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <h4 className="font-medium text-gray-900 flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                        Acciones Disponibles
                                    </h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Asociar con productos específicos
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Editar información y descripción
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Activar o desactivar según necesidades
                                        </li>
                                    </ul>
                                </div>
                                
                                <div className="space-y-4">
                                    <h4 className="font-medium text-gray-900 flex items-center">
                                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                        </svg>
                                        Información del Sistema
                                    </h4>
                                    <ul className="text-sm text-gray-600 space-y-2">
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Relación many-to-many con productos
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            Búsqueda y filtrado disponible
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                            {cultivo.activo ? 'Visible en formularios' : 'Oculto en formularios'}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </AuthenticatedLayout>
    );
}