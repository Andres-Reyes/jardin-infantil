import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map } from 'rxjs/operators';
import { userInterfase } from '../componentes/models/user';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable()
export class AuthService {

  constructor(public afAuth: AngularFireAuth, private afs: AngularFirestore) { }


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
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password)
    .then(Credential => {this.updateUserData(Credential.user);
      });

}


getCurrentUser(){

    return this.afAuth.authState.pipe(first()).toPromise();
}
isAuth(){
  return this.afAuth.authState.pipe(map(auth => auth));
}
private updateUserData(user){
  const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
  const dataU: userInterfase = {
   id: user.uid,
   email: user.email,
   roles: {
     user: true
    }
  };
  console.log(dataU);
  return userRef.set(dataU, { merge: true });
}
isUserAdmin(userUid){
  return this.afs.doc<userInterfase>(`users/${userUid}`).valueChanges();
}

}
