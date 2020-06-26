import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import { first } from 'rxjs/operators';
@Injectable()
export class AuthService {



private user: User;
  constructor(public afAuth: AngularFireAuth) { }


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
