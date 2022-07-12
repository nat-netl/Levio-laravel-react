<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\AuthControlle;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get('/o-nas', function () {
    return view('welcome');
});

Route::get('submit/contact', [ContactController::class, 'mail']);
Route::post('submit/contact', [ContactController::class, 'store']);

Route::get('/login', function () {
    return view('welcome');
});

