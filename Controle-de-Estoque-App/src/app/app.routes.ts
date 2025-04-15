import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { NavComponent } from './components/nav/nav.component';

export const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'initial', component: InitialPageComponent}
    ]
  }



];
