import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';
@Component({
  selector: 'app-actividades-carga',
  templateUrl: './actividades-carga.component.html',
  styleUrls: ['./actividades-carga.component.css']
})
export class ActividadesCargaComponent implements OnInit {

  constructor(private storange: AngularFireStorage ) { }

  ngOnInit(): void {
  }
  onUpload(event){
   const id = Math.random().toString(36).substring(2);
   const file = event.target.files[0];
   const filePath = 'actividades/imagen.jpg';
   const ref = this.storange.ref(filePath);
   const task = this.storange.upload(filePath, file);
  }
}
