import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, Control, ControlGroup, Validators} from 'angular2/common';

@Component({
    template:`
    <h2>using NgFormModel</h2>
    #login="ngForm" - used for validation in html
    <div>      
      <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
       <form [ngFormModel]="loginForm">
        <p>Login: <input type="text" ngControl="login" #login="ngForm"></p>
        <p>Password: <input type="password" ngControl="password" #password="ngForm"></p>
      </form>
      <p>Value:</p>
      <pre>{{value}}</pre>
      login is valid:{{login.valid}}
      password is valid:{{password.valid}}
      <button class="btn btn-primary" type="submit" [disabled]="!login.valid || !password.valid">save</button>
      </form>
    </div>
    `,
  directives: [FORM_DIRECTIVES]
    }
)
export class NgFormModelStuffComponent{
    loginForm: ControlGroup;
    constructor(){
         this.loginForm = new ControlGroup({
                                login: new Control("aa", Validators.required),
                                password: new Control("bb", Validators.required)
                                });
    }
    get value(): string {
        return JSON.stringify(this.loginForm.value, null, 2);
    }
  
  onSubmit(val){
     console.log(val);
  }
}