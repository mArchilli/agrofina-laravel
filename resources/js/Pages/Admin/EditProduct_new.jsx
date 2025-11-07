import { Head, Link, useForm, usePage, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import { ArrowLeft, Package, Upload, FileText, X, Check, Search, Menu } from 'lucide-react';

export default function EditProduct({ producto, categorias, cultivos, principiosActivos, arbolesRecomendacion }) {
    const { auth } = usePage().props;
    const { data, setData, put, processing, errors, reset } = useForm({
        nombre: producto.nombre || '',
        imagen: null,
        categoria_id: producto.categoria_id || '',
        principio_activo_id: producto.principio_activo_id || '',
        formulacion: producto.formulacion || '',
        descripcion: producto.descripcion || '',
        presentacion: producto.presentacion || '',
        accion: producto.accion || '',
        banda: producto.banda || '',
        mecanismo_de_accion: producto.mecanismo_de_accion || '',
        malezas: producto.malezas || '',
        dosis: producto.dosis || '',
        recomendaciones_de_uso: producto.recomendaciones_de_uso || '',
        banda_toxicologica: producto.banda_toxicologica || '',
        activo: producto.activo ?? true,
        pdfs: [],
        cultivos_ids: producto.cultivos ? producto.cultivos.map(cultivo => cultivo.id) : [],
        arboles_ids: producto.arboles_recomendacion ? producto.arboles_recomendacion.map(a => a.id) : [],
    });

    const [imagePreview, setImagePreview] = useState(null);
    const [searchPrincipioActivo, setSearchPrincipioActivo] = useState('');
    const [searchCultivo, setSearchCultivo] = useState('');
    const [searchArbol, setSearchArbol] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        router.post(route('logout'));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Crear FormData manualmente para asegurar que todos los campos se envíen
        const formData = new FormData();
        
        // Agregar todos los campos del formulario
        formData.append('nombre', data.nombre || '');
        formData.append('categoria_id', data.categoria_id || '');
        formData.append('principio_activo_id', data.principio_activo_id || '');
        formData.append('formulacion', data.formulacion || '');
        formData.append('descripcion', data.descripcion || '');
        formData.append('presentacion', data.presentacion || '');
        formData.append('accion', data.accion || '');
        formData.append('banda', data.banda || '');
        formData.append('mecanismo_de_accion', data.mecanismo_de_accion || '');
        formData.append('malezas', data.malezas || '');
        formData.append('dosis', data.dosis || '');
        formData.append('recomendaciones_de_uso', data.recomendaciones_de_uso || '');
        formData.append('banda_toxicologica', data.banda_toxicologica || '');
        formData.append('activo', data.activo ? '1' : '0');
        
        // Agregar cultivos seleccionados
        if (data.cultivos_ids && data.cultivos_ids.length > 0) {
            data.cultivos_ids.forEach((cultivoId, index) => {
                formData.append(`cultivos_ids[${index}]`, cultivoId);
            });
        }
        
        // Agregar árboles de recomendación (ids)
        if (data.arboles_ids && data.arboles_ids.length > 0) {
            data.arboles_ids.forEach((arbolId, index) => {
                formData.append(`arboles_ids[${index}]`, arbolId);
            });
        }
        
        // Agregar imagen si hay una nueva
        if (data.imagen) {
            formData.append('imagen', data.imagen);
        }
        
        // Agregar PDFs si hay nuevos
        if (data.pdfs && data.pdfs.length > 0) {
            for (let i = 0; i < data.pdfs.length; i++) {
                formData.append('pdfs[]', data.pdfs[i]);
            }
        }
        
        // Simular PUT method para Laravel
        formData.append('_method', 'PUT');
        
        // Usar post en lugar de put con FormData
        router.post(route('admin.productos.update', producto.id), formData, {
            onSuccess: () => {
                // Redirigir o mostrar mensaje de éxito
            },
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('imagen', file);
        
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImagePreview(null);
        }
    };

    const removeImage = () => {
        setData('imagen', null);
        // Restaurar la imagen original del producto si existe
        if (producto.imagen) {
            setImagePreview(producto.imagen);
        } else {
            setImagePreview(null);
        }
        // Reset the file input
        const fileInput = document.getElementById('imagen');
        if (fileInput) fileInput.value = '';
    };

    const handlePdfsChange = (e) => {
        setData('pdfs', Array.from(e.target.files));
    };

    const handleCultivoChange = (cultivoId) => {
        const currentCultivos = [...data.cultivos_ids];
        const index = currentCultivos.indexOf(cultivoId);
        
        if (index > -1) {
            // Si ya está seleccionado, lo removemos
            currentCultivos.splice(index, 1);
        } else {
            // Si no está seleccionado, lo agregamos
            currentCultivos.push(cultivoId);
        }
        
        setData('cultivos_ids', currentCultivos);
    };

    const handleArbolChange = (arbolId) => {
        const current = [...data.arboles_ids];
        const index = current.indexOf(arbolId);
        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(arbolId);
        }
        setData('arboles_ids', current);
    };

    const handlePrincipioActivoChange = (principioId) => {
        // Solo permitir seleccionar uno, así que si es el mismo, lo deseleccionamos
        if (data.principio_activo_id === principioId) {
            setData('principio_activo_id', '');
        } else {
            setData('principio_activo_id', principioId);
        }
    };

    // Configurar la imagen existente al cargar el componente
    useEffect(() => {
        if (producto.imagen) {
            setImagePreview(producto.imagen);
        }
    }, [producto.imagen]);

    return (
        <>
            <Head title={`Editar - ${producto.nombre}`} />

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
                                    className="px-4 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30"
                                >
                                    Productos
                                </Link>
                                <Link
                                    href={route('admin.novedades.index')}
                                    className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
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
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 rounded-xl bg-emerald-50/80 border border-emerald-200/50 text-emerald-700 hover:bg-emerald-100 transition-all"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {isMobileMenuOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Menú Mobile - Dropdown */}
                    {isMobileMenuOpen && (
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
                                        className="block px-4 py-3 rounded-xl text-sm font-medium bg-gradient-to-r from-emerald-500 to-lime-500 text-white shadow-lg shadow-emerald-500/30"
                                    >
                                        📦 Productos
                                    </Link>
                                    <Link
                                        href={route('admin.novedades.index')}
                                        className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:text-emerald-700 hover:bg-emerald-50/80 transition-all duration-300"
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
                                        href="/"
                                        className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-all duration-300 font-semibold"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        Volver al sitio
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

                {/* Contenido principal */}
                <div className="relative py-4 sm:py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Banner informativo - Producto en edición */}
                    <div className="mb-6 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold text-blue-900">Editando Producto: {producto.nombre}</h3>
                                <p className="text-xs text-blue-700 mt-1">
                                    Modifica la información del producto. Los campos vacíos mantendrán sus valores actuales.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Título */}
                    <div className="mb-6">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                            Edición del Producto
                        </h1>
                        <p className="text-sm sm:text-base text-gray-600">
                            Actualiza los campos necesarios para modificar el producto en el catálogo
                        </p>
                    </div>

                    {/* Botón de navegación */}
                    <div className="mb-6">
                        <Link
                            href={route('admin.productos')}
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/80 backdrop-blur-sm border-2 border-emerald-300 text-emerald-700 font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Gestión de Productos</span>
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Información Básica */}
                        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-emerald-500/10 border-2 border-white/50 overflow-hidden">
                            <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-emerald-500/10 to-lime-500/10 border-b-2 border-emerald-200/50">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                                    <Package className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-emerald-600" />
                                    Información Básica
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1">Datos principales del producto</p>
                            </div>
                            
                            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                {/* Nombre del Producto */}
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Nombre del Producto <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-200 text-gray-900 placeholder-gray-400"
                                        placeholder="Ingresa el nombre del producto..."
                                        required
                                    />
                                    {errors.nombre && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.nombre}</p>}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                                    {/* Imagen del Producto */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                                            Imagen del Producto
                                        </label>
                                        <div className="space-y-3">
                                            {imagePreview ? (
                                                <div className="relative">
                                                    <div className="w-full h-48 rounded-xl border-2 border-dashed border-emerald-200 bg-white/50 overflow-hidden flex items-center justify-center p-4">
                                                        <img
                                                            src={imagePreview}
                                                            alt="Preview"
                                                            className="max-w-full max-h-full object-contain"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={removeImage}
                                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                    {producto.imagen && imagePreview === producto.imagen && (
                                                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                                                            Imagen actual
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="w-full h-48 border-2 border-dashed border-emerald-300 rounded-xl flex items-center justify-center hover:border-emerald-400 hover:bg-emerald-50/30 transition-all duration-200 bg-white/30 backdrop-blur-sm">
                                                    <div className="text-center p-4">
                                                        <Upload className="mx-auto h-10 w-10 text-emerald-400 mb-3" />
                                                        <p className="text-sm text-gray-600 font-medium">Selecciona una imagen</p>
                                                        <p className="text-xs text-gray-500 mt-1">JPG, PNG, GIF, SVG</p>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            <input
                                                type="file"
                                                id="imagen"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="w-full px-4 py-2.5 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-200 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100"
                                            />
                                            <p className="text-xs text-gray-500">
                                                Formatos: JPG, PNG, GIF, SVG (máx. 2MB) - Deja vacío para mantener la imagen actual
                                            </p>
                                        </div>
                                        {errors.imagen && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.imagen}</p>}
                                    </div>

                                    {/* Categoría */}
                                    <div>
                                        <label htmlFor="categoria_id" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Categoría
                                        </label>
                                        <select
                                            id="categoria_id"
                                            value={data.categoria_id}
                                            onChange={(e) => setData('categoria_id', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-200 text-gray-900"
                                        >
                                            <option value="">Seleccionar categoría</option>
                                            {categorias && categorias.map((categoria) => (
                                                <option key={categoria.id} value={categoria.id}>
                                                    {categoria.nombre}
                                                </option>
                                            ))}
                                        </select>
                                        {categorias && categorias.length > 0 && (
                                            <p className="text-xs text-gray-600 mt-2 bg-emerald-50/50 rounded-lg p-2">
                                                <span className="font-semibold">{categorias.length}</span> categorías disponibles
                                            </p>
                                        )}
                                        {errors.categoria_id && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.categoria_id}</p>}
                                    </div>
                                </div>

                                {/* Principio Activo - Ahora como pastillas */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        Principio Activo
                                    </label>
                                    <div className="space-y-3">
                                        <p className="text-xs text-gray-600 bg-purple-50/50 rounded-lg p-2">
                                            Selecciona el principio activo del producto
                                        </p>
                                        
                                        {/* Buscador */}
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Buscar principio activo..."
                                                value={searchPrincipioActivo}
                                                onChange={(e) => setSearchPrincipioActivo(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2.5 bg-white/80 backdrop-blur-sm border-2 border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        
                                        {principiosActivos && principiosActivos.length > 0 ? (
                                            <div className="flex flex-wrap gap-2 max-h-64 overflow-y-auto p-3 sm:p-4 bg-purple-50/30 backdrop-blur-sm rounded-xl border-2 border-purple-200">
                                                {principiosActivos
                                                    .filter(principio => 
                                                        principio.nombre.toLowerCase().includes(searchPrincipioActivo.toLowerCase())
                                                    )
                                                    .map((principio) => {
                                                        const isSelected = data.principio_activo_id === principio.id;
                                                        return (
                                                            <label
                                                                key={principio.id}
                                                                className={`inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 border-2 ${
                                                                    isSelected
                                                                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white border-purple-400 shadow-lg shadow-purple-500/30 scale-105'
                                                                        : 'bg-white/80 text-gray-700 border-purple-200 hover:bg-purple-50 hover:border-purple-300 hover:scale-105'
                                                                }`}
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    name="principio_activo"
                                                                    checked={isSelected}
                                                                    onChange={() => handlePrincipioActivoChange(principio.id)}
                                                                    className="sr-only"
                                                                />
                                                                <span className="flex items-center gap-1.5">
                                                                    {isSelected && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                                                                    {principio.nombre}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                {principiosActivos.filter(p => p.nombre.toLowerCase().includes(searchPrincipioActivo.toLowerCase())).length === 0 && (
                                                    <p className="text-sm text-gray-500 py-4 w-full text-center">
                                                        No se encontraron principios activos con "<span className="font-semibold">{searchPrincipioActivo}</span>"
                                                    </p>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center py-6 bg-purple-50/30 backdrop-blur-sm rounded-xl border-2 border-dashed border-purple-200">
                                                <Upload className="mx-auto h-8 w-8 text-purple-300 mb-2" />
                                                <p className="text-sm text-gray-600 font-medium">No hay principios activos disponibles</p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Primero debes crear principios activos desde el módulo correspondiente
                                                </p>
                                            </div>
                                        )}
                                        
                                        {data.principio_activo_id && (
                                            <div className="mt-3 p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border-2 border-purple-200 backdrop-blur-sm">
                                                <div className="flex items-center text-sm text-purple-800">
                                                    <Check className="w-4 h-4 mr-2" />
                                                    <span className="font-semibold">
                                                        Seleccionado: {principiosActivos.find(p => p.id === data.principio_activo_id)?.nombre}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {errors.principio_activo_id && <p className="text-red-600 text-sm mt-2">{errors.principio_activo_id}</p>}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

                                    {/* Formulación */}
                                    <div>
                                        <label htmlFor="formulacion" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Formulación
                                        </label>
                                        <input
                                            type="text"
                                            id="formulacion"
                                            value={data.formulacion}
                                            onChange={(e) => setData('formulacion', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-200 text-gray-900 placeholder-gray-400"
                                            placeholder="Ej: EC, WP, SL"
                                        />
                                        {errors.formulacion && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.formulacion}</p>}
                                    </div>

                                    {/* Presentación */}
                                    <div>
                                        <label htmlFor="presentacion" className="block text-sm font-semibold text-gray-900 mb-2">
                                            Presentación
                                        </label>
                                        <input
                                            type="text"
                                            id="presentacion"
                                            value={data.presentacion}
                                            onChange={(e) => setData('presentacion', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-200 text-gray-900 placeholder-gray-400"
                                            placeholder="Ej: 1L, 500ml, 250g"
                                        />
                                        {errors.presentacion && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.presentacion}</p>}
                                    </div>
                                </div>

                                {/* Estado Activo */}
                                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-emerald-50 to-lime-50 backdrop-blur-sm rounded-xl border-2 border-emerald-200">
                                    <input
                                        type="checkbox"
                                        id="activo"
                                        checked={data.activo}
                                        onChange={(e) => setData('activo', e.target.checked)}
                                        className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-emerald-300 rounded"
                                    />
                                    <label htmlFor="activo" className="text-sm font-semibold text-gray-900">
                                        Producto activo (visible en el catálogo)
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Descripción y Detalles */}
                        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-emerald-500/10 border-2 border-white/50 overflow-hidden">
                            <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b-2 border-blue-200/50">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-blue-600" />
                                    Descripción y Características
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1">Información técnica detallada del producto</p>
                            </div>
                            
                            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                {/* Descripción */}
                                <div>
                                    <label htmlFor="descripcion" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="descripcion"
                                        rows={3}
                                        value={data.descripcion}
                                        onChange={(e) => setData('descripcion', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                                        placeholder="Describe las características principales del producto..."
                                    />
                                    {errors.descripcion && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.descripcion}</p>}
                                </div>

                                {/* Banda Toxicológica */}
                                <div>
                                    <label htmlFor="banda_toxicologica" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Banda Toxicológica
                                    </label>
                                    <input
                                        type="text"
                                        id="banda_toxicologica"
                                        value={data.banda_toxicologica}
                                        onChange={(e) => setData('banda_toxicologica', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 text-gray-900 placeholder-gray-400"
                                        placeholder="Ej: Verde, Azul, Roja, Amarilla"
                                    />
                                    {errors.banda_toxicologica && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.banda_toxicologica}</p>}
                                </div>

                                {/* Acción */}
                                <div>
                                    <label htmlFor="accion" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Acción
                                    </label>
                                    <textarea
                                        id="accion"
                                        rows={3}
                                        value={data.accion}
                                        onChange={(e) => setData('accion', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                                        placeholder="Describe cómo actúa el producto..."
                                    />
                                    {errors.accion && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.accion}</p>}
                                </div>

                                {/* Mecanismo de Acción */}
                                <div>
                                    <label htmlFor="mecanismo_de_accion" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Mecanismo de Acción
                                    </label>
                                    <textarea
                                        id="mecanismo_de_accion"
                                        rows={3}
                                        value={data.mecanismo_de_accion}
                                        onChange={(e) => setData('mecanismo_de_accion', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-400 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                                        placeholder="Explica el mecanismo de acción específico..."
                                    />
                                    {errors.mecanismo_de_accion && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.mecanismo_de_accion}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Aplicación y Uso */}
                        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-emerald-500/10 border-2 border-white/50 overflow-hidden">
                            <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-b-2 border-yellow-200/50">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                                    <Package className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-600" />
                                    Aplicación y Uso
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1">Información sobre aplicación y recomendaciones</p>
                            </div>
                            
                            <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                                {/* Malezas */}
                                <div>
                                    <label htmlFor="malezas" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Malezas que Controla
                                    </label>
                                    <textarea
                                        id="malezas"
                                        rows={3}
                                        value={data.malezas}
                                        onChange={(e) => setData('malezas', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                                        placeholder="Lista las malezas que controla..."
                                    />
                                    {errors.malezas && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.malezas}</p>}
                                </div>

                                {/* Cultivos */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        Cultivos Aplicables
                                    </label>
                                    <div className="space-y-3">
                                        <p className="text-xs text-gray-600 bg-emerald-50/50 rounded-lg p-2">
                                            Selecciona los cultivos donde se puede aplicar este producto
                                        </p>
                                        
                                        {/* Buscador de cultivos */}
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Buscar cultivos..."
                                                value={searchCultivo}
                                                onChange={(e) => setSearchCultivo(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2.5 bg-white/80 backdrop-blur-sm border-2 border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 transition-all duration-200 text-sm"
                                            />
                                        </div>
                                            
                                        {cultivos && cultivos.length > 0 ? (
                                            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-3 sm:p-4 bg-emerald-50/30 backdrop-blur-sm rounded-xl border-2 border-emerald-200">
                                                {cultivos
                                                    .filter(cultivo => 
                                                        cultivo.nombre.toLowerCase().includes(searchCultivo.toLowerCase())
                                                    )
                                                    .map((cultivo) => {
                                                        const isSelected = data.cultivos_ids.includes(cultivo.id);
                                                        return (
                                                            <label
                                                                key={cultivo.id}
                                                                className={`inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 border-2 ${
                                                                    isSelected
                                                                        ? 'bg-gradient-to-r from-emerald-500 to-lime-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/30 scale-105'
                                                                        : 'bg-white/80 text-gray-700 border-emerald-200 hover:bg-emerald-50 hover:border-emerald-300 hover:scale-105'
                                                                }`}
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={isSelected}
                                                                    onChange={() => handleCultivoChange(cultivo.id)}
                                                                    className="sr-only"
                                                                />
                                                                <span className="flex items-center gap-1.5">
                                                                    {isSelected && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                                                                    {cultivo.nombre}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                {cultivos.filter(c => c.nombre.toLowerCase().includes(searchCultivo.toLowerCase())).length === 0 && (
                                                    <p className="text-sm text-gray-500 py-4 w-full text-center">
                                                        No se encontraron cultivos con "<span className="font-semibold">{searchCultivo}</span>"
                                                    </p>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center py-6 bg-emerald-50/30 backdrop-blur-sm rounded-xl border-2 border-dashed border-emerald-200">
                                                <Upload className="mx-auto h-8 w-8 text-emerald-300 mb-2" />
                                                <p className="text-sm text-gray-600 font-medium">No hay cultivos disponibles</p>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    Primero debes crear cultivos desde el módulo correspondiente
                                                </p>
                                            </div>
                                        )}
                                        
                                        {data.cultivos_ids.length > 0 && (
                                            <div className="mt-3 p-3 bg-gradient-to-r from-emerald-50 to-lime-50 rounded-xl border-2 border-emerald-200 backdrop-blur-sm">
                                                <div className="flex items-center text-sm text-emerald-800">
                                                    <Check className="w-4 h-4 mr-2" />
                                                    <span className="font-semibold">
                                                        {data.cultivos_ids.length} cultivo{data.cultivos_ids.length !== 1 ? 's' : ''} seleccionado{data.cultivos_ids.length !== 1 ? 's' : ''}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {errors.cultivos_ids && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.cultivos_ids}</p>}
                                </div>

                                {/* Dosis */}
                                <div>
                                    <label htmlFor="dosis" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Dosis
                                    </label>
                                    <textarea
                                        id="dosis"
                                        rows={3}
                                        value={data.dosis}
                                        onChange={(e) => setData('dosis', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                                        placeholder="Especifica las dosis recomendadas..."
                                    />
                                    {errors.dosis && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.dosis}</p>}
                                </div>

                                {/* Recomendaciones de Uso */}
                                <div>
                                    <label htmlFor="recomendaciones_de_uso" className="block text-sm font-semibold text-gray-900 mb-2">
                                        Recomendaciones de Uso
                                    </label>
                                    <textarea
                                        id="recomendaciones_de_uso"
                                        rows={3}
                                        value={data.recomendaciones_de_uso}
                                        onChange={(e) => setData('recomendaciones_de_uso', e.target.value)}
                                        className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border-2 border-yellow-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-400 transition-all duration-200 text-gray-900 placeholder-gray-400 resize-none"
                                        placeholder="Incluye recomendaciones importantes para el uso..."
                                    />
                                    {errors.recomendaciones_de_uso && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.recomendaciones_de_uso}</p>}
                                </div>

                                {/* Árboles de Recomendación */}
                                <div>
                                    <label className="block text-sm font-semibold text-gray-900 mb-3">
                                        Árboles de Recomendación
                                    </label>
                                    <div className="space-y-3">
                                        <p className="text-xs text-gray-600 bg-orange-50/50 rounded-lg p-2">Selecciona uno o varios árboles de recomendación</p>
                                        
                                        {/* Buscador de árboles */}
                                        <div className="relative">
                                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="Buscar árboles de recomendación..."
                                                value={searchArbol}
                                                onChange={(e) => setSearchArbol(e.target.value)}
                                                className="w-full pl-10 pr-4 py-2.5 bg-white/80 backdrop-blur-sm border-2 border-orange-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-400 transition-all duration-200 text-sm"
                                            />
                                        </div>
                                        
                                        {arbolesRecomendacion && arbolesRecomendacion.length > 0 ? (
                                            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-3 sm:p-4 bg-orange-50/30 backdrop-blur-sm rounded-xl border-2 border-orange-200">
                                                {arbolesRecomendacion
                                                    .filter(arbol => 
                                                        arbol.nombre.toLowerCase().includes(searchArbol.toLowerCase())
                                                    )
                                                    .map((arbol) => {
                                                        const isSelected = data.arboles_ids.includes(arbol.id);
                                                        return (
                                                            <label
                                                                key={arbol.id}
                                                                className={`inline-flex items-center px-3 py-2 rounded-full text-xs sm:text-sm font-medium cursor-pointer transition-all duration-200 border-2 ${
                                                                    isSelected
                                                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white border-orange-400 shadow-lg shadow-orange-500/30 scale-105'
                                                                        : 'bg-white/80 text-gray-700 border-orange-200 hover:bg-orange-50 hover:border-orange-300 hover:scale-105'
                                                                }`}
                                                            >
                                                                <input type="checkbox" checked={isSelected} onChange={() => handleArbolChange(arbol.id)} className="sr-only" />
                                                                <span className="flex items-center gap-1.5">
                                                                    {isSelected && <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                                                                    {arbol.nombre}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                {arbolesRecomendacion.filter(a => a.nombre.toLowerCase().includes(searchArbol.toLowerCase())).length === 0 && (
                                                    <p className="text-sm text-gray-500 py-4 w-full text-center">
                                                        No se encontraron árboles con "<span className="font-semibold">{searchArbol}</span>"
                                                    </p>
                                                )}
                                            </div>
                                        ) : (
                                            <div className="text-center py-6 bg-orange-50/30 backdrop-blur-sm rounded-xl border-2 border-dashed border-orange-200">
                                                <Upload className="mx-auto h-8 w-8 text-orange-300 mb-2" />
                                                <p className="text-sm text-gray-600 font-medium">No hay árboles de recomendación disponibles</p>
                                                <p className="text-xs text-gray-500 mt-1">Primero crea árboles desde su módulo</p>
                                            </div>
                                        )}
                                        {data.arboles_ids.length > 0 && (
                                            <div className="mt-3 p-3 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border-2 border-orange-200 backdrop-blur-sm">
                                                <div className="flex items-center text-sm text-orange-800">
                                                    <Check className="w-4 h-4 mr-2" />
                                                    <span className="font-semibold">{data.arboles_ids.length} árbol(es) seleccionado(s)</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    {errors.arboles_ids && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.arboles_ids}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Documentos */}
                        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-emerald-500/10 border-2 border-white/50 overflow-hidden">
                            <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-b-2 border-pink-200/50">
                                <h3 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-pink-600" />
                                    Documentos Técnicos
                                </h3>
                                <p className="text-xs sm:text-sm text-gray-600 mt-1">Fichas técnicas, etiquetas y documentación</p>
                            </div>
                            
                            <div className="p-4 sm:p-6">
                                {/* PDFs Existentes */}
                                {producto.pdfs && producto.pdfs.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                            Documentos actuales ({producto.pdfs.length}):
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {producto.pdfs.map((pdf, index) => (
                                                <div key={index} className="flex items-center p-3 bg-pink-50/50 backdrop-blur-sm rounded-lg border border-pink-200">
                                                    <FileText className="w-4 h-4 mr-2 text-red-500" />
                                                    <span className="text-sm text-gray-700 truncate flex-1">
                                                        {pdf.split('/').pop()}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-3 bg-blue-50/50 rounded-lg p-2">
                                            💡 Los documentos actuales se mantendrán. Solo selecciona nuevos archivos si quieres agregar más.
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="pdfs" className="block text-sm font-semibold text-gray-900 mb-3">
                                        {producto.pdfs && producto.pdfs.length > 0 ? 'Agregar más documentos' : 'PDFs / Documentos'}
                                    </label>
                                    <div className="border-2 border-dashed border-pink-300 rounded-xl p-6 sm:p-8 text-center hover:border-pink-400 hover:bg-pink-50/30 transition-all duration-200 bg-white/40 backdrop-blur-sm">
                                        <Upload className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-pink-400 mb-3 sm:mb-4" />
                                        <input
                                            type="file"
                                            id="pdfs"
                                            multiple
                                            accept=".pdf"
                                            onChange={handlePdfsChange}
                                            className="hidden"
                                        />
                                        <label htmlFor="pdfs" className="cursor-pointer">
                                            <span className="text-pink-600 hover:text-pink-500 font-semibold text-sm sm:text-base">
                                                Seleccionar archivos PDF
                                            </span>
                                            <span className="text-gray-500 text-sm sm:text-base"> o arrastra y suelta aquí</span>
                                        </label>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Múltiples archivos PDF (máx. 10MB cada uno)
                                        </p>
                                    </div>
                                    
                                    {data.pdfs && data.pdfs.length > 0 && (
                                        <div className="mt-4 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl border-2 border-pink-200">
                                            <h4 className="text-sm font-semibold text-gray-900 mb-3">
                                                Archivos seleccionados ({data.pdfs.length}):
                                            </h4>
                                            <ul className="space-y-2">
                                                {Array.from(data.pdfs).map((pdf, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                                                        <FileText className="w-4 h-4 mr-2 text-red-500" />
                                                        <span className="truncate">{pdf.name}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {errors.pdfs && <p className="text-red-600 text-sm mt-2 flex items-center gap-1"><X className="w-4 h-4" />{errors.pdfs}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="bg-white/60 backdrop-blur-lg rounded-2xl shadow-xl shadow-emerald-500/10 border-2 border-white/50 p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">
                                <Link
                                    href={route('admin.productos')}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 text-base font-semibold rounded-xl text-gray-700 bg-white/80 backdrop-blur-sm hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 hover:scale-105"
                                >
                                    <X className="w-5 h-5" />
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-base font-semibold rounded-xl text-white bg-gradient-to-r from-emerald-600 to-lime-600 hover:from-emerald-700 hover:to-lime-700 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                                >
                                    {processing ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                                            <span>Actualizando producto...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Check className="w-5 h-5" />
                                            <span>Actualizar Producto</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    );
}