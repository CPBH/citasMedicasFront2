import {Usuario} from "./usuario";
import {Historia} from "./historia";
export class consulta {
    id!: number;
    numeroDocumento: string;
    enfermedades: string;
    cirugias: string;
    medicamentos: string

    constructor(numeroDocumento: string, enfermedades: string, cirugias: string, medicamentos: string) {
        this.numeroDocumento = numeroDocumento;
        this.enfermedades = enfermedades;
        this.cirugias = cirugias;
        this.medicamentos = medicamentos;
    }
}