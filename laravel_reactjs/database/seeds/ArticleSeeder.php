<?php

use Illuminate\Database\Seeder;

class ArticleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('articles')->insert([
        	[
        		'title' => 'demo', 
        		'images' => '',
        		'status' => 0, 
        		'created_at' => now()
        	]
        ]);
    }
}
