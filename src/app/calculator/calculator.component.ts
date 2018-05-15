import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-calculator]',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.total=0;
  }
  total= 0;
  students = [];
  newStudent= '';
  pushStudent = function(){
    if(this.newStudent!=""){
      let obj  = {"name": this.newStudent,"marks":""};
      this.students.push(obj);
    }
  }
  getTotal = function(){
    this.total=0;
    if(this.students.length>0){    
      for(let student of this.students){
        if(!isNaN(student.marks) && student.marks!="" && student.marks>0){
          this.total+= parseInt(student.marks);
        }
      }
    }
  }
}
