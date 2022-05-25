export class Orden {
    id!: number;
    descripcion: string;
    margen_de_tiempo: string;
    cirugias: string;

    constructor(descripcion: string, margen_de_tiempo: string, cirugias: string) {
        this.descripcion = descripcion;
        this.margen_de_tiempo = margen_de_tiempo;
        this.cirugias = cirugias;
    }
}