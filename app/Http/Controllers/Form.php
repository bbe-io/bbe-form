<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Form extends Controller
{
    /**
     * Show the page to create a new project.
     */
    public function create()
    {
        return view('form.create', [
            'forms' => Form::all()
        ]);
    }

    /**
     * Store a new project in the database.
     */
    public function store()
    {
        $this->valigit statusdate(request(), [
            'first_name' => 'required',
            'country' => 'required',
            'last_name' => 'required',
            "description" => 'required',
            'email' => 'required|email',
            'renderless' => 'accepted',
        ]);

        return ['message' => 'Project Created!'];
    }
}
