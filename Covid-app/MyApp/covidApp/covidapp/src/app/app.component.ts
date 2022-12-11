import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DistrictwiseComponent } from './districtwise/districtwise.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covidapp';
  constructor(public dialog:MatDialog){}

  OpenDistrictComponent(){
    this.dialog.open(DistrictwiseComponent,{
      height:'50%',
      width:'50%'
    })

  }

}
