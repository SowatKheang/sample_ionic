import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { GET_SPACEX_DATA } from '../ngxs/action';
import { SpaceXInfo, SpaceXInfoState } from '../ngxs/state';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private store: Store) {}

  // cto_propulsion: string;
  // founded: number;
  spacex_info: SpaceXInfo;

  ionViewWillEnter(): void {
    this.store.dispatch(new GET_SPACEX_DATA()).subscribe((_) => {
      this.getData();
    });
  }

  getData(): void {
    // this.cto_propulsion = this.store.selectSnapshot(
    //   (state) => state.SpaceXInfoState.info.cto_propulsion
    // );
    // this.founded = this.store.selectSnapshot(
    //   (state) => state.SpaceXInfoState.info.founded
    // );
    this.spacex_info = this.store.selectSnapshot(
      (state) => state.SpaceXInfoState.info
    );
  }

}