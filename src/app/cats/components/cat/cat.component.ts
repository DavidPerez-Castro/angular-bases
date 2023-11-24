import { Component } from '@angular/core';

@Component({
  selector: 'app-cats-cat',
  templateUrl: './cat.component.html',
  styleUrl: './cat.component.css'
})
export class CatComponent {

  public name: string = 'Botas';
  public age: number = 5;

  get AlimentName():string {
    return this.name.toUpperCase();

  }

  getCatDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeCat():void {
    this.name = 'Mike';
  }

  changeAge():void {
    this.age = 2;
  }

  resetForm():void {
    // this.name = 'botas';
    this.age = 5;

    document.querySelectorAll('h1')!.forEach( element => {
      element.innerHTML = '<h1>Desde Angular</h1>';
    });
  }

}
