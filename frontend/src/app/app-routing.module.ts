import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PozosComponent } from './components/pozos/pozos.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: 'pozos', component: PozosComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'pozos', component: PozosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
