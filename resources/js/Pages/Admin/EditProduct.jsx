import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function EditProduct({ producto, categorias, cultivos, principiosActivos }) {
    const { data, setData, put, processing, errors, reset } = useForm({
        nombre: producto.nombre || '',
        imagen: null,
        categoria_id: producto.categoria_id || '',
        principio_activo_id: producto.principio_activo_id || '',
        principio_activo: producto.principio_activo || '',
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
        arbol_de_recomendacion: producto.arbol_de_recomendacion || '',
        activo: producto.activo ?? true,
        pdfs: [],
        cultivos_ids: producto.cultivos ? producto.cultivos.map(cultivo => cultivo.id) : [],
    });

    const [imagePreview, setImagePreview] = useState(null);

    // Configurar la imagen existente al cargar el componente
    useEffect(() => {
        if (producto.imagen) {
            setImagePreview(producto.imagen);
        }
    }, [producto.imagen]);

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
        formData.append('arbol_de_recomendacion', data.arbol_de_recomendacion || '');
        formData.append('activo', data.activo ? '1' : '0');
        
        // Agregar cultivos seleccionados
        if (data.cultivos_ids && data.cultivos_ids.length > 0) {
            data.cultivos_ids.forEach((cultivoId, index) => {
                formData.append(`cultivos_ids[${index}]`, cultivoId);
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
            // Si se elimina el archivo, volver a la imagen original si existe
            if (producto.imagen) {
                setImagePreview(producto.imagen);
                setData('imagen', null);
            } else {
                setImagePreview(null);
            }
        }
    };

    const removeImage = () => {
        setData('imagen', null);
        setImagePreview(null);
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

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                            Editar Producto: {producto.nombre}
                        </h2>
                        <p className="text-sm text-gray-600 mt-1">
                            Modifica la información del producto en el catálogo
                        </p>
                    </div>
                    <Link
                        href={route('admin.productos')}
                        className="inline-flex items-center px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-lg transition-colors duration-200"
                    >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver a Productos
                    </Link>
                </div>
            }
        >
            <Head title={`Editar - ${producto.nombre}`} />

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Progreso/Pasos */}
                    <div className="mb-8">
                        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                            <div className="flex items-center space-x-4">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                                        ✓
                                    </div>
                                    <span className="ml-2 text-sm font-medium text-gray-900">Editando Producto</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Información Básica */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Información Básica
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Datos principales del producto</p>
                            </div>
                            
                            <div className="p-6 space-y-6">
                                {/* Nombre del Producto */}
                                <div>
                                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-900 mb-2">
                                        Nombre del Producto <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="nombre"
                                        value={data.nombre}
                                        onChange={(e) => setData('nombre', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ingresa el nombre del producto..."
                                        required
                                    />
                                    {errors.nombre && <p className="text-red-600 text-sm mt-2">{errors.nombre}</p>}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Imagen del Producto */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-2">
                                            Imagen del Producto
                                        </label>
                                        <div className="space-y-4">
                                            {imagePreview ? (
                                                <div className="relative">
                                                    <div className="w-full h-48 rounded-lg border-2 border-dashed border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center">
                                                        <img
                                                            src={imagePreview}
                                                            alt="Preview"
                                                            className="max-w-full max-h-full object-contain"
                                                        />
                                                    </div>
                                                    <button
                                                        type="button"
                                                        onClick={removeImage}
                                                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 transition-colors duration-200"
                                                    >
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                        </svg>
                                                    </button>
                                                    {producto.imagen && imagePreview === producto.imagen && (
                                                        <div className="absolute bottom-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
                                                            Imagen actual
                                                        </div>
                                                    )}
                                                </div>
                                            ) : (
                                                <div className="w-full h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center hover:border-blue-400 transition-colors duration-200">
                                                    <div className="text-center">
                                                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        <p className="mt-2 text-sm text-gray-600">Selecciona una imagen</p>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            <input
                                                type="file"
                                                id="imagen"
                                                accept="image/*"
                                                onChange={handleImageChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            />
                                            <p className="text-xs text-gray-500">
                                                Formatos: JPG, PNG, GIF, SVG (máx. 2MB) - Deja vacío para mantener la imagen actual
                                            </p>
                                        </div>
                                        {errors.imagen && <p className="text-red-600 text-sm mt-2">{errors.imagen}</p>}
                                    </div>

                                    {/* Categoría */}
                                    <div>
                                        <label htmlFor="categoria_id" className="block text-sm font-medium text-gray-900 mb-2">
                                            Categoría
                                        </label>
                                        <select
                                            id="categoria_id"
                                            value={data.categoria_id}
                                            onChange={(e) => setData('categoria_id', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        >
                                            <option value="">Seleccionar categoría</option>
                                            {categorias && categorias.map((categoria) => (
                                                <option key={categoria.id} value={categoria.id}>
                                                    {categoria.nombre}
                                                </option>
                                            ))}
                                        </select>
                                        {categorias && categorias.length > 0 && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                Categoría actual: {producto.categoria ? producto.categoria.nombre : 'Sin categoría'} | 
                                                Disponibles: {categorias.map(cat => cat.nombre).join(', ')}
                                            </p>
                                        )}
                                        {errors.categoria_id && <p className="text-red-600 text-sm mt-2">{errors.categoria_id}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                    {/* Principio Activo */}
                                    <div>
                                        <label htmlFor="principio_activo_id" className="block text-sm font-medium text-gray-900 mb-2">
                                            Principio Activo
                                        </label>
                                        <select
                                            id="principio_activo_id"
                                            value={data.principio_activo_id}
                                            onChange={(e) => setData('principio_activo_id', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        >
                                            <option value="">Seleccionar principio activo</option>
                                            {principiosActivos && principiosActivos.map((principio) => (
                                                <option key={principio.id} value={principio.id}>
                                                    {principio.nombre}
                                                </option>
                                            ))}
                                        </select>
                                        {principiosActivos && principiosActivos.length > 0 && (
                                            <p className="text-xs text-gray-500 mt-1">
                                                {principiosActivos.length} principios activos disponibles
                                            </p>
                                        )}
                                        {errors.principio_activo_id && <p className="text-red-600 text-sm mt-2">{errors.principio_activo_id}</p>}
                                    </div>

                                    {/* Formulación */}
                                    <div>
                                        <label htmlFor="formulacion" className="block text-sm font-medium text-gray-900 mb-2">
                                            Formulación
                                        </label>
                                        <input
                                            type="text"
                                            id="formulacion"
                                            value={data.formulacion}
                                            onChange={(e) => setData('formulacion', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: EC, WP, SL"
                                        />
                                        {errors.formulacion && <p className="text-red-600 text-sm mt-2">{errors.formulacion}</p>}
                                    </div>

                                    {/* Presentación */}
                                    <div>
                                        <label htmlFor="presentacion" className="block text-sm font-medium text-gray-900 mb-2">
                                            Presentación
                                        </label>
                                        <input
                                            type="text"
                                            id="presentacion"
                                            value={data.presentacion}
                                            onChange={(e) => setData('presentacion', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: 1L, 500ml, 250g"
                                        />
                                        {errors.presentacion && <p className="text-red-600 text-sm mt-2">{errors.presentacion}</p>}
                                    </div>
                                </div>

                                {/* Estado Activo */}
                                <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                                    <input
                                        type="checkbox"
                                        id="activo"
                                        checked={data.activo}
                                        onChange={(e) => setData('activo', e.target.checked)}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="activo" className="text-sm font-medium text-gray-900">
                                        Producto activo (visible en el catálogo)
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Descripción y Detalles */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Descripción y Características
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Información técnica detallada del producto</p>
                            </div>
                            
                            <div className="p-6 space-y-6">
                                {/* Descripción */}
                                <div>
                                    <label htmlFor="descripcion" className="block text-sm font-medium text-gray-900 mb-2">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="descripcion"
                                        rows={3}
                                        value={data.descripcion}
                                        onChange={(e) => setData('descripcion', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Describe las características principales del producto..."
                                    />
                                    {errors.descripcion && <p className="text-red-600 text-sm mt-2">{errors.descripcion}</p>}
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Banda */}
                                    <div>
                                        <label htmlFor="banda" className="block text-sm font-medium text-gray-900 mb-2">
                                            Banda
                                        </label>
                                        <input
                                            type="text"
                                            id="banda"
                                            value={data.banda}
                                            onChange={(e) => setData('banda', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: Verde, Azul, Roja"
                                        />
                                        {errors.banda && <p className="text-red-600 text-sm mt-2">{errors.banda}</p>}
                                    </div>

                                    {/* Banda Toxicológica */}
                                    <div>
                                        <label htmlFor="banda_toxicologica" className="block text-sm font-medium text-gray-900 mb-2">
                                            Banda Toxicológica
                                        </label>
                                        <input
                                            type="text"
                                            id="banda_toxicologica"
                                            value={data.banda_toxicologica}
                                            onChange={(e) => setData('banda_toxicologica', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: I, II, III, IV"
                                        />
                                        {errors.banda_toxicologica && <p className="text-red-600 text-sm mt-2">{errors.banda_toxicologica}</p>}
                                    </div>
                                </div>

                                {/* Acción */}
                                <div>
                                    <label htmlFor="accion" className="block text-sm font-medium text-gray-900 mb-2">
                                        Acción
                                    </label>
                                    <textarea
                                        id="accion"
                                        rows={2}
                                        value={data.accion}
                                        onChange={(e) => setData('accion', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Describe cómo actúa el producto..."
                                    />
                                    {errors.accion && <p className="text-red-600 text-sm mt-2">{errors.accion}</p>}
                                </div>

                                {/* Mecanismo de Acción */}
                                <div>
                                    <label htmlFor="mecanismo_de_accion" className="block text-sm font-medium text-gray-900 mb-2">
                                        Mecanismo de Acción
                                    </label>
                                    <textarea
                                        id="mecanismo_de_accion"
                                        rows={2}
                                        value={data.mecanismo_de_accion}
                                        onChange={(e) => setData('mecanismo_de_accion', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Explica el mecanismo de acción específico..."
                                    />
                                    {errors.mecanismo_de_accion && <p className="text-red-600 text-sm mt-2">{errors.mecanismo_de_accion}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Aplicación y Uso */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-yellow-50 to-orange-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                    Aplicación y Uso
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Información sobre aplicación y recomendaciones</p>
                            </div>
                            
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    {/* Malezas */}
                                    <div>
                                        <label htmlFor="malezas" className="block text-sm font-medium text-gray-900 mb-2">
                                            Malezas
                                        </label>
                                        <textarea
                                            id="malezas"
                                            rows={3}
                                            value={data.malezas}
                                            onChange={(e) => setData('malezas', e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                            placeholder="Lista las malezas que controla..."
                                        />
                                        {errors.malezas && <p className="text-red-600 text-sm mt-2">{errors.malezas}</p>}
                                    </div>

                                    {/* Cultivos */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-900 mb-3">
                                            Cultivos Aplicables
                                        </label>
                                        <div className="space-y-3">
                                            <p className="text-xs text-gray-500">
                                                Selecciona los cultivos donde se puede aplicar este producto
                                            </p>
                                            
                                            {cultivos && cultivos.length > 0 ? (
                                                <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-3 bg-gray-50 rounded-lg border">
                                                    {cultivos.map((cultivo) => {
                                                        const isSelected = data.cultivos_ids.includes(cultivo.id);
                                                        return (
                                                            <label
                                                                key={cultivo.id}
                                                                className={`inline-flex items-center px-3 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-200 border-2 ${
                                                                    isSelected
                                                                        ? 'bg-blue-100 text-blue-800 border-blue-300 shadow-md'
                                                                        : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                                                                }`}
                                                            >
                                                                <input
                                                                    type="checkbox"
                                                                    checked={isSelected}
                                                                    onChange={() => handleCultivoChange(cultivo.id)}
                                                                    className="sr-only"
                                                                />
                                                                <span className="flex items-center">
                                                                    {isSelected && (
                                                                        <svg className="w-4 h-4 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                        </svg>
                                                                    )}
                                                                    {cultivo.nombre}
                                                                </span>
                                                            </label>
                                                        );
                                                    })}
                                                </div>
                                            ) : (
                                                <div className="text-center py-6 bg-gray-50 rounded-lg border-2 border-dashed border-gray-200">
                                                    <svg className="mx-auto h-8 w-8 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                                    </svg>
                                                    <p className="text-sm text-gray-500">No hay cultivos disponibles</p>
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        Primero debes crear cultivos desde el módulo correspondiente
                                                    </p>
                                                </div>
                                            )}
                                            
                                            {data.cultivos_ids.length > 0 && (
                                                <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                                    <div className="flex items-center text-sm text-blue-800">
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="font-medium">
                                                            {data.cultivos_ids.length} cultivo{data.cultivos_ids.length !== 1 ? 's' : ''} seleccionado{data.cultivos_ids.length !== 1 ? 's' : ''}
                                                        </span>
                                                    </div>
                                                    <div className="mt-2 text-xs text-blue-700">
                                                        {cultivos
                                                            .filter(cultivo => data.cultivos_ids.includes(cultivo.id))
                                                            .map(cultivo => cultivo.nombre)
                                                            .join(', ')
                                                        }
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                        {errors.cultivos_ids && <p className="text-red-600 text-sm mt-2">{errors.cultivos_ids}</p>}
                                    </div>
                                </div>

                                {/* Dosis */}
                                <div>
                                    <label htmlFor="dosis" className="block text-sm font-medium text-gray-900 mb-2">
                                        Dosis
                                    </label>
                                    <textarea
                                        id="dosis"
                                        rows={2}
                                        value={data.dosis}
                                        onChange={(e) => setData('dosis', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Especifica las dosis recomendadas..."
                                    />
                                    {errors.dosis && <p className="text-red-600 text-sm mt-2">{errors.dosis}</p>}
                                </div>

                                {/* Recomendaciones de Uso */}
                                <div>
                                    <label htmlFor="recomendaciones_de_uso" className="block text-sm font-medium text-gray-900 mb-2">
                                        Recomendaciones de Uso
                                    </label>
                                    <textarea
                                        id="recomendaciones_de_uso"
                                        rows={3}
                                        value={data.recomendaciones_de_uso}
                                        onChange={(e) => setData('recomendaciones_de_uso', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Incluye recomendaciones importantes para el uso..."
                                    />
                                    {errors.recomendaciones_de_uso && <p className="text-red-600 text-sm mt-2">{errors.recomendaciones_de_uso}</p>}
                                </div>

                                {/* Árbol de Recomendación */}
                                <div>
                                    <label htmlFor="arbol_de_recomendacion" className="block text-sm font-medium text-gray-900 mb-2">
                                        Árbol de Recomendación
                                    </label>
                                    <textarea
                                        id="arbol_de_recomendacion"
                                        rows={3}
                                        value={data.arbol_de_recomendacion}
                                        onChange={(e) => setData('arbol_de_recomendacion', e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                                        placeholder="Estructura de recomendaciones de aplicación..."
                                    />
                                    {errors.arbol_de_recomendacion && <p className="text-red-600 text-sm mt-2">{errors.arbol_de_recomendacion}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Documentos */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                            <div className="px-6 py-4 bg-gradient-to-r from-purple-50 to-pink-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Documentos Técnicos
                                </h3>
                                <p className="text-sm text-gray-600 mt-1">Fichas técnicas, etiquetas y documentación</p>
                            </div>
                            
                            <div className="p-6">
                                {/* PDFs Existentes */}
                                {producto.pdfs && producto.pdfs.length > 0 && (
                                    <div className="mb-6">
                                        <h4 className="text-sm font-medium text-gray-900 mb-3">
                                            Documentos actuales ({producto.pdfs.length}):
                                        </h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                            {producto.pdfs.map((pdf, index) => (
                                                <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                                                    <svg className="w-4 h-4 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="text-sm text-gray-700 truncate">
                                                        {pdf.split('/').pop()}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Los documentos actuales se mantendrán. Solo selecciona nuevos archivos si quieres reemplazarlos.
                                        </p>
                                    </div>
                                )}

                                <div>
                                    <label htmlFor="pdfs" className="block text-sm font-medium text-gray-900 mb-3">
                                        {producto.pdfs && producto.pdfs.length > 0 ? 'Reemplazar documentos' : 'PDFs / Documentos'}
                                    </label>
                                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-200">
                                        <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <input
                                            type="file"
                                            id="pdfs"
                                            multiple
                                            accept=".pdf"
                                            onChange={handlePdfsChange}
                                            className="hidden"
                                        />
                                        <label htmlFor="pdfs" className="cursor-pointer">
                                            <span className="text-blue-600 hover:text-blue-500 font-medium">
                                                Seleccionar archivos PDF
                                            </span>
                                            <span className="text-gray-500"> o arrastra y suelta aquí</span>
                                        </label>
                                        <p className="text-xs text-gray-500 mt-2">
                                            Múltiples archivos PDF (máx. 10MB cada uno)
                                        </p>
                                    </div>
                                    
                                    {data.pdfs && data.pdfs.length > 0 && (
                                        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                                                Nuevos archivos para subir ({data.pdfs.length}):
                                            </h4>
                                            <ul className="space-y-2">
                                                {Array.from(data.pdfs).map((pdf, index) => (
                                                    <li key={index} className="flex items-center text-sm text-gray-600">
                                                        <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                                        </svg>
                                                        {pdf.name}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {errors.pdfs && <p className="text-red-600 text-sm mt-2">{errors.pdfs}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Botones de Acción */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                            <div className="flex flex-col sm:flex-row gap-4 justify-end">
                                <Link
                                    href={route('admin.productos')}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                    Cancelar
                                </Link>
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                    {processing ? (
                                        <>
                                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="m100 50c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10s-10 4.477-10 10zm-9-3h12l-4-4m0 8l4-4"></path>
                                            </svg>
                                            Actualizando producto...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            Actualizar Producto
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