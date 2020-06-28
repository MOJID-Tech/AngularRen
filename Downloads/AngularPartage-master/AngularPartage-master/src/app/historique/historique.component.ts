import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
         demandes: Observable<Demande[]>;
         demande : Demande ;
         selectedDevice : string;
         searchText : string ;

         ngOnInit() { this.reloadData(); }
         constructor(private demandeService: DemandeService,
         private router: Router) { }

          reloadData() {
             this.demandes = this.demandeService.getDemandeList();
           }


           onChange(newValue) {
               console.log(newValue);
               this.selectedDevice = newValue;

               // ... do other stuff here ...
           }



  getetats(id: number){
    this.router.navigate(['etats', id]);
  }

}
