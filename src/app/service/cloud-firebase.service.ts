import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import {Item} from '../componentes/models/registro';
  // importaciones tabla registro

export interface ItemId extends Item { id: string; }

// importaciones tabla actividades

// importaciones tabla docentes

// importaciones  tabla cronograma

// importaciones tabla inicio
@Injectable({
  providedIn: 'root'
})
export class  CloudFirebaseService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  private itemDoc: AngularFirestoreDocument<Item>;
  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('Registro');
    this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Item;
      const id = a.payload.doc.id;
      return { id, ...data };
     });

     }));
  }

  listaItem() {
    return this.items;
  }
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
    console.log(' Registro exitoso');
  }
  eliminarItem(item){
    this.itemDoc = this.afs.doc<Item>(`Registro/${item.id}`);
    this.itemDoc.delete();
  }
  editarItem(item){
    this.itemDoc = this.afs.doc<Item>(`Registro/${item.id}`);
    this.itemDoc.update(item);
  }
}
