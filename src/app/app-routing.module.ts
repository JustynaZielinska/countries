import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RegionPageComponent } from './pages/region-page/region-page.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/countries', pathMatch: 'full' },
  {path: 'countries', component: HomePageComponent },
  {path: 'countries/:region', component: RegionPageComponent },
  {path: 'countries/:region/:country', component: CountryPageComponent },
  {path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
