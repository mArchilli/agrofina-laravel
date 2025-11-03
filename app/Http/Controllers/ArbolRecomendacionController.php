<?php

namespace App\Http\Controllers;

use App\Models\ArbolRecomendacion;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArbolRecomendacionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $arboles = ArbolRecomendacion::orderBy('nombre')->get();

        return Inertia::render('Admin/ArbolRecomendacionDashboard', [
            'arboles' => $arboles,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
    return Inertia::render('Admin/CreateArbolRecomendacion');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:arbol_recomendaciones',
            'descripcion' => 'nullable|string',
            'activo' => 'boolean',
        ]);

        ArbolRecomendacion::create($validated);

        return redirect()->route('admin.arboles-recomendacion')
            ->with('success', 'Árbol de Recomendación creado exitosamente.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(ArbolRecomendacion $arboles_recomendacion)
    {
        return Inertia::render('Admin/EditArbolRecomendacion', [
            'arbol' => $arboles_recomendacion,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, ArbolRecomendacion $arboles_recomendacion)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:arbol_recomendaciones,nombre,' . $arboles_recomendacion->id,
            'descripcion' => 'nullable|string',
            'activo' => 'boolean',
        ]);

        $arboles_recomendacion->update($validated);

        return redirect()->route('admin.arboles-recomendacion')
            ->with('success', 'Árbol de Recomendación actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(ArbolRecomendacion $arboles_recomendacion)
    {
        $arboles_recomendacion->delete();

        return redirect()->route('admin.arboles-recomendacion')
            ->with('success', 'Árbol de Recomendación eliminado exitosamente.');
    }
}
