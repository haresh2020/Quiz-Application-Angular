import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { Result } from '../model/result';

@Component({
  selector: 'app-questpage',
  templateUrl: './questpage.component.html',
  styleUrls: ['./questpage.component.css']
})
export class QuestpageComponent {
  constructor(private data:DataService){
  }

resultModel:Result=new Result();
stream:Result =new Result;
obj=[];
ansObj={};
ans=[];
answer="";
userId=this.data.userId;
   displayRadioValue() {
    // var a=document.getElementById("ans");
    // console.log(a);
    var ele = document.getElementsByTagName('input');
    for (var i = 0; i < ele.length; i++) {
        if (ele[i].type = "radio") {
            if (ele[i].checked){
            this.answer=this.answer+ele[i].value+" ";    
        }
    }
  }
  this.ansData();
 }
 ansData(){
  this.ans=this.answer.split(" ");
  this.data.answer=this.answer.split(" ");
  this.calculate();
 }

count=0;

 calculate(){
    for(var i=0;i<this.obj.length;i++){
      console.log(this.obj[i].answer+" "+this.ans[i]);
      if(this.obj[i].answer===this.ans[i]){
        this.count++;
      }
    }
    console.log("Final Result"+this.count);
    this.resultModel.userId=this.userId;
    this.resultModel.result=this.count;
    // this.resultModel.email=await this.getEmail(this.userId);
    this.getEmail(this.userId);
 }

 async getEmail(userId){
    await this.data.getEmailId(userId).subscribe((data:String) => {
    data = JSON.parse(JSON.stringify(data));
      this.resultModel.email=data;
      this.postResult();
   });
 }
postResult(){
  this.data.resultData(this.resultModel).subscribe((data:any) => {
   console.log(data);
  });
}

 get(){
  var a=(<(HTMLInputElement)>document.getElementById("stream")).value;
  this.data.getQuestion(a).subscribe((data:any) => {
    this.obj=data;
    console.log(data);
  });
 }
}























