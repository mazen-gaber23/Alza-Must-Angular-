import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { TranslationService } from '../../core/services/translation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
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
