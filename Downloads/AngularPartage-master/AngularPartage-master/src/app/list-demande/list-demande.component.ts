import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Demande } from '../demande';
import { DemandeService } from '../demande.service';
import { Observable } from "rxjs";
import {DeletService} from "../delet.service";
import {AuthenticationService} from "../auth.service";
import {Password} from '../Password';
@Component({
  selector: 'app-list-demande',
  templateUrl: './list-demande.component.html',
  styleUrls: ['./list-demande.component.css']
})
export class ListDemandeComponent implements OnInit {
  // demandes: Observable<Demande[]>;
   // Save = true ;
   Role = false ;

  public usernam: string;
  public passwor: string;
  public email: string;
  public email2: string;
  public errorMessage = 'Invalid Credentials';
  public pass1: string;
  public pass2: string;
  public login: string;
  passchange: Password;
  // public change = false;
  public loginSuccess = false;
  constructor(private deletService: DeletService, private authenticationService: AuthenticationService,
              private router: Router  ) { }
  ngOnInit() {  // this.authenticationService.loadToken();
     }



    reloadData() {
     //  this.demandes = this.demandeService.getDemandeList();
     }
     issave() { return this.deletService.Save ; }
     isupdate() { return this.deletService.Update ; }
     isRole() { return this.Role; }
     //ispass() { return this.passwor ; }
     save() {
       // this.Save = true;
       // tslint:disable-next-line:max-line-length
       this.deletService.SaveUser(this.usernam, this.passwor , this.email ). subscribe(data =>{
         console.log(data);
         location.reload();
       } , error => console.log(error));
       // @ts-ignore
     }

  addrole() {
    this.Role = true;

  }
  removerole() {
   // this.Role = true;

  }
  update(id: number , login: string , mdp : string) {
    // this.Save = true;
    // tslint:disable-next-line:max-line-length
    this.deletService.UpdateUser( id , login, mdp ). subscribe(data =>{
      console.log(data);
      location.reload();
    } , error => console.log(error));
    // @ts-ignore
  }

  ischange() {
    return this.deletService.changepass;
  }

  Change(mdp1: string , mdp2: string) {
    // @ts-ignore
    this.passchange = new Password();
    this.passchange.currentPassword = mdp1;
    this.passchange.newPassword = mdp2;
    console.log("hiho");
    console.log(mdp1);
    console.log(mdp2);
    console.log(this.passchange);
    this.deletService.passchange(this.passchange). subscribe(data =>{
      console.log(data);
      location.reload();
    } , error => console.log(error));
    // @ts-ig


  }

  isreset() {
    console.log("isisis");
    console.log(this.authenticationService.resetpass);
    return this.authenticationService.resetpass;
  }
  issaveupdate() {
    return (this.deletService.Update || this.deletService.Save );
  }

  reset(email2: string , login: string ) {

    this.authenticationService.reset(email2 , login). subscribe(data => {
      console.log(data);
      this.authenticationService.resetpass = false ;
      location.reload();
    } , error => console.log(error));
    // @ts-ignore
  }
}
