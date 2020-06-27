import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { ListePrimeComponent } from './liste-prime/liste-prime.component';
import { ListePrimedgComponent } from './liste-primedg/liste-primedg.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HistoretatsComponent } from './historetats/historetats.component';
import {DeletComponent} from './delet/delet.component';
import {ListDemandeComponent} from './list-demande/list-demande.component';
import {DetailleComponent} from "./detaille/detaille.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'demande-prime', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'list-prime', component: ListePrimeComponent},
  {path: 'list-prime-DG', component: ListePrimedgComponent},
  {path: 'list-departement', component: ListDepartementComponent},
  {path: 'equipes/:id', component: ListEquipeComponent},
  {path: 'historiques', component: HistoriqueComponent },
  {path: 'Users-list', component: ListePrimedgComponent},
  {path: 'etats/:id', component: HistoretatsComponent  },
  {path: 'create', component: ListDemandeComponent  },
  {path: 'compte', component: DetailleComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
