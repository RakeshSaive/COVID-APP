import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  stateWiseApi='https://data.covid19india.org/data.json';
  districtWiseApi='https://data.covid19india.org/state_district_wise.json';

  constructor(public http:HttpClient) { }
  getDistrictData(){
    return this.http.get(this.districtWiseApi);
  }

  getStateData(){
    return this.http.get(this.stateWiseApi);
  }
}
