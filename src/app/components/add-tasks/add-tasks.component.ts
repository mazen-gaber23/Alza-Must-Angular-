import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tasks',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-tasks.component.html',
  styleUrl: './add-tasks.component.scss'
})
export class AddTasksComponent {
private readonly _Router =inject(Router)
  addTasks:FormGroup=new FormGroup({
    tasks:new FormControl(null),
  })
  sendData(){
    if(this.addTasks.valid){
    alert('Data sent successfully')
  }
  }
}
