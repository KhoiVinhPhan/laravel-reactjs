<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use Illuminate\Http\Response;
use App\Articles;
use App\User;
use DB;
use App\Http\Requests\RegisterFormRequest;

class ArticleController extends Controller
{

    public function index(Request $request)
    {
        $input = $request->all();
        //data
        $articles = Articles::orderBy('id', 'DESC')->get();
        return response()->json($articles);
    }

    
}