import { NgModule } from "@angular/core";
import { CatComponent } from "./components/cat/cat.component";
import { ListComponent } from "./components/list/list.component";

@NgModule({
  declarations: [
    CatComponent,
    ListComponent
  ],
  exports: [
    CatComponent,
    ListComponent
  ]
})
export class CatsModule {

}
