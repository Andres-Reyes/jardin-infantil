import { Component, OnInit } from '@angular/core';
import { CloudFirebaseService } from '../../../service/cloud-firebase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  item: any = {
uno: '',
dos: '',
tres: '',
cuatro: '',
cinco: '',
seis: '',
siete: '',
ocho: '',
nueve: '',
  };

  constructor(private servicio: CloudFirebaseService) { }

  ngOnInit(): void {
  }
agregar(){
  this.servicio.agregarItem(this.item);
}
}
