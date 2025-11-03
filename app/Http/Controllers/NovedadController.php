<?php

namespace App\Http\Controllers;

use App\Models\Novedad;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NovedadController extends Controller
{
    /**
     * Display a listing of the resource for public view.
     */
    public function showPublic()
    {
        $novedades = Novedad::where('activo', true)
            ->orderBy('fecha_carga', 'desc')
            ->get();
        
        return Inertia::render('Novedades', [
            'novedades' => $novedades
        ]);
    }

    /**
     * Display the specified resource for public view.
     */
    public function show(Novedad $novedad)
    {
        // Solo mostrar si está activa
        if (!$novedad->activo) {
            abort(404);
        }

        return Inertia::render('ShowNovedad', [
            'novedad' => $novedad
        ]);
    }

    /**
     * Display a listing of the resource (Admin Dashboard).
     */
    public function index()
    {
        $novedades = Novedad::orderBy('fecha_carga', 'desc')->get();
        
        return Inertia::render('NovedadesDashboard', [
            'novedades' => $novedades
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CrearNovedad', [
            'novedad' => null
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'texto' => 'required|string',
            'imagenes.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'archivos.*' => 'nullable|file|mimes:pdf,doc,docx|max:5120',
            'fecha_carga' => 'required|date',
        ]);

        // Procesar imágenes
        $imagenesPaths = [];
        if ($request->hasFile('imagenes')) {
            $imagenesPath = env('NOVEDADES_IMAGES_PATH');
            $imagenesDir = public_path($imagenesPath);
            
            foreach ($request->file('imagenes') as $imagen) {
                $nombreOriginal = $imagen->getClientOriginalName();
                $nombreUnico = time() . '_' . uniqid() . '_' . $nombreOriginal;
                $imagen->move($imagenesDir, $nombreUnico);
                
                $imagenesPaths[] = [
                    'nombre' => $nombreOriginal,
                    'path' => $imagenesPath . $nombreUnico
                ];
            }
            $validated['imagenes'] = $imagenesPaths;
        }

        // Procesar archivos
        $archivosPaths = [];
        if ($request->hasFile('archivos')) {
            $archivosPath = env('NOVEDADES_PDFS_PATH');
            $archivosDir = public_path($archivosPath);
            
            foreach ($request->file('archivos') as $archivo) {
                $nombreOriginal = $archivo->getClientOriginalName();
                $nombreUnico = time() . '_' . uniqid() . '_' . $nombreOriginal;
                $archivo->move($archivosDir, $nombreUnico);
                
                $archivosPaths[] = [
                    'nombre' => $nombreOriginal,
                    'path' => $archivosPath . $nombreUnico
                ];
            }
            $validated['archivos'] = $archivosPaths;
        }

        Novedad::create($validated);

        return redirect()->route('admin.novedades.index')->with('success', 'Novedad creada exitosamente.');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Novedad $novedad)
    {
        return Inertia::render('EditNovedad', [
            'novedad' => [
                'id' => $novedad->id,
                'titulo' => $novedad->titulo,
                'texto' => $novedad->texto,
                'imagenes' => $novedad->imagenes,
                'archivos' => $novedad->archivos,
                'fecha_carga' => $novedad->fecha_carga,
                'activo' => $novedad->activo,
                'created_at' => $novedad->created_at,
                'updated_at' => $novedad->updated_at,
            ]
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Novedad $novedad)
    {
        $validated = $request->validate([
            'titulo' => 'required|string|max:255',
            'texto' => 'required|string',
            'imagenes.*' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'archivos.*' => 'nullable|file|mimes:pdf,doc,docx|max:5120',
            'fecha_carga' => 'required|date',
        ]);

        // Procesar imágenes
        if ($request->hasFile('imagenes')) {
            // Eliminar imágenes anteriores si existen
            if ($novedad->imagenes) {
                foreach ($novedad->imagenes as $imagen) {
                    $imagenPath = public_path($imagen['path']);
                    if (file_exists($imagenPath)) {
                        unlink($imagenPath);
                    }
                }
            }
            
            $imagenesPath = env('NOVEDADES_IMAGES_PATH');
            $imagenesDir = public_path($imagenesPath);
            $imagenesPaths = [];
            
            foreach ($request->file('imagenes') as $imagen) {
                $nombreOriginal = $imagen->getClientOriginalName();
                $nombreUnico = time() . '_' . uniqid() . '_' . $nombreOriginal;
                $imagen->move($imagenesDir, $nombreUnico);
                
                $imagenesPaths[] = [
                    'nombre' => $nombreOriginal,
                    'path' => $imagenesPath . $nombreUnico
                ];
            }
            $validated['imagenes'] = $imagenesPaths;
        }

        // Procesar archivos
        if ($request->hasFile('archivos')) {
            // Eliminar archivos anteriores si existen
            if ($novedad->archivos) {
                foreach ($novedad->archivos as $archivo) {
                    $archivoPath = public_path($archivo['path']);
                    if (file_exists($archivoPath)) {
                        unlink($archivoPath);
                    }
                }
            }
            
            $archivosPath = env('NOVEDADES_PDFS_PATH');
            $archivosDir = public_path($archivosPath);
            $archivosPaths = [];
            
            foreach ($request->file('archivos') as $archivo) {
                $nombreOriginal = $archivo->getClientOriginalName();
                $nombreUnico = time() . '_' . uniqid() . '_' . $nombreOriginal;
                $archivo->move($archivosDir, $nombreUnico);
                
                $archivosPaths[] = [
                    'nombre' => $nombreOriginal,
                    'path' => $archivosPath . $nombreUnico
                ];
            }
            $validated['archivos'] = $archivosPaths;
        }

        $novedad->update($validated);

        return redirect()->route('admin.novedades.index')->with('success', 'Novedad actualizada exitosamente.');
    }

    /**
     * Toggle the active status of the specified resource.
     */
    public function toggle(Novedad $novedad)
    {
        $novedad->update(['activo' => !$novedad->activo]);
        
        return redirect()->route('admin.novedades.index')->with('success', 'Estado de la novedad actualizado.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Novedad $novedad)
    {
        // Eliminar imágenes si existen
        if ($novedad->imagenes) {
            foreach ($novedad->imagenes as $imagen) {
                $imagenPath = public_path($imagen['path']);
                if (file_exists($imagenPath)) {
                    unlink($imagenPath);
                }
            }
        }

        // Eliminar archivos si existen
        if ($novedad->archivos) {
            foreach ($novedad->archivos as $archivo) {
                $archivoPath = public_path($archivo['path']);
                if (file_exists($archivoPath)) {
                    unlink($archivoPath);
                }
            }
        }

        $novedad->delete();

        return redirect()->route('admin.novedades.index')->with('success', 'Novedad eliminada exitosamente.');
    }
}
