<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        // Seed user 
        $this->call([
            UserSeeder::class,
        ]);

        // Seed categories, cultivos and principios activos
        $this->call([
            CategorySeeder::class,
            CultivoSeeder::class,
            PrincipioActivoSeeder::class,
            ArbolRecomendacionSeeder::class,
        ]);

         // Seed products
        $this->call([
            ProductSeeder::class
        ]);

        // Seed AgroNews
        $this->call([
            AgroNewsSeeder::class,
        ]);

        // Seed Novedades
        $this->call([
            NovedadSeeder::class,
        ]);
    }
}
