export class Usuario {
    tipo!: string;
    numeroDocumento!: string;
    contrasena!: string;

    constructor(tipo: string, numeroDocumento: string, contrasena: string){
        this.tipo = tipo;
        this.numeroDocumento = numeroDocumento;
        this.contrasena = contrasena;
    }
}
