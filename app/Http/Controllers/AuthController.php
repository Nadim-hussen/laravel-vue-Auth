<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Validator;
use Auth;
use Session;
class AuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required|string',
            'email' => 'required|email',
            'password'=>'required|min:5',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        $data = $request->all();
        return User::create($data);
    }

    public function login(Request $request){
        $formFields = $request->validate([
            'email' => ['required', 'email'],
            'password' => 'required'
        ]);
        // if(auth()->attempt($formFields)) {
        //     $auth =  auth()->login($user);
        //     return $auth;
        // }
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password ])) {
            // return redirect('/');
			return response()->json([
                'success' => true
            ],200);
		 }
         else{

			return response()->json([
                'success' => false
            ],401);
		 }
    }

    public function index(){
        if(!Auth::check()){
            return redirect('/login');
        }
        return view('welcome');
    }

    public function logout(){
        Auth::logout();
        Session::flush();
        Session::forget('url.intented');
        // return redirect("/login");

    }
}
