<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;

class AgroNews extends Model
{
    use HasFactory;

    protected $table = 'agro_news';

    protected $fillable = [
        'title',
        'description',
        'file_path',
        'file_name',
        'file_size'
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Obtener la URL pública del archivo PDF
     */
    public function getFileUrlAttribute()
    {
        return $this->file_path ? asset(ltrim($this->file_path, '/')) : null;
    }

    /**
     * Obtener el tamaño del archivo formateado
     */
    public function getFormattedFileSizeAttribute()
    {
        if (!$this->file_size) return 'N/A';
        
        $bytes = $this->file_size;
        $units = ['B', 'KB', 'MB', 'GB'];
        
        for ($i = 0; $bytes > 1024 && $i < count($units) - 1; $i++) {
            $bytes /= 1024;
        }
        
        return round($bytes, 2) . ' ' . $units[$i];
    }

    /**
     * Eliminar el archivo físico cuando se elimina el registro
     */
    protected static function boot()
    {
        parent::boot();

        static::deleting(function ($agroNews) {
            if ($agroNews->file_path) {
                $filePath = public_path(ltrim($agroNews->file_path, '/'));
                
                Log::info('AgroNews Model - Intentando eliminar archivo', [
                    'file_path' => $agroNews->file_path,
                    'full_path' => $filePath,
                    'file_exists' => file_exists($filePath)
                ]);
                
                if (file_exists($filePath)) {
                    try {
                        unlink($filePath);
                        Log::info('AgroNews Model - Archivo eliminado exitosamente', [
                            'file_path' => $filePath
                        ]);
                    } catch (\Exception $e) {
                        Log::error('AgroNews Model - Error al eliminar archivo', [
                            'file_path' => $filePath,
                            'error' => $e->getMessage()
                        ]);
                    }
                } else {
                    Log::warning('AgroNews Model - Archivo no encontrado para eliminar', [
                        'file_path' => $filePath
                    ]);
                }
            }
        });
    }
}