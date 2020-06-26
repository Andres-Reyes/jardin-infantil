import { Component} from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

public user$: Observable<any> = this.auth.afAuth.user;
  constructor(private auth: AuthService) { }


  onLogged(){
    this.auth.logout();
  }
}
