import { Component } from '@angular/core';
import { StudentsService } from './students.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first app';
  constructor(private students: StudentsService){
  }
  ngOninit(){
    console.log(this.students.studentList());
  }
}
