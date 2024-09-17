import { Injectable } from '@angular/core';
import { Data } from '../model/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ent } from '../model/ent';
import { Result } from '../model/result';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:HttpClient) { }

  userId;
  
  answer=[];
  
  public url="http://localhost:8080/";
  
  createdata(data:Data):Observable<object>{
    console.log("Entered");
    return this.http.post(this.url+"api/task",data);
  }

  getQuestion(stream){
    return this.http.post(this.url+"ques",stream);
    // return this.http.post("this.url"+"ques",stream);
  }

//   getQuestion(stream: Stream) {
//     return this.http.post("http://localhost:8080/ques", stream, {
//         headers: new HttpHeaders({
//             'Content-Type': 'application/json'
//         })
//     });
// }

  checkData(check:Ent):Observable<object>{
    return this.http.post(this.url+"check",check);
    // return this.http.get(this.url+"check?userId="+check.userId+"&password="+check.password);
  }

  getEmailId(userId:String):Observable<String>{
    // console.log(this.http.post(this.url+"getEmail",userId));
    return this.http.post(this.url+"getEmail",userId,{responseType:'text'});;
  }

  resultData(result:Result):Observable<String>{
    return this.http.post(this.url+"result",result,{responseType:'text'});
  }

  getResult(mark){
     return this.http.post(this.url+"getResult",mark);
  }
}
