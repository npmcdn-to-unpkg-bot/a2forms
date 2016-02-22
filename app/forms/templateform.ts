import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

export class Hero {
    constructor(
        public id: number,
        public name: string,
        public power: string,
        public alterEgo?: string
    ) { }
}

@Component({
    selector: 'template-form',
    templateUrl: '../app/forms/templateform.html',
    directives: [CORE_DIRECTIVES],
    styles: [`
     .ng-valid[required] {
            border-left: 5px solid #42A948; /* green */
     }

      .ng-invalid {
            border-left: 5px solid #a94442; /* red */
      }`
    ]
})

export class TemplateFormComponent {
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
    submitted = false;
    onSubmit() { this.submitted = true; }
    // Reset the form with a new hero AND restore 'pristine' class state
    // by toggling 'active' flag which causes the form
    // to be removed/re-added in a tick via NgIf
    // TODO: Workaround until NgForm has a reset method (#6822)
    active = true;
    newHero() {
        this.model = new Hero(42, '', '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
} 
