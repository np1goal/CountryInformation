import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { CountryInfoComponent } from 'src/app/country-info/country-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'country/#id', component: CountryInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
