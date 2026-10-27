import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-select-family-game',
  standalone: true,
  imports: [RouterLink,TranslateModule],
  templateUrl: './select-family-game.component.html',
  styleUrl: './select-family-game.component.scss'
})
export class SelectFamilyGameComponent {
  private readonly _TranslationService=inject(TranslationService)
  ngOnInit():void{
    this._TranslationService.changeDirection()
  }
  selectLang(lang:string){
    this._TranslationService.changeLang(lang)
  }
}
