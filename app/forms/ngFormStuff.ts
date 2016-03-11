import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, NgControlGroup} from 'angular2/common';

@Component({
    template:`
    <h2>using NgControlGroup</h2>
    <div>      
      <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
        <div ngControlGroup="name" #cgName="ngForm">
          <h3>Enter your name:</h3>
          <p>First: <input ngControl="first" required></p>
          <p>Middle: <input ngControl="middle"></p>
          <p>Last: <input ngControl="last" required></p>
        </div>
        <h3>Name value:</h3>
        <pre>{{valueOf(cgName)}}</pre>
         <br/>
        {{cgName.control}}
        <p>Name is {{cgName?.control?.valid ? "valid" : "invalid"}}</p>
        <h3>What's your favorite food?</h3>
        <p><input ngControl="food"></p>
        <h3>Form value</h3>
        <pre>{{valueOf(f)}}</pre>
       <button type="submit">save</button>
      </form>
    </div>
    `,
  directives: [FORM_DIRECTIVES]
    }
)
export class NgFormStuffComponent{
    constructor(){}
    valueOf(cg: NgControlGroup): string {
    if (cg.control == null) {
      return null;
    }
    return JSON.stringify(cg.control.value, null, 2);
  }
  
  onSubmit(val){
     console.log(val);
  }
}