<?php

namespace App;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{
    use SoftDeletes;

    public $table = 'articles';

    protected $primaryKey = 'id';
    
    protected $fillable = [
        'title',
        'images',
        'status'
    ];
}