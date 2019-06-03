<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Response;
use App\User;
use DB;
use App\Http\Requests\RegisterFormRequest;

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

    public function create(RegisterFormRequest $request)
    {
        $params = $request->only('email', 'name', 'password');
        $user = new User();
        $user->email = $params['email'];
        $user->name = $params['name'];
        $user->password = bcrypt($params['password']);
        $user->save();
        return response()->json($user, Response::HTTP_OK);
    }
}