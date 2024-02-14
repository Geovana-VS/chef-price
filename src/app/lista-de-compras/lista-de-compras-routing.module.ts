import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarListasDeComprasComponent } from './components/listar-listas-de-compras/listar-listas-de-compras.component';
import { CriarListaDeComprasComponent } from './components/criar-lista-de-compras/criar-lista-de-compras.component';
import { ListaDeComprasPorReceitaComponent } from './components/lista-de-compras-por-receita/lista-de-compras-por-receita.component';
import { ExcluirListaDeComprasComponent } from './components/excluir-lista-de-compras/excluir-lista-de-compras.component';
import { ComprarListaComponent } from './components/comprar-lista/comprar-lista.component';

const routes: Routes = [
  {path:'', component:ListarListasDeComprasComponent},
  {path:'criar-lista-de-compras', component:CriarListaDeComprasComponent},
  {path:'excluir-lista-de-compras', component:ExcluirListaDeComprasComponent},
  {path:'lista-por-receita', component:ListaDeComprasPorReceitaComponent},
  {path:'comprar-lista', component:ComprarListaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaDeComprasRoutingModule { }
