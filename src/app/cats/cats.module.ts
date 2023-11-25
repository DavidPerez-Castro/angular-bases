import { NgModule } from "@angular/core";
import { CatComponent } from "./components/cat/cat.component";
import { ListComponent } from "./components/list/list.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    CatComponent,
    ListComponent
  ],
  exports: [
    CatComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class CatsModule { }
