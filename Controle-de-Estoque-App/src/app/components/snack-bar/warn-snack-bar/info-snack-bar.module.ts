import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { WarnSnackBarComponent } from './warn-snack-bar.component';



@NgModule({
  declarations: [
    WarnSnackBarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class InfoSnackBarModule { }
