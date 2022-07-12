<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Contact;

class ContactMail extends Mailable
{
    use Queueable, SerializesModels;

    public $contact;
    

    public function __construct(Contact $contact)
    {
        $this->order = $contact;
    }

    public function build()
    {
        return $this->from('example@example.com', 'Example')
                    ->view('mail');
    }
}
