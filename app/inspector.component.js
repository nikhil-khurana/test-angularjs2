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
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var metro_service_1 = require('./metro.service');
var InspectorComponent = (function () {
    // Inject MetroService and assign it to _metroService
    function InspectorComponent(_metroService, router) {
        this._metroService = _metroService;
        this.router = router;
        this.metroArea = _metroService.getMetroArea();
        this.metroNeighbourhood = _metroService.getMetroNeighbourhood();
        this.selectedMetroArea = "";
        this.selectedMetroNeighb = "";
    }
    InspectorComponent.prototype.searchInspector = function () {
        this._metroService.saveSelectedData({ area: this.selectedMetroArea, neighb: this.selectedMetroNeighb });
        this.router.navigate(['Result']);
    };
    InspectorComponent = __decorate([
        core_1.Component({
            selector: 'find-inspector',
            templateUrl: './app/inspector.component.html'
        }), 
        __metadata('design:paramtypes', [metro_service_1.MetroService, router_deprecated_1.Router])
    ], InspectorComponent);
    return InspectorComponent;
}());
exports.InspectorComponent = InspectorComponent;
//# sourceMappingURL=inspector.component.js.map