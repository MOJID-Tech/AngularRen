import { Component, OnInit } from '@angular/core';
import { Etatdemande } from '../Etatdemande';
import { DemandeService } from '../demande.service';
import { Observable } from "rxjs";
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-historetats',
  templateUrl: './historetats.component.html',
  styleUrls: ['./historetats.component.css']
})
export class HistoretatsComponent implements OnInit {
  id : number ; 
  demandesetats: Observable<Etatdemande []>;
  demandetat : Etatdemande;
  ngOnInit() { this.reloadData(); }
  constructor(private demandeService: DemandeService,private route:ActivatedRoute,private router: Router) { }

      reloadData() {

          this.id = this.route.snapshot.params['id'];
          this.demandesetats = this.demandeService.getEtatDemandeList(this.id);

      }




}
