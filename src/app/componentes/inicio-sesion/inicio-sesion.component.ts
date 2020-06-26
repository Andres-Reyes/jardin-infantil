import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService} from '../../service/auth.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {
  ingresoForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService) { }

  ngOnInit(): void {



  }

  ingresoUsuarios(){
    const {email, password} = this.ingresoForm.value;
    this.auth.ingresoUsuario(email, password);
      }
}
