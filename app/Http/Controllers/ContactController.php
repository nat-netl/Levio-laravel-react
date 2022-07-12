<?php

namespace App\Http\Controllers;

use App\Mail\ContactMail;
use Illuminate\Http\Request;
use App\Models\Contact;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
  public function mail(Request $request) { 
    $contact = new Contact;

    $contact->name = $request->name;
    $contact->company = $request->company;
    $contact->phone = $request->phone;
    $contact->email = $request->email;
    $contact->message = $request->message;

    $contact->save();

    // foreach (['nat_netl3@bk.ru'] as $recipient) {
    //   Mail::to($recipient)->send(new ContactMail($name));
    // }
    return response()->json(['success' => 'Form is successfully email!']);
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
