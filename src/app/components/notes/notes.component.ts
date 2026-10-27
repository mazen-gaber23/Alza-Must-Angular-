import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  private readonly _TranslationService=inject(TranslationService)
  ngOnInit():void{
    this._TranslationService.changeDirection()
  }
  selectLang(lang:string){
    this._TranslationService.changeLang(lang)
  }
}
