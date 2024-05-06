<?php

use Illuminate\Support\Facades\Route;

Route::get('/dashboard/{any?}/{slug?}/{email?}/{id?}', function () {
    return view('backend');
});

Route::get('/admin/{any?}/{slug?}/{email?}', function () {
    return view('login');
});

Route::get('/{any?}/{slug?}', function () {
    return view('frontend');
});










