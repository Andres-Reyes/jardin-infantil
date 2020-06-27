import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { uno: string; dos: string; tres: string; cuatro: string; cinco: string; seis: string; siete: string; ocho: string; nueve: string };
export interface ItemId extends Item { id: string; }
@Injectable({
  providedIn: 'root'
})
export class  CloudFirebaseService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Item>('Registro');
  this.items = this.itemsCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as Item;
      const id = a.payload.doc.id;
      return { id, ...data };
     })
     }));
  }

  listaItem() {
    return this.items;
  }
  agregarItem(item: Item) {
    this.itemsCollection.add(item);
  }
}
