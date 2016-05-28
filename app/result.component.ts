import { Component } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { MetroService } from './metro.service';

import { OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'result',
  templateUrl: './app/result.component.html'
})


export class ResultComponent {
    componentName: 'ResultComponent';
    
    selectedMetroArea: Object;
    selectedMetroNeighb: Object;
    
  	constructor(private router: Router, private _sharedService:SharedService) {
  		this.router = router;  		
    }

    ngOnInit() {
      this.selectedMetroArea = this._sharedService.getMetroArea();
      this.selectedMetroNeighb = this._sharedService.getMetroNeighbourhood();
    }

    back(){
    	this.router.navigate(['Find']);
    }
}