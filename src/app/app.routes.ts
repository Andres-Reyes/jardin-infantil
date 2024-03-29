import { RouterModule , Routes } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ActividadesComponent } from './componentes/actividades/actividades.component';
import { CronogramaComponent } from './componentes/cronograma/cronograma.component';
import { DocentesComponent } from './componentes/docentes/docentes.component';
import { InformacionComponent} from './componentes/informacion/informacion.component';
import { RegistroComponent } from './componentes/admin/registro/registro.component';
import { ActualizacionComponent } from './componentes/admin/actualizacion/actualizacion.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { PagosComponent } from './componentes/pagos/pagos.component';
import { TarjetaInicioComponent} from './componentes/tarjeta-inicio/tarjeta-inicio.component';
import { RegistroUsuarioComponent} from './componentes/admin/registro-usuario/registro-usuario.component';
import { ActividadesCargaComponent} from './componentes/admin/actividades-carga/actividades-carga.component';
import { CronogramaCargaComponent} from './componentes/admin/cronograma-carga/cronograma-carga.component';
import { DocentesCargaComponent} from './componentes/admin/docentes-carga/docentes-carga.component';
import { DocenteComponent } from './componentes/docente/docente.component';
const APP_ROUTES: Routes = [
     {path: 'Inicio', component : InicioComponent},
     {path: 'Actividades', component : ActividadesComponent},
     {path: 'Cronograma', component : CronogramaComponent},
     {path: 'Equipo', component : DocentesComponent},
     {path: 'Informacion', component : InformacionComponent},
     {path: 'Registro', component : RegistroComponent},
     {path: 'Actualizar', component : ActualizacionComponent},
     {path: 'InicioSesion', component : InicioSesionComponent},
     {path: 'RegistroUsuario', component : RegistroUsuarioComponent},
     {path: 'Pagos', component : PagosComponent},
     {path: 'ActividadesJardin', component : ActividadesCargaComponent},
     {path: 'CronogramaJardin', component : CronogramaCargaComponent},
     {path: 'DocentesJardin', component : DocentesCargaComponent},
     {path: 'Docentes/Docente/:id', component : DocenteComponent},
     {path: 'Inicio/Tarjeta/:id', component : TarjetaInicioComponent},
     {path: '**', pathMatch: 'full', redirectTo: 'Inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
