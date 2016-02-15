import {Component} from 'angular2/core'; 

import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from 'angular2/common'; 


class Student { 

   name:string; 

   password:string; 

} 


interface ValidationResult { 

 [key:string]:boolean; 

} 

class PasswordValidator { 

 static startsWithNumber(control: Control): ValidationResult {  

   if ( control.value && control.value.length > 0){ 

     if (isNaN(control.value[0])) 

      return { 'startsWithNumber': true }; 

   } 


   return null; 

 } 


} 



@Component({ 

 selector: 'form-builder', 

 templateUrl: '../app/formbuilder.html', 

 directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]  

}) 

export class FormBuilderComponent {  

  student:Student; 

  studentForm: ControlGroup; 

  constructor(fb: FormBuilder){ 

    this.student = new Student(); 

    this.studentForm = fb.group({ 

       'name': new Control(this.student.name, Validators.required), 

       'password': new Control(this.student.password, Validators.compose([Validators.required,PasswordValidator.startsWithNumber])), 

    }); 

  } 


  addNewGroup(student:Student) { 

    if (this.studentForm.valid) { 

      alert('added ' + student.name); 

      this.student = new Student(); 

    } 

    else { 

       alert('form is not valid!'); 

    } 

  } 

} 
