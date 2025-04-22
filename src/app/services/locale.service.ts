import { Injectable, signal } from '@angular/core';

export type AviableLocale = 'en' | 'es';

@Injectable({providedIn: 'root'})
export class LocaleService {

  constructor (){
    this.currentLocale.set(localStorage.getItem('locale') as AviableLocale ?? 'es')
  }

  private currentLocale = signal<AviableLocale>('es')

  get getLocale(){
    return this.currentLocale();
  }

  changeLocaleService(locale:AviableLocale){
    localStorage.setItem('locale',locale);
    this.currentLocale.set(locale);
    window.location.reload();
    // "ngx-translate" es un paquete que se usa para cambiar el idioma sin recargar el navegador
  }
}
