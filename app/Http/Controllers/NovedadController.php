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
    public function showPublic(Request $request)
    {
        $query = Novedad::where('activo', true);
        
        // Búsqueda
        if ($request->has('search') && $request->search) {
            $searchTerm = $request->search;
            $query->where(function($q) use ($searchTerm) {
                $q->where('titulo', 'like', "%{$searchTerm}%")
                  ->orWhere('texto', 'like', "%{$searchTerm}%");
            });
        }
        
        // Ordenamiento por fecha (por defecto descendente)
        $order = $request->get('order', 'desc');
        $query->orderBy('fecha_carga', $order);
        
        $novedades = $query->paginate(9)->appends($request->only(['search', 'order']));
        
        // Obtener las rutas del frontend
        $frontendImagesPath = env('VITE_NOVEDADES_IMAGES_PATH', '/images/novedades/');
        $frontendPdfsPath = env('VITE_NOVEDADES_PDFS_PATH', '/PDFs/novedades/');
        
        return Inertia::render('Novedades', [
            'novedades' => [
                'data' => $novedades->map(function ($novedad) use ($frontendImagesPath, $frontendPdfsPath) {
                    return [
                        'id' => $novedad->id,
                        'titulo' => $novedad->titulo,
                        'texto' => $novedad->texto,
                        'fecha_carga' => $novedad->fecha_carga,
                        'activo' => $novedad->activo,
                        'imagenes' => $novedad->imagenes ? collect($novedad->imagenes)->map(function ($imagen) use ($frontendImagesPath) {
                            return [
                                'nombre' => $imagen['nombre'],
                                'path' => asset(trim($frontendImagesPath, '/') . '/' . basename($imagen['path']))
                            ];
                        })->toArray() : [],
                        'archivos' => $novedad->archivos ? collect($novedad->archivos)->map(function ($archivo) use ($frontendPdfsPath) {
                            return [
                                'nombre' => $archivo['nombre'],
                                'path' => asset(trim($frontendPdfsPath, '/') . '/' . basename($archivo['path']))
                            ];
                        })->toArray() : [],
                    ];
                }),
                'links' => $novedades->linkCollection()->toArray(),
                'current_page' => $novedades->currentPage(),
                'last_page' => $novedades->lastPage(),
                'per_page' => $novedades->perPage(),
                'total' => $novedades->total(),
            ],
            'filters' => [
                'search' => $request->search ?? '',
                'order' => $request->order ?? 'desc',
            ]
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

        // Obtener las rutas del frontend
        $frontendImagesPath = env('VITE_NOVEDADES_IMAGES_PATH', '/images/novedades/');
        $frontendPdfsPath = env('VITE_NOVEDADES_PDFS_PATH', '/PDFs/novedades/');

        return Inertia::render('ShowNovedad', [
            'novedad' => [
                'id' => $novedad->id,
                'titulo' => $novedad->titulo,
                'texto' => $novedad->texto,
                'fecha_carga' => $novedad->fecha_carga,
                'activo' => $novedad->activo,
                'imagenes' => $novedad->imagenes ? collect($novedad->imagenes)->map(function ($imagen) use ($frontendImagesPath) {
                    return [
                        'nombre' => $imagen['nombre'],
                        'path' => asset(trim($frontendImagesPath, '/') . '/' . basename($imagen['path']))
                    ];
                })->toArray() : [],
                'archivos' => $novedad->archivos ? collect($novedad->archivos)->map(function ($archivo) use ($frontendPdfsPath) {
                    return [
                        'nombre' => $archivo['nombre'],
                        'path' => asset(trim($frontendPdfsPath, '/') . '/' . basename($archivo['path']))
                    ];
                })->toArray() : [],
            ]
        ]);
    }

    /**
     * Display a listing of the resource (Admin Dashboard).
     */
    public function index()
    {
        $novedades = Novedad::orderBy('fecha_carga', 'desc')->get();
        
        // Obtener las rutas del frontend
        $frontendImagesPath = env('VITE_NOVEDADES_IMAGES_PATH', '/images/novedades/');
        $frontendPdfsPath = env('VITE_NOVEDADES_PDFS_PATH', '/PDFs/novedades/');
        
        // Transformar las rutas de las novedades
        $novedadesTransformadas = $novedades->map(function ($novedad) use ($frontendImagesPath, $frontendPdfsPath) {
            return [
                'id' => $novedad->id,
                'titulo' => $novedad->titulo,
                'texto' => $novedad->texto,
                'fecha_carga' => $novedad->fecha_carga,
                'activo' => $novedad->activo,
                'created_at' => $novedad->created_at,
                'updated_at' => $novedad->updated_at,
                'imagenes' => $novedad->imagenes ? collect($novedad->imagenes)->map(function ($imagen) use ($frontendImagesPath) {
                    return [
                        'nombre' => $imagen['nombre'],
                        'path' => asset(trim($frontendImagesPath, '/') . '/' . basename($imagen['path']))
                    ];
                })->toArray() : [],
                'archivos' => $novedad->archivos ? collect($novedad->archivos)->map(function ($archivo) use ($frontendPdfsPath) {
                    return [
                        'nombre' => $archivo['nombre'],
                        'path' => asset(trim($frontendPdfsPath, '/') . '/' . basename($archivo['path']))
                    ];
                })->toArray() : [],
            ];
        });
        
        return Inertia::render('NovedadesDashboard', [
            'novedades' => $novedadesTransformadas
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
        // Obtener las rutas del frontend
        $frontendImagesPath = env('VITE_NOVEDADES_IMAGES_PATH', '/images/novedades/');
        $frontendPdfsPath = env('VITE_NOVEDADES_PDFS_PATH', '/PDFs/novedades/');

        return Inertia::render('EditNovedad', [
            'novedad' => [
                'id' => $novedad->id,
                'titulo' => $novedad->titulo,
                'texto' => $novedad->texto,
                'imagenes' => $novedad->imagenes ? collect($novedad->imagenes)->map(function ($imagen) use ($frontendImagesPath) {
                    return [
                        'nombre' => $imagen['nombre'],
                        'path' => asset(trim($frontendImagesPath, '/') . '/' . basename($imagen['path']))
                    ];
                })->toArray() : [],
                'archivos' => $novedad->archivos ? collect($novedad->archivos)->map(function ($archivo) use ($frontendPdfsPath) {
                    return [
                        'nombre' => $archivo['nombre'],
                        'path' => asset(trim($frontendPdfsPath, '/') . '/' . basename($archivo['path']))
                    ];
                })->toArray() : [],
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
