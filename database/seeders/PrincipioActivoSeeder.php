<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\PrincipioActivo;

class PrincipioActivoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $principiosActivos = [
            'Bispyribac-sodio + quinclorac',
            'Cletodim 48%',
            'Diflufenican 50%',
            'Flumetsulam 48%',
            'Glifosato 75,7%',
            'Glufosinato de Amonio 20%',
            'Haloxifop-P-metil 81%',
            'Tiametoxam 14,1% - Lambdacialotrina 10,6%',
            '2,4-D Mezcla de sales 78,1 %. Equivalente ácido 2,4-D 34 %',
            '2.4 D Etil Hexil',
            'Abamectina 0,18%+Lufenuron 1,5%+Bifentrin 1,8%',
            'Abamectina 0,9% + Lufenuron 7,5% + Bifentrín 9 %',
            'Aceite metilado 75%',
            'Acetamiprid 2%+Lambdacialotrina 2%',
            'Atrafina 90',
            'Azosxystrobina 20%+Ciproconazole 8%',
            'Azoxistrobin 5,62% + Cyproconazole 3% + Boscalid 6%',
            'Benazolin-etil 20%+Fomesafen 13,3%',
            'Benazolin-etil 50%',
            'Bispyribac-sodio 40%',
            'Clorantraniliprole 20%',
            'Cyhalofop-butil 18%',
            'Cyhalofop-butil 36 % EC',
            'Diclosulam 84%',
            'Dinotefuran 70 % SP-SB',
            'Fluazinam 50%',
            'Flubendiamide 48 %',
            'Flumetsulam 12%',
            'Flumioxazin 48%',
            'Flurocloridona 25%',
            'Fomesafen 25%',
            'Glifosato 66%',
            'Imazapic 70%',
            'Imazapir 17,5%+Imazapic 52,5%',
            'Imazapir 80%',
            'Imazetapir 10,59%',
            'Imazetapir 40 % SL',
            'Lactofen 24%',
            'Quinclorac 25 %',
            'S-Lactofen 36%',
            'Sulfentrazone 50%',
            'Thidiazuron 50%'
        ];

        foreach ($principiosActivos as $nombre) {
            PrincipioActivo::create([
                'nombre' => trim($nombre),
                'descripcion' => null,
                'activo' => true,
            ]);
        }
    }
}