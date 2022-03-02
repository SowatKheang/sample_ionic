import { Component, HostListener, OnInit } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { MenuController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  isDesktop = false;
  public selectedIndex = 0;

  // side_menus: any;

  // constructor(private platform: Platform) {
  //   this.sideMenu(); 
  //   this.platform.ready().then(()=> {
  //     StatusBar.setBackgroundColor({
  //       color: '#2dd36f'
  //     });
  //   });
  // }

  menu_items = [
    {
      title: 'Home',
      icon: 'home',
      path: '/'
    },
    {
      title: 'Products',
      icon: 'list',
      path: '/products'
    },
    {
      title: 'About',
      icon: 'information-circle',
      path: '/about'
    },
    { 
      title : 'Logout',  
      url   : '/logout',  
      icon  : 'exit'  
    }
  ];
 
  title = 'Home';
 
  constructor(private menuCtrl: MenuController, private platform: Platform) {
    this.platform.ready().then(()=> {
      StatusBar.setBackgroundColor({
        color: '#E1E7E4'
      });
    });
    this.isDesktop = this.platform.is('desktop');
  }
 
  ngOnInit() {
    // const width = this.platform.width();
    // this.toggleMenu(width);
    // const path = window.location.pathname.split('/')[1];
    // console.log(path)
    // if (path !== undefined) {
    //   this.selectedIndex = this.menu_items.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    // }
  }

  // @HostListener('window:resize', ['$event'])
  // private onResize(event) {
  //   const newWidth = event.target.innerWidth;
  //   this.toggleMenu(newWidth);
  // }

  // toggleMenu(width) {
  //   if (width > 768) {
  //     this.menuCtrl.enable(false, 'myMenu');
  //   } else {
  //     this.menuCtrl.enable(true, 'myMenu');
  //   }
  // }

  // setTitle(title) {
  //   this.title = title
  // }
  
}
