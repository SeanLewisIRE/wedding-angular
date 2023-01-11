import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-rsvp',
  templateUrl: './rsvp.component.html',
  styleUrls: ['./rsvp.component.css'],
  animations: [
    trigger(
      'inOutAnimation',
      [
        transition(
          ':enter',
          [
            style({ opacity: 0 }),
            animate('0.5s ease-in',
            style({opacity: 1 }))
          ]
        ),
        transition(
          ':leave',
          [
            style({ opacity: 1 }),
            animate('0.5s ease-out',
            style({ opacity: 0 }))
          ]
        )
      ]
    )
  ]
})
export class RsvpComponent implements OnInit {

  rsvpForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.createRsvpForm();
  }

  emailSent: string = "";

  ngOnInit(): void {
  }

  decline_button(overallRsvp : boolean) {
    if(overallRsvp){
      this.rsvpForm.patchValue({
        numberOfGuests: 0,
        numberOfChildren: 0,
      })
    } else {
      this.rsvpForm.patchValue({
        numberOfChildren: 0,
      })
    }
  }

  createRsvpForm() {
    this.rsvpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      rsvpBool: ['', Validators.required],
      numberOfGuests: [1, Validators.required],
      childrenBool: 'babys_no',
      numberOfChildren: 0,
      message: ''
    })
  };

  public sendEmail(e: Event) {
    emailjs.sendForm('wedding_service', 'template_v1thjsa', e.target as HTMLFormElement, 'UQEUSIRgdwXafTeMq')
      .then((result: EmailJSResponseStatus) => {
        if(result.status == 200){
          this.emailSent = "sent";
          this.rsvpForm.reset();
        }
      }, (error) => {
        this.emailSent = "error";
        console.log(error.text);
      });
  }

}
