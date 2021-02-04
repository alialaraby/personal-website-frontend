import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  emailForm: FormGroup;
  showErrors: boolean = false;
  sending: boolean = false;

  constructor(
    private _fb: FormBuilder, 
    private http: HttpClient,
    private toastr: ToastrService
    ) { }

  ngOnInit(): void {
    this.emailForm = this._fb.group({
      'email': new FormControl('', Validators.required),
      'name': new FormControl('', Validators.required),
      'message': new FormControl('', Validators.required),
    });
  }

  scroll(element: HTMLElement){
    element.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  OpenSocial(social: string){
    let url = '';
    if(social == 'facebook')
      url = 'https://www.facebook.com/alisakralaraby/';
    else
      url = 'https://www.linkedin.com/in/ali-sakr-alarby/';
    window.open(url, '_blank');
  }
  Submit(){
    if(this.emailForm.invalid){
      this.emailForm.setErrors({invalid: true});
      this.showErrors = true;
    }else{
      this.sending = true;
      this.showErrors = false;
      let body = {
        name: this.emailForm.get('name').value,
        email: this.emailForm.get('email').value,
        message: this.emailForm.get('message').value,
      }
      this.http.post('http://178.128.157.177:2500/send', body).toPromise()
      .then(res => {
        console.log(res);
        this.emailForm.reset();
        this.toastr.success('Thanks, I`ll Get Back To You ASAP.', 'Message Delivered', {
          tapToDismiss: true,
          progressAnimation: 'decreasing',
          progressBar: true
        });
      this.sending = false;

      })
      .catch(err => {
        this.sending = false;
        console.log(err);
        // this.toastr.error('something went wrong', 'error')
      })
    } 
  }
}
