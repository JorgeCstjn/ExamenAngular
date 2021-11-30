import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-coche',
  templateUrl: './listado-coche.component.html',
  styleUrls: ['./listado-coche.component.css']
})
export class ListadoCocheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  // nuevo:Coche ={
  //   marca: '',
  //   matricula:0,
  //   color: ''
  // }
  // @Input() cochesComponenteAgregar: Coche[] = []

  // @Output() onNuevoCoche: EventEmitter<Coche> = new EventEmitter();

  // agregar() {
  //   if(this.nuevo.nombre.trim().length === 0) {
  //     return;
  //   }
 

  // this.onNuevoCoche.emit(this.nuevo);
  // this.nuevo = {
  //   marca: '',
  //   matricula: 0,
  //   color: ''
  // }
 }


