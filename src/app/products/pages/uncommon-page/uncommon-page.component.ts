import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styles: [
  ]
})
export class UncommonPageComponent {

  //i18nselect
  public name: string = 'Andrés';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient() {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18nplural
  public clients: string[] = ['Melissa', 'Pablo', 'Miguel', 'María'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }

  deleteClient() {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: ' Andrés',
    age: 26,
    address: 'Cuenca'
  }

  //Async Pipe
  public myObservableTimer = interval(2000);
  public promiseValue = new Promise<string>( (resolve, reject)  => {
    setTimeout(() => {
      resolve('Esto es un valor')
    }, 2000);
  });

}
