export class Historia {
    id!: number;
    numeroDocumento: string;
    enfermedades: string;
    medicamentos: string;
    cirugias: string;
    antecedentes: string;
    resultados: string;


constructor(numeroDocumento: string, enfermedades: string, medicamentos: string, cirugias: string, antecedentes: string, resultados: string) {
    this.numeroDocumento = numeroDocumento;
    this.enfermedades = enfermedades;
    this.medicamentos = medicamentos;
    this.cirugias = cirugias;
    this.antecedentes = antecedentes;
    this.resultados = resultados;
}
}
