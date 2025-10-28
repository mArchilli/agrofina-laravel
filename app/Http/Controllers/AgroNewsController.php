<?php

namespace App\Http\Controllers;

use App\Models\AgroNews;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Inertia\Inertia;

class AgroNewsController extends Controller
{
    /**
     * Mostrar la lista de AgroNews en el dashboard de admin
     */
    public function index()
    {
        $agroNews = AgroNews::orderBy('created_at', 'desc')->get();
        
        return Inertia::render('Admin/AgroNewsDashboard', [
            'agroNews' => $agroNews->map(function ($item) {
                return [
                    'id' => $item->id,
                    'title' => $item->title,
                    'description' => $item->description,
                    'file_name' => $item->file_name,
                    'file_url' => $item->file_url,
                    'formatted_file_size' => $item->formatted_file_size,
                    'created_at' => $item->created_at->format('d/m/Y H:i'),
                ];
            })
        ]);
    }

    /**
     * Mostrar el formulario para crear un nuevo AgroNews
     */
    public function create()
    {
        return Inertia::render('Admin/CreateAgroNews');
    }

    /**
     * Almacenar un nuevo archivo PDF de AgroNews
     */
    public function store(Request $request)
    {
        // Log de depuración - inicio del método
        Log::info('AgroNews Store - Inicio del método', [
            'title' => $request->input('title'),
            'description' => $request->input('description'),
            'has_file' => $request->hasFile('pdf_file')
        ]);

        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string|max:1000',
            'pdf_file' => 'required|file|mimes:pdf|max:10240', // Máximo 10MB
        ]);

        Log::info('AgroNews Store - Validación exitosa');

        try {
            $file = $request->file('pdf_file');
            $originalName = $file->getClientOriginalName();
            
            Log::info('AgroNews Store - Archivo recibido', [
                'original_name' => $originalName,
                'size' => $file->getSize(),
                'mime_type' => $file->getMimeType()
            ]);
            
            // Generar un nombre único para el archivo
            $fileName = time() . '_' . Str::slug(pathinfo($originalName, PATHINFO_FILENAME)) . '.pdf';
            
            Log::info('AgroNews Store - Nombre de archivo generado', ['file_name' => $fileName]);

            // Mover el archivo a la carpeta public/PDFs/agronews
            $file->move(public_path('PDFs/agronews'), $fileName);
            
            Log::info('AgroNews Store - Archivo movido exitosamente');
            
            // Crear el registro en la base de datos
            $agroNews = AgroNews::create([
                'title' => $request->title,
                'description' => $request->description,
                'file_path' => 'agronews/' . $fileName,
                'file_name' => $originalName,
                'file_size' => $file->getSize(),
            ]);

            Log::info('AgroNews Store - Registro creado en BD', ['id' => $agroNews->id]);

            return redirect()->route('admin.agronews.index')->with('success', 'Archivo PDF subido exitosamente.');
            
        } catch (\Exception $e) {
            Log::error('AgroNews Store - Error', [
                'message' => $e->getMessage(),
                'trace' => $e->getTraceAsString()
            ]);
            return back()->with('error', 'Error al subir el archivo: ' . $e->getMessage());
        }
    }

    /**
     * Eliminar un archivo PDF de AgroNews
     */
    public function destroy(AgroNews $agroNews)
    {
        try {
            // El modelo se encarga de eliminar el archivo físico en el evento deleting
            $agroNews->delete();
            
            return back()->with('success', 'Archivo eliminado exitosamente.');
            
        } catch (\Exception $e) {
            return back()->with('error', 'Error al eliminar el archivo: ' . $e->getMessage());
        }
    }

    /**
     * Descargar un archivo PDF
     */
    public function download(AgroNews $agroNews)
    {
        $filePath = public_path('agronews/' . basename($agroNews->file_path));
        
        if (!file_exists($filePath)) {
            return back()->with('error', 'El archivo no existe.');
        }
        
        return response()->download($filePath, $agroNews->file_name);
    }
}
