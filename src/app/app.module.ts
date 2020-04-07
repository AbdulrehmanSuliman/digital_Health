import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import {StudentInputComponent} from './students/student-input.component'
import { StudentService } from './student.service';
import { Routes, RouterModule} from '@angular/router';

const routes: Routes =  [
  {path:'',component:StudentsComponent},
  {path:'students',component:StudentInputComponent}
]
@NgModule({
  declarations: [
    AppComponent,  
    StudentsComponent,
    StudentInputComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)

  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
