<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\User;
use DB;

class UserController extends Controller
{

    public function index(Request $request){
        $input = $request->all();

        if ( isset($input['value']) ) {
            //search data
            $users = DB::table('users')
                ->select('*')
                ->where('email', 'like', '%'.$input['value'].'%')
                ->paginate(5);
            return response()
                ->json($users);
        } else {
            //data
            $users = User::orderBy('id', 'DESC')->paginate(5);
            return response()
                ->json($users);
        }
        
    }
}