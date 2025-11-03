<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Novedad extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'novedades';

    protected $fillable = [
        'titulo',
        'texto',
        'imagenes',
        'archivos',
        'fecha_carga',
        'activo',
    ];

    protected $casts = [
        'imagenes' => 'array',
        'archivos' => 'array',
        'fecha_carga' => 'datetime',
        'activo' => 'boolean',
    ];

    protected $dates = [
        'fecha_carga',
        'deleted_at',
    ];
}
