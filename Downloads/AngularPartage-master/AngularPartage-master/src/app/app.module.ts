import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeletComponent } from './delet/delet.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './httpInterceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ListePrimeComponent } from './liste-prime/liste-prime.component';
import { SlidemenuComponent } from './slidemenu/slidemenu.component';
import { ListePrimedgComponent } from './liste-primedg/liste-primedg.component';
import { ListDepartementComponent } from './list-departement/list-departement.component';
import { ListEquipeComponent } from './list-equipe/list-equipe.component';
import { HistoriqueComponent } from './historique/historique.component';
import { HistoretatsComponent } from './historetats/historetats.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ListDemandeComponent} from './list-demande/list-demande.component';
import { DetailleComponent } from './detaille/detaille.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    LoginComponent,
    DeletComponent,
    LogoutComponent,
    ListePrimeComponent,
    SlidemenuComponent,
    ListePrimedgComponent,
    ListDepartementComponent,
    ListEquipeComponent,
    HistoriqueComponent,
    HistoretatsComponent,
    ListDemandeComponent,
    DetailleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
