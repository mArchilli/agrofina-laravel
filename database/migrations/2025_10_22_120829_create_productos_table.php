<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('imagen')->nullable();
            $table->string('categoria')->nullable();
            $table->string('principio_activo')->nullable();
            $table->string('formulacion')->nullable();
            $table->text('descripcion')->nullable();
            $table->string('presentacion')->nullable();
            $table->text('accion')->nullable();
            $table->string('banda')->nullable();
            $table->text('mecanismo_de_accion')->nullable();
            $table->text('malezas')->nullable();
            $table->text('cultivos')->nullable();
            $table->text('dosis')->nullable();
            $table->text('recomendaciones_de_uso')->nullable();
            $table->string('banda_toxicologica')->nullable();
            $table->text('arbol_de_recomendacion')->nullable();
            $table->json('pdfs')->nullable(); // Para almacenar múltiples PDFs
            $table->boolean('activo')->default(true);
            $table->timestamps();
            $table->softDeletes();
            
            $table->index(['activo', 'categoria']);
            $table->index(['principio_activo', 'activo']);
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};
