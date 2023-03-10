import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './components/carrito/carrito.component';

import { PrincipalComponent } from './components/principal/principal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'pagina-inicial' },
  { path: 'pagina-inicial', component: PrincipalComponent },
  { path: 'carro-compras', component: CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
