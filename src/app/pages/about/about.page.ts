import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { AbstractPage } from '../base/abstract.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})

export class AboutPage extends AbstractPage {

  brands: any = [];
  whyChooseUsContents: any = [];
  
  constructor(private _platform: Platform) { 
    super(_platform);
  }
  
  onInit(): void {
    this.setTitle('about');
    this.getBrand();
    this.getChooseUs();
  }

  getBrand() {
    this.brands = [
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/01.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/02.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/03.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/04.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/05.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/06.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/07.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/08.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/09.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/10.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/11.png' },
      { desc: '', desc_en: '', image_url: 'https://codervent.com/shopingo/demo/assets/images/brands/12.png' },
    ];
  }

  getChooseUs() {
    this.whyChooseUsContents = [
      { title: '', 
        title_en: 'FREE SHIPPING', 
        desc: '', 
        desc_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.',
        image_url: 'https://codervent.com/shopingo/demo/assets/images/icons/delivery.png',
      },
      { title: '', 
        title_en: '100% MONEY BACK GUARANTEE', 
        desc: '', 
        desc_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.',
        image_url: 'https://codervent.com/shopingo/demo/assets/images/icons/money-bag.png',
      },
      { title: '', 
        title_en: 'ONLINE SUPPORT 24/7', 
        desc: '', 
        desc_en: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industr in some form.',
        image_url: 'https://codervent.com/shopingo/demo/assets/images/icons/support.png',
      },
    ];
  }

}
