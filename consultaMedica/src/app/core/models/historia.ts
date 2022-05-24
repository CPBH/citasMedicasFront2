export class Historia {
    id!: number;
    numeroDocumento: string;
    enfermedades: string;
    medicamentos: string;
    cirugiias: string;
    antecedentes: string;
    resultados: string;


constructor(numeroDocumento: string, enfermedades: string, medicamentos: string, cirugiias: string, antecedentes: string, resultados: string) {
    this.numeroDocumento = numeroDocumento;
    this.enfermedades = enfermedades;
    this.medicamentos = medicamentos;
    this.cirugiias = cirugiias;
    this.antecedentes = antecedentes;
    this.resultados = resultados;
}
}
