<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\AgroNews;
use Illuminate\Support\Facades\File;

class AgroNewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Asegurar que el directorio de PDFs existe
        $pdfDirectory = public_path('PDFs/agronews');
        if (!File::exists($pdfDirectory)) {
            File::makeDirectory($pdfDirectory, 0755, true);
        }

        // Crear agronews de ejemplo
        $agronews = [
            [
                'title' => 'AgroNews: Abril 2023',
                'description' => 'AgroNews: Abril 2023',
                'file_name' => 'agrofina-agronews-abril23.pdf',
                'file_size' => 2089984, // 2041 KB
            ],
            [
                'title' => 'AgroNews: Mayo 2023',
                'description' => 'AgroNews: Mayo 2023',
                'file_name' => 'agrofina-agronews-mayo23.pdf',
                'file_size' => 1924096, // 1879 KB
            ],
            [
                'title' => 'AgroNews: Junio 2023',
                'description' => 'AgroNews: Junio 2023',
                'file_name' => 'agrofina-agronews-junio23.pdf',
                'file_size' => 1253376, // 1224 KB
            ],
            [
                'title' => 'AgroNews: Julio 2023',
                'description' => 'AgroNews: Julio 2023',
                'file_name' => 'agrofina-agronews-julio23.pdf',
                'file_size' => 850944, // 831 KB
            ],
            [
                'title' => 'AgroNews: Agosto 2023',
                'description' => 'AgroNews: Agosto 2023',
                'file_name' => 'agrofina-agronews-agosto23.pdf',
                'file_size' => 1171456, // 1144 KB
            ],
            [
                'title' => 'AgroNews: Septiembre 2023',
                'description' => 'AgroNews: Septiembre 2023',
                'file_name' => 'agrofina-agronews-septiembre23.pdf',
                'file_size' => 1553408, // 1517 KB
            ],
            [
                'title' => 'AgroNews: Octubre 2023',
                'description' => 'AgroNews: Octubre 2023',
                'file_name' => 'agrofina-agronews-octubre23.pdf',
                'file_size' => 2077696, // 2029 KB
            ],
            [
                'title' => 'AgroNews: Noviembre 2023',
                'description' => 'AgroNews: Noviembre 2023',
                'file_name' => 'agrofina-agronews-noviembre23.pdf',
                'file_size' => 1692672, // 1653 KB
            ],
            [
                'title' => 'AgroNews: Diciembre 2023',
                'description' => 'AgroNews: Diciembre 2023',
                'file_name' => 'agrofina-agronews-diciembre23.pdf',
                'file_size' => 1194496, // 1166 KB
            ],
            [
                'title' => 'AgroNews: Enero 2024',
                'description' => 'AgroNews: Enero 2024',
                'file_name' => 'agrofina-agronews-enero24.pdf',
                'file_size' => 1337344, // 1306 KB
            ],
            [
                'title' => 'AgroNews: Febrero 2024',
                'description' => 'AgroNews: Febrero 2024',
                'file_name' => 'agrofina-agronews-febrero24.pdf',
                'file_size' => 1039360, // 1015 KB
            ],
            [
                'title' => 'AgroNews: Marzo 2024',
                'description' => 'AgroNews: Marzo 2024',
                'file_name' => 'agrofina-agronews-marzo24.pdf',
                'file_size' => 1879040, // 1835 KB
            ],
            [
                'title' => 'AgroNews: Abril 2024',
                'description' => 'AgroNews: Abril 2024',
                'file_name' => 'agrofina-agronews-abril24.pdf',
                'file_size' => 1575936, // 1539 KB
            ],
            [
                'title' => 'AgroNews: Mayo 2024',
                'description' => 'AgroNews: Mayo 2024',
                'file_name' => 'agrofina-agronews-mayo24.pdf',
                'file_size' => 1628160, // 1590 KB
            ],
            [
                'title' => 'AgroNews: Junio 2024',
                'description' => 'AgroNews: Junio 2024',
                'file_name' => 'agrofina-agronews-junio24.pdf',
                'file_size' => 1444864, // 1411 KB
            ],
            [
                'title' => 'AgroNews: Julio 2024',
                'description' => 'AgroNews: Julio 2024',
                'file_name' => 'agrofina-agronews-julio24.pdf',
                'file_size' => 1615872, // 1578 KB
            ],
            [
                'title' => 'AgroNews: Septiembre 2024',
                'description' => 'AgroNews: Septiembre 2024',
                'file_name' => 'agrofina-agronews-septiembre24.pdf',
                'file_size' => 1136640, // 1110 KB
            ],
            [
                'title' => 'AgroNews: Octubre 2024',
                'description' => 'AgroNews: Octubre 2024',
                'file_name' => 'agrofina-agronews-octubre24.pdf',
                'file_size' => 1814528, // 1772 KB
            ],
            [
                'title' => 'AgroNews: Noviembre 2024',
                'description' => 'AgroNews: Noviembre 2024',
                'file_name' => 'agrofina-agronews-noviembre24.pdf',
                'file_size' => 1662976, // 1624 KB
            ],
        ];

        foreach ($agronews as $news) {
            AgroNews::create([
                'title' => $news['title'],
                'description' => $news['description'],
                'file_path' => '/PDFs/agronews/' . $news['file_name'],
                'file_name' => $news['file_name'],
                'file_size' => $news['file_size'],
            ]);
        }
    }
}
