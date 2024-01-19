import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ListaReceitasComponent } from './components/lista-receitas/lista-receitas.component';
import { ReceitaComponent } from './components/receita/receita.component';
import { AdicionarMateriaisComponent } from './components/adicionar-materiais/adicionar-materiais.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListaReceitasComponent,
    ReceitaComponent,
    AdicionarMateriaisComponent
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    FormsModule
  ]
})
export class ReceirasModule { }
