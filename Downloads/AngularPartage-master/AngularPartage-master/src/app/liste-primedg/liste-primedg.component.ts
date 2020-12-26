import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-liste-primedg',
  templateUrl: './liste-primedg.component.html',
  styleUrls: ['./liste-primedg.component.css']
})
export class ListePrimedgComponent implements OnInit {

  demandes: Observable<Demande[]>;

      ngOnInit() { this.reloadData(); }
      constructor(private demandeService: DemandeService,
      private router: Router) { }

       reloadData() {
          this.demandes = this.demandeService.getDemandeListdg();
        }

}
