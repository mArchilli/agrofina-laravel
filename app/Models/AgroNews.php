<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

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
        return $this->file_path ? asset('agronews/' . basename($this->file_path)) : null;
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
            if ($agroNews->file_path && file_exists(public_path('agronews/' . basename($agroNews->file_path)))) {
                unlink(public_path('agronews/' . basename($agroNews->file_path)));
            }
        });
    }
}