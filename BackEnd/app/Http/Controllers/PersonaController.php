<?php

namespace App\Http\Controllers;
use App\Models\Persona;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PersonaController extends Controller
{
    public function index()
    {
        $personas = Persona::All();
        return response()->json($personas);
    }

    public function show(int $id)
    {
        $personas=Persona::findOrFail($id);
        return response()->json($personas);
    }

    public function create (Request $request)
    {
        Persona::create($request->all());
        return response()->json(status:200);
    }

}
