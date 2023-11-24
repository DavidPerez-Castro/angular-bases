import { Component } from "@angular/core";

//Component es un decorador que transforma mi clase en un componente
@Component({
  selector: 'app-counter',
  template: `
    <h3> Counter: {{ counter }} </h3>

  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="increaseBy(-1)">-1</button>
  <button (click)="resetCounter()">Reset</button>

  `
})
export class CounterComponent {
  public title: string = '02-bases';
  public counter: number = 10;

  //metodo para incrementar y decrementar
  increaseBy(value: number ):void {
    this.counter += value;
  }

  //metodo para reiniciar
  resetCounter() {
    this.counter = 10;
  }


}

