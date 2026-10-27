import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-family',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-family.component.html',
  styleUrl: './add-family.component.scss'
})
export class AddFamilyComponent {
 private readonly _Router =inject(Router)
  addFamily:FormGroup=new FormGroup({
    father:new FormControl(null),
    mother:new FormControl(null),
    wife:new FormControl(null),
    grandSon:new FormControl(null),
    son:new FormControl(null),
  })
  sendData(){
    if(this.addFamily.valid){
    alert('Data sent successfully')
  }
  }
}
