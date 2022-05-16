import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  selectedtipodocumento!: string;
  selectedtipocita!: string;
  cita: citaEntity= {};
  tpdocumento: tipodocumentoEntity={};
  tpcita: tipocitaEntity={};
  
  constructor() { }

  ngOnInit(): void {
  }
  tipodocumentos: tipodocumentoEntity[] = [
    {codigo: '1', descripcion: 'Cédula'},
    {codigo: '2', descripcion: 'Tarjeta Identidad'},
    {codigo: '3', descripcion: 'Cédula Extrangera'},
  ];

  tipocitas: tipocitaEntity[] = [
    {codigo: '1', descripcion: 'General'},
    {codigo: '2', descripcion: 'Odontología'},
    {codigo: '3', descripcion: 'Especializada'},
  ];
  clearForm(){
    this.cita={};
    this.tpdocumento={};
    this.tpcita={};
  }
  save(event:any){

  }

}
interface tipodocumentoEntity {
  codigo?: string;
  descripcion?: string;
}

interface tipocitaEntity {
  codigo?: string;
  descripcion?: string;
}

interface citaEntity{
  nmdocumentos?: string;
  fecha?: string;
}