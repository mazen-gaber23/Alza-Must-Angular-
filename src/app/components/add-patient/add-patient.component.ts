import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss'
})
export class AddPatientComponent {
  private readonly _Router=inject(Router)
  private readonly _TranslationService=inject(TranslationService)
logout(){
this._Router.navigate(['/login']);
}
ngOnInit():void{
  this._TranslationService.changeDirection()
}
selectLang(lang:string){
  this._TranslationService.changeLang(lang)
}
}
