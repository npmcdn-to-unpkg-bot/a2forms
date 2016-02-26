import {Component, Input, Output, ChangeDetectionStrategy,EventEmitter, Pipe, PipeTransform } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; //import everything
import {Control} from 'angular2/common';


@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    let keys = [];
    for (let key in value) {
      keys.push({key: key, value: value[key]);
    }
    return keys;
  }
}

@Component({    
    template: `
    <div>
      <ul>
        <li *ngFor="#entry of myObject | keys">
            Key: {{entry.key}}, value: {{entry.value}}
        </li>
      </ul>
    </div>
         `  ,
         pipes:[KeysPipe]
})

export class ObjectPropComponent {
    myObject = {
       "customerId":"1",
       "customerName":"customer1",
       "emailAddress":"customer@testa.com"
    }
}

