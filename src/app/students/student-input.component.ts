import {Component,Output,EventEmitter} from "@angular/core";

@Component({
    selector:'app-student-input',
    templateUrl:'./student-input.component.html'

})
export class StudentInputComponent{
    @Output() studentNameAdded = new EventEmitter<string>();
    studentName="Abdo";
    onButtonClick(){
        this.studentNameAdded.emit(this.studentName);
        this.studentName="";
    }
}