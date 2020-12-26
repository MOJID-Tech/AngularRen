import { Component, OnInit } from '@angular/core';
import { Equipe } from '../equipe';
import { DepartementService } from '../departement.service';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import  { BudgetService } from '../budget.service';
import { Budgetdepartement } from '../budgetdepartement';
import { BudgetEquipe  } from '../budget-equipe';
@Component({
  selector: 'app-list-equipe',
  templateUrl: './list-equipe.component.html',
  styleUrls: ['./list-equipe.component.css']
})
export class ListEquipeComponent implements OnInit {

  id: number;
  arrmanager : number[] = [];
  arrhomanager : number[] = [];
  rest :  number[] = [];
  equipes: Observable<Equipe[]>;
  beneficeM : number[] = [];
  beneficeHM : number[] = [];
  budgetEquipe : BudgetEquipe [] = [];  



  ngOnInit() { this.reloadData(); }

  constructor(private departementService: DepartementService,private budgetService: BudgetService,private route: ActivatedRoute,private router: Router) { }

      reloadData() {


          this.id = this.route.snapshot.params['id'];
          this.equipes = this.departementService.getEquipeList(this.id);

      }



   save( idn :  number,montanth : number , montantm : number ) {

         let mh : string = String(montanth);
         let mm : string = String(montantm);
         let id  : string = String(idn);
         this.budgetService.createBudgetEquipe(id,mh,mm)
         .subscribe(data => console.log(data)


         , error => console.log(error));


      }


      getBeneficeM(id : number)
      {


           let benef :  number ;
           this.budgetService.getBeneficeManager(id).subscribe((value) => {
           benef=value;
           this.beneficeM[id]=benef;
           console.log(benef);
         });
         return this.beneficeM[id];
      }

      getBeneficeHM(id : number)
      {


           let benef :  number ;
           this.budgetService.getBeneficeHorsManager(id).subscribe((value) => {
           benef=value;
           this.beneficeHM[id]=benef;
           console.log(benef);
         });
         return this.beneficeHM[id];
      }

    
     getbudgetEquipe(id : number)
      {     
       
          this.budgetService.getBudgetEquipe(id).subscribe((value) => {
            //console.log(value);
            this.budgetEquipe[id]=value;
            if(this.budgetEquipe[id])
             {
               this.arrhomanager[id]=this.budgetEquipe[id].montant_horsmanager;
               this.arrmanager[id]=this.budgetEquipe[id].montant_manager;
               console.log(" budget equipe avec "+this.arrhomanager[id] + " avec " + this.arrmanager[id]);
             }
 
           });

         return this.budgetEquipe[id];
      }
    
    getrest(id : number)
    {

              this.rest[id]=this.budgetEquipe[id].budgetDepartements.montant - this.budgetEquipe[id].budgetDepartements.consommation;  
             return this.rest[id];
     }
}
