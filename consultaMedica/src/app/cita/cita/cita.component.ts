import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../core/models/usuario";
import {CitaService} from "../../core/service/cita.service";
import {Cita} from "../../core/models/cita";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  usuario!: Usuario;
  tipo = '';
  fecha = '';

  constructor(
    private service: CitaService
  ) {
  }

  ngOnInit(): void {
  }

  tipocitas: tipocitaEntity[] = [
    {codigo: '1', descripcion: 'General'},
    {codigo: '2', descripcion: 'Odontología'},
    {codigo: '3', descripcion: 'Especializada'},
  ];

  onGuardar() {
    const dato = localStorage.getItem('usuario');
    if (dato) {
      this.usuario = JSON.parse(dato);
    }
    const cita = new Cita(
      this.usuario.id,
      this.fecha,
      this.tipo,
      'Pendiente'
    )

    this.service.guardar(cita).subscribe(
      data => {
        Swal.fire({
          icon: 'info',
          title: 'Cita registrada con exito!!',
          text: 'Espera tu confirmacion.',
        })
      }
    )
  }
}

interface citaEntity {
  nmdocumentos?: string;
  fecha?: string;
}

interface tipocitaEntity {
  codigo?: string;
  descripcion?: string;
}

