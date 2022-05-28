<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Contact; 

class ContactController extends Controller
{
  public function create() { 

    return view('contact'); 
  }
    
  public function store(Request $request) { 

    $contact = new Contact;

    $contact->name = $request->name;
    $contact->company = $request->company;
    $contact->phone = $request->phone;
    $contact->email = $request->email;
    $contact->message = $request->message;

    $contact->save();
    
    return response()->json(['success' => 'Form is successfully submitted!']);

  }
}
