import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeComprasRoutingModule } from './lista-de-compras-routing.module';
import { ListarListasDeComprasComponent } from './components/listar-listas-de-compras/listar-listas-de-compras.component';
import { CriarListaDeComprasComponent } from './components/criar-lista-de-compras/criar-lista-de-compras.component';
import { ExcluirListaDeComprasComponent } from './components/excluir-lista-de-compras/excluir-lista-de-compras.component';
import { ListaDeComprasPorReceitaComponent } from './components/lista-de-compras-por-receita/lista-de-compras-por-receita.component';
import { FormularioDeItemListaComponent } from './components/formulario-de-item-lista/formulario-de-item-lista.component';
import { ComprarListaComponent } from './components/comprar-lista/comprar-lista.component';


@NgModule({
  declarations: [
    CriarListaDeComprasComponent,
    ListarListasDeComprasComponent,
    ExcluirListaDeComprasComponent,
    ListaDeComprasPorReceitaComponent,
    FormularioDeItemListaComponent,
    ComprarListaComponent
  ],
  imports: [
    CommonModule,
    ListaDeComprasRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ListaDeComprasModule { }
