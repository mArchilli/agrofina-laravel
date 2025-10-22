<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Producto extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'nombre',
        'imagen',
        'categoria_id',
        'principio_activo',
        'formulacion',
        'descripcion',
        'presentacion',
        'accion',
        'banda',
        'mecanismo_de_accion',
        'malezas',
        'cultivos',
        'dosis',
        'recomendaciones_de_uso',
        'banda_toxicologica',
        'arbol_de_recomendacion',
        'pdfs',
        'precio',
        'activo',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'precio' => 'decimal:2',
        'activo' => 'boolean',
        'pdfs' => 'array', // Cast JSON a array
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
        'deleted_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active products.
     */
    public function scopeActive($query)
    {
        return $query->where('activo', true);
    }

    /**
     * Scope a query to filter by category.
     */
    public function scopeByCategory($query, $categoriaId)
    {
        return $query->where('categoria_id', $categoriaId);
    }

    /**
     * Get the category that owns the product.
     */
    public function categoria()
    {
        return $this->belongsTo(Categoria::class, 'categoria_id');
    }

    /**
     * Get the formatted price attribute.
     */
    public function getPrecioFormateadoAttribute()
    {
        return $this->precio ? '$' . number_format((float)$this->precio, 2) : null;
    }

    /**
     * Scope a query to filter by principio activo.
     */
    public function scopeByPrincipioActivo($query, $principioActivo)
    {
        return $query->where('principio_activo', $principioActivo);
    }

    /**
     * Get PDFs as array or empty array if null.
     */
    public function getPdfsArrayAttribute()
    {
        return $this->pdfs ?? [];
    }
}