import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function EditNovedad({ novedad }) {
    const quillRef = useRef(null);
    const editorRef = useRef(null);

    // Debug: verificar qué datos estamos recibiendo
    console.log('Novedad recibida:', novedad);

    // Función para formatear la fecha de manera segura
    const formatFecha = (fecha) => {
        if (!fecha) return new Date().toISOString().split('T')[0];
        try {
            const date = new Date(fecha);
            if (isNaN(date.getTime())) {
                return new Date().toISOString().split('T')[0];
            }
            return date.toISOString().split('T')[0];
        } catch {
            return new Date().toISOString().split('T')[0];
        }
    };

    const { data, setData, post, errors, processing } = useForm({
        titulo: novedad?.titulo || '',
        texto: novedad?.texto || '',
        imagenes: null,
        archivos: null,
        fecha_carga: formatFecha(novedad?.fecha_carga),
    });

    // Inicializar Quill con el contenido existente
    useEffect(() => {
        if (!editorRef.current && quillRef.current) {
            const quill = new Quill(quillRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ color: [] }, { background: [] }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ align: [] }],
                        ['link', 'image'],
                        ['blockquote', 'code-block'],
                        ['clean'],
                    ],
                },
                placeholder: 'Escribe el contenido de la novedad aquí...',
            });

            // Cargar contenido existente
            if (novedad?.texto) {
                quill.root.innerHTML = novedad.texto;
            }

            // Actualizar el estado cuando cambia el contenido
            quill.on('text-change', () => {
                setData('texto', quill.root.innerHTML);
            });

            editorRef.current = quill;
        }
    }, [novedad?.texto]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', data.titulo);
        formData.append('texto', data.texto);
        formData.append('fecha_carga', data.fecha_carga);
        formData.append('_method', 'PUT');

        if (data.imagenes) {
            Array.from(data.imagenes).forEach((imagen) => {
                formData.append('imagenes[]', imagen);
            });
        }

        if (data.archivos) {
            Array.from(data.archivos).forEach((archivo) => {
                formData.append('archivos[]', archivo);
            });
        }

        post(route('admin.novedades.update', novedad?.id), {
            data: formData,
            forceFormData: true,
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Editar Novedad: {novedad?.titulo || 'Sin título'}
                </h2>
            }
        >
            <Head title={`Editar: ${novedad?.titulo || 'Novedad'}`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {/* Botón volver */}
                            <div className="mb-6">
                                <Link
                                    href={route('admin.novedades.index')}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
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
                                            d="M15 19l-7-7 7-7"
                                        />
                                    </svg>
                                    Volver al listado
                                </Link>
                            </div>

                            {/* Información actual */}
                            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                                <h3 className="text-sm font-semibold text-blue-900 mb-2">
                                    Información Actual
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                                    <div>
                                        <span className="text-blue-700 font-medium">Estado:</span>{' '}
                                        <span className={`inline-flex px-2 py-0.5 rounded text-xs font-semibold ${
                                            novedad?.activo ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                        }`}>
                                            {novedad?.activo ? 'Activa' : 'Inactiva'}
                                        </span>
                                    </div>
                                    <div>
                                        <span className="text-blue-700 font-medium">Imágenes actuales:</span>{' '}
                                        <span className="text-blue-900">{novedad?.imagenes?.length || 0}</span>
                                    </div>
                                    <div>
                                        <span className="text-blue-700 font-medium">Archivos actuales:</span>{' '}
                                        <span className="text-blue-900">{novedad?.archivos?.length || 0}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Formulario */}
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Título */}
                                <div>
                                    <label
                                        htmlFor="titulo"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Título <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="titulo"
                                        value={data.titulo}
                                        onChange={(e) => setData('titulo', e.target.value)}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                        placeholder="Ingrese el título de la novedad"
                                    />
                                    {errors.titulo && (
                                        <p className="mt-1 text-sm text-red-600">{errors.titulo}</p>
                                    )}
                                </div>

                                {/* Fecha de carga */}
                                <div>
                                    <label
                                        htmlFor="fecha_carga"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Fecha de Carga <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="date"
                                        id="fecha_carga"
                                        value={data.fecha_carga}
                                        onChange={(e) => setData('fecha_carga', e.target.value)}
                                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                                    />
                                    {errors.fecha_carga && (
                                        <p className="mt-1 text-sm text-red-600">{errors.fecha_carga}</p>
                                    )}
                                </div>

                                {/* Editor de texto con Quill */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Contenido <span className="text-red-500">*</span>
                                    </label>
                                    <div className="bg-white rounded-md border border-gray-300 overflow-hidden">
                                        <div ref={quillRef} style={{ minHeight: '400px' }} />
                                    </div>
                                    {errors.texto && (
                                        <p className="mt-1 text-sm text-red-600">{errors.texto}</p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-500">
                                        El contenido actual se ha cargado en el editor. Puede modificarlo según necesite.
                                    </p>
                                </div>

                                {/* Imágenes actuales */}
                                {novedad?.imagenes && novedad.imagenes.length > 0 && (
                                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                            Imágenes Actuales ({novedad.imagenes.length})
                                        </h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {novedad.imagenes.map((imagen, index) => (
                                                <div key={index} className="relative group">
                                                    <img
                                                        src={imagen.path}
                                                        alt={imagen.nombre}
                                                        className="h-32 w-full object-cover rounded-md border-2 border-gray-300 group-hover:border-emerald-500 transition-colors"
                                                    />
                                                    <p className="text-xs text-gray-600 mt-1 truncate" title={imagen.nombre}>
                                                        {imagen.nombre}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-amber-600 mt-3 flex items-start gap-1">
                                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            Si subes nuevas imágenes, se reemplazarán todas las actuales
                                        </p>
                                    </div>
                                )}

                                {/* Nuevas Imágenes */}
                                <div>
                                    <label
                                        htmlFor="imagenes"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        {novedad?.imagenes && novedad.imagenes.length > 0 
                                            ? 'Reemplazar Imágenes' 
                                            : 'Agregar Imágenes'}
                                    </label>
                                    <input
                                        type="file"
                                        id="imagenes"
                                        multiple
                                        accept="image/jpeg,image/png,image/jpg,image/gif"
                                        onChange={(e) => setData('imagenes', e.target.files)}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                                    />
                                    {errors.imagenes && (
                                        <p className="mt-1 text-sm text-red-600">{errors.imagenes}</p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-500">
                                        Formatos permitidos: JPEG, PNG, JPG, GIF (máx. 2MB por imagen). Puede seleccionar múltiples imágenes.
                                    </p>
                                </div>

                                {/* Archivos actuales */}
                                {novedad?.archivos && novedad.archivos.length > 0 && (
                                    <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                            Archivos Actuales ({novedad.archivos.length})
                                        </h4>
                                        <ul className="space-y-2">
                                            {novedad.archivos.map((archivo, index) => (
                                                <li key={index} className="flex items-center gap-2 text-sm">
                                                    <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-gray-700 flex-grow">{archivo.nombre}</span>
                                                    <a
                                                        href={archivo.path}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-emerald-600 hover:text-emerald-700 text-xs font-medium"
                                                    >
                                                        Ver
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-xs text-amber-600 mt-3 flex items-start gap-1">
                                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            Si subes nuevos archivos, se reemplazarán todos los actuales
                                        </p>
                                    </div>
                                )}

                                {/* Nuevos Archivos */}
                                <div>
                                    <label
                                        htmlFor="archivos"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        {novedad?.archivos && novedad.archivos.length > 0 
                                            ? 'Reemplazar Archivos (PDFs)' 
                                            : 'Agregar Archivos (PDFs)'}
                                    </label>
                                    <input
                                        type="file"
                                        id="archivos"
                                        multiple
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => setData('archivos', e.target.files)}
                                        className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                                    />
                                    {errors.archivos && (
                                        <p className="mt-1 text-sm text-red-600">{errors.archivos}</p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-500">
                                        Formatos permitidos: PDF, DOC, DOCX (máx. 5MB por archivo)
                                    </p>
                                </div>

                                {/* Botones */}
                                <div className="flex gap-4 pt-4 border-t border-gray-200">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        {processing ? (
                                            <>
                                                <svg
                                                    className="animate-spin h-5 w-5"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    />
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    />
                                                </svg>
                                                Actualizando...
                                            </>
                                        ) : (
                                            <>
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
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                                Actualizar Novedad
                                            </>
                                        )}
                                    </button>
                                    <Link
                                        href={route('admin.novedades.index')}
                                        className="inline-flex items-center gap-2 rounded-md bg-gray-200 px-6 py-3 font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                                    >
                                        Cancelar
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
