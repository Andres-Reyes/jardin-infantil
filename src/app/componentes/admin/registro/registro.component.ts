import { Component, OnInit } from '@angular/core';
import { CloudFirebaseService } from '../../../service/cloud-firebase.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
   value: any;
  constructor(private servicio: CloudFirebaseService) {
    this.buildForm();
   }

  ngOnInit(): void {
  }
  private buildForm() {
    this.form = new FormGroup({
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
agregar(event: Event){
  event.preventDefault();
  this.value = this.form.value;
  this.servicio.agregarItem(this.value);
}
}
