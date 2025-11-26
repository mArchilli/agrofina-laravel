<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Producto;
use App\Models\Categoria;
use App\Models\PrincipioActivo;
use App\Models\Cultivo;
use App\Models\ArbolRecomendacion;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        #region Producto 1: 2.4 D Agrofina LV®

        // 1. Buscar o crear la Categoría
        $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivo24D = PrincipioActivo::firstOrCreate(['nombre' => '2,4D Ester etilhexilico 89%']);

        // 3. Crear el Producto
        $producto24D = Producto::create([
            'nombre' => '2.4 D Agrofina LV®',
            'categoria_id' => $categoriaHerbicida->id,
            'principio_activo_id' => $principioActivo24D->id,
            'formulacion' => 'Concentrado Emulsionable (EC).',
            'descripcion' => "2,4D LV es un herbicida selectivo de baja volatilidad, sistémico y de acción hormonal, destinado a combatir malezas de hoja ancha en determinados cultivos. Se deben tomar las precauciones necesarias para evitar la deriva del producto. 2,4D LV puede ser empleado sin riesgos en la proximidad de los cultivos susceptibles, tomando las precauciones necesarias para evitar la deriva del producto.",
            'accion' => 'Sistémica',
            'mecanismo_de_accion' => 'Acción similar al acido indolacetico (Auxinas sinteticas). GRUPO O.',
            'malezas' => "MALEZAS MUY SUSCEPTIBLES: Abrepuños, Abrepuño amarillo, Abrepuño colorado, Abrojo grande, Alfilerillo, Cardo crespo, Cardo chileno, Cardo negro, Cardo pendiente, Cardo ruso, Cepa caballo, Cerraja, Chamico, Diente de león, Girasolillo o Santa María, Lengua de vaca, Morenita, Mostacilla, Mostaza, Nabo, Nabón, Paragüita, Quinoa blanca, Quinoa criolla, Quinoa negra, Saetilla, Yuyo colorado.\n\nMALEZAS PARCIALMENTE SUSCEPTIBLES: Achicoria, Altamisa, Biznaga, Cardo pampa, Cardo de castilla, Capiquí, Cicuta, Chinchilla, Correhuela o Campanilla, Enredadera anual, Huevo de gallo, Lagunilla, Manzanilla cimarrona, Ortiga, Romerillo o Mio Mio, Rama negra, Sanguinaria, Trébol de olor, Verdolaga, Yuyo sapo o Sunchillo.",
            'dosis' => "Trigo, Cebada y Centeno: 0.55-0.8 L/ha.\nAvena y Alpiste: 0.45-0.55 L/ha.\nMaíz y Sorgo: 0.55-0.65 L/ha.\nArroz: 0.8-1.3 L/ha. Tratamiento de Pre-cosecha: 1.1-1.6 L/ha.",
            'recomendaciones_de_uso' => 'Utilizar dosis inferiores contra malezas susceptibles, cuando sean pequeñas y en condiciones climáticas y suelo óptimas. Utilizar las dosis mayores cuando la maleza esté más desarrollada, o se trate de malezas mediana susceptibilidad.',
            'imagen' => '/images/productos/2-4-D-LV-1-798x1024.jpg',
            'pdfs' => ['/PDFs/2.4 D Agrofina LV - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/2.4 D Agrofina LV - Marbette.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivos24DNombres = ['Alpiste', 'Arroz', 'Avena', 'Cebada', 'Centeno', 'Maíz', 'Maní', 'Mijo', 'Sorgo', 'Trigo', 'Caña de azúcar'];
        $cultivo24DIds = [];
        foreach ($cultivos24DNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivo24DIds[] = $cultivo->id;
        }
        $producto24D->cultivos()->sync($cultivo24DIds);

        #endregion

        #region Producto 2: Abridor Plus®
        
        // 1. Buscar o crear la Categoría
        $categoriaFitoregulador = Categoria::firstOrCreate(['nombre' => 'Fitoreguladores']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoAbridor = PrincipioActivo::firstOrCreate(['nombre' => 'Thidiazuron 12% + Diuron 6%']);

        // 3. Crear el Producto
        $productoAbridor = Producto::create([
            'nombre' => 'ABRIDOR® PLUS',
            'categoria_id' => $categoriaFitoregulador->id,
            'principio_activo_id' => $principioActivoAbridor->id,
            'formulacion' => 'Dispersión oleosa (OD)',
            'descripcion' => "Defoliante para el cultivo de algodón. Produce la caída de las hojas, aún cuando están verdes, quedando las plantas sin residuos foliares que puedan ensuciar o dañar la fibra de algodón en su cosecha.\n\nEl uso de ABRIDOR PLUS permite la cosecha mecánica y manual, facilitando la recolección de capullos, y reduciendo el número de pasadas y el tiempo total de cosecha. El metabolismo natural de la planta continúa, aún después de su aplicación, permitiendo que las cápsulas y las hojas sigan con su proceso de maduración normal.",
            'accion' => 'Sistémico',
            'mecanismo_de_accion' => 'Inhibidor del transporte de electrones en el fotosistema II.',
            'dosis' => '0.500 L/ha.',
            'recomendaciones_de_uso' => "Con temperaturas promedio del día superiores a los 22°C, alta luminosidad, buena humedad del suelo, cultivos parejos, se favorece la acción del producto.\n\nLas temperaturas medias inferiores a los 22°C, cultivos densos e irregulares, lluvias inmediatas después de la aplicación y fuerte enmalezamiento, son factores que retrasan o limitan la acción del producto. No debiendo llover dentro de las 24 hs. posteriores a la aplicación. No aplicar en condiciones de sequía, ni en horas de fuerte insolación.",
            'imagen' => '/images/productos/Abridorplus5L-1.jpg',
            'pdfs' => ['/PDFs/Abridor Plus - Hoja de Datos de Seguridad (MSDS)', '/PDFs/Abridor Plus - Marbette.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoAlgodon = Cultivo::firstOrCreate(['nombre' => 'Algodón']);
        $productoAbridor->cultivos()->sync([$cultivoAlgodon->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolAlgodonPost = ArbolRecomendacion::firstOrCreate(['nombre' => 'Algodón en post emergencia']);
        $productoAbridor->arbolesRecomendacion()->sync([$arbolAlgodonPost->id]);

        #endregion

        #region Producto 3: ADERYN
        // 1. Buscar o crear la Categoría
        $categoria = Categoria::firstOrCreate(['nombre' => 'Insecticidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivo = PrincipioActivo::firstOrCreate(['nombre' => 'Dinotefuran 70 % SP-SB']);

        // 3. Crear el Producto
        // Nota: Asumimos rutas de ejemplo para imagen y pdfs. Ver explicación abajo.
        $producto = Producto::create([
            'nombre' => 'ADERYN',
            'categoria_id' => $categoria->id,
            'principio_activo_id' => $principioActivo->id,
            'formulacion' => 'SP-SB (Polvo Soluble en bolsas hidrosolubles selladas)',
            'descripcion' => "Aderyn es un insecticida compuesto por dinotefuran, neonicotinoide de 3ra generación con menor impacto ambiental del mercado.\n\nPresenta una acción rápida de volteo y prolongada persistencia, recomendado para el control de insectos succionadores.\n\nSu alta solubilidad le otorga una acción sistémica y translaminar, protegiendo al cultivo en forma integral, actuando por contacto e ingestión. Banda verde.",
            'accion' => 'Ingestión. Sistémico y contacto.',
            'mecanismo_de_accion' => 'Modulador competitivo de receptores de acetilcolina nicotínicos.',
            // Usamos el campo 'malezas' para las plagas, ya que es el campo de texto disponible para objetivos biológicos
            'malezas' => 'Chinche verde (Nezara viridula), Chinche de la alfalfa (Piezodorus guildinii), Chinche de los cuernos (Dichelops furcatus), Alquiche chico (Edessa meditabunda), Trips (Caliothrips phaseoli), Chinche del tallo (Tibraca limbativentris), Chinche Horcias (Horcias nobilellus), Mosca minadora de la hoja (Liriomyza huidobrensis), Trips (Frankliniella occidentalis).',
            'dosis' => '85 – 100 g/ha.',
            'recomendaciones_de_uso' => 'Evitar aplicar en condiciones ambientales desfavorables (temperatura mayor a 40°C, HR menor a 40 %, viento mayor a 15 km/h).',
            'banda' => 'Verde',
            // Rutas relativas desde la carpeta public
            'imagen' => '/images/productos/Aderyn-1024x741.jpg', 
            'pdfs' => ['/PDFs/Aderyn - Marbette.pdf', '/PDFs/Aderyn - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Aderyn - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosNombres = ['Soja', 'Arroz', 'Algodón', 'Papa'];
        $cultivoIds = [];
        foreach ($cultivosNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoIds[] = $cultivo->id;
        }
        $producto->cultivos()->sync($cultivoIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesNombres = [
            'Algodón en post emergencia',
            'Arroz en post emergencia',
            'Soja en post emergencia'
        ];
        $arbolIds = [];
        foreach ($arbolesNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolIds[] = $arbol->id;
        }
        $producto->arbolesRecomendacion()->sync($arbolIds);

        #endregion

        #region Producto 4: ALFALFA: Árbol de recomendación completo
          
        $productoAlfalfa = Producto::create([
            'nombre' => 'ALFALFA: Árbol de recomendación completo',
            'imagen' => '/images/productos/Alfalfa-completo.jpg',
            'pdfs' => ['/PDFs/Alfalfa - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolAlfalfa = ArbolRecomendacion::firstOrCreate(['nombre' => 'Alfalfa (completo)']);
        $productoAlfalfa->arbolesRecomendacion()->sync([$arbolAlfalfa->id]);

        #endregion

        #region Producto 5: Algodón: Árbol de recomendación completo

        $productoAlgodonCompleto = Producto::create([
            'nombre' => 'ALGODÓN: Árbol de recomendación completo',
            'imagen' => '/images/productos/Algodon-completo.jpg',
            'pdfs' => ['/PDFs/Algodon - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolAlgodonCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Algodón (completo)']);
        $productoAlgodonCompleto->arbolesRecomendacion()->sync([$arbolAlgodonCompleto->id]);

        #endregion



    }
}
