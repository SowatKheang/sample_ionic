import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { HeaderComponent } from 'src/app/components/header/header.component';



@NgModule({
  declarations: [
    UserInfoComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserInfoComponent,
    HeaderComponent
  ],
})
export class SharedModule { }
