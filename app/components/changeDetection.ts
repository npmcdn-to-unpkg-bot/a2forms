import {Component, Input,ChangeDetectionStrategy, } from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'loading',
  template: '{{loadingMessage}}'
  //,changeDetection: ChangeDetectionStrategy.OnPush
})
export class Loading {
  @Input('status') loadingMessage;
  
  constructor() {
    
    // try to change this from component after 5 seconds
    // test this with commenting changeDetection
    setTimeout(() => {
      this.loadingMessage = "test"
    }, 5000);
  }
}

@Component({
    selector: 'change-detection',
    template: `<p>ChangeDetectionStrategy.OnPush only works when [input] properties are changed</p>
                <p>Uncomment changeDetection: ChangeDetectionStrategy.OnPush in loading component to see the behavior</p><br/>Are we loading?: <loading [status]="loadingMessage"></loading>`,
    directives: [Loading]        
})
export class ChangeDetectionComponent {
   someInputProperty: string;
   private loadingMessage = "Wait for it...";

    constructor() { }
    ngOnInit() {

    // Pretend we're loading data from a service.
    // This component is only interested in the call's success
    Observable.of(true)
      .delay(2000)
      .subscribe(success => {
        
        if(success){
          console.log('Pretend loading: success!');
          this.loadingMessage = 'Success!';
        }
        
      });
  }
}

