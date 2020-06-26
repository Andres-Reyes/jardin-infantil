import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { AuthService} from '../../service/auth.service';
import { Router } from '@angular/router';


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
  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {



  }

 async ingresoUsuarios(){
    const {email, password} = this.ingresoForm.value;
    try{
      const user = await this.auth.ingresoUsuario(email, password);
      if(user){
      this.router.navigate(['/Inicio']);
      }
    }catch (error){
console.log(error);
    }
 }
}
