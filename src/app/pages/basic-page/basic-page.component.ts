import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, effect, inject, signal } from '@angular/core';
import { AviableLocale, LocaleService } from '../../services/locale.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe,TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localeService = inject(LocaleService);
  currentLocale = this.localeService.getLocale

  nameLower = signal('juan carlos')
  nameUpper = signal('JUAN CARLOS')
  fullName = signal('JuAn CaRlOs')

  customDate = signal( new Date())

  dateEffect = effect((onCleanup)=>{
    const  interval = setInterval(()=>{
      this.customDate.set(new Date())
    },1000);
    onCleanup(()=>{ clearInterval(interval); });
  });


  changeLocale(locale:AviableLocale){
    this.localeService.changeLocaleService(locale);
  }

}
