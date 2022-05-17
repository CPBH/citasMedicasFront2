import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/core/models/usuario';
import { UsuarioService } from '../../core/service/usuario.service';


@Component({
  selector: 'app-iniciosesion',
  templateUrl: './iniciosesion.component.html',
  styleUrls: ['./iniciosesion.component.css']
})
export class IniciosesionComponent implements OnInit {

  numeroDocumento = '';
  contrasena = '';

  constructor(
    private router: Router,
    private servicio: UsuarioService
  ) { }

  ngOnInit(): void {
  }

  onLogin(){
    const user = new Usuario(
      'tipo Paciente',
      this.numeroDocumento,
      this.contrasena
    );
    this.servicio.guardar(user).subscribe(
      data => {
        alert(data);
      }
    );
  }
}
