<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cultivo extends Model
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
     * Relación many-to-many con productos
     */
    public function productos()
    {
        return $this->belongsToMany(Producto::class, 'cultivo_producto');
    }
}
