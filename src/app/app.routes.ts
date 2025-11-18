// app.routes.ts

import { Routes } from '@angular/router';
import { MainpageComponent} from './pages/mainpage/mainpage.component';
import { FunprojectsComponent } from './pages/funprojects/funprojects.component';
import { OceanCleanupComponent } from './pages/ocean-simulator/ocean-simulator.component';
import { RandomFactsComponent } from './pages/random-facts/random-facts.component';

export const routes: Routes = [
  // This route sets HomeComponent as the default view for the root URL (/)
  { path: '', component: MainpageComponent }, 
  
  { path: 'fun-projects', component: FunprojectsComponent },
  { path: 'ocean-cleanup', component: OceanCleanupComponent },
  { path: 'random-facts', component: RandomFactsComponent },
  
  // Optional: Wildcard route for 404
  { path: '**', redirectTo: '' } 
];