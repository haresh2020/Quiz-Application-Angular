import { Component, OnInit } from '@angular/core';
import { Data } from '../model/data';
import { DataService } from '../service/data.service';
import { Ent } from '../model/ent';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(public url:DataService){
    
  }


logShow=true;
quesShow=false;
dataModel:Data=new Data();
entModel:Ent=new Ent();
showsign=true;
showlog=false;
adminShow=false;
data:any;

// upload(event){
//  console.log(event.target.files);
//  var a=event.currentTarget as HTMLInputElement;
// //  console.log(event.currentTarget as HTMLInputElement);
//  var b=event.target.files[0];
//  var reader =new FileReader();

//  if(event.files && event.files[0]){
//   var reader =new FileReader();
//   reader.onload=function(e){
//     // $('#bl').attr('src',e.target.result).width(150).height(150);
//     console.log(e.target.result);
//   };

//   reader.readAsDataURL(event.files[0]);
//  }

// this.data=URL.createObjectURL(event.target.files[0]);
// //  var dat=this.convertDataURIToBinary(this.data);
//  this.dataModel.photo=this.data;
// }

//  convertDataURIToBinary(dataURI) {
//   var base64Index = dataURI.indexOf(';base64,') + ';base64,'.length;
//   var base64 = dataURI.substring(base64Index);
//   var raw = window.atob(base64);
//   var rawLength = raw.length;
//   var array = new Uint8Array(new ArrayBuffer(rawLength));

//   for(var i = 0; i < rawLength; i++) {
//     array[i] = raw.charCodeAt(i);
//   }
//   return array;
// }

showAlter=false;
signPage(){
this.showsign=true;
this.showlog=false;
}

logPage(){
  this.showlog=true;
  this.showsign=false;
}

showQues(){
  if(this.showAlter==true){
    this.logShow=false;
    this.quesShow=true;
  }
  this.url.userId=this.entModel.userId;
}

showAdmin(){
  if(this.showAlter==true){
    this.logShow=false;
    this.adminShow=true;
  }
  this.url.userId=this.entModel.userId;
}

signUp(){
  console.log("Entered");
    this.url.createdata(this.dataModel).subscribe((data:any) => {
      console.log(data);
    });
}

logIn(){
   this.url.checkData(this.entModel).subscribe((data:any)=>{
    this.showAlter=data;
    if(this.entModel.userId==="adminid1"){
      this.showAdmin();
    }
    else{
    this.showQues();
    }
    });
}

}
