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
        Schema::table('productos', function (Blueprint $table) {
            // Eliminar el campo categoria como string
            $table->dropColumn('categoria');
            
            // Agregar foreign key a categorias
            $table->foreignId('categoria_id')->nullable()->constrained('categorias')->onDelete('set null');
            $table->index('categoria_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('productos', function (Blueprint $table) {
            // Eliminar foreign key
            $table->dropForeign(['categoria_id']);
            $table->dropIndex(['categoria_id']);
            $table->dropColumn('categoria_id');
            
            // Restaurar campo categoria como string
            $table->string('categoria')->nullable();
        });
    }
};
