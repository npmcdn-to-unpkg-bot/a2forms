import {Directive, Attribute, ElementRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
import {tokenNotExpired, JwtHelper} from 'angular2-jwt/angular2-jwt';
import {LocalStorage} from 'local-storage/local_storage';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;
  private _jwtHelper: JwtHelper;
  constructor(_elementRef: ElementRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string,
              private _localStorage: LocalStorage) {
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this._jwtHelper = new JwtHelper();
    this.parentRouter = _parentRouter;
    this.publicRoutes = {
      'forms': true,
      'router': true
    };
  }

  activate(instruction: ComponentInstruction) {
    var url = instruction.urlPath;
    if (!this.publicRoutes[url] ) {
         var token = this._localStorage.getObject('id_token');

        //  if (!tokenNotExpired(token))
        //     alert('not public route')
    }
    return super.activate(instruction);
  }
}