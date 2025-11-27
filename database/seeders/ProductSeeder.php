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
            'imagen' => '/images/productos/24-D-LV-Producto.jpg',
            'imagen_portada' => '/images/productos/24-D-LV-Portada.png',
            'pdfs' => ['/PDFs/2.4 D Agrofina LV - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/2.4 D Agrofina LV - Marbete.pdf'],
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
            'imagen' => '/images/productos/Abridor-Plus-Producto.jpg',
            'imagen_portada' => '/images/productos/Abridor-Plus-Portada.png',
            'pdfs' => ['/PDFs/Abridor Plus - Hoja de Datos de Seguridad (MSDS)', '/PDFs/Abridor Plus - Marbete.pdf'],
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
            'imagen' => '/images/productos/Aderyn-Producto.jpg',
            'imagen_portada' => '/images/productos/Aderyn-Portada.jpg',
            'pdfs' => ['/PDFs/Aderyn - Marbete.pdf', '/PDFs/Aderyn - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Aderyn - Flyer comercial.pdf'],
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
            'imagen_portada' => '/images/productos/Alfalfa-completo.jpg',
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
            'imagen_portada' => '/images/productos/Algodon-completo.jpg',
            'pdfs' => ['/PDFs/Algodon - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolAlgodonCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Algodón (completo)']);
        $productoAlgodonCompleto->arbolesRecomendacion()->sync([$arbolAlgodonCompleto->id]);

        #endregion

        #region Producto 6: Arroz: Árbol de recomendación completo
        
        $productoArrozCompleto = Producto::create([
            'nombre' => 'ARROZ: Árbol de recomendación completo',
            'imagen' => '/images/productos/Arroz-completo.jpg',
            'imagen_portada' => '/images/productos/Arroz-completo.jpg',
            'pdfs' => ['/PDFs/Arroz - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolArrozCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Arroz (completo)']);
        $productoArrozCompleto->arbolesRecomendacion()->sync([$arbolArrozCompleto->id]);

        #endregion

        #region Producto 7: ATRAFINA 90®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaAtrafina = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoAtrafina = PrincipioActivo::firstOrCreate(['nombre' => 'Atrazina 90 WG']);

        // 3. Crear el Producto
        $productoAtrafina = Producto::create([
            'nombre' => 'ATRAFINA 90®',
            'categoria_id' => $categoriaHerbicidaAtrafina->id,
            'principio_activo_id' => $principioActivoAtrafina->id,
            'formulacion' => 'WG (gránulos dispersables)',
            'descripcion' => 'Herbicida compuesto por Atrazina 90 WG, recomendado para el control de malezas de hoja ancha y algunas gramíneas, en aplicaciones de preemergencia y/o post emergencia. Selectivo para los cultivos de maíz, sorgo granífero y caña de azúcar.',
            'accion' => 'Sistémico y residual.',
            'mecanismo_de_accion' => 'Inhibidor del fotosistema II.',
            'malezas' => 'Malezas de hoja ancha y algunas gramíneas.',
            'dosis' => "Maíz: 1,1 – 2,8 kg/ha.\n\nSorgo: 1,2 – 2 kg/ha.\n\nCaña de azúcar: 3,3 kg/ha.",
            'recomendaciones_de_uso' => 'Ver especificaciones en marbete según cultivo y momento de aplicación. Antes de utilizar en mezcla con otros productos se debe realizar una prueba a pequeña escala para evaluar la compatibilidad física y biológica de los componentes y la posible fitotoxicidad en el cultivo.',
            'banda' => 'Verde',
            'imagen' => '/images/productos/Atrafina90-Producto.jpg',
            'imagen_portada' => '/images/productos/Atrafina90-Portada.png',
            'pdfs' => ['/PDFs/Atrafina 90 - Marbete.pdf', '/PDFs/Atrafina 90 - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Atrafina 90 - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosAtrafinaNombres = ['Caña de azúcar', 'Lino', 'Maíz', 'Sorgo granífero', 'Té'];
        $cultivoAtrafinaIds = [];
        foreach ($cultivosAtrafinaNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoAtrafinaIds[] = $cultivo->id;
        }
        $productoAtrafina->cultivos()->sync($cultivoAtrafinaIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesAtrafinaNombres = [
            'Arroz en pre emergencia',
            'Sorgo en post emergencia',
            'Sorgo en pre emergencia',
            'Sorgo en barbecho',
            'Maíz en barbecho',
            'Maíz en pre emergencia'
        ];
        $arbolAtrafinaIds = [];
        foreach ($arbolesAtrafinaNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolAtrafinaIds[] = $arbol->id;
        }
        $productoAtrafina->arbolesRecomendacion()->sync($arbolAtrafinaIds);

        #endregion

        #region Producto 8: AZOXY PRO®
        
        // 1. Buscar o crear la Categoría
        $categoriaFungicida = Categoria::firstOrCreate(['nombre' => 'Fungicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoAzoxy = PrincipioActivo::firstOrCreate(['nombre' => 'Azoxystrobina 20 + Ciproconazole 8']);

        // 3. Crear el Producto
        $productoAzoxy = Producto::create([
            'nombre' => 'AZOXY PRO®',
            'categoria_id' => $categoriaFungicida->id,
            'principio_activo_id' => $principioActivoAzoxy->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => 'Es un fungicida de acción sistémica y de contacto. Presenta una alta persistencia y rápida acción, gracias a la acción combinada de la azoxistrobina (acción preventiva y antiesporulante) y el ciproconazole (efecto CURATIVO y erradicante).',
            'accion' => 'Preventivo, curativo, antiesporulante, contacto, sistémico.',
            'mecanismo_de_accion' => 'Azoxystrobina: Inhibe la respiración mitocondrial de los hongos a través del bloqueo de la transferencia de electrones entre el mitocondrio b y el citrocomo c. (Grupo 11). Ciproconazole: Inhibe la síntesis de Ergosterol (Grupo 3).',
            'malezas' => 'Alternaria, Antracnosis, Escaldadura, Fusarium del maíz, Mancha amarilla del trigo, Mancha de la hoja del trigo, Mancha en red en cebada, Mancha gris de la hoja del sorgo, Mancha marrón de la soja, Mancha ojo de rana en soja, Mancha púrpura de la semilla, Podredumbre de la espiga del maíz, Podredumbre del tallo y raíz del maíz, Roya amarilla del trigo, Roya anaranjada del trigo, Roya asiática de Soja, Roya común del maíz, Roya del sorgo, Septoriosis, Tizón del Norte, Tizón del tallo y de la vaina en soja, Viruela tardía del maní, Viruela temprana del maní.',
            'dosis' => "Ajo: 0,450 L/ha.\nAvena: 0,300-0,400 L/ha.\nCebada cervecera: 0,4 L/ha.\nMaíz y Sorgo: 0,500 L/ha.\nManí: 0,440 L/ha.\nPoroto: 0,300-0,400 L/ha.\nSoja: 0,250-0,300 L/ha.\nTrigo: 0,400 L/ha.",
            'recomendaciones_de_uso' => 'Ver especificaciones en marbete según cultivo y momento de aplicación.',
            'imagen' => '/images/productos/Azoxy-Pro-Producto.jpg',
            'imagen_portada' => '/images/productos/Azoxy-Pro-Portada.png',
            'pdfs' => ['/PDFs/Azoxy Pro - Marbete.pdf', '/PDFs/Azoxy Pro - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Azoxy Pro - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosAzoxyNombres = ['Soja', 'Maíz', 'Trigo', 'Cebada', 'Maní', 'Poroto', 'Ajo', 'Avena', 'Cebada cervecera', 'Maíz pisingallo', 'Sorgo'];
        $cultivoAzoxyIds = [];
        foreach ($cultivosAzoxyNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoAzoxyIds[] = $cultivo->id;
        }
        $productoAzoxy->cultivos()->sync($cultivoAzoxyIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesAzoxyNombres = [
            'Trigo y cebada en post emergencia',
            'Sorgo en post emergencia',
            'Soja en post emergencia',
            'Maíz en post emergencia',
            'Maní en post emergencia',
            'Poroto en post emergencia'
        ];
        $arbolAzoxyIds = [];
        foreach ($arbolesAzoxyNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolAzoxyIds[] = $arbol->id;
        }
        $productoAzoxy->arbolesRecomendacion()->sync($arbolAzoxyIds);

        #endregion














        //No borrar este espacio
    }
}
