import { Component} from '@angular/core';
import { AuthService} from '../../service/auth.service';
import { Observable } from 'rxjs';
import { userInterfase } from '../../componentes/models/user';
import { AngularFireAuth } from '@angular/fire/auth';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

public user$: Observable<any> = this.auth.afAuth.user;
public isAdmin: any = null;
public userUid: string = null;
  constructor(private auth: AuthService) {
    this.getCurrentUser();
  }
  onLogged(){
    this.auth.logout();
    this.isAdmin = null;
  }

  getCurrentUser(){
    this.auth.isAuth().subscribe( aut => {
      if (aut){
       this.userUid = aut.uid;
       this.auth.isUserAdmin(this.userUid).subscribe(userRole => {
          this.isAdmin = Object.assign({}, userRole.roles).hasOwnProperty('admin');
          });
      }
    });
  }
}
