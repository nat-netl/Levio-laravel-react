<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return view('welcome');
});

Route::get('submit/contact', [ContactController::class, 'create']);
Route::post('submit/contact', [ContactController::class, 'store']);
