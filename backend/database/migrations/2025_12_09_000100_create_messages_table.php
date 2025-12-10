<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('messages', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->enum('role', ['system','user','assistant']);
            $table->longText('content');
            $table->string('model', 100)->nullable();
            $table->timestamps();
            $table->index(['user_id', 'created_at'], 'idx_messages_user_created');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('messages');
    }
};

