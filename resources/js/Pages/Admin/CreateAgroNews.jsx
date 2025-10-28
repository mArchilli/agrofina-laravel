import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, Link } from '@inertiajs/react';
import { useState } from 'react';

export default function CreateAgroNews({ auth }) {
    const [isUploading, setIsUploading] = useState(false);
    const [dragActive, setDragActive] = useState(false);
    
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        pdf_file: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsUploading(true);
        
        post(route('admin.agronews.store'), {
            onSuccess: () => {
                reset();
                setIsUploading(false);
            },
            onError: () => {
                setIsUploading(false);
            }
        });
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            if (file.type === 'application/pdf') {
                setData('pdf_file', file);
            } else {
                alert('Solo se permiten archivos PDF');
            }
        }
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Agregar AgroNews</h2>
                    <Link
                        href={route('admin.agronews.index')}
                        className="inline-flex items-center px-4 py-2 bg-gray-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 transition ease-in-out duration-150"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver al Dashboard
                    </Link>
                </div>
            }
        >
            <Head title="Agregar AgroNews" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Subir nuevo archivo PDF</h3>
                                <p className="text-sm text-gray-600">Complete la información del archivo y súbalo al sistema AgroNews.</p>
                            </div>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Información del archivo */}
                                <div className="grid grid-cols-1 gap-6">
                                    {/* Título */}
                                    <div>
                                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                            Título del documento *
                                        </label>
                                        <input
                                            type="text"
                                            id="title"
                                            value={data.title}
                                            onChange={(e) => setData('title', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                            placeholder="Ingrese el título del documento"
                                            required
                                        />
                                        {errors.title && <p className="mt-1 text-sm text-red-600">{errors.title}</p>}
                                    </div>

                                    {/* Descripción */}
                                    <div>
                                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                            Descripción
                                        </label>
                                        <textarea
                                            id="description"
                                            rows={4}
                                            value={data.description}
                                            onChange={(e) => setData('description', e.target.value)}
                                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
                                            placeholder="Descripción opcional del contenido del documento"
                                        />
                                        {errors.description && <p className="mt-1 text-sm text-red-600">{errors.description}</p>}
                                    </div>
                                </div>

                                {/* Zona de arrastrar archivo */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Archivo PDF *
                                    </label>
                                    <div
                                        className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
                                            dragActive 
                                                ? 'border-emerald-400 bg-emerald-50' 
                                                : 'border-gray-300 hover:border-emerald-400'
                                        }`}
                                        onDragEnter={handleDrag}
                                        onDragLeave={handleDrag}
                                        onDragOver={handleDrag}
                                        onDrop={handleDrop}
                                    >
                                        <div className="text-center">
                                            <svg
                                                className="mx-auto h-16 w-16 text-gray-400"
                                                stroke="currentColor"
                                                fill="none"
                                                viewBox="0 0 48 48"
                                            >
                                                <path
                                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                    strokeWidth={2}
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                            <div className="mt-4">
                                                <label
                                                    htmlFor="pdf_file"
                                                    className="cursor-pointer bg-white rounded-md font-medium text-emerald-600 hover:text-emerald-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-emerald-500"
                                                >
                                                    <span className="text-lg">Seleccionar archivo PDF</span>
                                                    <input
                                                        id="pdf_file"
                                                        type="file"
                                                        accept=".pdf"
                                                        onChange={(e) => setData('pdf_file', e.target.files[0])}
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="text-gray-500 mt-2">o arrastre y suelte el archivo aquí</p>
                                                <p className="text-xs text-gray-400 mt-1">Solo archivos PDF - Tamaño máximo: 10MB</p>
                                            </div>
                                            {data.pdf_file && (
                                                <div className="mt-4 p-3 bg-emerald-50 border border-emerald-200 rounded-md">
                                                    <div className="flex items-center">
                                                        <svg className="h-6 w-6 text-emerald-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                        </svg>
                                                        <div>
                                                            <p className="text-sm font-medium text-emerald-800">
                                                                Archivo seleccionado: {data.pdf_file.name}
                                                            </p>
                                                            <p className="text-xs text-emerald-600">
                                                                Tamaño: {(data.pdf_file.size / 1024 / 1024).toFixed(2)} MB
                                                            </p>
                                                        </div>
                                                        <button
                                                            type="button"
                                                            onClick={() => setData('pdf_file', null)}
                                                            className="ml-auto text-emerald-600 hover:text-emerald-800"
                                                        >
                                                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {errors.pdf_file && <p className="mt-1 text-sm text-red-600">{errors.pdf_file}</p>}
                                </div>

                                {/* Botones de acción */}
                                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                                    <Link
                                        href={route('admin.agronews.index')}
                                        className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition ease-in-out duration-150"
                                    >
                                        Cancelar
                                    </Link>
                                    <button
                                        type="submit"
                                        disabled={processing || isUploading || !data.pdf_file}
                                        className="inline-flex items-center px-6 py-2 bg-emerald-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-emerald-700 active:bg-emerald-900 focus:outline-none focus:border-emerald-900 focus:ring ring-emerald-300 disabled:opacity-25 transition ease-in-out duration-150"
                                    >
                                        {(processing || isUploading) && (
                                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                        )}
                                        {(processing || isUploading) ? 'Subiendo...' : 'Subir Archivo'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}