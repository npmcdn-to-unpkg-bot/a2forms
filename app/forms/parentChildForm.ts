import {Component, ChangeDetectorRef, Inject, Input, SimpleChange} from 'angular2/core';
import {RouterOutlet, Router, ComponentInstruction, CanDeactivate} from 'angular2/router'
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, FORM_PROVIDERS, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common';


@Component({
    selector:'child-form',    
    template:` <h2>Child</h2>
    
    <div class="field">  
      <label>Line1</label>  
      <input type="text" [ngFormControl]="control.controls['line1']">
    </div>
    
    <div class="field">  
      <label>Line2</label>  
      <input type="text" [ngFormControl]="control.controls['line2']">
    </div>`,
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]  
})

export class ChildFormComponent {
    displayValue;
    @Input() control:ControlGroup;    
    constructor(private _router: Router) {
      
    }
    ngOnInit(){
       this.control.addControl('line1', new Control('', Validators.required));
       this.control.addControl('line2', new Control('', Validators.required));
    }
   ngOnChanges(changes: {[propName: string]: SimpleChange}) {      
    //this.displayValue = 'ngOnChanges - firstName = ' + changes['controlGroup'].currentValue;
  }
}

@Component({
    template:`<form  [ngFormModel]="parentForm" class="form-horizontal" id="myForm" role="form"> 
    <div class="col-md-7"> 
       firstName: <input [ngFormControl]="parentForm.controls['firstName']" #firstName="ngForm"  type="text" placeholder="FirstName" class="form-control">       
    </div> 
    <div class="col-md-7"> 
       lastName: <input [ngFormControl]="parentForm.controls['lastName']" #lastName="ngForm"  type="text" placeholder="lastname" class="form-control">       
    </div> 
    <child-form [control]="parentForm.controls.address"></child-form>
    <pre>{{cgValue}}</pre>
</form> 
`,
directives: [ChildFormComponent, CORE_DIRECTIVES, FORM_DIRECTIVES]  
})

export class ParentFormComponent {
    parentForm: ControlGroup;
    customer;
    constructor(private _router: Router, fb: FormBuilder,private cdr: ChangeDetectorRef) {
        
        this.parentForm = fb.group({  
        'firstName': new Control('', Validators.required),
        'lastName':  new Control('', Validators.required),
        'address': fb.group({})
        });
    }
    ngOnInit() {
    this.cdr.detectChanges();
  }
     get cgValue(): string {
    return JSON.stringify(this.parentForm.value, null, 2);
  }
}

