import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../core/models/usuario";
import {Historia} from "../../core/models/historia";
import Swal from 'sweetalert2';
import {UsuarioService} from "../../core/service/usuario.service";
import {HistoriaService} from "../../core/service/historia.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  tipoDocumento = '';
  numeroDocumento = '';
  nombre = '';
  apellido = '';
  contrasena = '';
  fechaNacimiento = '';
  eps = '';
  telefono = '';
  email = '';

  selectedtipodocumento!: string;
  tpdocumento: tipodocumentoEntity = {};
  selectedeps!: string;
  tpeps: epsEntity = {};

  constructor(
    private service: UsuarioService,
    private serviceH: HistoriaService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  tipodocumentos: tipodocumentoEntity[] = [
    {codigo: '1', descripcion: 'Cédula'},
    {codigo: '2', descripcion: 'Tarjeta Identidad'},
    {codigo: '3', descripcion: 'Cédula Extrangera'},
  ];
  listeps: epsEntity[] = [
    {codigo: '1', descripcion: 'DataPrism'},
    {codigo: '2', descripcion: 'Nueva EPS'},
    {codigo: '3', descripcion: 'Sura'},
  ];

  clearForm() {
    this.tpdocumento = {};
    this.tpeps = {};
  }

  onRegistre() {
    const usuario = new Usuario(
      'Paciente',
      this.tipoDocumento,
      this.numeroDocumento,
      this.nombre,
      this.apellido,
      this.telefono,
      this.email,
      this.contrasena,
      this.fechaNacimiento,
      this.eps
    );    
    const historia = new Historia(
      this.numeroDocumento,
      "",
      "",
      "",
      "",
      ""
    );
    this.serviceH.guardar(historia);
    this.service.guardar(usuario).subscribe(
      data => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registrado con exito!!!',
          showConfirmButton: false,
          timer: 1500
        })

        this.router.navigate(["login"])
      }
    );
    //this.serviceH.guardar(historia);


  }
}

interface tipodocumentoEntity {
  codigo?: string;
  descripcion?: string;
}

interface epsEntity {
  codigo?: string;
  descripcion?: string;
}
