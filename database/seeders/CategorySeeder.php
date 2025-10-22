<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categoria;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categorias = [
            [
                'nombre' => 'Herbicidas',
                'descripcion' => 'Productos para el control de malezas en cultivos agrícolas. Incluye herbicidas selectivos y no selectivos para diferentes tipos de aplicaciones.',
                'activo' => true,
            ],
            [
                'nombre' => 'Insecticidas',
                'descripcion' => 'Productos para el control de insectos plaga en cultivos. Incluye insecticidas de contacto, sistémicos y específicos para diferentes tipos de plagas.',
                'activo' => true,
            ],
            [
                'nombre' => 'Fungicidas',
                'descripcion' => 'Productos para el control y prevención de enfermedades causadas por hongos en cultivos agrícolas.',
                'activo' => true,
            ],
            [
                'nombre' => 'Fertilizantes',
                'descripcion' => 'Productos nutricionales para el desarrollo y crecimiento óptimo de los cultivos. Incluye fertilizantes foliares y de suelo.',
                'activo' => true,
            ],
        ];

        foreach ($categorias as $categoria) {
            Categoria::firstOrCreate(
                ['nombre' => $categoria['nombre']], // Buscar por nombre
                $categoria // Crear con todos los datos si no existe
            );
        }
    }
}
