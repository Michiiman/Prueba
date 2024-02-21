import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';


const routes: Routes = [
  { path: 'lista-persona', component: ListaPersonaComponent },
  { path: 'detalle-persona/:id', component: DetallePersonaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
