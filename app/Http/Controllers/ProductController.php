<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Categoria;
use App\Models\Cultivo;
use App\Models\PrincipioActivo;
use App\Models\ArbolRecomendacion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * Display public listing of products with filters.
     */
    public function showPublic(Request $request)
    {
        $query = Producto::with([
            'categoria',
            'cultivos',
            'principioActivo',
            'arbolesRecomendacion'
        ])->where('activo', true);

        // Filtro por categoría
        if ($request->filled('categoria')) {
            $query->where('categoria_id', $request->categoria);
        }

        // Filtro por cultivo
        if ($request->filled('cultivo')) {
            $query->whereHas('cultivos', function ($q) use ($request) {
                $q->where('cultivos.id', $request->cultivo);
            });
        }

        // Filtro por principio activo
        if ($request->filled('principio_activo')) {
            $query->where('principio_activo_id', $request->principio_activo);
        }

        // Filtro por árbol de recomendación
        if ($request->filled('arbol_recomendacion')) {
            $query->whereHas('arbolesRecomendacion', function ($q) use ($request) {
                $q->where('arbol_recomendaciones.id', $request->arbol_recomendacion);
            });
        }

        $productos = $query->latest()->get();

        // Obtener datos para los filtros
        $categorias = Categoria::where('activo', true)
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $cultivos = Cultivo::where('activo', true)
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $principiosActivos = PrincipioActivo::where('activo', true)
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $arbolesRecomendacion = ArbolRecomendacion::where('activo', true)
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        return Inertia::render('Productos', [
            'productos' => $productos,
            'categorias' => $categorias,
            'cultivos' => $cultivos,
            'principiosActivos' => $principiosActivos,
            'arbolesRecomendacion' => $arbolesRecomendacion,
            'filtros' => [
                'categoria' => $request->categoria,
                'cultivo' => $request->cultivo,
                'principio_activo' => $request->principio_activo,
                'arbol_recomendacion' => $request->arbol_recomendacion,
            ],
        ]);
    }

    /**
     * Display detailed product information for public view.
     */
    public function showProductDetail(Producto $producto)
    {
        // Cargar todas las relaciones del producto
        $producto->load([
            'categoria',
            'cultivos',
            'principioActivo',
            'arbolesRecomendacion'
        ]);

        return Inertia::render('ShowProduct', [
            'producto' => $producto,
        ]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $productos = Producto::with('categoria')
            ->latest()
            ->paginate(50); // Aumentamos para mostrar más productos en las tarjetas
        
        $categorias = Categoria::where('activo', true)
            ->orderBy('nombre')
            ->get();
        
        return Inertia::render('Admin/ProductosDashboard', [
            'productos' => $productos,
            'categorias' => $categorias,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categorias = Categoria::active()
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $cultivos = Cultivo::where('activo', true)
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $principiosActivos = PrincipioActivo::active()
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $arbolesRecomendacion = ArbolRecomendacion::active()
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        return Inertia::render('Admin/CreateProduct', [
            'categorias' => $categorias,
            'cultivos' => $cultivos,
            'principiosActivos' => $principiosActivos,
            'arbolesRecomendacion' => $arbolesRecomendacion,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'imagen' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'categoria_id' => 'nullable|exists:categorias,id',
            'principio_activo_id' => 'nullable|exists:principio_activos,id',
            'principio_activo' => 'nullable|string|max:255',
            'formulacion' => 'nullable|string|max:255',
            'descripcion' => 'nullable|string',
            'presentacion' => 'nullable|string|max:255',
            'accion' => 'nullable|string',
            'banda' => 'nullable|string|max:255',
            'mecanismo_de_accion' => 'nullable|string',
            'malezas' => 'nullable|string',
            'dosis' => 'nullable|string',
            'recomendaciones_de_uso' => 'nullable|string',
            'banda_toxicologica' => 'nullable|string|max:255',
            'pdfs' => 'nullable|array',
            'pdfs.*' => 'file|mimes:pdf|max:10240', // Max 10MB per PDF
            'precio' => 'nullable|numeric|min:0',
            'activo' => 'boolean',
            'cultivos_ids' => 'nullable|array',
            'cultivos_ids.*' => 'exists:cultivos,id',
            'arboles_ids' => 'nullable|array',
            'arboles_ids.*' => 'exists:arbol_recomendaciones,id',
        ]);

        // Manejar la imagen
        if ($request->hasFile('imagen')) {
            $imagen = $request->file('imagen');
            $nombreImagen = time() . '_' . str_replace(' ', '_', $imagen->getClientOriginalName());
            $imagen->move(public_path(env('PRODUCT_IMAGES_PATH')), $nombreImagen);
            $validated['imagen'] = env('PRODUCT_IMAGES_PATH') . '/' . $nombreImagen;
        }

        // Manejar los PDFs
        if ($request->hasFile('pdfs')) {
            $pdfPaths = [];
            foreach ($request->file('pdfs') as $pdf) {
                $nombrePdf = time() . '_' . uniqid() . '_' . str_replace(' ', '_', $pdf->getClientOriginalName());
                $pdf->move(public_path(env('PRODUCT_PDFS_PATH')), $nombrePdf);
                $pdfPaths[] = env('PRODUCT_PDFS_PATH') . '/' . $nombrePdf;
            }
            $validated['pdfs'] = $pdfPaths;
        }

        // Remover cultivos_ids del validated ya que no es un campo del modelo
    $cultivosIds = $validated['cultivos_ids'] ?? [];
    $arbolesIds = $validated['arboles_ids'] ?? [];
        unset($validated['cultivos_ids']);
    unset($validated['arboles_ids']);

        $producto = Producto::create($validated);

        // Asociar cultivos si se seleccionaron
        if (!empty($cultivosIds)) $producto->cultivos()->attach($cultivosIds);
        if (!empty($arbolesIds)) $producto->arbolesRecomendacion()->attach($arbolesIds);

        return redirect()->route('admin.productos')->with('success', 'Producto creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Producto $producto)
    {
        return Inertia::render('Admin/ProductoShow', [
            'producto' => $producto,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Producto $producto)
    {
        $categorias = Categoria::active()
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $cultivos = Cultivo::where('activo', true)
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $principiosActivos = PrincipioActivo::active()
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        $arbolesRecomendacion = ArbolRecomendacion::active()
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        return Inertia::render('Admin/EditProduct', [
            'producto' => $producto->load(['categoria', 'cultivos', 'principioActivo', 'arbolesRecomendacion']),
            'categorias' => $categorias,
            'cultivos' => $cultivos,
            'principiosActivos' => $principiosActivos,
            'arbolesRecomendacion' => $arbolesRecomendacion,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Producto $producto)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255',
            'imagen' => 'nullable|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
            'categoria_id' => 'nullable|exists:categorias,id',
            'principio_activo_id' => 'nullable|exists:principio_activos,id',
            'principio_activo' => 'nullable|string|max:255',
            'formulacion' => 'nullable|string|max:255',
            'descripcion' => 'nullable|string',
            'presentacion' => 'nullable|string|max:255',
            'accion' => 'nullable|string',
            'banda' => 'nullable|string|max:255',
            'mecanismo_de_accion' => 'nullable|string',
            'malezas' => 'nullable|string',
            'dosis' => 'nullable|string',
            'recomendaciones_de_uso' => 'nullable|string',
            'banda_toxicologica' => 'nullable|string|max:255',
            'pdfs' => 'nullable|array',
            'pdfs.*' => 'file|mimes:pdf|max:10240', // Max 10MB per PDF
            'precio' => 'nullable|numeric|min:0',
            'activo' => 'boolean',
            'cultivos_ids' => 'nullable|array',
            'cultivos_ids.*' => 'exists:cultivos,id',
            'arboles_ids' => 'nullable|array',
            'arboles_ids.*' => 'exists:arbol_recomendaciones,id',
        ]);

        // Manejar la imagen
        if ($request->hasFile('imagen')) {
            // Eliminar imagen anterior si existe
            if ($producto->imagen && file_exists(public_path($producto->imagen))) {
                unlink(public_path($producto->imagen));
            }
            
            $imagen = $request->file('imagen');
            $nombreImagen = time() . '_' . str_replace(' ', '_', $imagen->getClientOriginalName());
            $imagen->move(public_path(env('PRODUCT_IMAGES_PATH')), $nombreImagen);
            $validated['imagen'] = env('PRODUCT_IMAGES_PATH') . '/' . $nombreImagen;
        }

        // Manejar los PDFs
        if ($request->hasFile('pdfs')) {
            // Eliminar PDFs anteriores si existen
            if ($producto->pdfs) {
                foreach ($producto->pdfs as $pdfPath) {
                    if (file_exists(public_path($pdfPath))) {
                        unlink(public_path($pdfPath));
                    }
                }
            }
            
            $pdfPaths = [];
            foreach ($request->file('pdfs') as $pdf) {
                $nombrePdf = time() . '_' . uniqid() . '_' . str_replace(' ', '_', $pdf->getClientOriginalName());
                $pdf->move(public_path(env('PRODUCT_PDFS_PATH')), $nombrePdf);
                $pdfPaths[] = env('PRODUCT_PDFS_PATH') . '/' . $nombrePdf;
            }
            $validated['pdfs'] = $pdfPaths;
        }

        // Remover cultivos_ids del validated ya que no es un campo del modelo
    $cultivosIds = $validated['cultivos_ids'] ?? [];
    $arbolesIds = $validated['arboles_ids'] ?? [];
        unset($validated['cultivos_ids']);
    unset($validated['arboles_ids']);

        $producto->update($validated);

        // Sincronizar cultivos (esto reemplaza todas las relaciones existentes)
    $producto->cultivos()->sync($cultivosIds);
    $producto->arbolesRecomendacion()->sync($arbolesIds);

        return redirect()->route('admin.productos')->with('success', 'Producto actualizado exitosamente.');
    }

    /**
     * Toggle the status of the specified product.
     */
    public function toggleStatus(Producto $producto)
    {
        $producto->activo = !$producto->activo;
        $producto->save();

        $status = $producto->activo ? 'activado' : 'desactivado';
        
        return redirect()->route('admin.productos')->with('success', "Producto {$status} exitosamente.");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        // Eliminar archivos asociados si existen
        if ($producto->imagen && file_exists(public_path($producto->imagen))) {
            unlink(public_path($producto->imagen));
        }
        
        if ($producto->pdfs) {
            foreach ($producto->pdfs as $pdfPath) {
                if (file_exists(public_path($pdfPath))) {
                    unlink(public_path($pdfPath));
                }
            }
        }

        $producto->delete();

        return redirect()->route('admin.productos')->with('success', 'Producto eliminado exitosamente.');
    }
}