import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {DeletService} from '../delet.service';

import {AuthenticationService} from '../auth.service';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Demande} from "../demande";


@Component({
  selector: 'app-liste-primedg',
  templateUrl: './liste-primedg.component.html',
  styleUrls: ['./liste-primedg.component.css']
})
export class ListePrimedgComponent implements OnInit {

  public Userslist: any;
  pageSize  = 2 ; currentPage = 0;
 public  selectedDevice: string;
  roles1: string[] = [];


  tst: number ;

  totalPages: number; pages: Array<number> = []; mode = 'LIST'; currentImage = null;

  save1 = false;
  constructor(private deletService: DeletService, private authenticationService: AuthenticationService,
              private router: Router) { }
  ngOnInit() {   this.authenticationService.loadToken(); // @ts-ignore
    // @ts-ignore
                 this.reloadData(); ; }



  private reloadData() {
    this.save1 = false;

    this.deletService.getUsers(this.pageSize , this.currentPage)
       .subscribe(data => {

           this.Userslist = data.content;
           console.log(data.totalPages);
           this.totalPages = data.totalPages ;
           // tslint:disable-next-line:triple-equals
           if ( data.totalPages % this.pageSize != 0) {
           this.totalPages += 1;
           }
           this.pages = new Array(this.totalPages  );
         },
         (error) => console.log(error)); }

  gotoPage(i: number) { this.currentPage = i  ; this.reloadData(); }


  Save() {

   this.save1 = true ;
   this.deletService.Save = true;
    this.deletService.changepass = false;
   this.deletService.Update = false;
    // @ts-ignore
   this.router.navigate('/create');
   location.reload();
   this.save1 = false;
    // @ts-ignore

  }
  Update(id: number , user: string , pass: string) {

    this.save1 = true ;
    this.deletService.Save = false;
    this.deletService.changepass = false;
    this.deletService.Update = true;
    this.deletService.id = id;
    this.deletService.user = user;
    this.deletService.pass = atob(pass);
    console.log(this.deletService.pass);
    // @ts-ignore
    this.router.navigate('/create');
    location.reload();
    this.save1 = false;
    // @ts-ignore

  }

  issave() {
    return this.save1;
  }
  public parseJWT(token: string) {

    const jwtHelper = new JwtHelperService();
    const  objJWT = jwtHelper.decodeToken(token);
    return  this.roles1 = objJWT.roles;
  }

  desactive( id: number) {
    this.deletService.desactiveUser(id ). subscribe(data =>{
      console.log(data);
      location.reload();
    }, error => console.log(error));
    // @ts-ignore
    this.router.navigate('/Users-list');
  }

  active(id: number) {
    this.deletService.activeUser(id). subscribe(data =>{
      console.log(data);
      location.reload();
      }, error => console.log(error));
    // @ts-ignore
    this.router.navigate('/Users-list');
  }

  onChange(newValue: number) {
    console.log('holaaa');
    console.log(newValue);
    console.log('hello');
    // tslint:disable-next-line:triple-equals
    if (newValue == 1) {
      this.selectedDevice = 'DG' ;
      console.log(this.selectedDevice);
      // tslint:disable-next-line:triple-equals
    } else if (newValue == 2 ) {
      this.selectedDevice = 'Manager' ;
      console.log(this.selectedDevice);
      // tslint:disable-next-line:triple-equals
    } else if (newValue == 3 ) {
      this.selectedDevice = 'User' ;
      console.log(this.selectedDevice);
    }
    console.log('nooo' + this.selectedDevice);
  }

  addrole(id: number) {
    this.deletService.Addrole(id, this.selectedDevice). subscribe(data => {
      console.log(data);
        // @ts-ignore
      location.reload();
      // @ts-ignore
      },
      error => console.log(error));
    // @ts-ignore
  }
  get(id: number) {
    // tslint:disable-next-line:triple-equals
    if (typeof this.roles1[id] == 'undefined') {
         this.deletService.getroles(id).subscribe(data => {
          console.log(data);
          this.roles1[id] = data;
          console.log("imaneeeeeeeee");
          console.log(this.roles1);
          console.log("imaneeeeeeeee");
          },
        (error) => console.log(error));
    }
    return this.roles1[id];
  }




  removerole(id: number) {
    this.deletService.Removerole(id, this.selectedDevice). subscribe(data =>{
      console.log(data);
      location.reload();
    }, error => console.log(error));
    // @ts-ignore
  }


}
