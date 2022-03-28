import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from 'src/app/components/footer/footer/footer.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule
  ],
  exports: [
    UserInfoComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule { }
