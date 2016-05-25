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
// Injectable service for Metro
var MetroService = (function () {
    function MetroService() {
        this.savedData = { area: "test", neighb: "ttt" };
        this.metroArea = [
            { rank: 40, name: 'El Paso, TX' },
            { rank: 45, name: 'Allentown-Bethlehem-Easton, PA-NJ' },
            { rank: 38, name: 'Baton Rouge, LA' },
            { rank: 60, name: 'Columbia, SC' }
        ];
        this.metroNeighbourhood = [
            { name: 'Downtown LA' },
            { name: 'EAST LA' },
            { name: 'WEST LA' },
            { name: 'SOUTH LA' }
        ];
    }
    //Methods for Dropdown
    MetroService.prototype.getMetroArea = function () {
        return this.metroArea;
    };
    MetroService.prototype.getMetroNeighbourhood = function () {
        return this.metroNeighbourhood;
    };
    /**
    *Methods for Passing data from one component to other
    **/
    MetroService.prototype.saveSelectedData = function (obj) {
        this.savedData = obj;
        console.log(this.savedData);
    };
    MetroService.prototype.getSelectedData = function () {
        console.log(this.savedData);
        return this.savedData;
    };
    MetroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MetroService);
    return MetroService;
}());
exports.MetroService = MetroService;
//# sourceMappingURL=metro.service.js.map