import { WindowEditPecaModule } from './components/window-edit-peca/window-edit-peca.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { MatCardModule } from '@angular/material/card';
import { HomeModule } from './components/home/home.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { InitialPageModule } from './components/initial-page/initial-page.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastroPecaModule } from './components/cadastro-peca/cadastro-peca.module';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { WindowConfirmationModule } from './components/util/window-confirmation/window-confirmation.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NavModule } from './components/nav/nav.module';

@NgModule({
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    RouterModule.forRoot(routes),
    HomeModule,
    CadastroPecaModule,
    InitialPageModule,
    HttpClientModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    WindowEditPecaModule,
    FormsModule,
    MatSnackBarModule,
    WindowConfirmationModule,
    NavModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    provideAnimationsAsync()
  ]

})
export class AppModule {

 }
