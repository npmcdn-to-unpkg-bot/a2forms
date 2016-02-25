System.register(['angular2/platform/browser', './app', 'angular2/http', 'angular2/router', 'angular2-jwt/angular2-jwt', 'local-storage/local_storage'], function(exports_1) {
    var browser_1, app_1, http_1, router_1, angular2_jwt_1, local_storage_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (local_storage_1_1) {
                local_storage_1 = local_storage_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.AppComponent, [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, local_storage_1.LOCAL_STORAGE_PROVIDERS, angular2_jwt_1.AuthHttp, local_storage_1.LocalStorage]);
        }
    }
});
//# sourceMappingURL=main.js.map