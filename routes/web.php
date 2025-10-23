<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\CultivoController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Ruta para I+D
Route::get('/I+D', function () {
    return Inertia::render('IPlusD');
})->name('i-d');

// Rutas públicas del sitio
Route::get('/servicio-tecnico', function () {
    return Inertia::render('ServicioTecnico');
})->name('servicio-tecnico');

Route::get('/red-comercial', function () {
    return Inertia::render('RedComercial');
})->name('red-comercial');

Route::get('/planta-produccion', function () {
    return Inertia::render('PlantaProduccion');
})->name('planta-produccion');

Route::get('/contacto', function () {
    return Inertia::render('Contacto');
})->name('contacto');

// Segunda zona del menú (páginas adicionales)
Route::get('/institucional', function () {
    return Inertia::render('Institucional');
})->name('institucional');

Route::get('/politicas', function () {
    return Inertia::render('Politicas');
})->name('politicas');

Route::get('/novedades', function () {
    return Inertia::render('Novedades');
})->name('novedades');

Route::get('/agro-news', function () {
    return Inertia::render('AgroNews');
})->name('agro-news');

Route::get('/trabaja-con-nosotros', function () {
    return Inertia::render('TrabajaConNosotros');
})->name('trabaja');

Route::get('/proveedores', function () {
    return Inertia::render('Proveedores');
})->name('proveedores');

// ENG (solo creación, sin estilos)
Route::get('/eng', fn() => Inertia::render('Eng'))->name('eng');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // Rutas del admin para productos
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::resource('productos', ProductController::class)->names([
            'index' => 'productos',
            'create' => 'productos.create',
            'store' => 'productos.store',
            'show' => 'productos.show',
            'edit' => 'productos.edit',
            'update' => 'productos.update',
            'destroy' => 'productos.destroy',
        ]);
        
        // Ruta para cambiar estado del producto
        Route::patch('productos/{producto}/toggle-status', [ProductController::class, 'toggleStatus'])->name('productos.toggle-status');
        
        Route::resource('categorias', CategoriaController::class)->names([
            'index' => 'categorias',
            'create' => 'categorias.create',
            'store' => 'categorias.store',
            'show' => 'categorias.show',
            'edit' => 'categorias.edit',
            'update' => 'categorias.update',
            'destroy' => 'categorias.destroy',
        ]);
        
        // Ruta adicional para obtener categorías activas (para selects)
        Route::get('categorias-activas', [CategoriaController::class, 'getActive'])->name('categorias.active');
    });
    
    // Rutas para cultivos (fuera del prefijo admin para usar nombres más simples)
    Route::resource('cultivos', CultivoController::class);
});

require __DIR__.'/auth.php';
