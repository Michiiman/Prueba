import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    DetallePersonaComponent,
    ListaPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
