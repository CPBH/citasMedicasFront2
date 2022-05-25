import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../core/models/usuario";
import {ConsultaService} from "../../core/service/consulta.service";
import {consulta} from "../../core/models/Consulta";
import {HistoriaService} from "../../core/service/historia.service";
import {Historia} from "../../core/models/historia";
import {OrdenService} from "../../core/service/orden.service";
import {Orden} from "../../core/models/orden";
import {RecetaService} from "../../core/service/receta.service";
import {Receta} from "../../core/models/receta";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {
  usuario!: Usuario;
  enfermedades = '';
  cirugias= '';
  medicamentos = '';
  dosis = '';
  fecha_vencimiento = '';
  entregaxmes = '';
  descripcion_tratamiento = '';
  descripcionOrden = '';
  margen_de_tiempo = '';
  
  
  constructor(
    private service: ConsultaService,
    private servicer: RecetaService,
    private serviceo: OrdenService
    ) {}

  ngOnInit(): void {
    
  }
  onGuardar() {
    const dato = localStorage.getItem('usuario');
    const h= localStorage.getItem('historia')
    if (dato) {
      this.usuario = JSON.parse(dato);
    }

    const cons = new consulta(
      this.usuario.numeroDocumento,
      this.enfermedades,
      this.cirugias,
      this.medicamentos
    )
    const rec = new Receta(
      this.dosis,
      this.fecha_vencimiento,
      this.entregaxmes,
      this.medicamentos,
      this.descripcion_tratamiento
    )

    const ord = new Orden(
      this.descripcionOrden,
      this.margen_de_tiempo,
      this.cirugias,
    )
    this.servicer.guardar(rec).subscribe();
    this.serviceo.guardar(ord).subscribe();
    this.service.guardar(cons).subscribe(
      data => {
        Swal.fire({
          icon: 'info',
          title: 'Informacion registrada!!',
        })
      }
    )
  }
}