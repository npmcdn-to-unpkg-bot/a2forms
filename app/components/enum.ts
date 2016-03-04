import {Component} from 'angular2/core'

export enum CountryCodeEnum {
  France = 1,
  Belgium = 2
}

@Component({
  selector: 'enum-comp',  
  template: `
    <div>
      <select>
        <option *ngFor="#key of keys" [value]="key" [label]="countries[key]"></option>
      </select>
    </div>
  `,
  directives: []
})
export class EnumComponent {
  
  countries = CountryCodeEnum
  keys: Array<any>;
  constructor() {
    this.keys = Object.keys(this.countries).filter((item)=>{return !isNaN(parseFloat(item)) && isFinite(item);});
  }
}