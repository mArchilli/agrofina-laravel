import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect, useRef } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function CrearNovedad({ novedad }) {
    const isEditing = !!novedad;
    const quillRef = useRef(null);
    const editorRef = useRef(null);

    const { data, setData, post, put, errors, processing } = useForm({
        titulo: novedad?.titulo || '',
        texto: novedad?.texto || '',
        imagenes: null,
        archivos: null,
        fecha_carga: novedad?.fecha_carga 
            ? new Date(novedad.fecha_carga).toISOString().split('T')[0] 
            : new Date().toISOString().split('T')[0],
    });

    // Inicializar Quill
    useEffect(() => {
        if (!editorRef.current) {
            const quill = new Quill(quillRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ color: [] }, { background: [] }],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        [{ align: [] }],
                        ['link', 'image'],
                        ['clean'],
                    ],
                },
                placeholder: 'Escribe el contenido de la novedad aquí...',
            });

            // Cargar contenido inicial si existe
            if (novedad?.texto) {
                quill.root.innerHTML = novedad.texto;
            }

            // Actualizar el estado cuando cambia el contenido
            quill.on('text-change', () => {
                setData('texto', quill.root.innerHTML);
            });

            editorRef.current = quill;
        }
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('titulo', data.titulo);
        formData.append('texto', data.texto);
        formData.append('fecha_carga', data.fecha_carga);

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

        if (isEditing) {
            formData.append('_method', 'PUT');
            post(route('admin.novedades.update', novedad.id), {
                data: formData,
                forceFormData: true,
            });
        } else {
            post(route('admin.novedades.store'), {
                data: formData,
                forceFormData: true,
            });
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {isEditing ? 'Editar Novedad' : 'Crear Nueva Novedad'}
                </h2>
            }
        >
            <Head title={isEditing ? 'Editar Novedad' : 'Crear Novedad'} />

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
                                        <div ref={quillRef} style={{ minHeight: '300px' }} />
                                    </div>
                                    {errors.texto && (
                                        <p className="mt-1 text-sm text-red-600">{errors.texto}</p>
                                    )}
                                    <p className="mt-1 text-xs text-gray-500">
                                        Utilice el editor para dar formato al contenido de la novedad
                                    </p>
                                </div>

                                {/* Imágenes */}
                                <div>
                                    <label
                                        htmlFor="imagenes"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Imágenes
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
                                    {isEditing && novedad.imagenes && novedad.imagenes.length > 0 && (
                                        <div className="mt-2">
                                            <p className="text-xs text-gray-500 mb-2">Imágenes actuales:</p>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                                                {novedad.imagenes.map((imagen, index) => (
                                                    <div key={index} className="relative">
                                                        <img
                                                            src={imagen.path}
                                                            alt={imagen.nombre}
                                                            className="h-24 w-full object-cover rounded-md border border-gray-300"
                                                        />
                                                        <p className="text-xs text-gray-600 mt-1 truncate" title={imagen.nombre}>
                                                            {imagen.nombre}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Archivos */}
                                <div>
                                    <label
                                        htmlFor="archivos"
                                        className="block text-sm font-medium text-gray-700 mb-2"
                                    >
                                        Archivos (PDFs)
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
                                    {isEditing && novedad.archivos && novedad.archivos.length > 0 && (
                                        <div className="mt-2">
                                            <p className="text-xs text-gray-500 mb-1">Archivos actuales:</p>
                                            <ul className="text-xs text-gray-600 space-y-1">
                                                {novedad.archivos.map((archivo, index) => (
                                                    <li key={index} className="flex items-center gap-2">
                                                        <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                        </svg>
                                                        {archivo.nombre}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {/* Botones */}
                                <div className="flex gap-4 pt-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 font-semibold text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                                                Procesando...
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
                                                {isEditing ? 'Actualizar Novedad' : 'Crear Novedad'}
                                            </>
                                        )}
                                    </button>
                                    <Link
                                        href={route('admin.novedades.index')}
                                        className="inline-flex items-center gap-2 rounded-md bg-gray-200 px-4 py-2.5 font-semibold text-gray-700 shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
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
