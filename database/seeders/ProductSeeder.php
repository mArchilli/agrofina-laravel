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

        #region Producto 28: KATRIN 80®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaKatrin = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoKatrin = PrincipioActivo::firstOrCreate(['nombre' => 'Imazapir 80%']);

        // 3. Crear el Producto
        $productoKatrin = Producto::create([
            'nombre' => 'KATRIN® 80',
            'categoria_id' => $categoriaHerbicidaKatrin->id,
            'principio_activo_id' => $principioActivoKatrin->id,
            'formulacion' => 'Polvo Soluble (SP)',
            'descripcion' => "KATRIN 80 es un herbicida sistémico para uso pre- y post-emergente de las malezas con acción residual y de control, utilizado en cultivos de caña de azúcar y girasol tolerantes a las imidazolinonas, así como en pre-plantación de pino taeda.\n\nUna vez aplicado, las malezas detienen su desarrollo, ocurriendo la muerte de aquellas luego de 3 a 4 semanas.",
            'accion' => 'Sistémico, residual.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.',
            'malezas' => "Abrojo chico, Abrojo grande, Albahaca silvestre, Ambay, Amor seco, Bananita, Cebadilla del campo, Chamico, Charrua, Chinchilla, Cola de zorro, Enredadera perenne, Flor de San Juan, Fumo bravo, Gramilla, Horquetera, Lecherón, Malva cimarrona, Maria mola, Matacampo, Mocopavo, Ortiga gigante, Paitén, Pasto bandera, Pasto de cuaresma, Pasto jesuita, Pasto yacaré, Pata de gallina, Peludilla, Quinoa, Roseta, Sanguinaria, Setaria, Tartago, Yuquery.\n\nControl Parcial de: Apio cimarrón, Cebollín, Chufa, Enredadera anual.",
            'dosis' => "Girasol: 0.1 Kg/ha.\nCaña de azúcar: 0.6 kg/ha.\nPino Taeda: 0.5 kg/ha.",
            'recomendaciones_de_uso' => "Girasol: No aplicar en casos de falta de humedad prolongada y cuando las malezas presenten síntomas de marchitez. Usar solamente en girasol tolerante a las imidazolinonas. Aplicación en post-emergencia temprana del cultivo y de las malezas.\n\nPino Taeda: Se debe aplicar en pre-plantación. Preparar el terreno procurando una baja cantidad de rastrojo y restos leñosos que interfieran en la aplicación; en el caso de uso de rastra, dejarlo libre de terrones y grandes desniveles, aplicar el producto con maleza emergida y dejar transcurrir entre la aplicación del producto y la plantación del cultivo un período de 15 a 30 días.",
            'imagen' => '/images/productos/Katrin80-producto.jpg',
            'imagen_portada' => '/images/productos/Katrin80-portada.png',
            'pdfs' => ['/PDFs/Katrin 80 - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Katrin 80 - Marbete.pdf', '/PDFs/Katrin 80 - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosKatrinNombres = ['Girasol', 'Pino taeda', 'Caña de azúcar'];
        $cultivoKatrinIds = [];
        foreach ($cultivosKatrinNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoKatrinIds[] = $cultivo->id;
        }
        $productoKatrin->cultivos()->sync($cultivoKatrinIds);

        // 5. Asociar Árboles de Recomendación
        $arbolGirasolPost = ArbolRecomendacion::firstOrCreate(['nombre' => 'Girasol en post emergencia']);
        $productoKatrin->arbolesRecomendacion()->sync([$arbolGirasolPost->id]);

        #endregion

        #region Producto 29: KIER III PLUS®

        // 1. Buscar o crear la Categoría
        $categoriaInsecticidaKier = Categoria::firstOrCreate(['nombre' => 'Insecticidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoKier = PrincipioActivo::firstOrCreate(['nombre' => 'Abamectina 0,9% + Lufenuron 7,5% + Bifentrín 9 %']);

        // 3. Crear el Producto
        $productoKier = Producto::create([
            'nombre' => 'KIER III PLUS®',
            'categoria_id' => $categoriaInsecticidaKier->id,
            'principio_activo_id' => $principioActivoKier->id,
            'formulacion' => 'EC (Concentrado Emulsionable)',
            'descripcion' => "Es una triple mezcla de insecticidas para el cultivo de soja, compuesta por abamectina, lufenuron y bifentrin, con gran poder de volteo y prolongado efecto residual.\n\nRecomendado para el control de orugas defoliadoras. La presencia de abamectina y bifentrin refuerza la acción contra plagas de difícil control como arañuelas y trips.",
            'accion' => 'Contacto e ingestión.',
            'mecanismo_de_accion' => 'Bifentrin: Actúa a nivel de los canales de sodio (Grupo 15). Lufenuron: Inhibidor de la síntesis de quitina (IGR) (Grupo 3A). Abamectina: Actúa modulando los canales de cloro (Grupo 6).',
            'malezas' => 'Oruga de las leguminosas, Isoca medidora, Trips y Arañuela roja común.',
            'dosis' => '0.2 L/ha + 0.5 L/ha Zinax (EMAG).',
            'recomendaciones_de_uso' => 'Leer atentamente el marbete. Aplicar SIEMPRE con el agregado de 0.5 L/ha Zinax (EMAG).',
            'imagen' => '/images/productos/Kier-III-Plus-producto.jpg',
            'imagen_portada' => '/images/productos/Kier-III-Plus-portada.jpg',
            'pdfs' => ['/PDFs/Kier III Plus - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Kier III Plus - Marbete.pdf', '/PDFs/Kier III Plus - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoSojaKier = Cultivo::firstOrCreate(['nombre' => 'Soja']);
        $productoKier->cultivos()->sync([$cultivoSojaKier->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolSojaPostKier = ArbolRecomendacion::firstOrCreate(['nombre' => 'Soja en post emergencia']);
        $productoKier->arbolesRecomendacion()->sync([$arbolSojaPostKier->id]);

        #endregion

        #region Producto 30: Kylian® 48

        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaKylian = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoKylian = PrincipioActivo::firstOrCreate(['nombre' => 'Cletodim 48%']);

        // 3. Crear el Producto
        $productoKylian = Producto::create([
            'nombre' => 'KYLIAN® 48',
            'categoria_id' => $categoriaHerbicidaKylian->id,
            'principio_activo_id' => $principioActivoKylian->id,
            'formulacion' => 'Concentrado Emulsionable (EC)',
            'descripcion' => "Cletodim 48% es un herbicida graminicida sistémico y selectivo de post emergencia desarrollado para los cultivos de SOJA, MAÍZ, GIRASOL, MANÍ, ALGODÓN Y POROTO.\n\nKylian 48, inhibe la enzima acetil coenzima A carboxilasa (ACCasa) responsable de la biosintisis de lípidos, Los síntomas se manifiestan entre una y tres semanas posteriores a la aplicación, dependiendo de la especie y las condiciones ambientales.",
            'accion' => 'Sistémico.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima acetil coenzima A carboxilasa (ACCasa).',
            'malezas' => 'Capín arroz, Pasto de cuaresma, Pie de gallina, Sorgo de Alepo de semilla y de rizoma, Trigo guacho, Gramón, Pasto bermuda, Pasto puna, Maíz guacho tolerante a glifosato, Paja viscachera, Pasto salado, Pelo de chancho.',
            'dosis' => 'En gramíneas anuales varía entre 200 y 300 cc/ha dependiendo del clima y del suelo. En gramíneas perennes requiere dosis mayores, hasta 500 cc/ha en sorgo y Alepo y hasta 1.2 L/ha en gramón. Aplicar siempre con 500 cc/ha de ZINAX.',
            'recomendaciones_de_uso' => 'Realizar los tratamientos con buenas condiciones de humedad en el suelo y con las malezas en activo crecimiento. Evitar la superposición durante la aplicación y que la deriva afecte a cultivos adyacentes. No realizar aplicaciones con altas temperaturas, baja humedad, vientos fuertes, presencia de rocío o ante probabilidad de lluvia. El viento no debe exceder los 10 km/h y tampoco aplicar en ausencia total de viento, ni durante las horas de máxima insolación.',
            'imagen' => '/images/productos/Kylian48-producto.jpg',
            'imagen_portada' => '/images/productos/Kylian48-portada.png',
            'pdfs' => ['/PDFs/Kylian 48 - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Kylian 48 - Marbete.pdf', '/PDFs/Kylian 48 - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosKylianNombres = ['Alfalfa', 'Algodón', 'Cebolla', 'Girasol', 'Maní', 'Papa', 'Poroto', 'Soja'];
        $cultivoKylianIds = [];
        foreach ($cultivosKylianNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoKylianIds[] = $cultivo->id;
        }
        $productoKylian->cultivos()->sync($cultivoKylianIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesKylianNombres = [
            'Alfalfa en post emergencia',
            'Soja en post emergencia',
            'Girasol en post emergencia',
            'Maní en post emergencia',
            'Poroto en post emergencia'
        ];
        $arbolKylianIds = [];
        foreach ($arbolesKylianNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolKylianIds[] = $arbol->id;
        }
        $productoKylian->arbolesRecomendacion()->sync($arbolKylianIds);

        #endregion

        #region Producto 31: LISI® 

        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaLisi = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoLisi = PrincipioActivo::firstOrCreate(['nombre' => 'Quinclorac 25 %']);

        // 3. Crear el Producto
        $productoLisi = Producto::create([
            'nombre' => 'LISI®',
            'categoria_id' => $categoriaHerbicidaLisi->id,
            'principio_activo_id' => $principioActivoLisi->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => "LISI® es un herbicida sistémico post-emergente selectivo, con efecto residual en el cultivo de arroz, indicado especialmente para el control de Echinochloa (Capín), como también para malezas de hoja ancha y otras gramíneas.",
            'accion' => 'Sistémico post-emergente.',
            'mecanismo_de_accion' => 'Acción similar al ácido indolacético (Auxinas sinteticas).',
            'malezas' => 'Capín resistente ALS, Pasto Colorado, Brachiaria, Bejuco.',
            'presentacion' => 'Bidón de 5 Litros.',
            'dosis' => '1.3 L/ha. Capín 1.5 L/ha.',
            'recomendaciones_de_uso' => 'No aplicar en situaciones con humedad relativa menor al 60%, vientos mayores que 10 Km/h. No utilizar el agua procedente de arrozales tratados con LISI para regar otros cultivos. Luego de la aplicación, cerrar la salida de agua por el mayor tiempo posible (mínimo 7 días).',
            'banda_toxicologica' => 'Azul',
            'imagen' => '/images/productos/Lisi-producto.jpg',
            'imagen_portada' => '/images/productos/Lisi-portada.jpg',
            'pdfs' => ['/PDFs/Lisi - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Lisi - Marbete.pdf', '/PDFs/Lisi - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoArrozLisi = Cultivo::firstOrCreate(['nombre' => 'Arroz']);
        $productoLisi->cultivos()->sync([$cultivoArrozLisi->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolArrozPostLisi = ArbolRecomendacion::firstOrCreate(['nombre' => 'Arroz en post emergencia']);
        $productoLisi->arbolesRecomendacion()->sync([$arbolArrozPostLisi->id]);
        
        #endregion

        #region Producto 32: MABYN

        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaMabyn = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoMabyn = PrincipioActivo::firstOrCreate(['nombre' => '2,4-D Mezcla de sales 78,1 %. Equivalente ácido 2,4-D 34 %']);

        // 3. Crear el Producto
        $productoMabyn = Producto::create([
            'nombre' => 'MABYN®',
            'categoria_id' => $categoriaHerbicidaMabyn->id,
            'principio_activo_id' => $principioActivoMabyn->id,
            'formulacion' => 'SL (Concentrado Soluble)',
            'descripcion' => "Exclusiva fomulación de 2,4-D con comprobada ultra baja volatilidad.\n\nPermite aplicar dosis con cantidades menores de ingrediente activo por hectárea comparadas con las demás sales y ésteres de 2,4-D, manteniendo la misma eficacia. Sin olor.\n\nHerbicida sistémico y de acción hormonal, para el control de malezas de hoja ancha en barbecho.\n\nMezcla de sales alquilamidopropildimetilamonio y dietanolamonio del ácido 2,4-D.",
            'accion' => 'Sistémico.',
            'mecanismo_de_accion' => 'Acción similar al acido indolacetico (Auxinas sinteticas). GRUPO O.',
            'malezas' => 'Cerraja (Sonchus oleraceus), Escoba amarilla (Flaveria bidentis), Yuyo Colorado (Amarantus quitensis), Mastuerzo (Coronopus didimus), Bolsa de pastor (Capsella bursa-pastoris), Arrancamoños (Xanthium spinosum), Chamico (Datura ferox), Quínoa (Chenopodium album), Rama negra (Conyza sumatrensis), Verdolaga (Portulaca oleracea)',
            'dosis' => '0.9 a 1.5 L/ha.',
            'recomendaciones_de_uso' => 'Utilizar dosis inferiores contra malezas susceptibles, cuando sean pequeñas y en condiciones climáticas y suelo óptimas. Utilizar las dosis mayores cuando la maleza esté más desarrollada, o se trate de malezas mediana susceptibilidad.',
            'imagen' => '/images/productos/Mabyn-producto.jpg',
            'imagen_portada' => '/images/productos/Mabyn-portada.jpg',
            'pdfs' => ['/PDFs/Mabyn - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Mabyn - Marbete.pdf', '/PDFs/Mabyn - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos - Barbecho
        $cultivoBarbecho = Cultivo::firstOrCreate(['nombre' => 'Barbecho']);
        $productoMabyn->cultivos()->sync([$cultivoBarbecho->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolesMabynNombres = [
            'Algodón en barbecho corto primavera',
            'Arroz en barbecho corto primavera',
            'Arroz en pre emergencia',
            'Caña de azucar en barbecho',
            'Trigo y cebada en pre emergencia',
            'Trigo y cebada en barbecho',
            'Sorgo en barbecho',
            'Maíz en barbecho',
            'Soja en barbecho corto primavera',
            'Soja en barbecho largo'
        ];
        $arbolMabynIds = [];
        foreach ($arbolesMabynNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolMabynIds[] = $arbol->id;
        }
        $productoMabyn->arbolesRecomendacion()->sync($arbolMabynIds);

        #endregion

        #region Producto 33: Maiz: Árbol de recomendación completo
        
        $productoMaizCompleto = Producto::create([
            'nombre' => 'MAÍZ: Árbol de recomendación completo',
            'imagen' => '/images/productos/Maiz-completo.jpg',
            'imagen_portada' => '/images/productos/Maiz-completo.jpg',
            'pdfs' => ['/PDFs/Maiz - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolMaizCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Maíz (completo)']);
        $productoMaizCompleto->arbolesRecomendacion()->sync([$arbolMaizCompleto->id]);

        #endregion

        #region Producto 34: Mani: Árbol de recomendación completo
        $productoManiCompleto = Producto::create([
            'nombre' => 'MANÍ: Árbol de recomendación completo',
            'imagen' => '/images/productos/Mani-completo.jpg',
            'imagen_portada' => '/images/productos/Mani-completo.jpg',
            'pdfs' => ['/PDFs/Mani - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolManiCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Maní (completo)']);
        $productoManiCompleto->arbolesRecomendacion()->sync([$arbolManiCompleto->id]);

        #endregion
        
        #region Producto 35: MANIAC®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaManiac = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoManiac = PrincipioActivo::firstOrCreate(['nombre' => 'Imazapic 70%']);

        // 3. Crear el Producto
        $productoManiac = Producto::create([
            'nombre' => 'MANIAC®',
            'categoria_id' => $categoriaHerbicidaManiac->id,
            'principio_activo_id' => $principioActivoManiac->id,
            'formulacion' => 'Polvo Soluble (SP)',
            'descripcion' => "MANIAC es un herbicida sistémico selectivo pre- y post-emergente para los cultivos de maní y caña de azúcar tolerante a las imidazolinonas.\n\nUna vez aplicado, las malezas detienen su desarrollo, ocurriendo la muerte de aquellas luego de 3 a 4 semanas. MANIAC ejerce un control residual en las malezas susceptibles que germinan después de su aplicación. Se logra un excelente control de las malezas cuando las condiciones de humedad son óptimas en el cultivo.",
            'accion' => 'Sistémico, residual.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.',
            'malezas' => 'Cebollín, Gramón, Sorgo de Alepo (Riz/Sem), Chufa, Pasto cuaresma, Verdolaga, Chamico, Malva, Quinoa.',
            'dosis' => "Maní: 0.07-0.08 kg/ha.\nCaña de azúcar: 0.05 kg/ha.",
            'recomendaciones_de_uso' => "Para el cultivo de caña de azúcar, se debe aplicar en pre-plantación, siendo el producto incorporado por el efecto de las lluvias posteriores, de no darse lluvias adecuadas, debe incorporarse mecánicamente.\n\nEn el caso del cultivo de maní, normalmente se aplica en pre-emergencia del cultivo y las malezas. Puede aplicarse en post-emergencia de las malezas, si estas son de escaso desarrollo.\n\nNo aplicar en condiciones de falta de humedad prolongada y cuando las malezas presentan síntomas de marchitez.",
            'imagen' => '/images/productos/Maniac-producto.jpg',
            'imagen_portada' => '/images/productos/Maniac-portada.png',
            'pdfs' => ['/PDFs/Maniac - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Maniac - Marbete.pdf', '/PDFs/Maniac - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosManiacNombres = ['Maní', 'Caña de azúcar'];
        $cultivoManiacIds = [];
        foreach ($cultivosManiacNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoManiacIds[] = $cultivo->id;
        }
        $productoManiac->cultivos()->sync($cultivoManiacIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesManiacNombres = [
            'Maní en pre emergencia',
            'Maní en post emergencia'
        ];
        $arbolManiacIds = [];
        foreach ($arbolesManiacNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolManiacIds[] = $arbol->id;
        }
        $productoManiac->arbolesRecomendacion()->sync($arbolManiacIds);

        #endregion
        
        #region Producto 36: MARCH II®
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaMarch = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoMarch = PrincipioActivo::firstOrCreate(['nombre' => 'Glifosato 66,2%']);

        // 3. Crear el Producto
        $productoMarch = Producto::create([
            'nombre' => 'MARCH II®',
            'categoria_id' => $categoriaHerbicidaMarch->id,
            'principio_activo_id' => $principioActivoMarch->id,
            'formulacion' => 'Concentración Soluble (SL)',
            'descripcion' => "Herbicida postemergente, controla gramíneas, ciperáceas y malezas de hoja ancha.\n\nDe acción sistémica, es absorbido por hojas y tallos verdes y traslocado hacia las raíces y órganos vegetativos subterráneos, ocasionando la muerte total de las malezas emergidas. Se inactiva rápidamente en contacto con el suelo, por lo tanto no deja residuos y se puede sembrar después de su aplicación.",
            'accion' => 'Sistémica.',
            'mecanismo_de_accion' => 'Inhibidor de enolpiruvil-shikimato-3-fosfato sintasa (EPSP). Grupo G.',
            'malezas' => "Anuales: Capín arroz (Echinochloa crus-galli), Pasto colorado (Echinochloa colonum) Pasto cuaresma o Pasto colchón (Digitaria sanguinalis), Pie de gallina (Eleusine indica), Abrojo grande (Xanthium cavanillesii), Chamico (Datura ferox), Chinchilla (Tagetes minuta), Malva cimarrona (Anoda cristata), Quinoa o Yuyo blanco (Chenopodium album) Verdolaga (Portulaca oleracea) Yuyo colorado o Ataco (Amaranthus quitensis)\n\nPerenne: Sorgo de Alepo (Sorghum halepense), Gramón (Cynodon dactylon)",
            'dosis' => '1.6 – 2.9 L/ha para malezas anuales. 1.7 – 4.0 L/ha para malezas perennes.',
            'recomendaciones_de_uso' => 'Aplicarse cuando las malezas se encuentran en activo crecimiento, con una altura menor a 15 cm, evitando aplicaciones sobre malezas cubiertas de tierra. No pulverizar si se preven lluvias durante las 6 horas posteriores a la aplicación o cuando el follaje de las malezas esté mojado.',
            'imagen' => '/images/productos/March-II-producto.jpg',
            'imagen_portada' => '/images/productos/March-II-portada.png',
            'pdfs' => ['/PDFs/March II - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/March II - Marbete.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosMarchNombres = ['Alfalfa', 'Arroz', 'Algodón', 'Trigo', 'Cebada', 'Sorgo', 'Soja', 'Girasol', 'Maíz', 'Maní', 'Poroto', 'Caña de azúcar', 'Cítricos', 'Vid', 'Pinos', 'Yerba mate', 'Té', 'Barbecho'];
        $cultivoMarchIds = [];
        foreach ($cultivosMarchNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoMarchIds[] = $cultivo->id;
        }
        $productoMarch->cultivos()->sync($cultivoMarchIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesMarchNombres = [
            'Alfalfa en barbecho',
            'Alfalfa en pre emergencia',
            'Alfalfa en post emergencia',
            'Arroz en barbecho corto primavera',
            'Caña de azúcar en barbecho',
            'Algodón en barbecho corto primavera',
            'Algodón en pre emergencia',
            'Algodón en post emergencia',
            'Trigo y cebada en barbecho',
            'Sorgo en barbecho',
            'Soja en post emergencia',
            'Girasol en barbecho corto primavera',
            'Maíz en barbecho',
            'Maíz en post emergencia',
            'Maní en barbecho corto primavera',
            'Maní en pre emergencia',
            'Poroto en barbecho',
            'Soja en barbecho largo'
        ];
        $arbolMarchIds = [];
        foreach ($arbolesMarchNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolMarchIds[] = $arbol->id;
        }
        $productoMarch->arbolesRecomendacion()->sync($arbolMarchIds);
        
        #endregion
        
        #region Producto 36: MARCH MAX® 
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaMarchMax = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoMarchMax = PrincipioActivo::firstOrCreate(['nombre' => 'Glifosato 75,7%']);

        // 3. Crear el Producto
        $productoMarchMax = Producto::create([
            'nombre' => 'MARCH MAX®',
            'categoria_id' => $categoriaHerbicidaMarchMax->id,
            'principio_activo_id' => $principioActivoMarchMax->id,
            'formulacion' => 'Gránulos Solubles',
            'descripcion' => "March max es un herbicida no selectivo para el control postemergente de las malezas anuales y perennes en áreas agrícolas, industriales, caminos, vías férrea.\n\nDe acción sistemática, es absorbido por hojas y tallos verdes y traslocado hacia las raíces y órganos vegetativos subterráneos, ocasionando la muerte total de las malezas emergidas. Los efectos son lentos sobre todo en las especies perennes, donde después de transcurridos 4 a 5 días desde la aplicación comienza el amarillamiento y marchitamiento de las hojas y tallos que culminan con la muerte total de las malezas.",
            'accion' => 'Sistémica.',
            'mecanismo_de_accion' => 'Inhibidor de enolpiruvil-shikimato-3-fosfato sintasa (EPSP). Grupo G.',
            'malezas' => "Anuales:\nGRAMINEAS: Capín /Pasto cañada (Echinochloa colonum), Capín (Echinochloa crus-galli), Cebadilla criolla (Bromus unioloides) Cola de zorro (Setaria spp.). Pasto cuaresma (Digitaria spp).\n\nLATIFOLIADAS: Yuyo Colorado / ataco (Amaranthus spp), Quinoa (Chenopodium album), Enredadera anual (Polygonum convolvulus), Ciennudos / sanguinaria (Polygonum aviculare), Chamico (Datura ferox), Amor seco / saetilla (Bidens pilosa).\n\nPerennes:\nSorgo de alepo/Cañota (Sorgum halepense), Gramón/gramilla/chepica (Cynodon dactylon) Cebollín/cípero/junquillo (Cyperus rotundus), Cípero/junquillo (Cyperus esculentus), Camalote / Pasto de guinea (Panichum), Yuyo sapo (Wedelia glauca)",
            'dosis' => "Malezas anuales: dosis de 1 kg/ha a 2.05 kg/ha.\nMalezas perennes: dosis de 1.25 kg/ha a 3 kg/ha.",
            'recomendaciones_de_uso' => "Aplicarse cuando las malezas se encuentran en activo crecimiento, con una altura menor a 15 cm, evitando aplicaciones sobre malezas cubiertas de tierra. No pulverizar si se preven lluvias durante las 6 horas posteriores a la aplicación o cuando el follaje de las malezas esté mojado.\n\nEl glifosato pierde efectividad en presencia de aguas duras (aquellas con alto contenido de Calcio y Magnesio), Por lo cual se recomienda corregir la dureza del agua antes del agregado de MARCH MAX AGROFINA utilizando productos especiales disponibles para tal fin. Con respecto al pH de la solución se recomienda que el mismo sea neutro levemente ácido.",
            'imagen' => '/images/productos/March-Max-producto.jpg',
            'imagen_portada' => '/images/productos/March-Max-portada.jpg',
            'pdfs' => ['/PDFs/March Max - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/March Max - Marbete.pdf', '/PDFs/March Max - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosMarchMaxNombres = ['Alfalfa', 'Arroz', 'Algodón', 'Trigo', 'Cebada', 'Sorgo', 'Soja', 'Girasol', 'Maíz', 'Maní', 'Poroto', 'Caña de azúcar', 'Cítricos', 'Vid', 'Pinos', 'Yerba mate', 'Té', 'Barbecho'];
        $cultivoMarchMaxIds = [];
        foreach ($cultivosMarchMaxNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoMarchMaxIds[] = $cultivo->id;
        }
        $productoMarchMax->cultivos()->sync($cultivoMarchMaxIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesMarchMaxNombres = [
            'Alfalfa en barbecho',
            'Alfalfa en pre emergencia',
            'Alfalfa en post emergencia',
            'Arroz en barbecho corto primavera',
            'Caña de azúcar en barbecho',
            'Algodón en barbecho corto primavera',
            'Algodón en pre emergencia',
            'Algodón en post emergencia',
            'Trigo y cebada en barbecho',
            'Sorgo en barbecho',
            'Soja en post emergencia',
            'Girasol en barbecho corto primavera',
            'Maíz en barbecho',
            'Maíz en post emergencia',
            'Maní en barbecho corto primavera',
            'Maní en pre emergencia',
            'Poroto en barbecho',
            'Soja en barbecho corto primavera',
            'Soja en barbecho largo'
        ];
        $arbolMarchMaxIds = [];
        foreach ($arbolesMarchMaxNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolMarchMaxIds[] = $arbol->id;
        }
        $productoMarchMax->arbolesRecomendacion()->sync($arbolMarchMaxIds);

        #endregion
        
        #region Producto 36: MILLION®

        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaMillion = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoMillion = PrincipioActivo::firstOrCreate(['nombre' => 'Lactofen 24%']);

        // 3. Crear el Producto
        $productoMillion = Producto::create([
            'nombre' => 'MILLION®',
            'categoria_id' => $categoriaHerbicidaMillion->id,
            'principio_activo_id' => $principioActivoMillion->id,
            'formulacion' => 'Concentrado Emulsionable (EC)',
            'descripcion' => "MILLION es un herbicida post emergente de contacto y selectivo para cultivos de SOJA y MANÍ, que controla malezas latifoliadas. Cuando es absorbido por las partes verdes de las malezas se activa por la luz, destruyendo la membrana celular, lo que produce una necrosis de los tejidos vegetales. Sus síntomas comienzan a los 30 minutos de aplicado.",
            'accion' => 'Contacto.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima protoporfirinogeno oxidasa (PPO). Grupo E',
            'malezas' => 'Chamico, Chinchilla, Flor de Santa Lucía, Malva Cimarrona, Nabo, Yuyo Colorado, Verdolaga, Albahaca silvestre, Alkekenje, Farolito, Yuyo colorado resistente a ALS.',
            'dosis' => "Mani: 0,175 L/ha.\nSoja: 0,24 – 0,3 L/ha.",
            'recomendaciones_de_uso' => 'Aplicar una vez que todas las malezas hayan emergido, cuando las mismas sean jóvenes y en activo crecimiento. Para control de Yuyo Colorado resistente a ALS en soja consultar por mezcla con DASEN. No aplicar bajo condiciones de sequía o en casos de falta de humedad prolongada y/o baja humedad relativa ambiente, no aplicar en horas del día de máxima insolación y alta temperatura, no aplicar en presencia de rocío, ni ante la inminencia de lluvias.',
            'imagen' => '/images/productos/Million-producto.jpg',
            'imagen_portada' => '/images/productos/Million-portada.png',
            'pdfs' => ['/PDFs/Million - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Million - Marbete.pdf', '/PDFs/Million - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosMillionNombres = ['Maní', 'Soja'];
        $cultivoMillionIds = [];
        foreach ($cultivosMillionNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoMillionIds[] = $cultivo->id;
        }
        $productoMillion->cultivos()->sync($cultivoMillionIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesMillionNombres = [
            'Soja en post emergencia',
            'Maní en post emergencia'
        ];
        $arbolMillionIds = [];
        foreach ($arbolesMillionNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolMillionIds[] = $arbol->id;
        }
        $productoMillion->arbolesRecomendacion()->sync($arbolMillionIds);

        #endregion
        
        #region Producto 37: MORRIGAN®

        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaMorrigan = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoMorrigan = PrincipioActivo::firstOrCreate(['nombre' => 'Diclosulam 84%']);

        // 3. Crear el Producto
        $productoMorrigan = Producto::create([
            'nombre' => 'MORRIGAN®',
            'categoria_id' => $categoriaHerbicidaMorrigan->id,
            'principio_activo_id' => $principioActivoMorrigan->id,
            'formulacion' => 'Polvo Mojable (WP)',
            'descripcion' => "MORRIGAN es un herbicida selectivo para el control de malezas de hoja ancha y gramíneas, que compiten con los cultivos de soja y maní. Posee baja retención por rastrojos, permitiendo ser aplicado con coberturas verdes sin ser retenido por la intercepción de tejido vegetal verde.\n\nEs activo en tratamientos de suelo (pre-siembra, pre-emergencia), su efecto residual permite controlar los flujos de emergencia de las malezas durante las etapas iniciales del cultivo y también tiene efecto post-emergencia.",
            'accion' => 'Sistémico y residual.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B.',
            'malezas' => "Latifoliadas: Abrojos, Bejuco, Campanilla, Chamico, Chinchilla, Ipomea, Malva, Quinoa, Rama negra, Saetilla o Amor seco, Verdolaga, Yuyo colorado.\n\nGramíneas anuales: Capin, Cola de zorro, Eleusine, Pasto Cuaresma.",
            'dosis' => "Soja: 0.030 kg/ha.\nManí: 0.024 kg/ha.",
            'recomendaciones_de_uso' => "MORRIGAN es un herbicida selectivo para el control de malezas de hoja ancha y gramíneas, que compiten con los cultivos de soja y maní. Posee baja retención por rastrojos, permitiendo ser aplicado con coberturas verdes sin ser retenido por la intercepción de tejido vegetal verde.\n\nEs activo en tratamientos de suelo (pre-siembra, pre-emergencia), su efecto residual permite controlar los flujos de emergencia de las malezas durante las etapas iniciales del cultivo y también tiene efecto post-emergencia.",
            'imagen' => '/images/productos/Morrigan-producto.jpg',
            'imagen_portada' => '/images/productos/Morrigan-portada.png',
            'pdfs' => ['/PDFs/Morrigan - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Morrigan - Marbete.pdf', '/PDFs/Morrigan - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosMorriganNombres = ['Maní', 'Soja'];
        $cultivoMorriganIds = [];
        foreach ($cultivosMorriganNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoMorriganIds[] = $cultivo->id;
        }
        $productoMorrigan->cultivos()->sync($cultivoMorriganIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesMorriganNombres = [
            'Soja en post emergencia',
            'Maní en barbecho corto primavera',
            'Maní en pre emergencia',
            'Maní en post emergencia',
            'Soja en barbecho corto primavera'
        ];
        $arbolMorriganIds = [];
        foreach ($arbolesMorriganNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolMorriganIds[] = $arbol->id;
        }
        $productoMorrigan->arbolesRecomendacion()->sync($arbolMorriganIds);

        #endregion
        
        #region Producto 38: MULAN®

        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaMulan = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoMulan = PrincipioActivo::firstOrCreate(['nombre' => 'Flumetsulam 12%']);

        // 3. Crear el Producto
        $productoMulan = Producto::create([
            'nombre' => 'MULAN®',
            'categoria_id' => $categoriaHerbicidaMulan->id,
            'principio_activo_id' => $principioActivoMulan->id,
            'formulacion' => 'SC (Suspensión Concentrada)',
            'descripcion' => "Herbicida residual y selectivo para el control de malezas de hoja ancha. Absorción foliar y radical, con rápida translocación vía xilema y floema, acumulándose en las regiones meristemáticas, por lo que las malezas detienen rápidamente su crecimiento.",
            'accion' => 'Sistémico y residual.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima aceto lactato sintetasa (ALS).',
            'malezas' => 'Anagallis, Bolsa de pastor, Calabacilla, Capiquí, Cardo negro, Cardo pendiente, Cardo ruso, Chinchilla, Cicuta negra, Correhuela, Enredadera anual, Erisimo, Flor morada, Girasol guacho, Lengua de vaca, Manzanilla cimarrona, Margarita, Margarita de Piria, Mastuerzo, Mostacilla, Nabón, Ortiga mansa, Quinoa, Rábano, Rabizón, Roseta, Sanguinaria, Spergula, Verdolaga, Viznaga, Yuyo colorado.',
            'dosis' => "Pasturas: Pre emergente: 0.4 – 0.6 L/ha. Post emergente: 0.2 – 0.24 L/ha.",
            'recomendaciones_de_uso' => "El suelo debe presentar condiciones adecuadas de humedad. La maleza tiene que estar en activo crecimiento. Pre-emergencia: Aplicar después de la siembra y antes de la emergencia de la pastura. Post-emergencia: Aplicar con malezas pequeñas (de cotiledón hasta 6 hojas o rosetas de 10 cm de diámetro) y a partir de que las leguminosas tengan 2-3 trifolios.",
            'imagen' => '/images/productos/Mulan-producto.jpg',
            'imagen_portada' => '/images/productos/Mulan-portada.png',
            'pdfs' => ['/PDFs/Mulan - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Mulan - Marbete.pdf', '/PDFs/Mulan - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosMulanNombres = ['Alfalfa', 'Caña de azúcar', 'Maíz', 'Poroto', 'Soja'];
        $cultivoMulanIds = [];
        foreach ($cultivosMulanNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoMulanIds[] = $cultivo->id;
        }
        $productoMulan->cultivos()->sync($cultivoMulanIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesMulanNombres = [
            'Alfalfa en barbecho',
            'Alfalfa en pre emergencia',
            'Alfalfa en post emergencia',
            'Caña de azúcar en barbecho',
            'Caña de azúcar en post emergencia',
            'Caña de azúcar en pre emergencia',
            'Maíz en barbecho',
            'Poroto en pre emergencia'
        ];
        $arbolMulanIds = [];
        foreach ($arbolesMulanNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolMulanIds[] = $arbol->id;
        }
        $productoMulan->arbolesRecomendacion()->sync($arbolMulanIds);

        #endregion

        #region Producto 39: NIFRAN®
        
        // 1. Buscar o crear la Categoría
        $categoriaFungicida = Categoria::firstOrCreate(['nombre' => 'Fungicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoNifran = PrincipioActivo::firstOrCreate(['nombre' => 'Fluazinam 50%']);

        // 3. Crear el Producto
        $productoNifran = Producto::create([
            'nombre' => 'NIFRAN®',
            'categoria_id' => $categoriaFungicida->id,
            'principio_activo_id' => $principioActivoNifran->id,
            'formulacion' => 'Suspensión Concentrada (SC)',
            'descripcion' => "Es un fungicida preventivo, de contacto y con modo de acción multisitio. Cuando es aplicado sobre la planta queda en la superficie de la misma, brindando una muy buena protección basada en su efecto residual y su resistencia al lavado por lluvias. Esta combinación permite un control efectivo sobre el complejo de hongos resistentes a otros grupos de fungicidas. Ideal para prevenir la aparición de resistencias.",
            'accion' => 'Contacto, con efecto preventivo.',
            'mecanismo_de_accion' => 'Inhibe el crecimiento del micelio del hongo y su desarrollo reproductivo. (acción multisitio).',
            'cultivos' => 'Maní, Papa, Poroto, Vid.',
            'dosis' => 'Maní: 1 L/ha, Papa: 0,4 – 0,6 L/ha, Poroto: 0,75 – 1 L/ha, Vid: 0,8 L/ha.',
            'recomendaciones_de_uso' => "Papa: Tizón tardío (Phytophthora infestans), 0,4 – 0,6 L/ha. Aplicar 20 a 30 días después de la emergencia del cultivo. Repetir c/7 días.\n\nPoroto: Sclerotinia (Sclerotinia sclerotiorum), 0,75-1 l/ha, aplicar al inicio y al final de floración.\n\nManí: Sclerotinia sclerotiorum, 1 l/ha. Dos aplicaciones: la primera al inicio de clavado o floración y la segunda 21 días después en período de llenado de fruto.\n\nVid: Podredumbre gris (Botritis cinerea), 0,8 L/ha, Cuatro aplicaciones: en floración, en cierre de racimo, en envero, y en madurez.",
            'imagen' => '/images/productos/Nifran-producto.jpg',
            'imagen_portada' => '/images/productos/Nifran-portada.png',
            'pdfs' => ['/PDFs/Nifran - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Nifran - Marbete.pdf', '/PDFs/Nifran - Flyer comercial.pdf'],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosNifranNombres = ['Maní', 'Papa', 'Poroto', 'Vid'];
        $cultivoNifranIds = [];
        foreach ($cultivosNifranNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoNifranIds[] = $cultivo->id;
        }
        $productoNifran->cultivos()->sync($cultivoNifranIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesNifranNombres = [
            'Maní en post emergencia',
            'Poroto en post emergencia'
        ];
        $arbolNifranIds = [];
        foreach ($arbolesNifranNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolNifranIds[] = $arbol->id;
        }
        $productoNifran->arbolesRecomendacion()->sync($arbolNifranIds);

        #endregion
        
        #region Producto 40: PARAQUAT® 27,6
        
        // 1. Buscar o crear la Categoría
        $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoParaquat = PrincipioActivo::firstOrCreate(['nombre' => 'Paraquat dicloruro 27,6%']);

        // 3. Crear el Producto
        $productoParaquat = Producto::create([
            'nombre' => 'PARAQUAT® 27,6',
            'categoria_id' => $categoriaHerbicida->id,
            'principio_activo_id' => $principioActivoParaquat->id,
            'formulacion' => 'Concentrado Soluble (SL)',
            'descripcion' => "Paraquat actúa por contacto, su acción es rápida y enérgica sobre el follaje y partes verdes de la planta y no afecta los tallos de corteza marrón. Se inactiva en contacto con el suelo o agua con tierra en suspensión.\n\nNecesita de la fotosíntesis activa para manifestar su efecto herbicida, que se caracteriza por el colapso de la estructura celular y la desecación, en condiciones cálidas y soleadas, la actividad herbicida se desarrolla rápidamente en unas pocas horas. En condiciones nubladas o hacia el fin del día, la acción se hace más lenta pero más efectiva, ya que el producto se transloca mejor en la planta.",
            'accion' => 'Actúa solamente por contacto.',
            'mecanismo_de_accion' => 'Actúa inhibiendo el fotosistema I (Grupo D)',
            'dosis' => '1,5 – 4 L/ha.',
            'recomendaciones_de_uso' => "Utilizar las dosis mayores cuando las malezas o el cultivo a desecar tengan abundante follaje o como primer tratamiento. Usar la dosis baja como segundo tratamiento o para tratar rebrotes.\n\nEs conveniente aplicar cuando las malezas son pequeñas y tienen una altura menor a 10 cm. Para lograr la máxima eficacia del producto se recomienda aplicarlo acompañado con humectante no iónico a concentración 0,2 % (200cc/100 l de agua).\n\nHumectante: en situaciones donde sean necesarias diluciones en una concentración menor de 1 litro de PARAQUAT 27,6 AGROFINA en 100 litros de agua, agregar 100 cm3 de humectante no iónico por cada 100 l adicionales de agua.",
            'imagen' => '/images/productos/Paraquat-producto.jpg',
            'imagen_portada' => '/images/productos/Paraquat-portada.png',
            'pdfs' => ['/PDFs/Paraquat - Hoja de Datos de Seguridad (MSDS).pdf', '/PDFs/Paraquat - Marbete.pdf'],
            'activo' => true,
        ]);

        #endregion

        #region Producto 41: Poroto: Árbol de recomendación completo

        // Crear el Producto
        $productoPorotoCompleto = Producto::create([
            'nombre' => 'POROTO: Árbol de recomendación completo',
            'imagen' => '/images/productos/Poroto-completo.jpg',
            'imagen_portada' => '/images/productos/Poroto-completo.jpg',
            'pdfs' => ['/PDFs/Poroto - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolPorotoCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Poroto (completo)']);
        $productoPorotoCompleto->arbolesRecomendacion()->sync([$arbolPorotoCompleto->id]);

        #endregion
        
        #region Producto 42: S-METOLACLORO 96
        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaSMetolacloro = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoSMetolacloro = PrincipioActivo::firstOrCreate([
            'nombre' => 'S-Metolacloro 96%'
        ]);

        // 3. Crear el Producto
        $productoSMetolacloro = Producto::create([
            'nombre' => 'S-METOLACLORO 96',
            'categoria_id' => $categoriaHerbicidaSMetolacloro->id,
            'principio_activo_id' => $principioActivoSMetolacloro->id,
            'formulacion' => 'Concentrado Emulsionable (EC)',
            'descripcion' => 'Es un herbicida preemergente de acción sistémica, que controla un amplio espectro de malezas de hoja angosta y algunas de hoja ancha, su control es sobre la emergencia de las malezas. Actúa inhibiendo el crecimiento al afectar el metabolismo de los lípidos, la síntesis de proteínas y la formación de ceras de la cutícula. Es selectivo para los cultivos de maíz, girasol, soja, sorgo granífero (tratado con antídoto de herbicida fluxofenim 96 % p/v), maní, poroto, algodón, tabaco y remolacha, entre otras hortícolas.',
            'accion' => 'Sistémico y Residual.',
            'mecanismo_de_accion' => 'Inhibidores de los ácidos grasos de cadena larga (Grupo K)',
            'malezas' => 'Bolsa de pastor, Capín, Cebollín, Cola de zorro, Grama carraspera, Gramilla, Pasto cuaresma, Sorgo de alepo de semilla, Verdolaga, Yuyo colorado.',
            'dosis' => "Algodón, Girasol, Maíz, Maní, Soja: 0.8 a 1.6 L/ha.\nPoroto: 0.8 L/ha.\nSorgo granífero: 1.14 a 1.35 L/ha.",
            'recomendaciones_de_uso' => 'Debe ser aplicado antes que las malezas hagan su aparición sobre el terreno. Es importante tener en cuenta que este producto no ejercerá control si es aplicado sobre malezas emergidas. Se debe realizar la aplicación sobre el terreno húmedo, antes o después de una lluvia o del riego, y sobre el suelo bien desmenuzado y sin terrones.',
            'imagen' => '/images/products/S-metolacloro-96-producto.jpg',
            'imagen_portada' => '/images/products/S-metolacloro-96-portada.png',
            'pdfs' => [
                '/pdfs/products/S-Metacloro 96 - Marbete.pdf',
                '/pdfs/products/S-Metacloro 96 - Flyer comercial.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivosSMetolacloroNombres = ['Algodón', 'Girasol', 'Maíz', 'Maní', 'Poroto', 'Soja', 'Sorgo granífero', 'Tabaco'];
        $cultivoSMetolacloroIds = [];
        foreach ($cultivosSMetolacloroNombres as $nombre) {
            $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
            $cultivoSMetolacloroIds[] = $cultivo->id;
        }
        $productoSMetolacloro->cultivos()->sync($cultivoSMetolacloroIds);

        // 5. Asociar Árboles de Recomendación
        $arbolesSMetolacloroNombres = [
            'Algodón en pre emergencia',
            'Sorgo en pre emergencia',
            'Sorgo en barbecho',
            'Girasol en pre emergencia',
            'Maíz en pre emergencia',
            'Maní en pre emergencia',
            'Poroto en pre emergencia'
        ];
        $arbolSMetolacloroIds = [];
        foreach ($arbolesSMetolacloroNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolSMetolacloroIds[] = $arbol->id;
        }
        $productoSMetolacloro->arbolesRecomendacion()->sync($arbolSMetolacloroIds);
        #endregion

        #region Producto 43: S-MILLION®

        // 1. Buscar o crear la Categoría
        $categoriaHerbicidaSMillion = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoSMillion = PrincipioActivo::firstOrCreate([
            'nombre' => 'S-Lactofen 36%'
        ]);

        // 3. Crear el Producto
        $productoSMillion = Producto::create([
            'nombre' => 'S-MILLION®',
            'categoria_id' => $categoriaHerbicidaSMillion->id,
            'principio_activo_id' => $principioActivoSMillion->id,
            'formulacion' => 'EC (Concentrado Emulsionable)',
            'descripcion' => 'Herbicida post emergente de contacto y selectivo para SOJA y MANÍ, para el control de malezas difíciles latifoliadas, como Yuyo colorado. Innovadora formulación con 100 % isómero S, otorgando mayor actividad biológica, permitiendo reducir la dosis final al 50 % respecto a lactofen 24% y asegurando selectividad en el cultivo. La excelente calidad de formulación mejora la compatibilidad de la mezcla de tanque. El producto cuando se incorpora en agua forma una microemulsión que aumenta la biodisponibilidad del ingrediente activo, asegura una buena distribución en el caldo y garantiza una aplicación uniforme. Formulación sustentable, donde aplicamos principios de “Green Chemistry” (Química Verde).',
            'accion' => 'Contacto.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima protoporfirinogeno oxidasa (PPO). Grupo E.',
            'malezas' => 'Chamico (Datura ferox). Malva cimarrona (Anoda cristata). Nabo (Brassica campestris). Yuyo colorado (Amaranthus quitensis). Albahaca silvestre (Galinsoga parviflora). Alkekenje (Physalis angulata). Farolito (Nicandra physaloides). Verdolaga (Portulaca oleracea). Chinchilla (Tagetes minuta).',
            'dosis' => "Mani: 0,175 L/ha.\nSoja: 0,24 – 0,3 L/ha.",
            'recomendaciones_de_uso' => 'Aplicar una vez que todas las malezas hayan emergido, cuando las mismas sean jóvenes y en activo crecimiento. Para control de Yuyo Colorado resistente a ALS en soja consultar por mezcla con DASEN. No aplicar bajo condiciones de sequía o en casos de falta de humedad prolongada y/o baja humedad relativa ambiente, no aplicar en horas del día de máxima insolación y alta temperatura, no aplicar en presencia de rocío, ni ante la inminencia de lluvias.',
            'imagen' => '/images/products/S-million-producto.jpg',
            'imagen_portada' => '/images/products/S-million-portada.jpg',
            'pdfs' => [
                '/pdfs/products/S-Million - Marbete.pdf',
                '/pdfs/products/S-Million - Hoja de Datos de Seguridad (MSDS).pdf',
                '/pdfs/products/S-Million - Flyer comercial.pdf'
            ],
            'activo' => true,
        ]);

        // 4. Asociar Cultivos
        $cultivoManiSMillion = Cultivo::firstOrCreate(['nombre' => 'Maní']);
        $cultivoSojaSMillion = Cultivo::firstOrCreate(['nombre' => 'Soja']);
        $productoSMillion->cultivos()->sync([$cultivoManiSMillion->id, $cultivoSojaSMillion->id]);

        // 5. Asociar Árboles de Recomendación
        $arbolesSMillionNombres = [
            'Soja en post de emergencia',
            'Maní en post emergencia'
        ];
        $arbolSMillionIds = [];
        foreach ($arbolesSMillionNombres as $nombre) {
            $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
            $arbolSMillionIds[] = $arbol->id;
        }
        $productoSMillion->arbolesRecomendacion()->sync($arbolSMillionIds);
        #endregion

        #region Producto 44: SOJA: Árbol de recomendación completo
        $productoSojaCompleto = Producto::create([
            'nombre' => 'SOJA: Árbol de recomendación completo',
            'imagen' => '/images/products/Soja-completo.jpg',
            'imagen_portada' => '/images/products/Soja-completo.jpg',
            'pdfs' => ['/pdfs/products/Soja - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolSojaCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Soja (completo)']);
        $productoSojaCompleto->arbolesRecomendacion()->sync([$arbolSojaCompleto->id]);
        #endregion

        #region Producto 45: SORGO: Árbol de recomendación completo

        $productoSorgoCompleto = Producto::create([
            'nombre' => 'SORGO: Árbol de recomendación completo',
            'imagen' => '/images/products/Sorgo-completo.jpg',
            'imagen_portada' => '/images/products/Sorgo-completo.jpg',
            'pdfs' => ['/pdfs/products/Sorgo - Arbol de Recomendacion Completo.pdf'],
            'activo' => true,
        ]);

        // Asociar Árbol de Recomendación
        $arbolSorgoCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Sorgo (Completo)']);
        $productoSorgoCompleto->arbolesRecomendacion()->sync([$arbolSorgoCompleto->id]);
        #endregion

        #region Producto 46: Sulfenax 50®

        // 1. Buscar o crear la Categoría
        $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoSulfenax = PrincipioActivo::firstOrCreate(['nombre' => 'Sulfentrazone 50%']);

        // 3. Crear el Producto
        $productoSulfenax = Producto::create([
            'nombre' => 'SULFENAX® 50',
            'categoria_id' => $categoriaHerbicida->id,
            'principio_activo_id' => $principioActivoSulfenax->id,
            'formulacion' => 'suspensión concentrada (SC)',
            'descripcion' => 'Es un herbicida del grupo químico de las ariltriazolinonas, selectivo para los cultivos de soja, maní y girasol. Es un herbicida residual, que al ser aplicado e incorporado al suelo, ingresa a las plántulas de malezas por la raíz inhibiendo la síntesis de la clorofila. Las plantas que emergen del suelo se ponen necróticas y mueren al poco tiempo de estar en contacto con la luz.',
            'accion' => 'Sistémica y residual.',
            'mecanismo_de_accion' => 'Inhibidor de la enzima protoporfirinogeno oxidasa (PPO). Grupo E.',
            'malezas' => 'Bowlesia (Bowlesia incana), Cien nudos (Polygonum aviculare), Malva cimarrona (Anoda cristata), Peludilla (Gamochaeta subfalcata), Quinoa blanca (Chenopodium album), Senecio (Senecio spp.), Verdolaga (Portulaca oleracea) Yuyo colorado (Amaranthus quitensis), Cardo ruso (Salsola kali).',
            'dosis' => 'Soja y Girasol: 0,250- 0,400 L/ha.\nManí: 0,250- 0,350 L/ha.',
            'recomendaciones_de_uso' => 'Las dosis están directamente relacionadas con las características de los lotes en que se utilizará el producto. Por ello se debe tener especialmente en cuenta el tipo de suelo, textura, contenido de materia orgánica, pH, relieve, etc. Usar dosis mayores en suelos de pH menores a 7.',
            'imagen' => '/images/products/Sulfenax-50-producto.jpg',
            'imagen_portada' => '/images/products/Sulfenax-50-portada.png',
            'pdfs' => [
                '/pdfs/products/Sulfenax - Marbete.pdf',
                '/pdfs/products/Sulfenax 50 - Hoja de Datos de Seguridad (MSDS).pdf',
                '/pdfs/products/Sulfenax 50 - Flyer comercial.pdf',
            ],
            'activo' => true,
            ]);

            // 4. Asociar Cultivos
            $cultivosSulfenaxNombres = ['Soja', 'Girasol', 'Maní'];
            $cultivoSulfenaxIds = [];
            foreach ($cultivosSulfenaxNombres as $nombre) {
                $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
                $cultivoSulfenaxIds[] = $cultivo->id;
            }
            $productoSulfenax->cultivos()->sync($cultivoSulfenaxIds);

            // 5. Asociar Árboles de Recomendación
            $arbolesSulfenaxNombres = [
                'Girasol en barbecho corto primavera',
                'Maní en barbecho corto primavera',
                'Soja en barbecho corto primavera',
            ];
            $arbolSulfenaxIds = [];
            foreach ($arbolesSulfenaxNombres as $nombre) {
                $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
                $arbolSulfenaxIds[] = $arbol->id;
            }
            $productoSulfenax->arbolesRecomendacion()->sync($arbolSulfenaxIds);

            #endregion

        #region Producto 47: Talis®

        // 1. Buscar o crear la Categoría
            $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

        // 2. Buscar o crear el Principio Activo
            $principioActivoTalis = PrincipioActivo::firstOrCreate(['nombre' => 'Flurocloridona 25%']);

        // 3. Crear el Producto
            $productoTalis = Producto::create([
                'nombre' => 'TALIS®',
                'categoria_id' => $categoriaHerbicida->id,
                'principio_activo_id' => $principioActivoTalis->id,
                'formulacion' => 'Concentrado Emulsionable (EC)',
                'descripcion' => 'Herbicida residual selectivo pre y post-emergente temprano que controla un amplio espectro de malezas, especialmente las de hoja ancha. Por su acción sistémica penetra por cotiledones, hojas jóvenes, y raíces y se trasloca acropetalmente hacia hojas y tallos provocando la muerte de las malezas. El periodo de control de maleza se extiende por más de 90 días en distintos tipos de suelo sin afectar a los cultivos que siguen en la rotación. Se activa con escasa humedad en suelo, no se lava por lluvias. Los efectos son visibles a los 4 a 6 días de su aplicación comenzando por el amarillamiento y marchitamiento de las hojas y tallos.',
                'accion' => 'Sistémico y Residual.',
                'mecanismo_de_accion' => 'Inhibidores de la enzima fitoeno desaturasa (Grupo F1).',
                'malezas' => 'Abrojo grande, Albahaca silvestre, Bejuco, Bolsa del pastor, Capín arroz, Capiquí, Cardo, Chamico, Chinchilla, Cola de zorro, Enredadera anual, Malva cimarrona, Manzanilla, Mastuerzo, Mostacilla, Nabo, Nabón, Ortiga, Ortiga mansa, Pasto blanco, Pasto de cuaresma, Quinoa blanca, Rábano, Sanguinaria, Sorgo de Alepo de semilla, Verdolaga, Verdolaga rastrera, Verónica, Viola silvestre, Yuyo colorado.',
                'dosis' => 'Trigo: en barbecho químico y preemergencia 1,5 – 2 L/ha. En postemergencia: 0,3 – 0,5 L/ha.\nGirasol, papa, algodón, maíz: 2 – 4 L/ha. Avena, Cebada, Centeno, Lenteja, Perejil, Zanahoria: 2 – 4 L/ha.\nCaña de azúcar: 4-5,5 L/ha.',
                'recomendaciones_de_uso' => 'Aplicar las dosis mayores recomendadas en el cuadro de usos cuando la infestación de malezas sea alta y/o en suelos con más de 3% de materia orgánica.',
                'imagen' => '/images/products/Talis-producto.jpg',
                'imagen_portada' => '/images/products/Talis-portada.png',
                'pdfs' => [
                    // PDFs: se asume el mismo formato de nombres que los anteriores productos
                    '/pdfs/products/Talis - Marbete.pdf',
                    '/pdfs/products/Talis - Hoja de Datos de Seguridad (MSDS).pdf',
                    '/pdfs/products/Talis - Flyer comercial.pdf',
                ],
                'activo' => true,
            ]);

        // 4. Asociar Cultivos
            $cultivosTalisNombres = ['Girasol', 'Avena', 'Cebada', 'Centeno', 'Lenteja', 'Perejil', 'Zanahoria', 'Caña de azúcar', 'Papa', 'Algodón', 'Maíz', 'Trigo', 'Chia'];
            $cultivoTalisIds = [];
            foreach ($cultivosTalisNombres as $nombre) {
                $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
                $cultivoTalisIds[] = $cultivo->id;
            }
            $productoTalis->cultivos()->sync($cultivoTalisIds);

        // 5. Asociar Árboles de Recomendación
            $arbolesTalisNombres = [
                'Algodón en pre emergencia',
                'Caña de azúcar en barbecho',
                'Caña de azúcar en post emergencia',
                'Caño de azúcar en pre emergencia',
                'Trigo y cebada en post emergencia',
                'Trigo y cebada en barbecho',
                'Girasol en barbecho corto primavera',
                'Girasol en pre emergencia',
                'Maíz en barbecho',
                'Maíz en pre emergencia',
            ];
            $arbolTalisIds = [];
            foreach ($arbolesTalisNombres as $nombre) {
                $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
                $arbolTalisIds[] = $arbol->id;
            }
            $productoTalis->arbolesRecomendacion()->sync($arbolTalisIds);

        #endregion
        
        #region Producto 48: Tiembla®

            // 1. Buscar o crear la Categoría
            $categoriaInsecticida = Categoria::firstOrCreate(['nombre' => 'Insecticidas']);

            // 2. Buscar o crear el Principio Activo
            $principioActivoTiembla = PrincipioActivo::firstOrCreate(['nombre' => 'Tiametoxam 14,1% + Lambdacialotrina 10,6% (SC)']);

            // 3. Crear el Producto
            $productoTiembla = Producto::create([
                'nombre' => 'TIEMBLA',
                'categoria_id' => $categoriaInsecticida->id,
                'principio_activo_id' => $principioActivoTiembla->id,
                'formulacion' => 'SC',
                'descripcion' => 'TIEMBLA es un insecticida foliar de amplio espectro, que combina dos principios activos, con características complementarias. El Tiametoxam, es un neonicotinoide sistémico de alta residualidad que controla insectos succionadores, mientras la Lambdacialotrina es un piretroide que actúa sobre insectos succionadores y masticadores, otorgando poder de volteo. De esta manera, TIEMBLA se caracteriza por su buen poder de volteo y persistencia de control.',
                'accion' => 'TIEMBLA se caracteriza por su buen poder de volteo y persistencia de control.',
                'mecanismo_de_accion' => 'Tiametoxam: Modulador competitivo del receptor nicotínico de la acetilcolina. Lambdacialotrina: Modulador de los canales de sodio.',
                'malezas' => 'Chinche verde (Nezara viridula), Alquiche chico (Edessa meditabunda), Oruga de las leguminosas (Anticarsia gemmatalis), Oruga medidora (Rachiplusia nu), Tucuras (Dichroplus spp.), Chinche de la alfalfa (Piezodorus guildinii), Picudo Negro de la Vaina (Rhysomatus subtilis), Picudo Grande de la Soja (Sternechus subsignatus), Trips (Caliothrips phaseoli), Arañuela roja común (Tetranychus urticae), Pulgón verde de los cereales (Schizaphis graminum), Pulgón de la espiga (Sitobium avenae), Pulgón del algodonero (Aphis gossypii).',
                'dosis' => '0,2 L/ha.',
                'recomendaciones_de_uso' => 'Las ninfas y adultos se alimentan de la savia de los tejidos vegetales, inyectando enzimas y toxinas que producen necrosis en los tejidos. Una correcta identificación de las chinches es fundamental para definir un adecuado y oportuno método de control.',
                'imagen' => '/images/products/Tiembla-producto.jpg',
                'imagen_portada' => '/images/products/Tiembla-portada.jpg',
                'pdfs' => [
                    '/pdfs/products/Tiembla - Marbete.pdf',
                    '/pdfs/products/Tiembla - Hoja de Datos de Seguridad (MSDS).pdf',
                    '/pdfs/products/Tiembla - Flyer comercial.pdf',
                ],
                'activo' => true,
            ]);

            // 4. Asociar Cultivos
            $cultivosTiemblaNombres = ['Algodón', 'Cebolla', 'Durazno', 'Pasturas a base de Alfalfa', 'Soja', 'Tomate', 'Trigo'];
            $cultivoTiemblaIds = [];
            foreach ($cultivosTiemblaNombres as $nombre) {
                $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
                $cultivoTiemblaIds[] = $cultivo->id;
            }
            $productoTiembla->cultivos()->sync($cultivoTiemblaIds);

            // 5. Asociar Árboles de Recomendación
            $arbolesTiemblaNombres = [
                'Algodón en post emergencia',
                'Arroz en post emergencia',
                'Soja en post emergencia',
            ];
            $arbolTiemblaIds = [];
            foreach ($arbolesTiemblaNombres as $nombre) {
                $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
                $arbolTiemblaIds[] = $arbol->id;
            }
            $productoTiembla->arbolesRecomendacion()->sync($arbolTiemblaIds);

            #endregion

        #region Producto 49: Top Ground®

            // 1. Buscar o crear la Categoría
            $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

            // 2. Buscar o crear el Principio Activo
            $principioActivoTopGround = PrincipioActivo::firstOrCreate(['nombre' => 'Imazapir 17,5% + Imazapic 52,5%']);

            // 3. Crear el Producto
            $productoTopGround = Producto::create([
                    'nombre' => 'TOP GROUND®',
                    'categoria_id' => $categoriaHerbicida->id,
                    'principio_activo_id' => $principioActivoTopGround->id,
                    'formulacion' => 'Polvo Soluble (SP)',
                    'descripcion' => 'TOP GROUND es un herbicida con una elevada acción residual, más de 90 días, para aplicaciones pre-emergentes y post-emergentes tempranas de MAÍZ y SORGO IMI (tolerantes a imidazolinonas), aplicaciones en BARBECHOS LARGOS EN SOJA y aplicaciones pre emergentes en CAÑA DE AZÚCAR. TOP GROUND es un herbicida con acción de contacto, sistémico y residual. Estas características le permiten controlar malezas en pre-emergencia como en post-emergencia garantizando un período de control prolongado y sin competencia.',
                    'accion' => 'Contacto, Sistémico y Residual.',
                    'mecanismo_de_accion' => 'Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B',
                    'malezas' => 'Abrojo grande, Capín arroz, Cebollín, Chamico, Chinchilla, Chufa, Cola de zorro, Farolito, Girasolillo, Gramón, Malva cimarrona, Nabo, Pata de gallina, Pasto de cuaresma, Quinoa, Sorgo de Alepo (RIZ/SEM), Verdolaga, Yerba del pollo, Yuyo colorado, Rye grass.',
                    'dosis' => 'Maíz y sorgo IMI: 114 g/ha (1 Pack cada 20 has).\nSoja: hasta 120 días antes de la siembra: 150 g/ha (1 pack cada 15 has). Hasta 90 días antes de la siembra: 114 g/ha (1 pack cada 20 has).\nCaña de azúcar: Suelos livianos: 200 g/ha. Suelos pesados: 250 g/ha.',
                    'recomendaciones_de_uso' => 'TOP GROUND debe ser activado por una pequeña cantidad de humedad del suelo después de la aplicación. Lluvias posteriores de 15-20 mm asegurarán la incorporación de los herbicidas a la matriz del suelo, garantizando su efectividad. En suelos con menos de 5% de materia orgánica y lluvias torrenciales en un corto periodo de tiempo, el producto puede estar expuesto a lixiviación disminuyendo su capacidad de control.\n\nMaíz IMI: El maíz no debe presentar un estado de desarrollo superior a 6ta hoja desplegada con lígula visible. No aplicar en casos de falta de humedad prolongada y cuando la maleza presenta síntomas de marchitez.\n\nSoja: Aplicar la dosis menor 90 días previo a la siembra y la dosis mayor 120 días previo a la siembra. Comenzando a contar los días luego de la primera precipitación de 20 mm post aplicación.\n\nCaña de azúcar: Aplicar en preemergencia del cultivo o antes de que brote la soca. Se puede aplicar en pre emergencia o post emergencia temprana de malezas. Para alcanzar la máxima actividad del producto, es preferible que las malezas se encuentren emergidas, que no superen las 4 hojas verdaderas y estén en un período de activo crecimiento\n\nSorgo IMI: Sorgo Forrajero: Una aplicación en premergencia del cultivo. Sorgo Granífero: una aplicación entre la siembra y hasta 4 hojas verdaderas del sorgo.',
                    'banda_toxicologica' => 'Verde',
                    'imagen' => '/images/products/Top-ground-producto.jpg',
                    'imagen_portada' => '/images/products/Top-ground-portada.png',
                    'pdfs' => [
                        '/pdfs/products/Top Ground - Marbete.pdf',
                        '/pdfs/products/Top Ground - Hojas de Datos de Seguridad (MSDS).pdf',
                        '/pdfs/products/Top Ground - Flyer comercial.pdf',
                        '/pdfs/products/Top Ground - Flyer comercial (Caña de azucar).pdf',
                    ],
                    'activo' => true,
                ]);

            // 4. Asociar Cultivos
            $cultivosTopGroundNombres = ['Maiz y sorgo IMI', 'Barbecho químico soja', 'caña de azúcar'];
            $cultivoTopGroundIds = [];
            foreach ($cultivosTopGroundNombres as $nombre) {
                $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
                $cultivoTopGroundIds[] = $cultivo->id;
            }
            $productoTopGround->cultivos()->sync($cultivoTopGroundIds);

            // 5. Asociar Árboles de Recomendación
            $arbolesTopGroundNombres = [
                'Caña de azúcar en pre emergencia',
                'Caña de azúcar en barbecho',
                'Sorgo en post emergencia',
                'Sorgo en pre emergencia',
                'Maíz en pre emergencia',
                'Top Ground',
                'Soja en barbecho largo',
            ];
            $arbolTopGroundIds = [];
            foreach ($arbolesTopGroundNombres as $nombre) {
                $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
                $arbolTopGroundIds[] = $arbol->id;
            }
            $productoTopGround->arbolesRecomendacion()->sync($arbolTopGroundIds);

            #endregion

        #region Producto 50: Top Rice®
            // 1. Buscar o crear la Categoría
            $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

            // 2. Buscar o crear el Principio Activo
            $principioActivoTopRice = PrincipioActivo::firstOrCreate(['nombre' => 'Imazapic 17,5% + Imazapir 52,5%']);

            // 3. Crear el Producto
            $productoTopRice = Producto::create([
                'nombre' => 'TOP RICE®',
                'categoria_id' => $categoriaHerbicida->id,
                'principio_activo_id' => $principioActivoTopRice->id,
                'formulacion' => 'Polvo Soluble (SP)',
                'descripcion' => 'Es un herbicida de residualidad prolongada para aplicación secuencial en pre-emergencia y post-emergencia temprana indicado para cultivos de arroz tolerante a las imidazolinonas. Su acción herbicida, especialmente contra arroz colorado, se complementa con la inundación temprana del cultivo. Por su acción residual controla malezas que nacen después de la aplicación, una vez que ha sido incorporado al suelo por precipitaciones adecuadas.',
                'accion' => 'Sistémico, residual.',
                'mecanismo_de_accion' => 'Inhibidor de la enzima acetolactato sintasa (ALS). Grupo B',
                'malezas' => 'LATIFOLIADAS: Laguinilla, Porotillo, Duraznillo de agua, Verdolaga, Eclipta, Pata de loro, Eichornia, Caperonia.\nGRAMÍNEAS: Arroz colorado, Arroz común, Capín colorado, Capín arroz, Chacrilla, Pasto brachiaria, Pasto colchón, Cola de zorro, Pasto cuaresma, Pasto dulce, Gramón, Pastos de agua, Pasto moro.\nCIPERÁCEAS: Chufa, Junquillo, Totorilla.',
                'dosis' => 'Pre-emergencia: 140 g/ha – Post-emergencia: 140 g/ha + coadyuvante.',
                'recomendaciones_de_uso' => 'Debe ser aplicado en forma secuencial: 1er aplicación, en pre emergencia, es necesario disponer de buena humedad en el suelo siendo favorecida la incorporación del producto al suelo por las lluvias posteriores a la aplicación. Por su acción residual, controla malezas que aun no han emergido, siempre y cuando las condiciones de humedad en el suelo sean las adecuadas.\nLa 2da aplicación, en post-emergencia, se realiza con la adición de coadyuvante para mejorar la absorción foliar del producto. De 2 a 4 días de la aplicación post-emergente, se completa la acción del producto con la inundación del cultivo.\nNo aplicar en condiciones de sequía prolongada o con el cultivo y malezas con síntomas de marchitez.\n1) Para el control de malezas emergidas en aplicaciones de pre emergencia del cultivo, aplicar Glifosato a dosis recomendadas, en aplicaciones separadas.\n2) Para aplicaciones post-emergentes del cultivo, agregar surfactante en dosis mínima de 250 g de ingrediente activo del surfactante cada 100 L de caldo.',
                'imagen' => '/images/products/Top-rice-producto.jpg',
                'imagen_portada' => '/images/products/Top-rice-portada.png',
                'pdfs' => [
                    '/pdfs/products/Top Rice - Marbete.pdf',
                    '/pdfs/products/Top Rice - Hoja de Datos de Seguridad (MSDS).pdf',
                    '/pdfs/products/Top Rice - Flyer Comercial.pdf',
                ],
                'activo' => true,
            ]);

            // 4. Asociar Cultivos
            $cultivosTopRiceNombres = ['Arroz'];
            $cultivoTopRiceIds = [];
            foreach ($cultivosTopRiceNombres as $nombre) {
                $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
                $cultivoTopRiceIds[] = $cultivo->id;
            }
            $productoTopRice->cultivos()->sync($cultivoTopRiceIds);

            // 5. Asociar Árboles de Recomendación
            $arbolesTopRiceNombres = [
                'Arroz en barbecho corto primavera',
                'Arroz en pre emergencia',
                'Arroz en post emergencia',
            ];
            $arbolTopRiceIds = [];
            foreach ($arbolesTopRiceNombres as $nombre) {
                $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
                $arbolTopRiceIds[] = $arbol->id;
            }
            $productoTopRice->arbolesRecomendacion()->sync($arbolTopRiceIds);

            #endregion

        #region Producto 51: Trevor®
            // 1. Buscar o crear la Categoría
            $categoriaInsecticida = Categoria::firstOrCreate(['nombre' => 'Insecticidas']);

            // 2. Buscar o crear el Principio Activo
            $principioActivoTrevor = PrincipioActivo::firstOrCreate(['nombre' => 'Clorantraniliprole 20 % SC']);

            // 3. Crear el Producto
            $productoTrevor = Producto::create([
                'nombre' => 'TREVOR®',
                'categoria_id' => $categoriaInsecticida->id,
                'principio_activo_id' => $principioActivoTrevor->id,
                'formulacion' => 'SC (Suspensión Concentrada)',
                'descripcion' => 'Insecticida de última generación perteneciente a la familia química de las diamidas, recomendado para el control de orugas difíciles, como la oruga bolillera, en una amplia gama de cultivos. Su bajo impacto sobre la fauna benéfica lo convierte en el aliado perfecto para programas de manejo integrado de plagas (MIP), garantizando protección máxima y segura sin comprometer a los insectos benéficos.',
                'accion' => 'Contacto e Ingestión.',
                'mecanismo_de_accion' => 'Moduladores de receptores de ryanodine.',
                'malezas' => 'Isoca bolillera (Helicoverpa gelotopoeon), Falsa medidora (Pseudoplusia includens), Oruga del yuyo colorado (Spodoptera cosmioides), Oruga capullera (Helicoverpa armigera), Gusano cogollero (Spodoptera frugiperda), Barrenador del tallo (Diatraea saccharalis), Polilla del tomate (Tuta absoluta), Oruga de la hoja (Alabama argillacea), Polilla de la vid (Lobesia botrana).',
                'dosis' => '30 ml/ha (VER MARBETE según cultivo y plaga).',
                'recomendaciones_de_uso' => 'Tratar el cultivo con TREVOR® según umbrales de daño económico (UDE) con el agregado de 0,5 L/ha de Zinax (EMAG). Se recomienda rotar el uso de TREVOR® o cualquier otro producto perteneciente al Grupo 28 de insecticidas con productos de diferentes modos de acción. No realizar más de 2 aplicaciones a un mismo cultivo. Lea atentamente el marbete antes de uso.',
                'imagen' => '/images/products/Trevor-producto.jpg',
                'imagen_portada' => '/images/products/Trevor-portada.jpg',
                'pdfs' => [
                    '/pdfs/products/Trevor - Marbete.pdf',
                    '/pdfs/products/Trevor - Hoja de Datos de Seguridad (MSDS).pdf',
                    '/pdfs/products/Trevor - Flyer comercial.pdf',
                ],
                'activo' => true,
            ]);

            // 4. Asociar Cultivos
            $cultivosTrevorNombres = ['Soja', 'Maíz', 'Girasol', 'Tomate', 'Algodón', 'Vid', 'Frutales de Pepita y Carozo', 'Poroto'];
            $cultivoTrevorIds = [];
            foreach ($cultivosTrevorNombres as $nombre) {
                $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
                $cultivoTrevorIds[] = $cultivo->id;
            }
            $productoTrevor->cultivos()->sync($cultivoTrevorIds);

            // 5. Asociar Árboles de Recomendación
            $arbolesTrevorNombres = [
                'Algodón en post emergencia',
                'Soja en post emergencia',
                'Girasol en post emergencia',
                'Maíz en post emergencia',
                'Poroto en post emergencia',
            ];
            $arbolTrevorIds = [];
            foreach ($arbolesTrevorNombres as $nombre) {
                $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
                $arbolTrevorIds[] = $arbol->id;
            }
            $productoTrevor->arbolesRecomendacion()->sync($arbolTrevorIds);

            #endregion

        #region Producto 52: Trigo y Cebada: Arbol de recomendación completo
            $productoTrigoCebadaCompleto = Producto::create([
                'nombre' => 'TRIGO Y CEBADA: Árbol de recomendación completo',
                'imagen' => '/images/products/Trigo-y-cebada-completo.jpg',
                'imagen_portada' => '/images/products/Trigo-y-cebada-completo.jpg',
                'pdfs' => ['/pdfs/products/Trigo y Cebada - Arbol de Recomendacion Completo.pdf'],
                'activo' => true,
            ]);

            // Asociar Árbol de Recomendación
            $arbolTrigoCebadaCompleto = ArbolRecomendacion::firstOrCreate(['nombre' => 'Trigo y cebada (completo)']);
            $productoTrigoCebadaCompleto->arbolesRecomendacion()->sync([$arbolTrigoCebadaCompleto->id]);

            #endregion

        #region Producto 54: Verosil 40®
            // 1. Buscar o crear la Categoría
            $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Herbicidas']);

            // 2. Buscar o crear el Principio Activo
            $principioActivoVerosil40 = PrincipioActivo::firstOrCreate(['nombre' => 'Imazetapir 40 % SL']);

            // 3. Crear el Producto
            $productoVerosil40 = Producto::create([
                'nombre' => 'VEROSIL 40',
                'categoria_id' => $categoriaHerbicida->id,
                'principio_activo_id' => $principioActivoVerosil40->id,
                'formulacion' => 'SL (Concentrado Soluble)',
                'descripcion' => 'Verosil 40 es un herbicida sistémico selectivo de acción residual. En aplicaciones post emergentes es absorbido por follaje y raíz. Ejerce un control residual en las malezas que germinan después de la aplicación. Al estar 4 veces más concentrado, permite disminuir la dosis a 0,25 L/ha, mejorando la logística del productor y disminuyendo la emisión de plástico y costos asociados al transporte.',
                'accion' => 'Sistémico y residual.',
                'mecanismo_de_accion' => 'Inhibidor de la enzima aceto lactato sintetasa (ALS).',
                'malezas' => 'Abrojillo, abrojo grande, afata, amor seco, bejuco, bolsa de pastor, capín, capiquí, cebada cervecera, cebollín, chamico, chinchilla, enredadera anual, falsa biznaga, farolito, girasolillo, lengua de vaca, malva, mastuerzo, mostacilla, nabo, nabón, ortiga, ortiga mansa, pasto colorado, pasto cuaresma, perejilillo, quinoa, revienta caballo, sanguinaria, sorgo de alepo, trigo, verdolaga, yuyo colorado.',
                'dosis' => '0,25 L/ha.',
                'recomendaciones_de_uso' => 'Iniciar el control de las malezas desde su emergencia hasta la 4ta hoja verdadera de ellas. En caso de alta infestación se consigue control óptimo aplicando antes de la 2da hoja verdadera de la maleza. Para un óptimo control, las condiciones de humedad deben ser tales que favorezcan un activo crecimiento de las malezas.',
                'imagen' => '/images/products/Verosil-40-producto.jpg',
                'imagen_portada' => '/images/products/Verosil-40-portada.jpg',
                'pdfs' => [
                    '/pdfs/products/Verosil 40 - Marbete.pdf',
                    '/pdfs/products/Verosil 40 - Hoja de Datos de Seguridad (MSDS).pdf',
                    '/pdfs/products/Verosil 40 - Flyer comercial.pdf',
                ],
                'activo' => true,
            ]);

            // 4. Asociar Cultivos
            $cultivosVerosil40Nombres = ['Soja', 'Maní', 'Maíz IMI', 'Alfalfa', 'Arveja', 'Poroto'];
            $cultivoVerosil40Ids = [];
            foreach ($cultivosVerosil40Nombres as $nombre) {
                $cultivo = Cultivo::firstOrCreate(['nombre' => $nombre]);
                $cultivoVerosil40Ids[] = $cultivo->id;
            }
            $productoVerosil40->cultivos()->sync($cultivoVerosil40Ids);

            // 5. Asociar Árboles de Recomendación
            $arbolesVerosil40Nombres = [
                'Maíz en pre emergencia',
                'Maíz en post emergencia',
                'Maní en pre emergencia',
                'Maní en post emergencia',
                'Poroto en pre emergencia',
            ];
            $arbolVerosil40Ids = [];
            foreach ($arbolesVerosil40Nombres as $nombre) {
                $arbol = ArbolRecomendacion::firstOrCreate(['nombre' => $nombre]);
                $arbolVerosil40Ids[] = $arbol->id;
            }
            $productoVerosil40->arbolesRecomendacion()->sync($arbolVerosil40Ids);

            #endregion

        #region Producto 55: Zinax®

        // 1. Buscar o crear la Categoría
        $categoriaHerbicida = Categoria::firstOrCreate(['nombre' => 'Coadyuvantes']);

        // 2. Buscar o crear el Principio Activo
        $principioActivoZinax = PrincipioActivo::firstOrCreate(['nombre' => 'EMAG 75%']);

        // 3. Crear el Producto
        $productoZinax = Producto::create([
            'nombre' => 'ZINAX',
            'categoria_id' => $categoriaHerbicida->id,
            'principio_activo_id' => $principioActivoZinax->id,
            'formulacion' => null,
            'descripcion' => 'Coadyuvante para mezclar con otros plaguicidas. Actúa como vehículo, haciendo más eficiente el mojado y mejorando la absorción foliar de los plaguicidas en las plantas. Adherente, mejorando la adherencia sobre la hoja, protegiendo al producto, reduciendo el lavado por lluvias, permaneciendo más tiempo para facilitar la absorción y reduciendo el escurrimiento. Antievaporante, reduciendo pérdidas de productos y ayudando a la deposición.',
            'accion' => null,
            'mecanismo_de_accion' => null,
            'malezas' => null,
            'dosis' => 'La dosis recomendadas varían entre el 0,2% y el 0,5% del volumen de aplicación. Seguir las recomendaciones específicas del fabricante o formulador del producto fitosanitario que se habrá de aplicar.',
            'recomendaciones_de_uso' => 'Agitar bien el envase antes de usar. Una vez preparada la solución con el plaguicida, agregar la dosis correspondiente del coadyuvante, agitando continuamente para lograr una mezcla uniforme.',
            'imagen' => '/images/products/Zinax-producto.jpg',
            'imagen_portada' => '/images/products/Zinax-portada.png',
            'pdfs' => [
                '/pdfs/products/Zinax - Marbete.pdf',
                '/pdfs/products/Zinax - Hoja de Datos de Seguridad (MSDS).pdf',
            ],
            'activo' => true,
        ]);

        #endregion
       
        //NO BORRAR ESTE ESPACIO
        //NO BORRAR ESTE ESPACIO
        //NO BORRAR ESTE ESPACIO
    }
}
