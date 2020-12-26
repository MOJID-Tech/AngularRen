import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {
  title = 'Remuneration';
  constructor(private authenticationService: AuthenticationService) {
  }
  public  ngOnInit(): void {
    this.authenticationService.loadToken();
  }
}
