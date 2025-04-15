import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule } from '@angular/material/toolbar';
import { CadastroPecaComponent } from './cadastro-peca.component';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    CadastroPecaComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatLabel,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatOptionModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule
  ]
})
export class CadastroPecaModule { }
