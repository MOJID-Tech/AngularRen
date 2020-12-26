import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
import { Salarie } from '../salarie';
import { Users } from '../Users';
import {AuthenticationService} from '../auth.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {
  constructor(private demandeService: DemandeService,  private authenticationService: AuthenticationService,
              private router: Router) { }

  message: string;
  envoye : number;
  /*
    constructor(private helloWorldService: HelloWordService) { }

    ngOnInit() {

      console.log("HelloWorldComponent");
      this.helloWorldService.helloWorldService().subscribe( (result) => {
        this.message = result.content;
      });
      this.envoye=0;
    }

  constructor() {}
  ngOnInit() {}

  */
  demande: Demande = new Demande();
  submitted = false;
  users: Users ;
  // tslint:disable-next-line:ban-types

  public ngOnInit() {
    this.authenticationService.loadToken();
    console.log(this.authenticationService.jwt);
    console.log(this.authenticationService.username);
    console.log(this.authenticationService.roles);
  }

  /*newDemande(): void {
      this.submitted = false;
      this.demande = new Demande();
      this.demande.salarie = this.users.salarie;
    }*/


   opensweetalert()
  {
    
  }
  public  save() {

    this.demande.date_debut = new Date();
    // var test:number = 40 ;
    // this.users.username = this.authenticationService.username;
    // @ts-ignore
    // tslint:disable-next-line:max-line-length
    this.demandeService.createDemandee(this.demande.montant_net, this.authenticationService.username). subscribe(data => this.envoye=1, error => console.log(error));
    // this.demande = new Demande();
    this.gotoList();    }

  public onSubmit() {
    this.submitted = true;
    this.save();
    //swal("A Basic JS alert by a plug-in");
  }

  public  gotoList() {
    ///this.router.navigate(['/liste-prime']);
  }
}



