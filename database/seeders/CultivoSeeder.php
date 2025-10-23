<?php

namespace Database\Seeders;

use App\Models\Cultivo;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CultivoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $cultivos = [
            'Alpiste',
            'Arroz',
            'Avena',
            'Cebada',
            'Centeno',
            'Maíz',
            'Maní',
            'Mijo',
            'Sorgo',
            'Trigo',
            'Caña de azúcar',
            'Campos naturales de Gramíneas',
            'Pasturas cultivadas de gramíneas (Verdeos)',
        ];

        foreach ($cultivos as $nombreCultivo) {
            Cultivo::create([
                'nombre' => $nombreCultivo,
                'descripcion' => null,
                'activo' => true,
            ]);
        }
    }
}
