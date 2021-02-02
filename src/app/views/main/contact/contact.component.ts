import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm: FormGroup;
  showErrors: boolean = false;

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.emailForm = this._fb.group({
      'email': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required),
    })
  }

  scroll(element: HTMLElement){
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  Submit(){

  }
}
