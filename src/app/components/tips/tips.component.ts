import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-tips',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './tips.component.html',
  styleUrl: './tips.component.scss'
})
export class TipsComponent {
  private readonly _TranslationService=inject(TranslationService)
  ngOnInit():void{
    this._TranslationService.changeDirection()
  }
  selectLang(lang:string){
    this._TranslationService.changeLang(lang)
  }
}
