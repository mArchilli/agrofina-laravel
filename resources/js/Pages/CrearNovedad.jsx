import { Head, Link, useForm, router, usePage } from '@inertiajs/react';
import { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

export default function CrearNovedad({ auth, novedad }) {
    const isEditing = !!novedad;
    const quillRef = useRef(null);
    const editorRef = useRef(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <>
            <Head title={isEditing ? 'Editar Novedad' : 'Crear Novedad'} />

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
                                    className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-50 backdrop-blur-sm"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Volver al sitio
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
                                        href={route('admin.novedades.index')}
                                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-all duration-300 font-semibold"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Volver
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
                <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* Header de la página */}
                    <div className="mb-8">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
                            <div className="flex-1">
                                <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-emerald-700 to-lime-600 text-transparent bg-clip-text mb-2">
                                    {isEditing ? 'Editar Novedad' : 'Crear Nueva Novedad'}
                                </h1>
                                <p className="text-gray-600">Complete el formulario para {isEditing ? 'actualizar' : 'crear'} la novedad.</p>
                            </div>
                            <Link
                                href={route('admin.novedades.index')}
                                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-emerald-700 hover:text-emerald-900 border border-emerald-300 hover:border-emerald-400 rounded-xl transition-all duration-300 hover:bg-emerald-50 backdrop-blur-sm"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                                Volver a gestión de novedades
                            </Link>
                        </div>
                    </div>

                    {/* Formulario */}
                    <div className="backdrop-blur-2xl bg-white/60 border border-emerald-200/40 rounded-2xl shadow-xl shadow-emerald-500/20 p-8">
                                                <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Título */}
                            <div>
                                <label htmlFor="titulo" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Título <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="titulo"
                                    value={data.titulo}
                                    onChange={(e) => setData('titulo', e.target.value)}
                                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    placeholder="Ingrese el título de la novedad"
                                    required
                                />
                                {errors.titulo && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.titulo}
                                    </p>
                                )}
                            </div>

                            {/* Fecha de carga */}
                            <div>
                                <label htmlFor="fecha_carga" className="block text-sm font-semibold text-gray-800 mb-2">
                                    Fecha de Carga <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="date"
                                    id="fecha_carga"
                                    value={data.fecha_carga}
                                    onChange={(e) => setData('fecha_carga', e.target.value)}
                                    className="w-full px-4 py-3 backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                                    required
                                />
                                {errors.fecha_carga && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.fecha_carga}
                                    </p>
                                )}
                            </div>

                            {/* Editor de texto con Quill */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Contenido <span className="text-red-500">*</span>
                                </label>
                                <div className="backdrop-blur-xl bg-white/90 border-2 border-emerald-200/60 rounded-xl overflow-hidden shadow-lg">
                                    <div ref={quillRef} style={{ minHeight: '300px' }} className="p-4" />
                                </div>
                                {errors.texto && (
                                    <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                        </svg>
                                        {errors.texto}
                                    </p>
                                )}
                                <p className="mt-2 text-xs text-gray-600">
                                    Utilice el editor para dar formato al contenido de la novedad
                                </p>
                            </div>

                            {/* Imágenes */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Imágenes
                                </label>
                                <div className="backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl p-4 shadow-lg">
                                    <input
                                        type="file"
                                        id="imagenes"
                                        multiple
                                        accept="image/jpeg,image/png,image/jpg,image/gif"
                                        onChange={(e) => setData('imagenes', e.target.files)}
                                        className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-emerald-600 file:to-lime-600 file:text-white hover:file:from-emerald-700 hover:file:to-lime-700 file:cursor-pointer cursor-pointer"
                                    />
                                    {errors.imagenes && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.imagenes}
                                        </p>
                                    )}
                                    <p className="mt-2 text-xs text-gray-600">
                                        Formatos permitidos: JPEG, PNG, JPG, GIF (máx. 2MB por imagen). Puede seleccionar múltiples imágenes.
                                    </p>
                                </div>
                                
                                {isEditing && novedad.imagenes && novedad.imagenes.length > 0 && (
                                    <div className="mt-4">
                                        <p className="text-sm font-semibold text-gray-800 mb-3">Imágenes actuales:</p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {novedad.imagenes.map((imagen, index) => (
                                                <div key={index} className="backdrop-blur-xl bg-white/80 border-2 border-emerald-200/40 rounded-xl p-3 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                                    <img
                                                        src={imagen.path}
                                                        alt={imagen.nombre}
                                                        className="h-24 w-full object-cover rounded-lg"
                                                    />
                                                    <p className="text-xs text-gray-700 mt-2 truncate font-medium" title={imagen.nombre}>
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
                                <label className="block text-sm font-semibold text-gray-800 mb-2">
                                    Archivos (PDFs)
                                </label>
                                <div className="backdrop-blur-xl bg-white/80 border-2 border-emerald-200/60 rounded-xl p-4 shadow-lg">
                                    <input
                                        type="file"
                                        id="archivos"
                                        multiple
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => setData('archivos', e.target.files)}
                                        className="block w-full text-sm text-gray-900 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-emerald-600 file:to-lime-600 file:text-white hover:file:from-emerald-700 hover:file:to-lime-700 file:cursor-pointer cursor-pointer"
                                    />
                                    {errors.archivos && (
                                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                            {errors.archivos}
                                        </p>
                                    )}
                                    <p className="mt-2 text-xs text-gray-600">
                                        Formatos permitidos: PDF, DOC, DOCX (máx. 5MB por archivo)
                                    </p>
                                </div>
                                
                                {isEditing && novedad.archivos && novedad.archivos.length > 0 && (
                                    <div className="mt-4">
                                        <p className="text-sm font-semibold text-gray-800 mb-3">Archivos actuales:</p>
                                        <div className="backdrop-blur-xl bg-white/80 border-2 border-emerald-200/40 rounded-xl p-4 shadow-lg">
                                            <ul className="space-y-2">
                                                {novedad.archivos.map((archivo, index) => (
                                                    <li key={index} className="flex items-center gap-3 p-2 hover:bg-emerald-50/50 rounded-lg transition-colors">
                                                        <svg className="w-5 h-5 text-red-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-sm text-gray-700 font-medium">{archivo.nombre}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Botones */}
                            <div className="flex flex-col-reverse sm:flex-row gap-4 pt-6">
                                <Link
                                    href={route('admin.novedades.index')}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold text-emerald-700 border-2 border-emerald-600 hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                    </svg>
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-lime-600 px-6 py-3 font-semibold text-white shadow-lg hover:from-emerald-700 hover:to-lime-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 animate-shimmer"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Procesando...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            {isEditing ? 'Actualizar Novedad' : 'Crear Novedad'}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </main>

                {/* Círculos decorativos de fondo */}
                <div className="fixed top-20 right-20 w-96 h-96 bg-gradient-to-br from-emerald-400 to-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob pointer-events-none"></div>
                <div className="fixed bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-lime-400 to-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob animation-delay-2000 pointer-events-none"></div>
                <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-yellow-400 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 pointer-events-none"></div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                .animate-shimmer {
                    background-size: 200% 200%;
                    animation: shimmer 3s ease-in-out infinite;
                }
                @keyframes blob {
                    0%, 100% { transform: translate(0, 0) scale(1); }
                    33% { transform: translate(30px, -50px) scale(1.1); }
                    66% { transform: translate(-20px, 20px) scale(0.9); }
                }
                .animate-blob {
                    animation: blob 7s infinite;
                }
                .animation-delay-2000 {
                    animation-delay: 2s;
                }
                .animation-delay-4000 {
                    animation-delay: 4s;
                }
            `}} />
        </>
    );
}
