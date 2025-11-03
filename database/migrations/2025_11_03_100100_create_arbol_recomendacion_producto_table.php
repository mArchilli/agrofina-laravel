<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('arbol_recomendacion_producto', function (Blueprint $table) {
            $table->id();
            $table->foreignId('producto_id')->constrained('productos')->onDelete('cascade');
            $table->foreignId('arbol_recomendacion_id')->constrained('arbol_recomendaciones')->onDelete('cascade');
            $table->timestamps();
            $table->unique(['producto_id', 'arbol_recomendacion_id'], 'producto_arbol_unique');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('arbol_recomendacion_producto');
    }
};
