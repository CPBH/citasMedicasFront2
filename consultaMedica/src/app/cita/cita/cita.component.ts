import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {

  selectedtipodocumento!: string;
  selectedtipocita!: string;
  
  constructor() { }

  ngOnInit(): void {
  }
  tipodocumentos: tipodocumentoEntity[] = [
    {value: '1', viewValue: 'Cédula'},
    {value: '2', viewValue: 'Tarjeta Identidad'},
    {value: '3', viewValue: 'Cédula Extrangera'},
  ];

  tipocitas: tipocitaEntity[] = [
    {value: '1', viewValue: 'General'},
    {value: '2', viewValue: 'Odontología'},
    {value: '3', viewValue: 'Especializada'},
  ];
  clearForm(){

  }
  save(event:any){

  }

}
interface tipodocumentoEntity {
  value: string;
  viewValue: string;
}

interface tipocitaEntity {
  value: string;
  viewValue: string;
}