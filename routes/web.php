<?php

use App\Http\Controllers\ProfileController;
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
});

require __DIR__.'/auth.php';
