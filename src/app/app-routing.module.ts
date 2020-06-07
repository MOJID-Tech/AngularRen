import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { ListePrimeComponent } from './liste-prime/liste-prime.component';
import { ListePrimedgComponent } from './liste-primedg/liste-primedg.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'demande-prime', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'list-prime', component: ListePrimeComponent},
  {path: 'list-prime-DG', component: ListePrimedgComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
