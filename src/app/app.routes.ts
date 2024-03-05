import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ExercisesComponent} from "./exercises/exercises.component";
import {NavbarComponent} from "./navbar/navbar.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[{path:'', component: NavbarComponent}]
  },
  {
    path: 'exercises',
    component: ExercisesComponent,
    children:[{path:'', component: NavbarComponent}]
  }
];
