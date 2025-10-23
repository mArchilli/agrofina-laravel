<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PrincipioActivo extends Model
{
    protected $fillable = [
        'nombre',
        'descripcion',
        'activo',
    ];

    protected $casts = [
        'activo' => 'boolean',
    ];

    /**
     * Scope para principios activos activos
     */
    public function scopeActive($query)
    {
        return $query->where('activo', true);
    }

    /**
     * Relación uno a muchos con productos
     */
    public function productos()
    {
        return $this->hasMany(Producto::class, 'principio_activo_id');
    }
}
