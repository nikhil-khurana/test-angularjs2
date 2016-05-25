import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { MetroService } from './metro.service';


@Component({
  selector: 'find-inspector',
  templateUrl: './app/inspector.component.html'
})

export class InspectorComponent {
    componentName: 'InspectorComponent';
    selectedMetroArea: String;
    selectedMetroNeighb: String;
	metroArea:Array<any>;
    metroNeighbourhood:Array<any>;
    
    // Inject MetroService and assign it to _metroService
    constructor(private _metroService: MetroService, private router: Router) {
        
        this.metroArea = _metroService.getMetroArea();
        this.metroNeighbourhood = _metroService.getMetroNeighbourhood();
        this.selectedMetroArea = "";
        this.selectedMetroNeighb = "";
    }


    searchInspector(){
    	this._metroService.saveSelectedData({area : this.selectedMetroArea, neighb : this.selectedMetroNeighb});
    	this.router.navigate(['Result']);
    }
}