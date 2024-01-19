import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { CriarMaterialComponent } from './components/criar-material/criar-material.component';
import { ListaMateriaisComponent } from './components/lista-materiais/lista-materiais.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './components/material/material.component';


@NgModule({
  declarations: [
    CriarMaterialComponent,
    ListaMateriaisComponent,
    MaterialComponent
  ],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    ReactiveFormsModule
  ]
})
export class MaterialModule { }
