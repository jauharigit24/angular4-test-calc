import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor() { }
  studentList(){
    console.log("test");
    let arr= [];
    arr[0].name= "shivansh"; 
    arr[0].marks= 100; 
    return arr;
  }
}
