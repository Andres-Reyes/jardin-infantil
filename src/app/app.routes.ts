import { RouterModule , Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { CronogramaComponent } from './componentes/cronograma/cronograma.component';
import { DocentesComponent } from './componentes/docentes/docentes.component';
import { InformacionComponent} from './componentes/informacion/informacion.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ActualizacionComponent } from './componentes/actualizacion/actualizacion.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
const APP_ROUTES: Routes = [
     {path: 'Inicio', component : InicioComponent},
     {path: 'Actividades', component : ActividadesComponent},
     {path: 'Cronograma', component : CronogramaComponent},
     {path: 'Docentes', component : DocentesComponent},
     {path: 'Informacion', component : InformacionComponent},
     {path: 'Registro', component : RegistroComponent},
     {path: 'Actualizar', component : ActualizacionComponent},
     {path: 'InicioSesion', component : InicioSesionComponent},
     {path: 'Pagos', component : PagosComponent},
     {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);