import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabPageRoutingModule } from './tab-routing.module';

import { TabPage } from './tab.page';
import { HomePageModule } from '../home/home.module';
import { AboutPageModule } from '../about/about.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabPageRoutingModule,
    HomePageModule,
    AboutPageModule
  ],
  declarations: [TabPage]
})
export class TabPageModule {}