import { Component, OnInit } from '@angular/core';
import { CloudFirebaseService } from 'src/app/service/cloud-firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
items: any;
  constructor(private conexion: CloudFirebaseService) { 
    this.conexion.listaItem().subscribe(coleccion =>{
      this.items = coleccion;
      console.log('Registro:', this.items);
    });
  }

  ngOnInit(): void {
  }

}
