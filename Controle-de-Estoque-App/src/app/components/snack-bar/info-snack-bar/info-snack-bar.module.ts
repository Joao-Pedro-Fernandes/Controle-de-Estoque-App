import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoSnackBarComponent } from './info-snack-bar.component';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    InfoSnackBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class InfoSnackBarModule { }
