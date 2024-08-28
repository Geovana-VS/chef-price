import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ListaReceitasComponent } from './components/lista-receitas/lista-receitas.component';
import { ReceitaComponent } from './components/receita/receita.component';
import { AdicionarMateriaisComponent } from './components/adicionar-materiais/adicionar-materiais.component';
import { FormsModule } from '@angular/forms';
import { AnaliseDeCustosComponent } from './components/analise-de-custos/analise-de-custos.component';
import { ReceitaDetalhesComponent } from './components/receita-detalhes/receita-detalhes.component';

@NgModule({
  declarations: [
    ListaReceitasComponent,
    ReceitaComponent,
    AdicionarMateriaisComponent,
    AnaliseDeCustosComponent,
    ReceitaDetalhesComponent
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    FormsModule
  ]
})
export class ReceirasModule { }
