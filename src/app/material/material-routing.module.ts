import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaMateriaisComponent } from './components/lista-materiais/lista-materiais.component';
import { CriarMaterialComponent } from './components/criar-material/criar-material.component';
import { EditarMaterialComponent } from './components/editar-material/editar-material.component';

const routes: Routes = [
  { path: '', component: ListaMateriaisComponent },
  { path: 'criar-material', component: CriarMaterialComponent },
  { path: 'editar-material/:id', component: EditarMaterialComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
