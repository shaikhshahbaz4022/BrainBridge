import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const routes: Routes = [
  { path: 'homepage', component: HomePageComponent },
  { path: '', pathMatch: 'full', redirectTo: 'homepage' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
