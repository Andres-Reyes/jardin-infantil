import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';



// componentes
import { environment } from '../environments/environment';
import { AuthService } from '../app/service/auth.service';
import { CloudFirebaseService } from '../app/service/cloud-firebase.service';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { CronogramaComponent } from './componentes/cronograma/cronograma.component';
import { DocentesComponent } from './componentes/docentes/docentes.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';
import { RegistroComponent } from './componentes/admin/registro/registro.component';
import { ActualizacionComponent } from './componentes/admin/actualizacion/actualizacion.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { ChatComponent } from './componentes/chat/chat.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
// rutas
import {APP_ROUTING} from './app.routes';
import { FooterComponent } from './shared/footer/footer.component';
import { DocenteComponent } from './componentes/docente/docente.component';
import { TarjetaInicioComponent } from './componentes/tarjeta-inicio/tarjeta-inicio.component';
import { RegistroUsuarioComponent } from './componentes/admin/registro-usuario/registro-usuario.component';
import { initializeApp } from 'firebase';
import { ActividadesCargaComponent } from './componentes/admin/actividades-carga/actividades-carga.component';
import { CronogramaCargaComponent } from './componentes/admin/cronograma-carga/cronograma-carga.component';
import { DocentesCargaComponent } from './componentes/admin/docentes-carga/docentes-carga.component';


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
    RegistroUsuarioComponent,
    ActividadesCargaComponent,
    CronogramaCargaComponent,
    DocentesCargaComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
  ],
  providers: [AuthService,
    CloudFirebaseService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
