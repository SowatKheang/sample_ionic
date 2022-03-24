import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/compat/firestore';
import { StringFormat } from '@angular/fire/compat/storage/interfaces';
import 'firebase/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CloudFirestoreService {

  constructor(private firestore: AngularFirestore) { 

  }

  public getData(): Observable<string[]> {
    return this.firestore.collection<string>('test').valueChanges();
  }

}
