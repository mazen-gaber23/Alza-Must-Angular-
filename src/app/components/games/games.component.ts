import { Component, inject } from '@angular/core';
import { TranslationService } from '../../core/services/translation.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss'
})
export class GamesComponent {
  private readonly _TranslationService=inject(TranslationService)

  familyMembers = [
    { name: 'ابي: علي', imgSrc: 'assets/imgs/360_F_105179140_2QKw3edrIBctrlrCt0x2YLgS4JHRLxNE.jpg', show: false },
    { name: 'امي: ماجدة', imgSrc: 'assets/imgs/pexels-photo-3438086.jpeg', show: false },
    { name: 'زوجتي: سلوى', imgSrc: 'assets/imgs/istockphoto-517234226-612x612.jpg', show: false },
    { name: 'ابني: حسين', imgSrc: 'assets/imgs/istockphoto-1059661424-612x612.jpg', show: false },
    { name: 'زوجة ابني: روان', imgSrc: 'assets/imgs/shutterstock_399012208.jpg', show: false },
    { name: 'حفيدي: احمد', imgSrc: 'assets/imgs/little-boy-child-photo-child-portrait.jpg', show: false }
  ];

  showName(index: number) {
    this.familyMembers[index].show = !this.familyMembers[index].show;
  }
  restart(){
    this.familyMembers.forEach(function(member){
      member.show=false
    })
  }
  ngOnInit():void{
    this._TranslationService.changeDirection()
  }
  selectLang(lang:string){
    this._TranslationService.changeLang(lang)
  }
}

