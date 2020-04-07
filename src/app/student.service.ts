import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public  ArrayOfStudents = ['Abdulrehman', 'ahmed','mahmoud'];
  getStudents(){
    return this.ArrayOfStudents;
  }
  constructor() {} 
    onStudentNameAdded(name:string)
    {
      this.ArrayOfStudents.push(name);
    }

}
