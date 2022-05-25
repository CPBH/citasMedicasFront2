import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UsuarioService} from '../../core/service/usuario.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loginmedico',
  templateUrl: './loginmedico.component.html',
  styleUrls: ['./loginmedico.component.css']
})
export class LoginmedicoComponent implements OnInit {

  numeroDocumento = '';
  contrasena = '';

  constructor() {
    private router: Router,
      private servicio: UsuarioService
  }

  ngOnInit(): void {

    onLoginmedico()
    {
      this.servicio.login(this.numeroDocumento, this.contrasena).subscribe(
        data => {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Autenticado con exito!!!',
            showConfirmButton: false,
            timer: 1500
          });
          localStorage.setItem('usuario', JSON.stringify(data[0]));
          this.router.navigateByUrl("/menumedico");
        }, error => {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al iniciar sesion!!',
            footer: error.error.message
          });
        }
      );
    }
  }
}
