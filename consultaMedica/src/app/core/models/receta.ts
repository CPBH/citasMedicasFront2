export class Receta {
    id!: number;
    dosis: string;
    fecha_vencimiento: string;
    entregaxmes: string;
    medicamentos: string
    descripcion_tratamiento:string

    constructor(dosis: string, fecha_vencimiento: string, entregaxmes: string, medicamentos: string, descripcion_tratamiento:string) {
        this.dosis = dosis;
        this.fecha_vencimiento = fecha_vencimiento;
        this.entregaxmes = entregaxmes;
        this.medicamentos = medicamentos;
        this.descripcion_tratamiento = descripcion_tratamiento;
    }
}