import { Component, OnInit , Pipe} from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../departement';
import { Salarie } from '../salarie';
import { Equipe } from '../equipe';
import { Budgetdepartement } from '../budgetdepartement';
import { DepartementService } from '../departement.service';
import { Observable } from 'rxjs';
import  { BudgetService } from '../budget.service';
import { map } from 'rxjs/operators';
import { ChartDataSets,ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
    departement : Departement;
    equipe : Equipe ;
    departements: Observable<Departement[]>;
    equipes: Observable<Equipe[]>;
    equipess: Observable<Equipe[]>;
    mabels : any;
    nomequipes : any;
    idequipes : any;
    benequipes : number[];
    ndepartements : any;
    mapben : number[] = [];
    selectedDevice : number;
    counterequipe :  number  ;
    selectedEquipe :  number ;
    idsalaries : any;
    salaries : any;
    allsalaries :  Observable<Salarie[]>;
    salarie : Salarie;
    salariequipes : number [] =[];
    countersalequipe:number;
    selectedSalarie : number;
    equipesfound : number [] =[];
    bensalariequipe  : number [] ;
    ngOnInit() { this.reloadData();}
    constructor(private departementService: DepartementService,private budgetService: BudgetService,
    private router: Router) {


         monkeyPatchChartJsTooltip();
         monkeyPatchChartJsLegend();


     }




    get(id : number)
     {

       // if(typeof this.mapben[id] == "undefined")

               // console.log("id recuperer",id);
               // let benef :  number ;

                let n : number;
                this.departementService.getBene(id).subscribe((value) => {

                 n = id - 1;
                 this.mapben[n]=value;
                 //res.map(value => { return value });
               });

           return  this.mapben[n];
       }


      reloadData() {

      this.departementService.getDepartementList().subscribe(res =>
       {

                this.mabels=res.map(item => { return item.nom_depar });
                this.ndepartements=res.map(item => { return item.id });

                for(var i=0;i<this.ndepartements.length;i++)
                {
                  console.log("n ° departement",this.ndepartements[i]);
                   this.get(this.ndepartements[i]);

                }
                //console.log("benefices",this.mapBenefice);
               console.log("benefices",this.mapben);

       });

     this.departements = this.departementService.getDepartementList();

    }

     // ADD CHART OPTIONS.
       chartOptions = {
         responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
       }


       chartData = [
         {
           label: 'departements',
           data: this.mapben
         }
       ];

       // CHART COLOR.
       colors = [
         { // 1st Year.
           backgroundColor: 'rgba(30, 169, 224, 0.8)'
         }
       ]

       // CHART CLICK EVENT.
       onChartClick(event) {

         this.reloadData();

         console.log(event);
       }



    pieChartOptions: ChartOptions = {
        responsive: true,
        legend: {
          position: 'top',
        },
        tooltips: {
          enabled: true,
          mode: 'single',
          callbacks: {
            label: function (tooltipItems, data) {
              return data.datasets[0].data[tooltipItems.index] + ' %';
            }
          }
        },
      };

      pieChartLabels: Label[] = this.nomequipes;

      pieChartData: number[] = [78.09, 20.95, 0.93, 0.03];

      pieChartType: ChartType = 'pie';

      pieChartLegend = true;

      pieChartPlugins = [];

      pieChartColors = [
        {
          backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
        },
      ];


     onChange(newValue) {
               console.log(newValue);
               this.selectedDevice = newValue;
               this.counterequipe=0;
               this.equipes = this.departementService.getEquipeList(this.selectedDevice);
               console.log("change selec",this.selectedDevice);
              this.benequipes  = [];
               this.departementService.getEquipeList(this.selectedDevice).subscribe(res =>
                {

                                    this.nomequipes=res.map(item => { return item.nom_equipe });
                                    console.log(" equipes ",this.nomequipes);
                                    this.idequipes=res.map(item => { return item.id });

                                     console.log("lenght des benefices equipe avant remplissages",this.benequipes.length);

                                    for(var i=0;i<this.idequipes.length;i++)
                                    {
                                       console.log("n ° departement",this.idequipes[i]);
                                       if(this.idequipes[i]!=null)
                                       {
                                       this.getbenequipe(this.idequipes[i]);
                                       this.counterequipe=this.counterequipe+1;
                                       }
                                    }

                                    console.log(this.counterequipe);

                                   console.log("id equipes",this.idequipes);
                                   console.log("table id equipe",this.idequipes.length);
                                   //console.log("lenght des benefices equipes",this.benequipes.length);
                                   console.log("benefices",this.benequipes);
                                   var arr = [];
                                   for(var i=1; i<=4; i++) {
                                      arr.push(i.toString());
                                   }
                });


               }

       getbenequipe(id : number)
       {
                   let n = this.counterequipe;
                   this.budgetService.getContributionEquipe(id).subscribe((value) => {
                        this.benequipes[n]=value;
                    });

                   console.log("benefice equipe  ",this.benequipes[n]," dans departement n",id);
                   return this.benequipes[n];

       }




      onChangeEquipe(newValue) {
              this.selectedEquipe = newValue;
              this.countersalequipe=0;
              this.departementService.getteam(this.selectedEquipe).subscribe(res =>
              {

                 this.salaries=res.map(item => { return item.nom_salarie + " " +item.prenom_salarie  });
                 this.idsalaries=res.map(item => { return item.id });
                 for(var i=0;i< this.idsalaries.length;i++)
                  {
                       this.salariequipes[this.countersalequipe]=this.getBeneficeSalarie(this.idsalaries[i],this.selectedEquipe);
                       this.countersalequipe=this.countersalequipe+1;
                  }


              });


          this.allsalaries=this.departementService.getteam(this.selectedEquipe) ;

      }


      getBeneficeSalarie(idsalarie :  number , idequipe : number)
      {
               let n = this.countersalequipe;
               let res  : number;
               this.budgetService.getContrSalarieEquipe(idsalarie,idequipe).subscribe((value) => {
               this.salariequipes[n]=value;
              });
              console.log("benefice salarie", idsalarie  ," ",this.salariequipes," dans  equipe",idequipe);
              return this.salariequipes[n];
      }



     /*
       chartDataSalariEquipe = [
         {

           label: 'Equipes',
           data: this.bensalariequipe
         }
       ];

       */
       //  barChartType: ChartType = 'bar';
        // barChartLegend = true;
        // barChartPlugins = [];

         barChartDataa: ChartDataSets[] = [
           { data: this.bensalariequipe }
         ];
    barChartOptions: ChartOptions = {
        responsive: true,
      };
     // barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
      barChartType: ChartType = 'bar';
      barChartLegend = true;
      barChartPlugins = [];
     /*
      barChartData: ChartDataSets[] = [
        { data: [45, 37, 60, 70, 46, 33], label: 'Best Fruits' }
      ];
      */
      onChangeSalarie(newValue)
      {
            this.selectedSalarie = newValue;
            this.bensalariequipe = [];
            this.budgetService.getEquipeSalarie(this.selectedSalarie).subscribe((value) => {
                  console.log("all equipes avant",value);
                  this.equipesfound=value;
             });
                  console.log("all equipes",this.equipes);
                  for(var i=0;i<this.equipesfound.length;i++)
                  {
                     this.bensalariequipe[i]=this.getBeneficeSalarie(this.selectedSalarie,this.equipesfound[i]);

                  }



      }


}
