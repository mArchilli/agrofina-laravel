import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function ProductosDashboard({ productos, categorias }) {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [productToDelete, setProductToDelete] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [processingToggle, setProcessingToggle] = useState(null);

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(productos.data || []);
        } else {
            setFilteredProducts((productos.data || []).filter(
                producto => producto.categoria_id == selectedCategory
            ));
        }
    }, [selectedCategory, productos.data]);

    const handleDelete = (producto) => {
        setProductToDelete(producto);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (productToDelete) {
            router.delete(route('admin.productos.destroy', productToDelete.id), {
                onSuccess: () => {
                    setShowDeleteModal(false);
                    setProductToDelete(null);
                },
            });
        }
    };

    const handleToggleStatus = (producto) => {
        setProcessingToggle(producto.id);
        router.patch(route('admin.productos.toggle-status', producto.id), {}, {
            onSuccess: () => {
                setProcessingToggle(null);
            },
            onError: () => {
                setProcessingToggle(null);
            }
        });
    };

    return (
        <AuthenticatedLayout
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Gestión de Productos
                    </h2>
                    <Link
                        href={route('admin.productos.create')}
                        className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Nuevo Producto
                    </Link>
                </div>
            }
        >
            <Head title="Productos - Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {/* Filtros */}
                    <div className="mb-6">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-4">
                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                                    <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">
                                        Filtrar por categoría:
                                    </label>
                                    <select
                                        id="category-filter"
                                        value={selectedCategory}
                                        onChange={(e) => setSelectedCategory(e.target.value)}
                                        className="border border-gray-300 rounded-md px-7 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    >
                                        <option value="all">Todas las categorías</option>
                                        {categorias && categorias.map((categoria) => (
                                            <option key={categoria.id} value={categoria.id}>
                                                {categoria.nombre}
                                            </option>
                                        ))}
                                    </select>
                                    <span className="text-sm text-gray-500">
                                        Mostrando {filteredProducts.length} de {productos.data?.length || 0} productos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {filteredProducts.map((producto) => (
                                        <div key={producto.id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                                            {/* Imagen del producto */}
                                            <div className="aspect-w-16 aspect-h-9 w-full h-48 bg-gray-100 rounded-t-lg overflow-hidden">
                                                {producto.imagen ? (
                                                    <img
                                                        src={producto.imagen}
                                                        alt={producto.nombre}
                                                        className="w-full h-full object-contain bg-white"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center bg-gray-50">
                                                        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 112.828 2.828L16 19M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Contenido de la tarjeta */}
                                            <div className="p-4">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                                                        {producto.nombre}
                                                    </h3>
                                                    <span
                                                        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                            producto.activo
                                                                ? 'bg-green-100 text-green-800'
                                                                : 'bg-red-100 text-red-800'
                                                        }`}
                                                    >
                                                        {producto.activo ? 'Activo' : 'Inactivo'}
                                                    </span>
                                                </div>

                                                <div className="mb-3">
                                                    <p className="text-sm text-gray-600 mb-1">
                                                        <span className="font-medium">Categoría:</span>{' '}
                                                        {producto.categoria?.nombre || 'Sin categoría'}
                                                    </p>
                                                    {producto.principio_activo && (
                                                        <p className="text-sm text-gray-600 mb-1">
                                                            <span className="font-medium">Principio activo:</span>{' '}
                                                            {producto.principio_activo}
                                                        </p>
                                                    )}
                                                    {producto.descripcion && (
                                                        <p className="text-sm text-gray-500 line-clamp-2">
                                                            {producto.descripcion}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-gray-400">
                                                        {new Date(producto.created_at).toLocaleDateString()}
                                                    </span>
                                                    <div className="flex gap-2">
                                                        <button
                                                            onClick={() => handleToggleStatus(producto)}
                                                            disabled={processingToggle === producto.id}
                                                            className={`inline-flex items-center p-2 rounded-full transition-colors duration-200 ${
                                                                producto.activo 
                                                                    ? 'text-orange-600 hover:text-orange-900 hover:bg-orange-50'
                                                                    : 'text-green-600 hover:text-green-900 hover:bg-green-50'
                                                            } ${processingToggle === producto.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                                            title={producto.activo ? 'Desactivar producto' : 'Activar producto'}
                                                        >
                                                            {processingToggle === producto.id ? (
                                                                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                                    <path className="opacity-75" fill="currentColor" d="m100 50c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10s-10 4.477-10 10zm-9-3h12l-4-4m0 8l4-4"></path>
                                                                </svg>
                                                            ) : producto.activo ? (
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            )}
                                                        </button>
                                                        <Link
                                                            href={route('admin.productos.edit', producto.id)}
                                                            className="inline-flex items-center p-2 text-indigo-600 hover:text-indigo-900 hover:bg-indigo-50 rounded-full transition-colors duration-200"
                                                            title="Editar producto"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </Link>
                                                        <button
                                                            onClick={() => handleDelete(producto)}
                                                            className="inline-flex items-center p-2 text-red-600 hover:text-red-900 hover:bg-red-50 rounded-full transition-colors duration-200"
                                                            title="Eliminar producto"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                        />
                                    </svg>
                                    <h3 className="mt-2 text-sm font-medium text-gray-900">
                                        {selectedCategory === 'all' ? 'No hay productos' : 'No hay productos en esta categoría'}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-500">
                                        {selectedCategory === 'all' 
                                            ? 'Comienza creando un nuevo producto.' 
                                            : 'Prueba seleccionando otra categoría o crea un producto nuevo.'
                                        }
                                    </p>
                                    <div className="mt-6">
                                        <Link
                                            href={route('admin.productos.create')}
                                            className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Crear Producto
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de confirmación de eliminación */}
            {showDeleteModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                    <svg
                                        className="h-6 w-6 text-red-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                                        />
                                    </svg>
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                        Eliminar producto
                                    </h3>
                                    
                                    {/* Información del producto */}
                                    {productToDelete && (
                                        <div className="bg-gray-50 rounded-lg p-4 mb-4">
                                            <div className="flex items-start space-x-4">
                                                {/* Imagen del producto */}
                                                <div className="w-16 h-16 bg-white rounded-lg border border-gray-200 flex-shrink-0 overflow-hidden">
                                                    {productToDelete.imagen ? (
                                                        <img
                                                            src={productToDelete.imagen}
                                                            alt={productToDelete.nombre}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full flex items-center justify-center">
                                                            <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 112.828 2.828L16 19M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                            </svg>
                                                        </div>
                                                    )}
                                                </div>
                                                
                                                {/* Información del producto */}
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-sm font-medium text-gray-900 truncate">
                                                        {productToDelete.nombre}
                                                    </h4>
                                                    <p className="text-sm text-gray-500">
                                                        <span className="font-medium">Categoría:</span> {productToDelete.categoria?.nombre || 'Sin categoría'}
                                                    </p>
                                                    {productToDelete.principio_activo && (
                                                        <p className="text-sm text-gray-500">
                                                            <span className="font-medium">Principio activo:</span> {productToDelete.principio_activo}
                                                        </p>
                                                    )}
                                                    <div className="mt-2">
                                                        <span
                                                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                                                                productToDelete.activo
                                                                    ? 'bg-green-100 text-green-800'
                                                                    : 'bg-red-100 text-red-800'
                                                            }`}
                                                        >
                                                            {productToDelete.activo ? 'Activo' : 'Inactivo'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            ¿Estás seguro que deseas eliminar este producto? Esta acción eliminará toda la información asociada, incluyendo imágenes y documentos PDF.
                                        </p>
                                        <div className="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                                            <p className="text-sm text-yellow-800">
                                                <span className="font-medium">⚠️ Advertencia:</span> Esta acción no se puede deshacer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    onClick={confirmDelete}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Sí, eliminar producto
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowDeleteModal(false);
                                        setProductToDelete(null);
                                    }}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 sm:mt-0 sm:w-auto sm:text-sm"
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}