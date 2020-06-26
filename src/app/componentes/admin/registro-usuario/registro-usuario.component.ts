import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, EmailValidator } from '@angular/forms';
import { AuthService} from '../../../service/auth.service';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
 registroForm = new FormGroup({
   email: new FormControl(''),
   password: new FormControl(''),
 });
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

  }
  registroUsuarios(){
    const {email, password} = this.registroForm.value;
    this.auth.registroUsuarios(email, password);
  }
 }
