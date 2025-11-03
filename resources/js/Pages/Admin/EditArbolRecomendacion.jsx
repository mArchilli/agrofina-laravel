import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function EditArbolRecomendacion({ arbol }) {
    const { data, setData, put, processing, errors, isDirty } = useForm({
        nombre: arbol.nombre || '',
        descripcion: arbol.descripcion || '',
        activo: arbol.activo || false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
    put(route('admin.arboles-recomendacion.update', { arboles_recomendacion: arbol.id }));
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">Editar Árbol de Recomendación</h2>
                        <p className="text-sm text-gray-600 mt-1">Editando: <span className="font-medium">{arbol.nombre}</span></p>
                    </div>
                    <Link href={route('admin.arboles-recomendacion')} className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors duration-200">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Volver
                    </Link>
                </div>
            }
        >
            <Head title={`Editar - ${arbol.nombre}`} />

            <div className="py-8">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    {isDirty && (
                        <div className="mb-6 bg-amber-50 border border-amber-200 rounded-lg p-4 text-sm text-amber-800">
                            Tienes cambios sin guardar
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                                    Datos del Árbol
                                </h3>
                            </div>
                            <div className="p-6 space-y-6">
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 mb-2">Nombre <span className="text-red-500">*</span></label>
                                    <input id="nombre" type="text" value={data.nombre} onChange={(e) => setData('nombre', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" required />
                                    {errors.nombre && <p className="text-red-600 text-sm mt-2">{errors.nombre}</p>}
                                </div>
                                <div>
                                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-900 mb-2">Descripción</label>
                                    <textarea id="descripcion" rows={4} value={data.descripcion} onChange={(e) => setData('descripcion', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" />
                                    {errors.descripcion && <p className="text-red-600 text-sm mt-2">{errors.descripcion}</p>}
                                </div>
                                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg border border-green-200">
                                    <input type="checkbox" id="activo" checked={data.activo} onChange={(e) => setData('activo', e.target.checked)} className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                                    <label htmlFor="activo" className="text-sm font-medium text-gray-900">Árbol activo</label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex justify-end gap-3">
                                <Link href={route('admin.arboles-recomendacion')} className="inline-flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50">Cancelar</Link>
                                <button type="submit" disabled={processing || !isDirty} className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700 disabled:opacity-50">Guardar Cambios</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
