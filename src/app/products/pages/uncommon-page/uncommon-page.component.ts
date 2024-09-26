import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Carlos';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female':'invitarla'
  }
  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18n Plural
  public clients: string[] =  ['Maria', 'John', 'Pedro', 'Jose'];
  public clientsMap = {
    '=0': "no tenemos ningún cliente esperando",
    '=1': "tenemos un cliente esperando",
    'other': "tenemos # clientes esperando"
  }
  deleteClient():void{
    this.clients.pop();
  }

  // KeyValue Pipe
  public person = {
    name: 'Carlos',
    age: 30,
    city: 'Madrid'
  }

  // Async Pipe
  public myObservableTimer = interval(2000);
  public myPromise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3500);
  });

}
