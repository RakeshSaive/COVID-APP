import { Component } from '@angular/core';
import { CovidApiService } from '../shared/covid-api.service';
@Component({
  selector: 'app-statewise',
  templateUrl: './statewise.component.html',
  styleUrls: ['./statewise.component.css']
})
export class StatewiseComponent {
  stateWiseData:any=[]
  constructor(public covidApi:CovidApiService){}

  ngOnInit(){
    this.getStateData();
  }
  getStateData(){
    this.covidApi.getStateData().subscribe(res=>{
      if(res && res['statewise']){
        this.stateWiseData=res['statewise'];
        console.log('states data',this.stateWiseData);
        
      }
    })
  }

}
