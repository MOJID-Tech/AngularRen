import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {AuthenticationService} from '../auth.service';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
@Component({
  selector: 'app-liste-prime',
  templateUrl: './liste-prime.component.html',
  styleUrls: ['./liste-prime.component.css'],
})
export class ListePrimeComponent implements OnInit {

  public demandes: Observable<Demande[]>;
  public  constructor(private demandeService: DemandeService, private authenticationService: AuthenticationService,
                      private router: Router) { }
  public   ngOnInit() { this.authenticationService.loadToken(); this.reloadData(); }

  public  reloadData() {
    if ( this.isDG()) {
      this.demandes = this.demandeService.getDemandeListdg(); } else {
      this.demandes = this.demandeService.getDemandeList2();
    }
  }
  public ValidatePrim1(id: number, montantmanager: string, montantpdg: string , login: string) {

    this.demandeService.validate(id, montantmanager, montantpdg, login)
      .subscribe(
        (data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error));
  }
  public RefusePrim1(id: number , montantmanager: string, montantpdg: string, login: string) {
    this.demandeService.refuse(id, montantmanager, montantpdg, login)
      .subscribe(
        (data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error));
  }
  public  isAdmin() {
    return this.authenticationService.isAdmin();
  }
  public  isUser() {
    return this.authenticationService.isUser();
  }
  public  isManager() {
    return this.authenticationService.isManager();
  }
  public  isDG() {
    return this.authenticationService.isDG();
  }
  public  isRH() {
    return this.authenticationService.isRH();
  }
  public  isAuthenticated() {
    return this.authenticationService.isAuthenticated();
  }

}
