<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::firstOrCreate(['email' => 'test@example.com'], ['name' => 'Test User', 'password' => Hash::make('password')]);
        User::firstOrCreate(['email' => 'alice@example.com'], ['name' => 'Alice', 'password' => Hash::make('password')]);
        User::firstOrCreate(['email' => 'bob@example.com'], ['name' => 'Bob', 'password' => Hash::make('password')]);
        User::firstOrCreate(['email' => 'charlie@example.com'], ['name' => 'Charlie', 'password' => Hash::make('password')]);

        User::factory(20)->create();
    }
}
