import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// componentes
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
// rutas
import {APP_ROUTING} from './app.routes';
import { FooterComponent } from './shared/footer/footer.component';
import { DocenteComponent } from './componentes/docente/docente.component';
import { TarjetaInicioComponent } from './componentes/tarjeta-inicio/tarjeta-inicio.component';
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
    FooterComponent,
    DocenteComponent,
    TarjetaInicioComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
