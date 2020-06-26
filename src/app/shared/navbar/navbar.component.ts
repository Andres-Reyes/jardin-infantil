import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../service/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
public  isLogged = false;
public  user: any;
  constructor(private auth: AuthService) { }

 async ngOnInit() {
   console.log('navbar');
   const user = await this.auth.getCurrentUser();
   if (this.user){
     this.isLogged = true;
   }else{
     console.log('usuario no ingreso');
   }
  }

}
