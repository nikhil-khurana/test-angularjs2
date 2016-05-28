import { Injectable } from '@angular/core';


@Injectable()
export class SharedService {
	metroArea:any;
	metroNeighbourhood:any;

	saveMetroArea(obj){
		this.metroArea = obj; 
	}

	getMetroArea(){
		return this.metroArea;
	}


	saveMetroNeighbourhood(obj){
		this.metroNeighbourhood = obj; 
	}

	getMetroNeighbourhood(){
		return this.metroNeighbourhood;
	}
	
} 