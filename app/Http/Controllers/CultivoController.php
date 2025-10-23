<?php

namespace App\Http\Controllers;

use App\Models\Cultivo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CultivoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cultivos = Cultivo::orderBy('nombre')->get();
        
        return Inertia::render('Admin/CultivosDashboard', [
            'cultivos' => $cultivos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreateCultivo');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:cultivos',
            'descripcion' => 'nullable|string',
            'activo' => 'boolean'
        ]);

        Cultivo::create($validated);

        return redirect()->route('cultivos.index')
            ->with('success', 'Cultivo creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Cultivo $cultivo)
    {
        return Inertia::render('Admin/ShowCultivo', [
            'cultivo' => $cultivo
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Cultivo $cultivo)
    {
        return Inertia::render('Admin/EditCultivo', [
            'cultivo' => $cultivo
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Cultivo $cultivo)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:cultivos,nombre,' . $cultivo->id,
            'descripcion' => 'nullable|string',
            'activo' => 'boolean'
        ]);

        $cultivo->update($validated);

        return redirect()->route('cultivos.index')
            ->with('success', 'Cultivo actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Cultivo $cultivo)
    {
        $cultivo->delete();

        return redirect()->route('cultivos.index')
            ->with('success', 'Cultivo eliminado exitosamente.');
    }
}
