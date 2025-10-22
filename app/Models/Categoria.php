<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Categoria extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'descripcion',
        'activo',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'activo' => 'boolean',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active categories.
     */
    public function scopeActive($query)
    {
        return $query->where('activo', true);
    }

    /**
     * Get the products for the category.
     */
    public function productos()
    {
        return $this->hasMany(Producto::class, 'categoria_id');
    }

    /**
     * Get active products for the category.
     */
    public function productosActivos()
    {
        return $this->hasMany(Producto::class, 'categoria_id')->where('activo', true);
    }

    /**
     * Get the count of products in this category.
     */
    public function getProductosCountAttribute()
    {
        return $this->productos()->count();
    }

    /**
     * Get the count of active products in this category.
     */
    public function getProductosActivosCountAttribute()
    {
        return $this->productosActivos()->count();
    }
}
