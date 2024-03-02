<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tags_association extends Model
{
    use HasFactory;
    protected $table = "tags_association";
    protected $fillable = ['id','ids_tags'];
}
