<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get(
    '/',
    function () {
        return Inertia::render(
            'homepage',
            [
                'title' => 'homepage',
            ]
        );
    }
)->name( 'homepage' );

Route::get(
	'/about',
	function () {
		return Inertia::render(
			'about',
			[
				'title' => 'about',
			]
		);
	}
)->name( 'about' );

Route::get(
	'/production',
	function () {
		return Inertia::render(
			'production',
			[
				'title' => 'production',
			]
		);
	}
)->name( 'production' );

Route::get(
	'/product',
	function () {
		return Inertia::render(
			'product',
			[
				'title' => 'product',
			]
		);
	}
)->name( 'product' );

Route::get(
	'/product-detail',
	function () {
		return Inertia::render(
			'product-detail',
			[
				'title' => 'product-detail',
			]
		);
	}
)->name( 'product-detail' );

Route::get(
	'/projects',
	function () {
		return Inertia::render(
			'projects',
			[
				'title' => 'projects',
			]
		);
	}
)->name( 'projects' );

Route::get(
	'/project-detail',
	function () {
		return Inertia::render(
			'project-detail',
			[
				'title' => 'project-detail',
			]
		);
	}
)->name( 'project-detail' );

Route::get(
	'/blog',
	function () {
		return Inertia::render(
			'blog',
			[
				'title' => 'blog',
			]
		);
	}
)->name( 'blog' );

Route::get(
	'/blog-detail',
	function () {
		return Inertia::render(
			'blog-detail',
			[
				'title' => 'blog-detail',
			]
		);
	}
)->name( 'blog-detail' );


Route::get(
	'/contact',
	function () {
		return Inertia::render(
			'contact',
			[
				'title' => 'contact',
			]
		);
	}
)->name( 'contact' );

