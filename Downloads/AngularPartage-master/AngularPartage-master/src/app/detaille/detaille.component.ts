import { Component, OnInit } from '@angular/core';
import {DeletService} from "../delet.service";
import {AuthenticationService} from "../auth.service";
import {Router} from "@angular/router";
import {Users} from "../Users";
import {Password} from "../Password";

@Component({
  selector: 'app-detaille',
  templateUrl: './detaille.component.html',
  styleUrls: ['./detaille.component.css']
})
export class DetailleComponent implements OnInit {

  // tslint:disable-next-line:ban-types
  employee: any;

  login: string;
 // change = false ;
  roles1: string[] = [];

  constructor(private deletService: DeletService, private authenticationService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.authenticationService.loadToken()
    this.employee = new Users();

    this.login = this.authenticationService.username;
    this.deletService.getEmployee(this.login)
      .subscribe(data => {
        console.log(data);
        this.employee = data;
      }, error => console.log(error));
  }

  get() {
    // tslint:disable-next-line:triple-equals
   return this.authenticationService.roles;
  }
  goto() {
    // @ts-ignore
    this.deletService.Save = false;
    this.deletService.changepass = true;
    this.deletService.Update = false;
    console.log("salam");
    console.log(this.deletService.changepass);
      console.log("salam");
    // @ts-ignore
    this.router.navigate('/create');

    console.log("by");
    console.log(this.deletService.changepass);
    console.log("by");
  }
  isChange() { return this.deletService.changepass ; }


}
