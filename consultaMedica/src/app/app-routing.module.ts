import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitaComponent } from './cita/cita/cita.component';
import { ConsultaComponent } from './consulta/consulta/consulta.component';
import { HorariomedicoComponent } from './horariomedico/horariomedico/horariomedico.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion/iniciosesion.component';
import { MenuComponent } from './menu/menu/menu.component';
import { MenumedicoComponent } from './menumedico/menumedico/menumedico.component';
import { OpcionservicioComponent } from './opcionservicio/opcionservicio/opcionservicio.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { TipoafiliadoComponent } from './tipoafiliado/tipoafiliado/tipoafiliado.component';


const routes: Routes = [
  {
    path: '', component: IniciosesionComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'cita', component: CitaComponent
  },
  {
    path: 'consulta', component: ConsultaComponent
  },
  {
    path: 'opcionservicio', component: OpcionservicioComponent
  },
  {
    path: 'singup', component: RegistroComponent
  },
  {
    path: 'tipoafiliado', component: TipoafiliadoComponent
  },
  {
    path: 'menumedico', component: MenumedicoComponent
  },
  {
    path: 'horariomedico', component: HorariomedicoComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
