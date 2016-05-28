import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { MetroService } from './metro.service';
import { SharedService } from './shared.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'find-inspector',
  templateUrl: './app/inspector.component.html'
})

export class InspectorComponent implements OnInit {
    componentName: 'InspectorComponent';
    selectedMetroArea: string;
    selectedMetroNeighb: string;

	metroArea:Array<any>;
    metroNeighbourhood:Array<any>;

    error: any;

    // Inject MetroService and assign it to _metroService
    constructor(private _metroService: MetroService, private _sharedService:SharedService, private router: Router) {
        
    }
    getMetroAreas(){
        this._metroService
            .getMetroArea()
            .then(metroArea => this.metroArea = metroArea)
            .catch(error => this.error = error);
    }

    getMetroNeighbourhood(area){
        this._metroService
            .getMetroNeighbourhoods(area)
            .then(metroNeighbourhood => this.metroNeighbourhood = metroNeighbourhood)
            .catch(error => this.error = error);
    }


    ngOnInit() {
        
        this.getMetroAreas();
              
        this.selectedMetroArea = "";
        this.selectedMetroNeighb = "";
    }

    onSelect(event) {
        console.log(this.parseJson(event.target.value).MetroAreaID);
        this.getMetroNeighbourhood(this.parseJson(event.target.value).MetroAreaID);
    }
 

    searchInspector(){
        this._sharedService.saveMetroArea(this.parseJson(this.selectedMetroArea));
    	this._sharedService.saveMetroNeighbourhood(this.parseJson(this.selectedMetroNeighb));
    	this.router.navigate(['Result']);
    }


    stringify(o:any): string {
        return JSON.stringify(o);
    }

    parseJson(s:string): any {
        return JSON.parse(s);
    }
}