import { Injectable, Input } from '@angular/core';
import { SharedService } from './shared.service';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

// Injectable service for Metro
@Injectable()
export class MetroService { 

    
    private host = 'http://ashijsonapi.azurewebsites.net/Home'
    private metroAreaURL = '/GetMetroAreas';
    private metroNeighbourhoodURL = '/GetMetroNeighborhoods?metroAreaId=';

 
    constructor(private _sharedService:SharedService, private http: Http) {      
    }


    
    getMetroArea(): Promise<Array<any>> {
        
        return this.http.get(this.host+this.metroAreaURL)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
    }

    getMetroNeighbourhoods(area): Promise<Array<any>> {
        console.log(area);
        return this.http.get(this.host+this.metroNeighbourhoodURL+area)
               .toPromise()
               .then(this.extractData)
               .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();    
      return body;
    }


    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}