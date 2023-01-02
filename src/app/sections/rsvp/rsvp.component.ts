import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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

  ngOnInit(): void {
  }

  createRsvpForm() {
    this.rsvpForm = this.formBuilder.group({
      name: '',
      email: '',
      rsvpBool: '',
      numberOfGuests: '1',
      childrenBool: '',
      numberOfChildren: '',
      message: ''
    })
  };

  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target as HTMLFormElement, 'YOUR_USER_ID')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }

}
