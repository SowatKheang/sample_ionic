import { Injectable } from '@angular/core';
import { AngularFirestore, QuerySnapshot } from '@angular/fire/compat/firestore';
import 'firebase/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/** 
 * 
 * It's a service that uses AngularFirestore to get data from CloudFirestore 
 */
export class CloudFirestoreService {

  constructor(private firestore: AngularFirestore) {}

  public getData(): Observable<string[]> {
    return this.firestore.collection<string>('test').valueChanges();
  }

}
