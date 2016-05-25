"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core'); // Import the Component class
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic'); // Import the bootstrap 
var router_deprecated_1 = require('@angular/router-deprecated'); // Import the Routers
var inspector_component_1 = require('./inspector.component');
var result_component_1 = require('./result.component');
var metro_service_1 = require('./metro.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, metro_service_1.MetroService],
            template: '<div><h1>AMERICAN SOCIETY OF HOME INSPECTOR</h1><router-outlet></router-outlet></div>'
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/',
                name: 'Find',
                component: inspector_component_1.InspectorComponent,
                useAsDefault: true
            },
            {
                path: '/result',
                name: 'Result',
                component: result_component_1.ResultComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
platform_browser_dynamic_1.bootstrap(AppComponent);
//# sourceMappingURL=app.js.map