import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    await this.storage.create();
    console.log('storage');
    console.log(this.storage);
  }

  /**
   * 
   * @param key 
   * @param value 
   */
  public set(key: string, value: any) {
    this.storage.set(key, value);
  }

  /**
   * 
   * @param key 
   */
  public get(key: string) {
    return this.storage.get(key).then((val)=> {
      return val;
    });
  }


  /**
   * 
   * @param key 
   */
  public remove(key: string) {
    this.storage.remove(key);
  }

  /**
   * 
   */
  public clear() {
    this.storage.clear();
  }

}
