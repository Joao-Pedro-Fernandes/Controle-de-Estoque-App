import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WindowConfirmationComponent } from './window-confirmation.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    WindowConfirmationComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class WindowConfirmationModule { }
