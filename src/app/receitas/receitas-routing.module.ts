import { ListaReceitasComponent } from './components/lista-receitas/lista-receitas.component';
import { CriarReceitaComponent } from './components/criar-receita/criar-receita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdicionarMateriaisComponent } from './components/adicionar-materiais/adicionar-materiais.component';

const routes: Routes = [
  { path: '', component: ListaReceitasComponent },
  { path: 'criar-receita', component: CriarReceitaComponent },
  { path: 'adicionar-material', component: AdicionarMateriaisComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitasRoutingModule { }
