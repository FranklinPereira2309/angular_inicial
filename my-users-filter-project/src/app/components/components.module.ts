import { NgModule } from "@angular/core";
import { AngularMaterialModule } from "../angular-material/angular-material.module";
import { DetalhesComponent } from './detalhes/detalhes.component';
import { ListaComponent } from "./lista/lista.component";
import { FiltroComponent } from "./filtro/filtro.component";

@NgModule({
    declarations: [
    DetalhesComponent,
    ListaComponent,
    FiltroComponent
    
  ],
    imports: [
        AngularMaterialModule
    ],
    exports: [
      DetalhesComponent,
      ListaComponent,
      FiltroComponent
      
    ]
})


export class ComponentsModule{}