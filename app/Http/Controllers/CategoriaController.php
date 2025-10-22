<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categorias = Categoria::withCount('productos')
            ->latest()
            ->paginate(10);
        
        return Inertia::render('Admin/CategoriasDashboard', [
            'categorias' => $categorias,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreateCategory');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:categorias,nombre',
            'descripcion' => 'nullable|string',
            'activo' => 'boolean',
        ]);

        Categoria::create($validated);

        return redirect()->route('admin.categorias')->with('success', 'Categoría creada exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Categoria $categoria)
    {
        $categoria->load(['productos' => function ($query) {
            $query->latest()->take(10);
        }]);

        return Inertia::render('Admin/CategoriaShow', [
            'categoria' => $categoria,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Categoria $categoria)
    {
        return Inertia::render('Admin/CategoriaEdit', [
            'categoria' => $categoria,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Categoria $categoria)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:categorias,nombre,' . $categoria->id,
            'descripcion' => 'nullable|string',
            'activo' => 'boolean',
        ]);

        $categoria->update($validated);

        return redirect()->route('admin.categorias')->with('success', 'Categoría actualizada exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Categoria $categoria)
    {
        // Verificar si tiene productos asociados
        if ($categoria->productos()->count() > 0) {
            return redirect()->route('admin.categorias')->with('error', 'No se puede eliminar la categoría porque tiene productos asociados.');
        }

        $categoria->delete();

        return redirect()->route('admin.categorias')->with('success', 'Categoría eliminada exitosamente.');
    }

    /**
     * Get all active categories for select options.
     */
    public function getActive()
    {
        $categorias = Categoria::active()
            ->orderBy('nombre')
            ->get(['id', 'nombre']);

        return response()->json($categorias);
    }
}