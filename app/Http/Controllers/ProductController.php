<?php

namespace App\Http\Controllers;

use App\Models\Producto;
use App\Models\Categoria;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ProductController extends Controller
{
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

        return Inertia::render('Admin/CreateProduct', [
            'categorias' => $categorias,
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
            'principio_activo' => 'nullable|string|max:255',
            'formulacion' => 'nullable|string|max:255',
            'descripcion' => 'nullable|string',
            'presentacion' => 'nullable|string|max:255',
            'accion' => 'nullable|string',
            'banda' => 'nullable|string|max:255',
            'mecanismo_de_accion' => 'nullable|string',
            'malezas' => 'nullable|string',
            'cultivos' => 'nullable|string',
            'dosis' => 'nullable|string',
            'recomendaciones_de_uso' => 'nullable|string',
            'banda_toxicologica' => 'nullable|string|max:255',
            'arbol_de_recomendacion' => 'nullable|string',
            'pdfs' => 'nullable|array',
            'pdfs.*' => 'file|mimes:pdf|max:10240', // Max 10MB per PDF
            'precio' => 'nullable|numeric|min:0',
            'activo' => 'boolean',
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

        Producto::create($validated);

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

        return Inertia::render('Admin/EditProduct', [
            'producto' => $producto->load('categoria'),
            'categorias' => $categorias,
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
            'principio_activo' => 'nullable|string|max:255',
            'formulacion' => 'nullable|string|max:255',
            'descripcion' => 'nullable|string',
            'presentacion' => 'nullable|string|max:255',
            'accion' => 'nullable|string',
            'banda' => 'nullable|string|max:255',
            'mecanismo_de_accion' => 'nullable|string',
            'malezas' => 'nullable|string',
            'cultivos' => 'nullable|string',
            'dosis' => 'nullable|string',
            'recomendaciones_de_uso' => 'nullable|string',
            'banda_toxicologica' => 'nullable|string|max:255',
            'arbol_de_recomendacion' => 'nullable|string',
            'pdfs' => 'nullable|array',
            'pdfs.*' => 'file|mimes:pdf|max:10240', // Max 10MB per PDF
            'precio' => 'nullable|numeric|min:0',
            'activo' => 'boolean',
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

        $producto->update($validated);

        return redirect()->route('admin.productos')->with('success', 'Producto actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Producto $producto)
    {
        $producto->delete();

        return redirect()->route('admin.productos')->with('success', 'Producto eliminado exitosamente.');
    }
}