import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-history',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-history.component.html',
  styleUrl: './add-history.component.scss'
})
export class AddHistoryComponent {
private readonly _Router =inject(Router)
  addHistory:FormGroup=new FormGroup({
    name:new FormControl(null),
    dob:new FormControl(null),
    pob:new FormControl(null),
    job:new FormControl(null),
    Significance:new FormControl(null),
    care_giver_number:new FormControl(null),
  })
  sendData(){
    if(this.addHistory.valid){
    alert('Data sent successfully')
  }
  }
}
