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

        #region Producto 10: Claron®

            // 1. Buscar o crear la Categoría
            $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

            // 2. Buscar o crear el Principio Activo
            $principioActivoClaron = PrincipioActivo::firstOrCreate(['nombre' => 'Cyhalofop-butil 18%']);

            // 3. Crear el Producto
            $productoClaron = Producto::create([
                'nombre' => 'CLARON®',
                'categoria_id' => $categoriaHerbicida->id,
                'principio_activo_id' => $principioActivoClaron->id,
                'formulacion' => null,
                'descripcion' => 'Es un herbicida post-emergente, para el control de gramíneas, con acción sistémica y selectiva para cultivos de arroz de inundación y secano. Se absorbe rápidamente a través del follaje y se transloca a los tejidos meristemáticos de la planta donde ejerce su acción herbicida. La detención del crecimiento de las malezas comienza a las pocas horas de la aplicación. A los pocos días se observan: clorosis en las hojas y tallos, coloración que va del rojo al morado y necrosis en los puntos de crecimiento.',
                'accion' => 'Sistémico.',
                'mecanismo_de_accion' => 'Inhibidor de la enzima ACCasa. Grupo A.',
                'malezas' => 'Capín.',
                'dosis' => '1,5 a 2 L/ha.',
                'recomendaciones_de_uso' => 'Aplicar cuando las gramíneas están en activo crecimiento, las mismas deben tener entre 3 hojas verdaderas y 1 a 2 macollos. Para un control más efectivo, se debe proceder a inundar definitivamente el cultivo a las 24 horas posteriores a la aplicación del producto.',
                'imagen' => '/images/products/claron-producto.jpg',
                'imagen_portada' => '/images/products/claron-portada.png',
                'pdfs' => [
                    '/pdfs/products/Claron - Marbete.pdf',
                    '/pdfs/products/Claron - Hoja de Datos de Seguridad (MSDS).pdf'
                ],
                'activo' => true,
            ]);

            // 4. Asociar Cultivos
            $cultivoArroz = Cultivo::firstOrCreate(['nombre' => 'Arroz']);
            $productoClaron->cultivos()->sync([$cultivoArroz->id]);

            // 5. Asociar Árboles de Recomendación
            $arbolArrozPost = ArbolRecomendacion::firstOrCreate(['nombre' => 'Arroz en post emergencia']);
            $productoClaron->arbolesRecomendacion()->sync([$arbolArrozPost->id]);

        #endregion

        #region Producto 11: CAÑA DE AZÚCAR: Árbol de recomendación completo
        
        $productoCanaAzucar = Producto::create([
            'nombre' => 'CAÑA DE AZÚCAR: Árbol de recomendación completo',
            'imagen' => '/images/productos/Cana-de-azucar-completo.jpg',
            'imagen_portada' => '/images/productos/Cana-de-azucar-completo.jpg',
            'pdfs' => ['/PDFs/Cana de azucar - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolCanaAzucar = ArbolRecomendacion::firstOrCreate(['nombre' => 'Caña de azucar (completo)']);
        $productoCanaAzucar->arbolesRecomendacion()->sync([$arbolCanaAzucar->id]);

        #endregion

        #region Producto 12: CLARON 36®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaClaron36 = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoClaron36 = PrincipioActivo::firstOrCreate(['nombre' => 'Cyhalofop-butil 36 % EC']);

        // 3. Crear el Producto
        $productoClaron36 = Producto::create([
            'nombre' => 'CLARON 36®',
            'categoria_id' => $categoriaHerbicidaClaron36->id,
            'principio_activo_id' => $principioActivoClaron36->id,
            'formulacion' => 'EC',
            'descripcion' => 'Claron 36 es un herbicida post emergente, selectivo para el cultivo de arroz, con acción sistémica para el control de gramíneas, sobre todo capín (Echinochloa). Al estar dos veces más concentrado, permite disminuir la dosis a la mitad, mejorando la logística del productor y disminuyendo la emisión de plástico y costos asociados al transporte. Se absorbe rápidamente a través del follaje y se transloca a los tejidos meristemáticos de la planta donde ejerce su acción herbicida. A los pocos días de aplicado, se observa clorosis en hojas y tallos, coloración que va del rojo al morado y necrosis en los puntos de crecimiento.',
            'accion' => 'Sistémico.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima ACCasa. Grupo A.',
            'malezas' => 'Capín (Echinochloa spp.).',
            'dosis' => '0,75 – 1 L/ha.',
            'recomendaciones_de_uso' => 'Aplicar cuando las gramíneas están en activo crecimiento, las mismas deben tener entre 3 hojas verdaderas y 1 a 2 macollos. Para un control más efectivo, se debe proceder a inundar definitivamente el cultivo a las 24 horas posteriores a la aplicación del producto.',
            'imagen' => '/images/productos/Claron36-producto.jpg',
            'imagen_portada' => '/images/productos/Claron36-portada.jpg',
            'pdfs' => ['/PDFs/Claron36 - Marbete.pdf', '/PDFs/Claron36 - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Claron36 - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoArrozClaron36 = Cultivo::firstOrCreate(['nombre' => 'Arroz']);
        $productoClaron36->cultivos()->sync([$cultivoArrozClaron36->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolArrozPostClaron36 = ArbolRecomendacion::firstOrCreate(['nombre' => 'Arroz en post emergencia']);
        $productoClaron36->arbolesRecomendacion()->sync([$arbolArrozPostClaron36->id]);

        #endregion

        #region Producto 13: DARREN®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaDarren = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoDarren = PrincipioActivo::firstOrCreate(['nombre' => 'Flumioxazin 48%']);

        // 3. Crear el Producto
        $productoDarren = Producto::create([
            'nombre' => 'DARREN®',
            'categoria_id' => $categoriaHerbicidaDarren->id,
            'principio_activo_id' => $principioActivoDarren->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => 'Es un herbicida selectivo pre-siembra, para combatir malezas latifoliadas y suprimir gramíneas en los cultivos de soja, sorgo granífero, trigo, girasol y maíz. Actúa por contacto con un excelente poder residual. Es un herbicida que se activa con la luz, cuando es absorbido por las partes verdes de las malezas, destruyendo las membrana celular, lo que produce una necrosis de los tejidos. Cuando es aplicado a la superficie del suelo, es absorbido por las plántulas en germinación causando necrosis de los brotes e inhibición del crecimiento de las raíces.',
            'accion' => 'Contacto, sistémico y residual.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima protoporfirinógeno oxidasa (PPO). Grupo E.',
            'malezas' => 'Afata hembra, Albahaca silvestre, Ataco, Bejuco, Camambú, Campanilla, Capín arroz, Cardo asnal, Cardo negro, Cardo pendiente, Cardo ruso, Cebadilla, Cerraja, Chamico, Chinchilla, Cien nudos, Cola de zorro, Corregüela, Enredadera anual, Farolito, Flor de Santa Lucía, Gramillón, Gramón, Lagunilla, Lengua de vaca, Malva, Malva cimarrona, Morenita, Mostacilla, Nabo, Nabón, No me olvides, Ortiga, Ortiga mansa, Pasto braquiaria, Pasto colorado, Pasto de cuaresma, Quinoa blanca, Rabaniza, Rama negra, Ryegrass, Senecio, Sunchillo, Trébol de color blanco, Tutia, Verdolaga, Verónica, Violeta silvestre, Yuyo colorado.',
            'dosis' => "Girasol, Maíz, Sorgo granífero: 0,05-0,1 L/ha.\nSoja: 0,104-0,156 L/ha.\nTrigo: 0,1-0,12 L/ha.",
            'recomendaciones_de_uso' => 'En aplicaciones de pre-siembra del cultivo, entre la aplicación de DARREN y la siembra debe transcurrir para el cultivo de soja 7 días, maíz y sorgo granífero 20-30 días, girasol 20-30 días para las dosis de 0,050 L/ha y 45-60 días para las dosis superiores, y trigo 15 días.',
            'imagen' => '/images/productos/Darren-producto.jpg',
            'imagen_portada' => '/images/productos/Darren-portada.png',
            'pdfs' => ['/PDFs/Darren - Marbete.pdf', '/PDFs/Darren - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Darren - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosDarrenNombres = ['Cerezas', 'Ciruelas', 'Cítricos', 'Damasco', 'Durazno', 'Girasol', 'Maíz', 'Pelón', 'Soja', 'Sorgo granífero', 'Trigo', 'Vid'];
        $cultivoDarrenIds = [];
        foreach ($cultivosDarrenNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoDarrenIds[] = $cultivo->id;
        }
        $productoDarren->cultivos()->sync($cultivoDarrenIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesDarrenNombres = [
            'Trigo y cebada en barbecho',
            'Sorgo en barbecho',
            'Girasol en barbecho corto primavera',
            'Maíz en barbecho',
            'Soja en barbecho corto primavera'
        ];
        $arbolDarrenIds = [];
        foreach ($arbolesDarrenNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolDarrenIds[] = $arbol->id;
        }
        $productoDarren->arbolesRecomendacion()->sync($arbolDarrenIds);

        #endregion

        #region Producto 14: DASEN®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaDasen = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoDasen = PrincipioActivo::firstOrCreate(['nombre' => 'Benazolin-etil 50%']);

        // 3. Crear el Producto
        $productoDasen = Producto::create([
            'nombre' => 'DASEN®',
            'categoria_id' => $categoriaHerbicidaDasen->id,
            'principio_activo_id' => $principioActivoDasen->id,
            'formulacion' => 'Suspensión Concentrada',
            'descripcion' => 'Dasen® es un herbicida post emergente sistémico para el cultivo de soja y maní, que controla malezas de hoja ancha en post emergencia de las mismas, especialmente posicionado para el control de Yuyo colorado. Es absorbido principalmente por hojas y traslocado rápidamente por floema. Las malezas presentan síntomas de detención de crecimiento, deformación de tallo y hoja, produciéndose su muerte a los 10 a 20 días.',
            'accion' => 'Sistémico.',
            'mecanismo_de_accion' => 'Acción similar al ácido indolacetico. (Auxinas sintéticas). Grupo O.',
            'malezas' => 'Chamico, Malva, Quinoa, Yuyo Colorado.',
            'dosis' => "Soja: 0,6 – 0,8 L/ha.\nManí: 0,5 – 0,6 L/ha.",
            'recomendaciones_de_uso' => 'Debe aplicarse en el momento en que las malezas se encuentren en activo crecimiento y tengan entre 5 – 10 cm de altura. En caso de síntomas de sequía o bajas temperaturas, debe evitarse los tratamientos con Dasen.',
            'imagen' => '/images/productos/Dasen-producto.jpg',
            'imagen_portada' => '/images/productos/Dasen-portada.png',
            'pdfs' => ['/PDFs/Dasen - Marbete.pdf', '/PDFs/Dasen - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Dasen - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosDasenNombres = ['Soja', 'Maní'];
        $cultivoDasenIds = [];
        foreach ($cultivosDasenNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoDasenIds[] = $cultivo->id;
        }
        $productoDasen->cultivos()->sync($cultivoDasenIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesDasenNombres = [
            'Soja en post emergencia',
            'Maní en post emergencia'
        ];
        $arbolDasenIds = [];
        foreach ($arbolesDasenNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolDasenIds[] = $arbol->id;
        }
        $productoDasen->arbolesRecomendacion()->sync($arbolDasenIds);

        #endregion

        #region Producto 15: DASEN® PLUS
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaDasenPlus = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoDasenPlus = PrincipioActivo::firstOrCreate(['nombre' => 'Benazolin-etil 20% + Fomesafen 13,3%']);

        // 3. Crear el Producto
        $productoDasenPlus = Producto::create([
            'nombre' => 'DASEN® PLUS',
            'categoria_id' => $categoriaHerbicidaDasenPlus->id,
            'principio_activo_id' => $principioActivoDasenPlus->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => 'Dasen Plus es un herbicida especialmente diseñado para el control de Yuyo colorado, en post emergencia del cultivo de soja. Dasen Plus es el único producto del mercado que combina el efecto de contacto del Fomesafen y la sistemia de Benazolin-etil, garantizando mayores controles y disminuyendo la posibilidad de rebrotes. Formulación exclusiva con excelente compatibilidad con el glifosato.',
            'accion' => 'Contacto y sistémico.',
            'mecanismo_de_accion' => 'Benazolín-etil: Acción similar al ácido indolacetico (Auxina sintética). Grupo O. Fomesafen: Inhibidor de la enzima Protoporfirinógeno oxidasa (PPO). Grupo E.',
            'malezas' => 'Yuyo Colorado.',
            'dosis' => 'Soja: 1,5 L/ha.',
            'recomendaciones_de_uso' => 'Aplicar una vez que todas las malezas hayan emergido y se encuentren en activo crecimiento. No aplicar con malezas de tamaño superiores a 12 cm. No aplicar con aceite.',
            'imagen' => '/images/productos/Dasen-plus-producto.jpg',
            'imagen_portada' => '/images/productos/Dasen-plus-portada.png',
            'pdfs' => ['/PDFs/Dasen Plus - Marbete.pdf', '/PDFs/Dasen Plus - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Dasen Plus - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoSojaDasenPlus = Cultivo::firstOrCreate(['nombre' => 'Soja']);
        $productoDasenPlus->cultivos()->sync([$cultivoSojaDasenPlus->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolSojaPostDasenPlus = ArbolRecomendacion::firstOrCreate(['nombre' => 'Soja en post emergencia']);
        $productoDasenPlus->arbolesRecomendacion()->sync([$arbolSojaPostDasenPlus->id]);

        #endregion

        #region Producto 16: ECTRAN® PLUS
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaEctran = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoEctran = PrincipioActivo::firstOrCreate(['nombre' => 'Bispyribac-sodio + quinclorac']);

        // 3. Crear el Producto
        $productoEctran = Producto::create([
            'nombre' => 'ECTRAN® PLUS',
            'categoria_id' => $categoriaHerbicidaEctran->id,
            'principio_activo_id' => $principioActivoEctran->id,
            'formulacion' => 'Polvo mojable (WP)',
            'descripcion' => "Ectran plus es un herbicida selectivo y post-emergente para el cultivo de arroz. Controla gramíneas, latifoliadas y ciperáceas, actuando sobre malezas nacidas y sobre los futuros nacimientos debido al poder residual.\n\nECTRAN PLUS combina Bispiribac sodio y Quinclorac.\n\nBispiribac sodio es un herbicida post-emergente para cultivos de arroz de inundación y secano. Es de acción sistémica y selectiva, con la característica de ser absorbido tanto por el follaje como por las raíces de gramíneas, ciperáceas y latifoliadas.\n\nQuinclorac es un herbicida sistémico, con efecto residual en el cultivo de arroz indicado especialmente para el control de Echinochloa (Capín) como así también de otras malezas de hoja ancha y gramíneas. Es absorbido por semillas en germinación, por las raíces y también por vía foliar. Debido a su efecto residual controla capín que germina luego de su aplicación.",
            'accion' => 'Sistémico.',
            'mecanismo_de_accion' => 'Bispiribac sodio: Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B. Quinclorac: Inhibidor de la síntesis de celulosa. Grupo A.',
            'malezas' => 'Chacrilla (Echinocloa cruspavonis), Pasto bandera (Urochloa platyphyla), Arroz-maleza (Oryza sativa L. f. spontanea), Pasto colonial o colorado (Echinochloa colonum), Pata de gallo (Echinochloa crus-galli), Duraznillo de agua (Ludwigia bonariensis), Papiro bravo (Cyperus virens), Chufa (Ciperus esculentus), Chufa salvaje (Cyperus esculentus var. legotoschyus).',
            'dosis' => '1 Kg/ha de ECTRAN PLUS + 0,5 L/ha de Zinax.',
            'recomendaciones_de_uso' => 'Para lograr un control más efectivo debe procederse a inundar definitivamente el cultivo 4 días después de la aplicación del producto. El caldo deberá usarse dentro de las 24 horas de preparado, caso contrario puede haber degradación del principio activo. De usarse una mezcla con otro plaguicida, cargar éste después de haberse homogeneizado la carga del herbicida. No aplicar con vientos superiores a 10 km/h, ni en condiciones de estrés hídrico y/o inversión térmica.',
            'imagen' => '/images/productos/Ectran-plus-producto.jpg',
            'imagen_portada' => '/images/productos/Ectran-plus-portada.jpg',
            'pdfs' => ['/PDFs/Ectran Plus - Marbete.pdf', '/PDFs/Ectran Plus - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Ectran Plus - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoArrozEctran = Cultivo::firstOrCreate(['nombre' => 'Arroz']);
        $productoEctran->cultivos()->sync([$cultivoArrozEctran->id]);

        // 5. NO tiene Árboles de Recomendación

        #endregion

        #region Producto 17: ECTRAN®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaEctranSimple = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoEctranSimple = PrincipioActivo::firstOrCreate(['nombre' => 'Bispyribac-sodio 40%']);

        // 3. Crear el Producto
        $productoEctranSimple = Producto::create([
            'nombre' => 'ECTRAN®',
            'categoria_id' => $categoriaHerbicidaEctranSimple->id,
            'principio_activo_id' => $principioActivoEctranSimple->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => 'Es un herbicida post-emergente selectivo para el cultivo de arroz de inundación y secano. Permite controlar gramíneas, ciperáceas y latifoliadas.',
            'accion' => 'Sistémico.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.',
            'malezas' => 'Gramíneas: Capín de arroz, Chacrilla, Colas de Zorro, Pasto colorado, Pasto de cuaresma, Pasto braquiaria, Canutillo. Latifoliadas: Eclipsa, Barba de indio, Yuyo colorado, Saetilla, Verdolaga, Flor de Santa Lucía, Camambú, Lagunilla, Ludwigia, Capelonia, Cala de agua, Pontederia, Poligonum, Espina colorada. Ciperáceas: Cipero entrerriano, Chufa salvaje, Totorilla, Junquillo, Eleocharis, Cipero común.',
            'dosis' => '0,1 L/ha.',
            'recomendaciones_de_uso' => 'El producto debe ser aplicado 14 a 21 días luego de emergidas las plántulas de arroz y con malezas en estado de 2da a 5ta hoja verdadera (gramíneas y ciperáceas) ó en estado de roseta (latifoliadas) de hasta 10 cm de diámetro de las mismas. El tratamiento en el estado de activo crecimiento de las malezas es indispensable para que se produzca una buena absorción y traslocación del producto previo a la entrada del agua de inundación. Para lograr un control más efectivo debe inundarse definitivamente el cultivo 4 días después de la aplicación del producto.',
            'imagen' => '/images/productos/Ectran-portada.png',
            'imagen_portada' => '/images/productos/Ectran-portada.png',
            'pdfs' => ['/PDFs/Ectran - Marbete.pdf', '/PDFs/Ectran - Hoja de Datos de Seguridad (MSDS).pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoArrozEctranSimple = Cultivo::firstOrCreate(['nombre' => 'Arroz']);
        $productoEctranSimple->cultivos()->sync([$cultivoArrozEctranSimple->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolArrozPostEctranSimple = ArbolRecomendacion::firstOrCreate(['nombre' => 'Arroz en post emergencia']);
        $productoEctranSimple->arbolesRecomendacion()->sync([$arbolArrozPostEctranSimple->id]);

        #endregion

        #region Producto 18: FLOSIL® 50
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaFlosil = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoFlosil = PrincipioActivo::firstOrCreate(['nombre' => 'Fomesafen 50%']);

        // 3. Crear el Producto
        $productoFlosil = Producto::create([
            'nombre' => 'FLOSIL® 50',
            'categoria_id' => $categoriaHerbicidaFlosil->id,
            'principio_activo_id' => $principioActivoFlosil->id,
            'formulacion' => 'Concentrado Soluble (SL)',
            'descripcion' => 'FLOSIL 50 es un herbicida post-emergente selectivo para los cultivos de soja, maní y poroto, que controla malezas de hoja ancha. Actúa por contacto, por lo que requiere de una aplicación cuidadosa para lograr una buena cobertura de las malezas y asegurar los mejores resultados. FLOSIL 50 es un producto concentrado, lo que permite reducir el uso de bidones, mejorando así la logística, el almacenamiento y la disminución en el uso de plástico siendo más amigables con el medio ambiente.',
            'accion' => 'Contacto.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima protoporfirinógeno oxidasa (PPO). Grupo E.',
            'malezas' => 'Bejuco (Ipomoea spp), Chamico (Datura ferox), Malva (Anoda cristata), Quinoa (Chenopodium álbum), Yuyo Colorado (Amaranthus sp), Verdolaga (Portulaca oleracea), Farolito (Nicandra physaloides), Chinchilla (Tagetes minuta), Lecherón (Euphorbia heterophylla), Nabo (Brassica campestris).',
            'dosis' => 'Soja y Poroto: 0,35-0,7 L/ha.',
            'recomendaciones_de_uso' => 'Aplicar después de que todas las malezas hayan emergido, cuando las mismas sean jóvenes (preferentemente no mayor a 5 cm) y en activo crecimiento. Para aplicaciones con Glifosato, se recomienda usar altos volúmenes de agua. Aplicar con humectante no iónico.',
            'imagen' => '/images/productos/Flosil50-producto.jpg',
            'imagen_portada' => '/images/productos/Flosil50-portada.png',
            'pdfs' => ['/PDFs/Flosil 50 - Marbete.pdf', '/PDFs/Flosil 50 - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Flosil 50 - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosFlosilNombres = ['Maní', 'Poroto', 'Soja'];
        $cultivoFlosilIds = [];
        foreach ($cultivosFlosilNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoFlosilIds[] = $cultivo->id;
        }
        $productoFlosil->cultivos()->sync($cultivoFlosilIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesFlosilNombres = [
            'Soja en post emergencia',
            'Maní en post emergencia',
            'Poroto en post emergencia'
        ];
        $arbolFlosilIds = [];
        foreach ($arbolesFlosilNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolFlosilIds[] = $arbol->id;
        }
        $productoFlosil->arbolesRecomendacion()->sync($arbolFlosilIds);

        #endregion

        #region Producto 19: FLOUX®
        
        // 1. Buscar o crear la Categoría
        $categoriaInsecticidaFloux = Categoria::firstOrCreate(['nombre' => 'Insecticidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoFloux = PrincipioActivo::firstOrCreate(['nombre' => 'Acetamiprid 2% + Lambdacialotrina 2%']);

        // 3. Crear el Producto
        $productoFloux = Producto::create([
            'nombre' => 'FLOUX®',
            'categoria_id' => $categoriaInsecticidaFloux->id,
            'principio_activo_id' => $principioActivoFloux->id,
            'formulacion' => 'Dispersión oleosa (OD)',
            'descripcion' => 'Es un insecticida que combina 2 ingredientes activos que aseguran una acción de contacto y una prolongada actividad residual para un amplio espectro de plagas en el cultivo de soja. El Acetamiprid, es un neonicotinoide sistémico de alta residualidad que controla insectos succionadores, mientras la Lambdacialotrina es un piretroide que actúa sobre insectos succionadores y masticadores, otorgando poder de volteo. Debido a su exclusiva formulación OD (Dispersión Oleosa), no requiere del agregado de aceite. El coadyuvante elegido es específico para insecticidas y está basado en aceite vegetal. Su incorporación incrementa la actividad biológica, facilita su distribución en el caldo y permite una aplicación efectiva del producto en el cultivo.',
            'accion' => 'Contacto e Ingestión.',
            'mecanismo_de_accion' => 'Acetamiprid: Antagonista de los receptores nicotínicos de la acetilcolina (Grupo 4). Lambdacialotrina: Actúa a nivel de los canales de sodio (Grupo 3).',
            'malezas' => 'Chinche verde, Chinche de la alfalfa, Chinche marrón, Alquiche chico, Arañuela roja común, Oruga de las leguminosas, Oruga medidora, Trips, Tucuras y Picudos.',
            'dosis' => '1 L/ha. No requiere agregado de aceite.',
            'recomendaciones_de_uso' => 'Aplicar en el momento oportuno según el nivel de infestación de la plaga.',
            'imagen' => '/images/productos/Floux-producto.jpg',
            'imagen_portada' => '/images/productos/Floux-portada.png',
            'pdfs' => ['/PDFs/Floux - Marbete.pdf', '/PDFs/Floux - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Floux - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoSojaFloux = Cultivo::firstOrCreate(['nombre' => 'Soja']);
        $productoFloux->cultivos()->sync([$cultivoSojaFloux->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolSojaPostFloux = ArbolRecomendacion::firstOrCreate(['nombre' => 'Soja en post emergencia']);
        $productoFloux->arbolesRecomendacion()->sync([$arbolSojaPostFloux->id]);

        #endregion

        #region Producto 20: FLUSAN®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaFlusan = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoFlusan = PrincipioActivo::firstOrCreate(['nombre' => 'Diflufenican 50%']);

        // 3. Crear el Producto
        $productoFlusan = Producto::create([
            'nombre' => 'FLUSAN®',
            'categoria_id' => $categoriaHerbicidaFlusan->id,
            'principio_activo_id' => $principioActivoFlusan->id,
            'formulacion' => 'Suspensión concentrada (SC)',
            'descripcion' => 'FLUSAN es un herbicida pre-emergente, que controla malezas de hoja ancha que afectan a pasturas y el cultivo de girasol. También se aplica en barbecho químico de soja y maíz respetando un periodo de pre-siembra de 60 a 15 días antes de la siembra de los cultivos. La absorción es por vía del hipocótile, durante la germinación de las malezas. Al aplicarlo, forma una barrera en la superficie del suelo, siendo absorbido por las plántulas de las malezas. El síntoma es una rápida decoloración, produciéndose la muerte de las mismas en un plazo de 5 días.',
            'accion' => 'Pre-emergente.',
            'mecanismo_de_accion' => 'Inhibidor de la síntesis de carotenoides. (Grupo F1).',
            'malezas' => 'Abrepuño amarillo (Centaura solstisialis), Afata hembra (Sida spinosa), Albahaca silvestre (Galinsoga parviflora), Algodonosa/pelludilla (Gamochaetta spp.), Bolsa del pastor (Capsella bursa pastoris), Calabacilla (Silene gallica), Canchalagua (Veronica arvensis), Capiquí (Stellaria media), Cardo ruso (Salsola kali), Chamico (Datura ferox), Chinchilla (Tagetes minuta), Enredadera anual (Polygonum convolvolus), Lengua de vaca (Rumex crispus), Malva cimarrona (Anoda cristata), Manzanilla cimarrona (Anthemis cotula), Mastuerzo (Coronopus dydimus), Morenita (Kochia escoparia), Mostacilla (Rapistrum rugosom), Nabo (Brassica campestris), Nabón (Raphanus sativus), Ortiga (Urtica urens), Ortiga mansa (Lamiun amplexicaule), Pensamiento silvestre (Viola arvensis), Perejillo (Bowlesia incana), Quinoa (Chenopodium album), Rama negra (Conyza bonarensis), Sanguinaria (Polygonum aviculare), Verdolaga (Portulaca oleracea), Yuyo colorado (Amaranthus sp.).',
            'dosis' => "BARBECHO QUÍMICO: 0,2-0,3 L/ha respetando un periodo pre-siembra de entre 60 y 15 días antes de la fecha de siembra en cultivos de soja y maíz.\nGIRASOL: 0,2-0,35 L/ha dependiendo del tipo de suelo.\nPASTURAS: 0,1 L/ha siempre en mezcla.",
            'recomendaciones_de_uso' => 'Aplicar en pre-emergencia del cultivo, respetando los periodos de pre-siembra indicados según el cultivo.',
            'banda' => 'Verde',
            'imagen' => '/images/productos/Flusan-producto.jpg',
            'imagen_portada' => '/images/productos/Flusan-portada.png',
            'pdfs' => ['/PDFs/Flusan - Marbete.pdf', '/PDFs/Flusan - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Flusan - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosFlusanNombres = ['Barbechos químicos', 'Girasol', 'Praderas puras y consociadas', 'Soja', 'Maíz'];
        $cultivoFlusanIds = [];
        foreach ($cultivosFlusanNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoFlusanIds[] = $cultivo->id;
        }
        $productoFlusan->cultivos()->sync($cultivoFlusanIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesFlusanNombres = [
            'Trigo y cebada en barbecho',
            'Girasol en barbecho corto primavera',
            'Girasol en pre emergencia',
            'Maíz en barbecho',
            'Soja en barbecho corto primavera'
        ];
        $arbolFlusanIds = [];
        foreach ($arbolesFlusanNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolFlusanIds[] = $arbol->id;
        }
        $productoFlusan->arbolesRecomendacion()->sync($arbolFlusanIds);

        #endregion

        #region Producto 21: Formax III®

        // 1. Buscar o crear la Categoría
        $categoriaFungicida = Categoria::firstOrCreate(['nombre' => 'Fungicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoFormax = PrincipioActivo::firstOrCreate([
            'nombre' => 'Azoxistrobin 5,62% + Cyproconazole 3% + Boscalid 6%'
        ]);

        // 3. Crear el Producto
        $productoFormax = Producto::create([
            'nombre' => 'FORMAX III®',
            'categoria_id' => $categoriaFungicida->id,
            'principio_activo_id' => $principioActivoFormax->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => 'Es un fungicida sistémico para el control de enfermedades foliares en cultivo de soja y maní, compuesto por 3 principios activos de diferentes modos de acción. Por un lado, se combina la destacada acción preventiva y antiesporulante de azoxistrobina, perteneciente al grupo de las estrobilurinas, con el efecto curativo y erradicante de cyproconazole, perteneciente al grupo de los triazoles. El tercer componente, Boscalid, es una carboxamida, de acción sistémica local y que se transloca translaminarmente. De esta manera, se logra tener una herramienta para el manejo de resistencias, con una mayor residualidad en el control de enfermedades por el agregado de la carboxamida.',
            'accion' => 'Preventivo, antiesporulante, curativo, erradicante, sistémico.',
            'mecanismo_de_accion' => "Azoxystrobina: Inhibe la respiración mitocondrial de los hongos a través del bloqueo de la transferencia de electrones entre el mitocondrio b y el citocromo c. (Grupo 11).\nCiproconazole: Inhibe la síntesis de Ergosterol (Grupo 3).\nBoscalid: Inhibe el complejo II en la mitocondria. (Grupo 7).",
            'malezas' => 'Mancha marrón (Septoria glycines), Mancha púrpura de la semilla o Tizón de la hoja (Cercospora kickuchii); Viruela tardía (Cercosporidium personatum), Viruela temprana (Cercospora arachidicola).',
            'dosis' => 'Maní: 1,1 L/ha + 0,5 L/ha de ZINAX (EMAG).\nSoja: 0,75 L/ha + 0,5 L/ha de ZINAX (EMAG).',
            'recomendaciones_de_uso' => 'Maní: Realizar la primera aplicación con la aparición de los primeros síntomas y repetir en caso de ser necesario a los 21 días.\n\nSoja: A partir de R3 hasta R6, cuando se observen los primeros síntomas en la planta. En caso de persistir condiciones favorables para la enfermedad y ante la aparición de nuevas pústulas, realizar una segunda aplicación.',
            'imagen' => '/images/products/Formax III-producto.jpg',
            'imagen_portada' => '/images/products/Formax III-portada.png',
            'pdfs' => [
                '/pdfs/products/Formax III - Marbete.pdf',
                '/pdfs/products/Formax III - Hoja de Datos de Seguridad (MSDS).pdf',
                '/pdfs/products/Formax III - Flyer comercial.pdf',
                '/pdfs/products/Formax III - Flyer Soja y Mani.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoMani = Cultivo::firstOrCreate(['nombre' => 'Maní']);
        $cultivoSoja = Cultivo::firstOrCreate(['nombre' => 'Soja']);
        $productoFormax->cultivos()->sync([$cultivoMani->id, $cultivoSoja->id]);
        #endregion

        #region Producto 22: Formax Neo®
        

        // 1. Buscar o crear la Categoría
        $categoriaFungicidaNeo = Categoria::firstOrCreate(['nombre' => 'Fungicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoFormaxNeo = PrincipioActivo::firstOrCreate([
            'nombre' => 'Boscalid 10% + Difenoconazole 15% SC'
        ]);

        // 3. Crear el Producto
        $productoFormaxNeo = Producto::create([
            'nombre' => 'FORMAX NEO®',
            'categoria_id' => $categoriaFungicidaNeo->id,
            'principio_activo_id' => $principioActivoFormaxNeo->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => 'Difenoconazole es un funguicida sistémico perteneciente al grupo de los triazoles (Grupo 3), que actúa como inhibidor de la biosíntesis de esteroles de membrana. Provee acción preventiva duradera y acción curativa contra un amplio rango de enfermedades. Dentro de los triazoles es uno de los más efectivos para el control de las enfermedades de soja y maní, complementándose muy bien con el efecto residual de la carboxamida Boscalid, de acción sistémica local y que se transloca translaminarmente. De esta manera, se logra tener una herramienta para el manejo de resistencias, con una mayor residualidad en el control de enfermedades por el agregado de la carboxamida. Sustentabilidad: Formax neo es banda verde y la dosis promedio es un 40 % menos que su antecesor Formax III.',
            'accion' => 'Preventivo, antiesporulante, curativo, erradicante, sistémico.',
            'mecanismo_de_accion' => "Difenoconazole: Inhibe la síntesis de Ergosterol (Grupo 3). Boscalid: Inhibe el complejo II en la mitocondria. (Grupo 7).",
            'malezas' => 'Mancha marrón (Septoria glycines), Mancha púrpura de la semilla o Tizón de la hoja (Cercospora kickuchii); Viruela tardía (Cercosporidium personatum), Viruela temprana (Cercospora arachidicola).',
            'dosis' => "Maní: 0,65 L/ha.\nSoja: 0,45 L/ha.",
            'recomendaciones_de_uso' => "Maní: Realizar la primera aplicación con la aparición de los primeros síntomas y repetir en caso de ser necesario a los 21 días.\nSoja: A partir de R3 hasta R6, cuando se observen los primeros síntomas en la planta. En caso de persistir condiciones favorables para la enfermedad y ante la aparición de nuevas pústulas, realizar una segunda aplicación.",
            'imagen' => '/images/products/Formax-Neo-producto.jpg',
            'imagen_portada' => '/images/products/Formax-Neo-portada.jpg',
            'pdfs' => [
                '/pdfs/products/Formax Neo - Marbete.pdf',
                '/pdfs/products/Formax Neo - Hoja de Datos de Seguridad (MSDS).pdf',
                '/pdfs/products/Formax Neo - Flyer.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoManiNeo = Cultivo::firstOrCreate(['nombre' => 'Maní']);
        $cultivoSojaNeo = Cultivo::firstOrCreate(['nombre' => 'Soja']);
        $productoFormaxNeo->cultivos()->sync([$cultivoManiNeo->id, $cultivoSojaNeo->id]);
        #endregion

        #region Producto 23: Girasol: Árbol de recomendación completo

        $productoGirasol = Producto::create([
            'nombre' => 'GIRASOL: Árbol de recomendación completo',
            'imagen' => '/images/products/Girasol-completo.jpg',
            'imagen_portada' => '/images/products/Girasol-completo.jpg',
            'pdfs' => ['/pdfs/products/Girasol - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolGirasol = ArbolRecomendacion::firstOrCreate(['nombre' => 'Girasol (completo)']);
        $productoGirasol->arbolesRecomendacion()->sync([$arbolGirasol->id]);
        #endregion

        #region Producto 24: GLUFAN®
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaGlufan = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoGlufan = PrincipioActivo::firstOrCreate([
            'nombre' => 'Glufosinato de Amonio 20%'
        ]);

        // 3. Crear el Producto
        $productoGlufan = Producto::create([
            'nombre' => 'GLUFAN®',
            'categoria_id' => $categoriaHerbicidaGlufan->id,
            'principio_activo_id' => $principioActivoGlufan->id,
            'formulacion' => 'Concentrado Soluble (SL).',
            'descripcion' => 'GLUFAN es un herbicida de contacto con cierta sistemia, para aplicaciones en barbecho químico y post-emergente selectivo en aplicaciones de cobertura total sobre maíces que indiquen la posibilidad de dicho uso en los rótulos y en bolsas de semillas híbridas de maíz resistente a Glufosinato de amonio.',
            'accion' => 'Contacto, con cierta acción sistémica.',
            'mecanismo_de_accion' => 'Inhibidor de la glutamino sintetasa. Grupo H.',
            'malezas' => 'Gramineas y Hoja anchas. Ciperaceas.',
            'dosis' => 'Barbecho químico 1,5 a 3,5 l/ha.\nÁreas sin cultivo y frutales 2,5 a 8 l/ha.',
            'recomendaciones_de_uso' => 'Aplicar cuando el cultivo de maíz resistente a Glufosinato tenga entre 3 a 4 hojas. Emplear las dosis más bajas en los primeros estadíos vegetativos de las malezas latifoliadas (2-4 hojas) y al comienzo del macollaje en gramíneas. Las dosis más altas son para malezas de mayor tamaño. Factores ambientales como temperaturas menores a 10°C o superiores a 25 °C, y/o estrés hídrico pueden disminuir la performance de Glufan.',
            'imagen' => '/images/products/Glufan-producto.jpg',
            'imagen_portada' => '/images/products/Glufan-portada.png',
            'pdfs' => [
                '/pdfs/products/Glufan - Marbete.pdf',
                '/pdfs/products/Glufan - Hoja de Datos de Seguridad.pdf',
                '/pdfs/products/Glufan - Flyer Comercial.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Árboles de Recomendación
        $arbolesGlufanNombres = [
            'Sorgo en barbecho',
            'Maíz en post emergencia'
        ];
        $arbolGlufanIds = [];
        foreach ($arbolesGlufanNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolGlufanIds[] = $arbol->id;
        }
        $productoGlufan->arbolesRecomendacion()->sync($arbolGlufanIds);
        #endregion

        #region Producto 25: HALOX® 81
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaHalox = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoHalox = PrincipioActivo::firstOrCreate([
            'nombre' => 'Haloxifop-P-metil 81%'
        ]);

        // 3. Crear el Producto
        $productoHalox = Producto::create([
            'nombre' => 'HALOX® 81',
            'categoria_id' => $categoriaHerbicidaHalox->id,
            'principio_activo_id' => $principioActivoHalox->id,
            'formulacion' => 'Concentrado Emulsionable (EC)',
            'descripcion' => 'Halox 81 es un herbicida post-emergente sistémico para el control de gramíneas, selectivo para los cultivos de soja, girasol, maní, poroto y algodón. Las malezas tratadas con HALOX 81 detienen su crecimiento y las hojas muestran, a los pocos días de la aplicación, tonalidades violáceas, amarillas y finalmente marrones. En los rizomas, destruye inicialmente las yemas, y luego el tejido se necrosa.',
            'accion' => 'Sistémico.',
            'mecanismo_de_accion' => 'Inhibidores de la acetil coenzima -A carboxilasa (ACCasa). Grupo A.',
            'malezas' => 'Brachiaria plantaginea. Capín. Cola de zorro. Pasto de cuaresma. Pasto Morado. Pie de gallina. Gramón. Pasto bermuda. Sorgo de Alepo (Riz/Sem). Maíz guacho tolerante a glifosato.',
            'dosis' => '0,055- 0,195 L/ha.',
            'recomendaciones_de_uso' => 'En lotes de siembra y laboreo tradicional se deberá trabajar el suelo antes de la siembra para asegurar homogeneidad en la emergencia de las malezas. No escardillar antes de la aplicación del producto. En lotes bajo siembra directa, aplicar cuando las malezas alcanzan la altura recomendada. Aplicar HALOX 81 siempre con el agregado de Zinax (EMAG).',
            'imagen' => '/images/products/Halox-81-producto.jpg',
            'imagen_portada' => '/images/products/Halox-81-portada.png',
            'pdfs' => [
                '/pdfs/products/Halox 81 - Marbete.pdf',
                '/pdfs/products/Halox 81 - Hoja de Seguridad de Datos.pdf',
                '/pdfs/products/Halox 81 - Flyer Comercial.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosHaloxNombres = ['Algodón', 'Girasol', 'Soja', 'Maní', 'Poroto'];
        $cultivoHaloxIds = [];
        foreach ($cultivosHaloxNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoHaloxIds[] = $cultivo->id;
        }
        $productoHalox->cultivos()->sync($cultivoHaloxIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesHaloxNombres = [
            'Algodón en post emergencia',
            'Soja en post emergencia',
            'Girasol en post emergencia',
            'Maní en post emergencia',
            'Poroto en post emergencia'
        ];
        $arbolHaloxIds = [];
        foreach ($arbolesHaloxNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolHaloxIds[] = $arbol->id;
        }
        $productoHalox->arbolesRecomendacion()->sync($arbolHaloxIds);
        #endregion

        #region Producto 26: IDRIS®

        // 1. Buscar o crear la Categoría
        $categoriaInsecticidaIdris = Categoria::firstOrCreate(['nombre' => 'Insecticidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoIdris = PrincipioActivo::firstOrCreate([
            'nombre' => 'Flubendiamide 48%'
        ]);

        // 3. Crear el Producto
        $productoIdris = Producto::create([
            'nombre' => 'IDRIS®',
            'categoria_id' => $categoriaInsecticidaIdris->id,
            'principio_activo_id' => $principioActivoIdris->id,
            'formulacion' => 'SC (Suspensión Concentrada)',
            'descripcion' => 'Insecticida de primera línea tecnologica perteneciente a la clase química diamidas, recomendado para el control de las orugas más difíciles en una amplia gama de cultivos, selectivo en fauna benéfica y perfil favorable para el comercio de alimentos. Única flubendiamide banda verde.',
            'accion' => 'Contacto e Ingestión.',
            'mecanismo_de_accion' => 'Moduladores de receptores de ryanodine.',
            'malezas' => 'Oruga medidora (Rachiplusia), Oruga de las leguminosas (Anticarsia gemmatalis), Falsa medidora (Pseudoplusia includens), Oruga bolillera (Helicoverpa sp.), Oruga de la hoja (Alabama argillacea), Gusano cortador (Agrotis sp.), Isoca de la espiga (Heliothis zea), Polilla del Tomate (Tutta absoluta), Gusano de la pera y la manzana, Carpocapsa (Cydia pomonella), Bicho canasto (Oiketicus platensis), Oruguita enruladota (Argyrotaenia sphaleropa), Cogollero del maíz (Spodoptera frugiperda), Isoca de las coles (Plutella xylostella), Isoca medidora (Rachiplusia nu), Oruga Cortadora (Agrotis ipsylon), Oruga militar tardía (Spodoptera frugiperda), Palomita transparente del zapallo (Diaphanea hyalinata), Gusano del brote del duraznero (Grafolita Molesta).',
            'dosis' => '0,02 a 0,1 L/ha dependiendo de cultivo y plaga (ver marbete).',
            'recomendaciones_de_uso' => 'Tratar el cultivo con IDRIS según umbrales de daño económico (UDE) con el agregado de 0,5 L/ha de Zinax (EMAG). Se recomienda rotar el uso de IDRIS o cualquier otro producto perteneciente al Grupo 28 de insecticidas con productos de diferentes modos de acción. No realizar más de 2 aplicaciones a un mismo cultivo. Lea atentamente el marbete antes de uso.',
            'imagen' => '/images/products/Idris-producto.jpg',
            'imagen_portada' => '/images/products/Idris-portada.jpg',
            'pdfs' => [
                '/pdfs/products/Idris - Marbete.pdf',
                '/pdfs/products/Idris - Hoja de Datos de Seguridad.pdf',
                '/pdfs/products/Idris - Flyer Comercial.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosIdrisNombres = ['Soja', 'Poroto', 'Maíz', 'Maíz dulce', 'Algodón', 'Tabaco', 'Tomate', 'Pera', 'Manzano', 'Brócoli', 'Coliflor', 'Lechuga', 'Melón', 'Sandía', 'Zapallo', 'Duraznero', 'Ciruelo'];
        $cultivoIdrisIds = [];
        foreach ($cultivosIdrisNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoIdrisIds[] = $cultivo->id;
        }
        $productoIdris->cultivos()->sync($cultivoIdrisIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesIdrisNombres = [
            'Algodón en post emergencia',
            'Soja en post emergencia',
            'Maíz en post emergencia',
            'Poroto en post emergencia'
        ];
        $arbolIdrisIds = [];
        foreach ($arbolesIdrisNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolIdrisIds[] = $arbol->id;
        }
        $productoIdris->arbolesRecomendacion()->sync($arbolIdrisIds);
        #endregion

        #region Producto 27: KIER III®
        // 1. Buscar o crear la Categoría
        $categoriaInsecticidaKier = Categoria::firstOrCreate(['nombre' => 'Insecticidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoKier = PrincipioActivo::firstOrCreate([
            'nombre' => 'Abamectina 0,18% + Lufenuron 1,5% + Bifentrin 1,8%'
        ]);

        // 3. Crear el Producto
        $productoKier = Producto::create([
            'nombre' => 'KIER III®',
            'categoria_id' => $categoriaInsecticidaKier->id,
            'principio_activo_id' => $principioActivoKier->id,
            'formulacion' => 'Concentrado Emulsionable (EC)',
            'descripcion' => 'Es una triple mezcla de insecticidas para el cultivo de soja, compuesta por abamectina, lufenuron y bifentrin, con gran poder de volteo y prolongado efecto residual. Está recomendado para el control de orugas defoliadoras. La presencia de abamectina refuerza la acción contra plagas de difícil control como arañuelas y trips.',
            'accion' => 'Contacto e ingestión.',
            'mecanismo_de_accion' => 'Bifentrin: Actúa a a nivel de los canales de sodio (Grupo 15). Lufenuron: Inhibidor de la síntesis de quitina (IGR) (Grupo 3A). Abamectina: Actúa modulando los canales de cloro (Grupo 6).',
            'malezas' => 'Oruga de las leguminosas, Isoca medidora, Trips y Arañuela roja común.',
            'dosis' => '1 L/ha. No requiere agregado de aceite.',
            'imagen' => '/images/products/Kier-III-producto.jpg',
            'imagen_portada' => '/images/products/Kier-III-portada.png',
            'pdfs' => [
                '/pdfs/products/Kier III - Marbete.pdf',
                '/pdfs/products/Kier III - Hoja de Datos de Seguridad.pdf',
                '/pdfs/products/Kier III - Flyer Comercial.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoSojaKier = Cultivo::firstOrCreate(['nombre' => 'Soja']);
        $productoKier->cultivos()->sync([$cultivoSojaKier->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolSojaPostKier = ArbolRecomendacion::firstOrCreate(['nombre' => 'Soja en post emergencia']);
        $productoKier->arbolesRecomendacion()->sync([$arbolSojaPostKier->id]);
        #endregion
    }
}
