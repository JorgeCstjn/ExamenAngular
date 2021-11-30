import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  coche:Coche [] = [];
 
  nuevo: Coche = {
    marca: '',
    matricula:0,
    color: ''

  }
  
  @Input() cochesComponenteAgregar: Coche[] = [] 

  @Output() onNuevoCoche: EventEmitter<Coche> = new EventEmitter();

   agregar(verCoche:Coche) {
    if(this.nuevo.nombre.trim().length === 0) {
      return;
    }
 

  this.onNuevoCoche.emit(this.nuevo);
  this.nuevo = {
    marca: '',
    matricula: 0,
    color: ''
  }
 }

}
