import { MarkerDirective } from './../utils/marker.directive';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray, AbstractControl } from "@angular/forms";

interface User {
  username: string,
  password: string,
  emails: string[];
  rememberMe: boolean
}

function isValid (C: AbstractControl){
  return {myValidator: 'not valid', flag: true};
}

@Component({
  selector: 'app-login',
  styles: ['input.ng-invalid { background-color: red}'],
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="submit()">
      <input  type="text" 
              formControlName="username"
              placeholder="username">

      <span *ngIf="username.invalid">username invalid!</span>
      <span *ngIf="username.errors?.requiered">username requiered</span>

      <!-- <pre>{{ username.errors | json }}</pre> -->

      <input  type="password" 
              formControlName="password"
              placeholder="password">

      <input  type="checkbox"
              formControlName="rememberMe"> Remember Me

      <div formArrayName="emails">
        <input  type="text" 
                *ngFor="let control of emails.controls; let i=index"
                [formControlName]="i"/>
         <button type="button" (click)="addEmail()">+</button>
      </div>

      <button type="submit">submit</button>
      <button type="button" (click)="reset()">reset</button>
    </form>
  `
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder) { 
    // this.loginForm = new FormGroup({
    //   username: new FormControl('', Validators.required), 
    //   password: new FormControl(''), 
    //   emails: new FormArray([new FormControl()])
    //   rememberMe: new FormControl(false)
    // });

    this.loginForm = fb.group({
      username: ['', isValid],
      password: '',
      emails: fb.array(['']),
      rememberMe: false
    });
  }

  get username(): FormControl{
    return this.loginForm.get('username') as FormControl;    
    //return <FormControl>this.loginForm.get('username'); //another way to cast in ts
  }

  get password(): FormControl{
    return this.loginForm.get('password') as FormControl; 
  }

  get emails(): FormArray { 
    return this.loginForm.get('emails') as FormArray;
  }

  public addEmail(){
    this.emails.push(new FormControl);
  }

  public submit() {
    // if (this.username.invalid){
    //   this.password.disable();
    // }

    console.log(this.username.value);
    // console.log(this.username.valid);
    // console.log(this.loginForm.valid);
    console.log(this.loginForm.value);
  }

  public reset(){
    this.loginForm.reset();
  }

  ngOnInit() {

    //initial values if editing the user
    // const user: User = {
    //   username: 'hadas',
    //   password: '123',
    //   rememberMe: false
    // }

    //this.loginForm.setValue(user);

    this.submit();
  }

}
