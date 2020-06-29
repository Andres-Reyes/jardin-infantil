import { Component, OnInit } from '@angular/core';
import { CloudFirebaseService } from 'src/app/service/cloud-firebase.service';
import { Item } from '../../../service/cloud-firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizacion',
  templateUrl: './actualizacion.component.html',
  styleUrls: ['./actualizacion.component.css']
})
export class ActualizacionComponent implements OnInit {
  items: any;
  editarITem: any;
  constructor(private conexion: CloudFirebaseService) {
    this.conexion.listaItem().subscribe(coleccion => {
      this.items = coleccion;
      console.log('Registro:', this.items);
    });
    this.buildForm();
   }

  ngOnInit(): void {
  }
  private buildForm() {
    this.editarITem = new FormGroup({
      uno: new FormControl('', [Validators.required]),
      dos: new FormControl('', [Validators.required]),
      tres: new FormControl('', [Validators.required]),
      cuatro: new FormControl('', [Validators.required]),
      cinco: new FormControl('', [Validators.required]),
      seis: new FormControl('', [Validators.required]),
      siete: new FormControl('', [Validators.required]),
      ocho: new FormControl('', [Validators.required]),
    });
  }
modificar(item){

}
eliminar(item){
this.conexion.eliminarItem(item);
}
itemModificado(){
  this.conexion.editarItem(this.editarITem);
}
}
