import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { HomeComponent } from './pages/home/home.component';
import { CamisasComponent } from './pages/camisas/camisas/camisas.component';
import { CalcasComponent } from './pages/calcas/calcas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',pathMatch:'full'
  },

  {
    path: 'produtos',
    component: ProdutosComponent
  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'camisas',
    component: CamisasComponent
  },

  {
    path: 'calcas',
    component: CalcasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
