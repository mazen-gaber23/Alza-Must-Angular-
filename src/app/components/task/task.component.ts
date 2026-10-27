import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  private readonly _TranslationService=inject(TranslationService)
  ngOnInit():void{
    this._TranslationService.changeDirection()
  }
  selectLang(lang:string){
    this._TranslationService.changeLang(lang)
  }
}
