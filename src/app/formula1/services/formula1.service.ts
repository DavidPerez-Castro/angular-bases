import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class Formula1Service {

  public characters: Character[] = [{
    id: uuid(),
    name: 'M. Verstappen',
    points: 25
  },{
    id: uuid(),
    name: 'C. Lecterc',
    points: 18
  },{
    id: uuid(),
    name: 'S. Perez',
    points: 15
  }];


  addCharacter( character: Character ):void {

    const newCharacter: Character = { id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter( index:number ) {
  // this.characters.splice(index,1);
  deleteCharacterById( id:string ) {
    this.characters = this.characters.filter( character => character.id !== id );
  }


}
