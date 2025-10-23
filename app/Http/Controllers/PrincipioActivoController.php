<?php

namespace App\Http\Controllers;

use App\Models\PrincipioActivo;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrincipioActivoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $principiosActivos = PrincipioActivo::orderBy('nombre')->get();
        
        return Inertia::render('Admin/PrincipioActivoDashboard', [
            'principiosActivos' => $principiosActivos
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/CreatePrincipioActivo');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:principio_activos',
            'descripcion' => 'nullable|string',
            'activo' => 'boolean'
        ]);

        PrincipioActivo::create($validated);

        return redirect()->route('principios-activos.index')
            ->with('success', 'Principio Activo creado exitosamente.');
    }

    /**
     * Display the specified resource.
     */
    public function show(PrincipioActivo $principioActivo)
    {
        return Inertia::render('Admin/ShowPrincipioActivo', [
            'principioActivo' => $principioActivo
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(PrincipioActivo $principioActivo)
    {
        return Inertia::render('Admin/EditPrincipioActivo', [
            'principioActivo' => $principioActivo
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, PrincipioActivo $principioActivo)
    {
        $validated = $request->validate([
            'nombre' => 'required|string|max:255|unique:principio_activos,nombre,' . $principioActivo->id,
            'descripcion' => 'nullable|string',
            'activo' => 'boolean'
        ]);

        $principioActivo->update($validated);

        return redirect()->route('principios-activos.index')
            ->with('success', 'Principio Activo actualizado exitosamente.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(PrincipioActivo $principioActivo)
    {
        $principioActivo->delete();

        return redirect()->route('principios-activos.index')
            ->with('success', 'Principio Activo eliminado exitosamente.');
    }
}
