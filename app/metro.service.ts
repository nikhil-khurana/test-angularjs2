import { Injectable, Input } from '@angular/core';

export interface metroData {
   area:String;
   neighb:String;
}

// Injectable service for Metro
@Injectable()
export class MetroService { 

    
    metroArea:Array<any>;
    metroNeighbourhood:Array<any>;

    savedData: metroData = {area:"", neighb:""};
    
    constructor() {
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
    getMetroArea() {
        return this.metroArea;
    }

    getMetroNeighbourhood() {
        return this.metroNeighbourhood;
    }




/**
*Methods for Passing data from one component to other
**/
    saveSelectedData(obj){
    	this.savedData = obj;    	
    	console.log(this.savedData);
    }

    getSelectedData(){
    	console.log(this.savedData);
    	return this.savedData;
    }
}