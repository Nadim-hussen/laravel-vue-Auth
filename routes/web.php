<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
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
Route::post('/api/registration',[AuthController::class,'register']);
Route::post('/api/login',[AuthController::class,'login']);
Route::get('/',  [AuthController::class, 'index']);
Route::post('/api/logout',  [AuthController::class, 'logout']);

Route::get('/{any}', function () {
    return view('welcome');
})->where('any', '.*');