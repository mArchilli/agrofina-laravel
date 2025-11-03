import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function CreateArbolRecomendacion() {
    const { data, setData, post, processing, errors, reset } = useForm({
        nombre: '',
        descripcion: '',
        activo: true,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('admin.arboles-recomendacion.store'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">Crear Árbol de Recomendación</h2>
                        <p className="text-sm text-gray-600 mt-1">Agrega un nuevo árbol de recomendación</p>
                    </div>
                    <Link href={route('admin.arboles-recomendacion')} className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors duration-200">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                        Volver
                    </Link>
                </div>
            }
        >
            <Head title="Crear Árbol de Recomendación" />

            <div className="py-8">
                <div className="max-w-4xl mx-auto sm:px-6 lg:px-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
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
                                <button type="submit" disabled={processing} className="inline-flex items-center px-6 py-3 rounded-lg text-white bg-green-600 hover:bg-green-700 disabled:opacity-50">Crear Árbol</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
