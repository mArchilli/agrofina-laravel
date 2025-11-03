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
            'Frutales',
            'Maiz LL resistente a Glufosinato de amonio',
            'Té',
            'Yerba Mate',
            'Ajo',
            'Alambrados',
            'Alfalfa',
            'Algodón',
            'Áreas no cultivadas',
            'Arroz',
            'Arvejas',
            'Avena',
            'Barbecho',
            'Barbecho químico',
            'Brócoli',
            'Caña de azúcar',
            'Cebada',
            'Cebolla',
            'Centeno',
            'Ciruelo',
            'Citrus',
            'Coliflor',
            'Duraznero',
            'Frutales de pepita',
            'Girasol',
            'Lechuga',
            'Maíz',
            'Maíz de germoplasma templado',
            'Maíz dulce',
            'Maíz IMI',
            'Maní',
            'Manzanos',
            'Melón',
            'Papa',
            'Pasturas',
            'Pasturas consociadas',
            'Peral',
            'Perejil',
            'Pinos',
            'Pinus Taeda',
            'Poroto',
            'Sandía',
            'Soja',
            'Sorgo',
            'Tabaco',
            'Tomates',
            'Trigo',
            'Vías férreas',
            'Vid',
            'Zanahoria',
            'Zapallo',
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
