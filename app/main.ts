import {bootstrap}    from 'angular2/platform/browser';
import {provide}    from 'angular2/core';
import {AppComponent} from './app';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';
import {LOCAL_STORAGE_PROVIDERS, LocalStorage} from 'local-storage/local_storage';

bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS,LOCAL_STORAGE_PROVIDERS, AuthHttp, LocalStorage]);