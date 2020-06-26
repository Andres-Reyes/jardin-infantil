import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
@Injectable()
export class AuthService {

/*   private url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=';
  private apiKey = 'AIzaSyAZeDXEnRGcImRRrzb_Hm0RQwgnrPAObU8'; */

//https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]
  //ingreso de usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

private user: User;
  constructor(private afAuth: AngularFireAuth) { }


  async logout(){
    try{
      await this.afAuth.signOut();
    }catch (error){
      console.log(error);
    }

  }
  async ingresoUsuario( email: string, password: string){
    try{
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    }catch (error){
      console.log(error);
    }

  }
 async registroUsuarios(email: string, password: string){
  try{
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    return result;
  }catch (error){
    console.log(error);
  }

}


getCurrentUser(){
  try{
    return this.afAuth.authState.pipe(first()).toPromise();
  }catch (error){
    console.log(error);
  }

}

}
