import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
constructor(public url:DataService){

}

resultData=[];

  getResult(){
    var mark=(<(HTMLInputElement)>document.getElementById("cutOff")).value;
    this.url.getResult(mark).subscribe((data:any) =>{
      this.resultData=data;
    });
  }
}
