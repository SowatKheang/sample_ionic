import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    UserInfoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    RouterModule
  ],
  exports: [
    UserInfoComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
