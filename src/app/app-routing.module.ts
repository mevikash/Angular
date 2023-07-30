import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ApplicationsComponent } from './applications/applications.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PublicationsComponent } from './publications/publications.component';
import { SitesComponent } from './sites/sites.component';
import { VitaeComponent } from './vitae/vitae.component';
import { MsitesComponent } from './msites/msites.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'About Me', component : AboutMeComponent},
  {path: 'Blog', component : BlogComponent},
  {path: 'Apps', component : ApplicationsComponent},
  {path: 'About Me', component : BlogComponent},
  {path: 'Contact', component : ContactComponent},
  {path: 'Home', component : HomeComponent},
  {path: 'Publications', component : PublicationsComponent},
  {path: 'Sites', component : SitesComponent},
  {path: 'Vitae', component : VitaeComponent},
  {path: 'Mysite', component : MsitesComponent},
  {path: '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
