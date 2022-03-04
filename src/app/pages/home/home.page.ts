
import { Component, HostListener, ViewChild } from '@angular/core';
import { MenuController, Platform } from '@ionic/angular';
import { Store } from '@ngxs/store';
import { HttpService } from '../../services/http/http.service';
import { GET_SPACEX_DATA } from '../../ngxs/action';
import { SpaceXInfo, SpaceXInfoState } from '../../ngxs/state';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // constructor(private store: Store) {}

  // cto_propulsion: string;
  // founded: number;
  // spacex_info: SpaceXInfo;

  // ionViewWillEnter(): void {
  //   this.store.dispatch(new GET_SPACEX_DATA()).subscribe((_) => {
  //     this.getData();
  //   });
  // }

  // getData(): void {
  //   // this.cto_propulsion = this.store.selectSnapshot(
  //   //   (state) => state.SpaceXInfoState.info.cto_propulsion
  //   // );
  //   // this.founded = this.store.selectSnapshot(
  //   //   (state) => state.SpaceXInfoState.info.founded
  //   // );
  //   this.spacex_info = this.store.selectSnapshot(
  //     (state) => state.SpaceXInfoState.info
  //   );
  // }

  categories = [];
  clothes = [];
  isDesktop = false;
  title = 'Home';

  users: any = [];

  constructor(private menuCtrl: MenuController, private platform: Platform, private http: HttpService) { }

  getUsers() {
    this.http.get(this.http.userApi, null).subscribe((res)=> {
      this.users = res['data'];
      console.log(this.users);
    });
  }

  ngOnInit() {
    this.isDesktop = this.platform.is('desktop');

    this.getUsers();

    this.categories = [
      { name: 'T Shirts', desc: 'Starting from $399', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/tshirts.jpg' },
      { name: 'Winterwear', desc: 'Starting from $699', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/winterwear.jpg' },
      { name: 'Formals', desc: 'Starting from $1999', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/formals.jpg' },
      { name: 'Jackets', desc: 'Starting from $999', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/jackets.jpg' }
    ];
    this.clothes = [
      { name: 'Men\'s Formals', price: '300', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/clothes/mens-formals.jpg' },
      { name: 'Men\'s Jacket', price: '200', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/clothes/jacket.jpg' },
      { name: 'Men\'s Hoodie', price: '120', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/clothes/hoodie.jpg' },
      { name: 'Women\'s Skirt', price: '220', imgUrl: 'https://raw.githubusercontent.com/shantanum91/ionic-mobile-and-desktop-starter/master/src/assets/clothes/skirt.jpg' }
    ];
  }

  setTitle(title) {
    this.title = title
  }

}