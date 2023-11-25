import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { Formula1Service } from '../services/formula1.service';

@Component({
  selector: 'app-formula1-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor( private formula1Service: Formula1Service ) {}

  get characters(): Character[] {
    return [...this.formula1Service.characters];
  }

  onDeleteCharacter( id: string ):void {
    this.formula1Service.deleteCharacterById( id );
  }

  onNewCharacter( character: Character ):void {
    this.formula1Service.addCharacter( character );
  }

}
