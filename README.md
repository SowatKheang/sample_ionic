## Requirement
- node v17.5.0
- npm 8.4.1
## Generate Command
### Service
```
ionic g service folder_name/file_name
```
### Page
```
ionic g page folder_name/file_name
```
### Component
```
ionic g component folder_name/file_name
```

## Run On Android
```
ionic cap run android -l --external
```

## Run On iOS
```
ionic cap run ios -l --external
```

## Fix iOS white screen
```
In file tsconfing.json, under compilerOptions change "target": "2015" to "target": "es5"
```

## I18N Angular
### 1. Installtion
```
npm install @ngx-translate/core @ngx-translate/http-loader --save
```
### 2. Import in AppModule
```
TranslateModule.forRoot()
```

### 3. Import in Pages' module
```
TranslateModule.forChild()
```

## Storage
### 1. Installation
```
npm install @ionic/storage-angular
```

### 2. Usage
####  2.1. Import IonicStorageModule in file app.module.ts
```ts
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    IonicStorageModule.forRoot()
  ]
})
export class AppModule { }
```
#### 2.2. Inject Storage into a component.
- Note: this approach is meant for usage in a single component
- Example app.component.ts 
```ts
import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    await this.storage.create();
  }
}
```

#### 2.3. If create StorageService instead of using 2.2
```ts
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
    console.log(this.storage);
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.storage.set(key, value);
  }

  public get(key: string) {
    return this.storage.get(key).then((val)=> {
      return val;
    });
  }
}
```
Then, inject the StorageService into your pages and other components that need to interface with the Storage engine.

#### 2.4. Set, Get, Remove with a key
- set
```ts
await storage.set('name', 'Mr. Ionitron');
```
- get
```ts
const name = await storage.get('name');
```
- remove an item
```ts
await storage.remove(key);
```
- clear all items
```ts
await storage.clear();
```
- get all keys
```ts
await storage.keys()
```

## Firebase
### 1. Setup Firebase Project
```
https://www.positronx.io/set-up-firebase-database-in-ionic-angular/
```
```
npm install firebase @angular/fire --save
```