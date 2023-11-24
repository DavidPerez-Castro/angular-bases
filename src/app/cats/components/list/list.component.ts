import { Component } from '@angular/core';

@Component({
  selector: 'app-cats-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public catNames: string[] = ['Botas','Mike','Tigre','Whero'];
  public deletedCat?: string;


  //pop borra último elemento del arreglo
  removeLastCat():void {
    this.deletedCat = this.catNames.pop();
  }


}
