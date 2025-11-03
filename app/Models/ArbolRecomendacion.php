<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArbolRecomendacion extends Model
{
    protected $table = 'arbol_recomendaciones';

    protected $fillable = [
        'nombre',
        'descripcion',
        'activo',
    ];

    protected $casts = [
        'activo' => 'boolean',
    ];

    /**
     * Scope para árboles de recomendación activos
     */
    public function scopeActive($query)
    {
        return $query->where('activo', true);
    }

    /**
     * Relación many-to-many con productos
     */
    public function productos()
    {
        return $this->belongsToMany(Producto::class, 'arbol_recomendacion_producto');
    }
}
