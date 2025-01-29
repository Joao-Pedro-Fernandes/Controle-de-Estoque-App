import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'initial', component: InitialPageComponent}
];
