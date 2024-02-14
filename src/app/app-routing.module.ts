import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'material', loadChildren: () => import('./material/material.module').then(m => m.MaterialModule) },
  { path: 'receita', loadChildren: () => import('./receitas/receitas.module').then(m => m.ReceirasModule) },
  { path: 'compras', loadChildren: () => import('./lista-de-compras/lista-de-compras.module').then(m => m.ListaDeComprasModule) },
  { path: '**', redirectTo: 'material' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
