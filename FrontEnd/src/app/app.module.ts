import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetallePersonaComponent } from './detalle-persona/detalle-persona.component';
import { ListaPersonaComponent } from './lista-persona/lista-persona.component';
import { HomeComponent } from './home/home.component';
import { ListaTagsComponent } from './lista-tags/lista-tags.component';


@NgModule({
  declarations: [
    AppComponent,
    DetallePersonaComponent,
    ListaPersonaComponent,
    HomeComponent,
    ListaTagsComponent
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
