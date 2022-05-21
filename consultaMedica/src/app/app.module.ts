import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatListModule} from '@angular/material/list';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { MenuComponent } from './menu/menu/menu.component';
import { IniciosesionComponent } from './iniciosesion/iniciosesion/iniciosesion.component';
import { ConsultaComponent } from './consulta/consulta/consulta.component';
import { CitaComponent } from './cita/cita/cita.component';
import { OpcionservicioComponent } from './opcionservicio/opcionservicio/opcionservicio.component';
import { RegistroComponent } from './registro/registro/registro.component';
import { TipoafiliadoComponent } from './tipoafiliado/tipoafiliado/tipoafiliado.component';
import {MatMenuModule} from '@angular/material/menu';
import { MenumedicoComponent } from './menumedico/menumedico/menumedico.component';
import { HorariomedicoComponent } from './horariomedico/horariomedico/horariomedico.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    IniciosesionComponent,
    ConsultaComponent,
    CitaComponent,
    OpcionservicioComponent,
    RegistroComponent,
    TipoafiliadoComponent,
    MenumedicoComponent,
    HorariomedicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDialogModule,
    MatExpansionModule,
    MatMenuModule,
    HttpClientModule,
    FormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
