import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMateriaisComponent } from './components/lista-materiais/lista-materiais.component';
import { CriarMaterialComponent } from './components/criar-material/criar-material.component';

const routes: Routes = [
  { path: '', component: ListaMateriaisComponent },
  { path: 'criar-material', component: CriarMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
