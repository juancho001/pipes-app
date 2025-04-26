import { Component, signal } from '@angular/core';
import CardComponent from "../../components/card/card.component";
import { AsyncPipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, KeyValuePipe, SlicePipe, TitleCasePipe } from '@angular/common';
import { interval, tap } from 'rxjs';

const client1 = {
name:'Juan Carlos',
gender:'male',
age:45,
address: 'Bogota, Colombia'
}

const client2 = {
  name:'Sandra Milena',
  gender:'female',
  age:42,
  address: 'Bogota, Colombia'
  }

@Component({
  selector: 'app-uncommon-page',
  imports: [CardComponent, I18nSelectPipe, I18nPluralPipe,SlicePipe,JsonPipe, KeyValuePipe,TitleCasePipe,AsyncPipe],
  templateUrl: './uncommon-page.component.html',
})
export default class UncommonPageComponent {

  // i18nSelect
  client = signal(client1);


  invitationMap = {
    male:'invitarlo',
    female:'invitarla'
  }

  changeClient(){
    if(this.client() == client1){
      this.client.set(client2);
      return;
    }
    this.client.set(client1);
  }

  clients = signal([ 'Maria','Pedro','Fernando','Melissa','Natalia','Andrea','Juan','Carlos' ]);

  // i18n Plural
  clientsMap = signal({
    '=0':'no tenemos ningun cliente esperando',
    '=1':`tenemos 1 cliente esperando`,
    other:'tenemos # clientes esperando'
  });

  deleteClient(){
    this.clients.update((prev) => prev.slice(1));
  }

  profile = {
    age:36,
    addres:'addres Profile',
    name: 'profile_1'
  }

  // Async Pipe
  promiseValue: Promise<string> = new Promise((resolve,reject) =>{
    setTimeout(()=>{
      resolve('Tenemos data en la promesa')
      console.log('promesa finalizada.')
    },3500);
  })

  myObservable = interval(2000).pipe(
    tap((value) => console.log('tap',value))
  )
}
