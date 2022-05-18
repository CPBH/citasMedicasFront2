import {Usuario} from "./usuario";

export class Cita {
  id!: number;
  usuario_id: number;
  fecha: string;
  tipo: string;
  estado: string;

  constructor(usuario: number, fecha: string, tipo: string, estado: string) {
    this.usuario_id = usuario;
    this.fecha = fecha;
    this.tipo = tipo;
    this.estado = estado;
  }
}
