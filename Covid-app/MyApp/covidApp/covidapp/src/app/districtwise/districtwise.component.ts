import { Component } from '@angular/core';
import { CovidApiService } from '../shared/covid-api.service';
import { MatFormField } from '@angular/material/form-field'; 
@Component({
  selector: 'app-districtwise',
  templateUrl: './districtwise.component.html',
  styleUrls: ['./districtwise.component.css']
})
export class DistrictwiseComponent {
[x: string]: any;
ListOfState=[]
AllData:any;
ListOfDistrict=[]
SelectedState:any;
SelectedDistrict:any;
SelectedDistrictData:any;

  constructor(public covidapi:CovidApiService){}
  ngOnInit(){
    this.getDistrictData();

  }
  selectionChange(event){
    this.SelectedState=event.value;
    this.ListOfDistrict=Object.keys(this.AllData[this.SelectedState]['districtData'])
    console.log('fafafa',this.ListOfDistrict);
    

  }
  getdisData(event){
    this.SelectedDistrict=event.value;
    console.log('dis Data',this.SelectedDistrict);
    this.SelectedDistrictData=this.AllData[this.SelectedState]['districtData'][this.SelectedDistrict]
    
  }
  getDistrictData(){
    this.covidapi.getDistrictData().subscribe(res=>{
      if(res){
        this.AllData=res;
        console.log('res....',res)
        
        this.ListOfState=Object.keys(this.AllData);
      }
      console.log('District Data', res);     
    })
  }
}
