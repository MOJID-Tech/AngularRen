import { Component, OnInit , Pipe} from '@angular/core';
import { Equipe } from '../equipe';
import { DepartementService } from '../departement.service';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
import  { BudgetService } from '../budget.service';
import { Budgetdepartement } from '../budgetdepartement';
import { BudgetEquipe  } from '../budget-equipe';
import { map } from 'rxjs/operators';

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
  test : number [] = [];
  budget_departement : Budgetdepartement ;
  counter :  number ;
  montantbd : number;
  testCon : number[] = [];
  testM : number[] = [];
  testHM : number[] = [];
  ngOnInit() { this.reloadData(); }

  constructor(private departementService: DepartementService,private budgetService: BudgetService,private route: ActivatedRoute,private router: Router) { }
      reloadData() {

          this.id = this.route.snapshot.params['id'];
          this.equipes = this.departementService.getEquipeList(this.id);
          this.budgetService.getMontantBudgetDepa(this.id).subscribe((value) => {
                    this.montantbd=value;
                    console.log("value bmonta",this.montantbd);
          });

         this.counter=0.0;

      }



   save( idn :  number,montanth : number , montantm : number ) {

         let mh : string = String(montanth);
         let mm : string = String(montantm);
         let id  : string = String(idn);
         this.budgetService.createBudgetEquipe(id,mh,mm)
         .subscribe(data => console.log(data)
         , error => console.log(error));
        location.reload();

      }



      getBeneficeM(id : number)
      {

      if(typeof this.beneficeM[id] == "undefined")
         {
           let benef :  number ;
           this.budgetService.getBeneficeManager(id).subscribe((value) => {
           benef=value;
           this.beneficeM[id]=benef;
           console.log(benef);
         });

         }
         return this.beneficeM[id];
      }

      getBeneficeHM(id : number)
      {

    if(typeof this.beneficeHM[id] == "undefined")
      {
           let benef :  number ;
           this.budgetService.getBeneficeHorsManager(id).subscribe((value) => {
           benef=value;
           this.beneficeHM[id]=benef;
           console.log(benef);
         });
       }
         return this.beneficeHM[id];
      }

     getbudgetEquipe(id : number)
      {
            if(this.test[id] !== 1)
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
                 this.test[id]=1;
             }
              return this.budgetEquipe[id];
        }

    getrest(id: number)
    {
          if(this.testCon[id] !== 1)
          {
          console.log("rcuper",this.montantbd);
          let ind : number ;
          ind=this.counter;
          if(ind==0)
          {
            this.rest[ind]=this.montantbd;
          }
          this.rest[id]=this.rest[ind] - (this.arrmanager[id]+this.arrhomanager[id]);
          console.log("rest",this.rest[id]);
          this.counter=id;
          this.testCon[id]=1;
          }
          return this.rest[id];
     }
}
