import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { InicioComponent } from './componentes/inicio/inicio.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { CronogramaComponent } from './componentes/cronograma/cronograma.component';
import { DocentesComponent } from './componentes/docentes/docentes.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ActualizacionComponent } from './componentes/actualizacion/actualizacion.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ActividadesComponent,
    CronogramaComponent,
    DocentesComponent,
    InformacionComponent,
    RegistroComponent,
    ActualizacionComponent,
    InicioSesionComponent,
    PagosComponent,
    ChatComponent,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
