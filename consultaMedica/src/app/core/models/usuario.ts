export class Usuario {
    id!: number;
    tipo: string;
    tipoDocumento!: string;
    numeroDocumento!: string;
    nombre!: string;
    apellido!: string;
    telefono: string;
    email: string;
    contrasena!: string;
    fechaNacimiento!: string;
    eps!: string;


  constructor(tipo: string, tipoDocumento: string, numeroDocumento: string, nombre: string, apellido: string, telefono: string, email: string, contrasena: string, fechaNacimiento: string, eps: string) {
    this.tipo = tipo;
    this.tipoDocumento = tipoDocumento;
    this.numeroDocumento = numeroDocumento;
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.email = email;
    this.contrasena = contrasena;
    this.fechaNacimiento = fechaNacimiento;
    this.eps = eps;
  }
}
