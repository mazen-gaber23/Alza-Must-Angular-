import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-family',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './family.component.html',
  styleUrl: './family.component.scss'
})
export class FamilyComponent {
  private readonly _TranslationService=inject(TranslationService)
  ngOnInit():void{
    this._TranslationService.changeDirection()
  }
  selectLang(lang:string){
    this._TranslationService.changeLang(lang)
  }
}
