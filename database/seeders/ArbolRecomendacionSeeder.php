<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\ArbolRecomendacion;

class ArbolRecomendacionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $nombres = [
            'Alfalfa (completo)',
            'Alfalfa en barbecho',
            'Alfalfa en pre emergencia',
            'Alfalfa en post emergencia',
            'Algodón (completo)',
            'Algodón en barbecho corto primavera',
            'Algodón en pre emergencia',
            'Algodón en post emergencia',
            'Arroz (completo)',
            'Arroz en barbecho corto primavera',
            'Arroz en pre emergencia',
            'Arroz en post emergencia',
            'Caña de Azúcar (completo)',
            'Caña de Azúcar en Barbecho',
            'Caña de Azúcar en post emergencia',
            'Caña de Azúcar en pre emergencia',
            'Girasol (completo)',
            'Girasol en barbecho corto primavera',
            'Girasol en pre emergencia',
            'Girasol en post emergencia',
            'Maíz (completo)',
            'Maíz en barbecho',
            'Maíz en pre emergencia',
            'Maíz en post emergencia',
            'Maní (completo)',
            'Maní en barbecho corto primavera',
            'Maní en pre emergencia',
            'Maní en post emergencia',
            'Poroto (completo)',
            'Poroto en barbecho',
            'Poroto en pre emergencia',
            'Poroto en post emergencia',
            'Soja (completo)',
            'Soja en barbecho corto primavera',
            'Soja en barbecho largo',
            'Soja en pre emergencia',
            'Soja en post emergencia',
            'Sorgo (completo)',
            'Sorgo en barbecho',
            'Sorgo en pre emergencia',
            'Sorgo en post emergencia',
            'Trigo y cebada (completo)',
            'Trigo y cebada en barbecho',
            'Trigo y cebada en pre emergencia',
            'Trigo y cebada en post emergencia',
        ];

        foreach ($nombres as $nombre) {
            ArbolRecomendacion::firstOrCreate(
                ['nombre' => $nombre],
                ['descripcion' => null, 'activo' => true]
            );
        }
    }
}
