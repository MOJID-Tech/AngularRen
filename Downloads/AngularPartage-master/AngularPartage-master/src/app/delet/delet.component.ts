import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { DeletService } from '../delet.service';
import {AuthenticationService} from "../auth.service";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {Users} from '../Users';

@Component({
  selector: 'app-delet',
  templateUrl: './delet.component.html',
  styleUrls: ['./delet.component.css']
})
export class DeletComponent implements OnInit {
  public Users: Observable<Users[]>;
  employee: Object;
  login: string;
  change = false ;
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
  }
  goto() {
    // @ts-ignore
    this.change = true;
    // @ts-ignore
    this.router.navigate('/create');
    this.change = false ;
  }
  ischange() { return this.change ; }
}



