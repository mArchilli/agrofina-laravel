import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function EditCultivo({ cultivo }) {
    const { data, setData, put, processing, errors } = useForm({
        nombre: cultivo.nombre || '',
        descripcion: cultivo.descripcion || '',
        activo: cultivo.activo || true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        put(route('cultivos.update', cultivo.id));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                            Editar Cultivo
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Modificar información del cultivo: {cultivo.nombre}
                        </p>
                    </div>
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
            }
        >
            <Head title={`Editar ${cultivo.nombre}`} />

            <div className="py-8">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    {/* Progreso/Pasos */}
                    <div className="mb-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                        ✓
                                    </div>
                                    <span className="ml-2 text-sm font-medium text-gray-900">Editando: {cultivo.nombre}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Información Principal */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                    </svg>
                                    Datos del Cultivo
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Modifica la información básica del cultivo</p>
                            </div>
                            
                            <div className="p-6 space-y-6">
                                {/* Nombre del cultivo */}
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 mb-2">
                                        Nombre del Cultivo <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: Maíz, Soja, Trigo, Girasol..."
                                        required
                                    />
                                    {errors.nombre && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.nombre}
                                        </p>
                                    )}
                                </div>

                                {/* Descripción */}
                                <div>
                                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-900 mb-2">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="descripcion"
                                        rows={4}
                                        value={data.descripcion}
                                        onChange={(e) => setData('descripcion', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 resize-none"
                                        placeholder="Describe las características del cultivo, su uso principal, época de siembra, etc..."
                                    />
                                    <p className="text-xs text-gray-500 mt-1">
                                        Información adicional sobre el cultivo que ayude a identificarlo
                                    </p>
                                    {errors.descripcion && (
                                        <p className="text-red-600 text-sm mt-2 flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.descripcion}
                                        </p>
                                    )}
                                </div>

                                {/* Estado activo */}
                                <div className="flex items-start space-x-3 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                                    <input
                                        type="checkbox"
                                        id="activo"
                                        checked={data.activo}
                                        onChange={(e) => setData('activo', e.target.checked)}
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded mt-0.5"
                                    />
                                    <div className="flex-1">
                                        <label htmlFor="activo" className="text-sm font-medium text-gray-900 block">
                                            Cultivo activo
                                        </label>
                                        <p className="text-xs text-gray-600 mt-1">
                                            Los cultivos activos aparecerán disponibles para asociar con productos
                                        </p>
                                    </div>
                                </div>
                                {errors.activo && (
                                    <p className="text-red-600 text-sm mt-2 flex items-center">
                                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.activo}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Información del cultivo actual */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Información del Cultivo
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Datos actuales del cultivo</p>
                            </div>
                            
                            <div className="p-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Detalles Actuales</h4>
                                        <dl className="space-y-2">
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">ID:</dt>
                                                <dd className="text-sm text-gray-900">#{cultivo.id}</dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Creado:</dt>
                                                <dd className="text-sm text-gray-900">
                                                    {new Date(cultivo.created_at).toLocaleDateString()}
                                                </dd>
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-gray-500">Última actualización:</dt>
                                                <dd className="text-sm text-gray-900">
                                                    {new Date(cultivo.updated_at).toLocaleDateString()}
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    
                                    <div>
                                        <h4 className="font-medium text-gray-900 mb-3">Estado Actual</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center">
                                                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                    cultivo.activo
                                                        ? 'bg-green-100 text-green-800'
                                                        : 'bg-red-100 text-red-800'
                                                }`}>
                                                    {cultivo.activo ? 'Activo' : 'Inactivo'}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-600">
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
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                <Link
                                    href={route('cultivos.index')}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="m100 50c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10s-10 4.477-10 10zm-9-3h12l-4-4m0 8l4-4"></path>
                                            </svg>
                                            Actualizando cultivo...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Actualizar Cultivo
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}