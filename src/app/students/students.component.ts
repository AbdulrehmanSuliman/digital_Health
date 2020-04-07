import { Component, OnInit, Input } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  public studentsList : string[];
  constructor(private _studentService:StudentService) {}
  //@Input() studentsList: string[]

  ngOnInit(): void {
    this.studentsList=this._studentService.getStudents();
  }

} 