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
import {  DemandeFilterPipe  } from  './historique/demande-filer.pipe';
import {  PrimeFilterPipe  } from  './liste-prime/prime-filer.pipe';
import { DatePipe } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ReportingComponent } from './reporting/reporting.component';

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
    DetailleComponent,
    DemandeFilterPipe,
    PrimeFilterPipe,
    ReportingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartsModule
  ],
   providers: [
      {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpInterceptorService,
        multi: true
      } ,
        DatePipe
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
