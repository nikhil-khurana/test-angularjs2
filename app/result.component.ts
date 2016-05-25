import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { MetroService } from './metro.service';

@Component({
  selector: 'result',
  templateUrl: './app/result.component.html'
})


export class ResultComponent {
    componentName: 'ResultComponent';
    selectedMetroArea: String;
    selectedMetroNeighb: String;
    
  	constructor(private router: Router, private _metroService: MetroService) {
  		this.router = router;
  		this._metroService = _metroService;
  		this.savedData = _metroService.getSelectedData();
  		//console.log(this.savedData);
  		this.selectedMetroArea = this.savedData.area;
  		this.selectedMetroNeighb = this.savedData.neighb;
  	}

    back(){
    	this.router.navigate(['Find']);
    }
}