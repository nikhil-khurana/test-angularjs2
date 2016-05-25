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
var ResultComponent = (function () {
    function ResultComponent(router, _metroService) {
        this.router = router;
        this._metroService = _metroService;
        this.router = router;
        this._metroService = _metroService;
        this.savedData = _metroService.getSelectedData();
        //console.log(this.savedData);
        this.selectedMetroArea = this.savedData.area;
        this.selectedMetroNeighb = this.savedData.neighb;
    }
    ResultComponent.prototype.back = function () {
        this.router.navigate(['Find']);
    };
    ResultComponent = __decorate([
        core_1.Component({
            selector: 'result',
            templateUrl: './app/result.component.html'
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, metro_service_1.MetroService])
    ], ResultComponent);
    return ResultComponent;
}());
exports.ResultComponent = ResultComponent;
//# sourceMappingURL=result.component.js.map