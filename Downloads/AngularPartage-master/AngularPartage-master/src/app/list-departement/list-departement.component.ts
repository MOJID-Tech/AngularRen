import { Component, OnInit , Pipe} from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../departement';
import { Budgetdepartement } from '../budgetdepartement';

import { DepartementService } from '../departement.service';
import { Observable } from 'rxjs';
import  { BudgetService } from '../budget.service';
import {AuthenticationService} from '../auth.service';
@Component({
  selector: 'app-list-departement',
  templateUrl: './list-departement.component.html',
  styleUrls: ['./list-departement.component.css']
})


export class ListDepartementComponent implements OnInit {

  arr: number[] = [];
  nom: string ;
  budgetdepartement: Budgetdepartement [] = [] ;
  departement: Departement;
  test: number [] = [];
  searchText: string;
  selectedValue: string;
  mapBenefice: number[] = [];
  departements: Observable<Departement[]>;


  ngOnInit() { this.reloadData(); this.authenticationService.loadToken(); }
     constructor(private departementService: DepartementService, private budgetService: BudgetService,
                 private authenticationService: AuthenticationService, private router: Router) { }

  reloadData() {
    this.departements = this.departementService.getDepartementList();
  }



 /* print() {

    console.log(' selected value ', this.nom);
    this.departements = this.departementService.SearchList(this.nom, this.searchText);



  }*/



  get(id: number) {

    // console.log(this.mapBenefice[id]);
    if (typeof this.mapBenefice[id] == 'undefined') {

      let benef: number ;
      this.departementService.getBene(id).subscribe((value) => {
        benef = value;
        this.mapBenefice[id] = benef;

      });

    }
    return this.mapBenefice[id];
  }



  getbudgetDepartement(id: number) {
    if (this.test[id] !== 1) {

      this.budgetService.getBudgetDepartement(id).subscribe((value) => {
        // console.log(value);

        this.budgetdepartement[id] = value;
        if (this.budgetdepartement[id]) {
          this.arr[id] = this.budgetdepartement[id].montant;
        }

      });
      this.test[id] = 1;
    }
    return this.budgetdepartement[id];

  }

  getequipes(id: number) {
    this.router.navigate(['equipes', id]);
  }


  save(idn: number, montantn: number ) {

    const montant: string = String(montantn);
    const id: string = String(idn);

    this.budgetService.createBudgetDepartement(id, montant)
      .subscribe(data =>  this.test[id] = 0
        , error => console.log(error.stack)  );

    this.test[id] = 0;
    // this.router.navigate(['list-departement']);
    location.reload();

  }



}
