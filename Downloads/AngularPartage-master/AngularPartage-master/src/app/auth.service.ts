import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {JwtHelperService} from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  // BASE_PATH: 'http://localhost:8080'
  public USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser';
  public  jwt: string;
  public username: string;
  public password: string;
  public  roles: string[];

  constructor(private http: HttpClient) {

  }
  public authenticationService2(username: string, password: string) {
    const params = new HttpParams()
      .set('login', username)
      .set('password', password );
    // return this.http.post('http://localhost:8050/demande', {params} , new FormData(), headers);
    return this.http.post<Response>(`http://localhost:8050/users/authenticate`, params , {observe : 'response'} );
  }

  /*public createBasicAuthToken(username: String, password: String) {
     return 'Basic ' + window.btoa(username + ":" + password)
   }*/

  /* public  registerSuccessfulLogin(username, password) {
      sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, username)
    }*/

  public logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
    localStorage.removeItem('token');
    this.initParams();
  }
  public  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

  public isUserLoggedIn() {
    const user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    if (user === null) { return false; }
    return true;
  }

  /*public getLoggedInUserName() {
     let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
     if (user === null) return ''
     return user
   }*/

  public saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }
  public parseJWT() {
    const jwtHelper = new JwtHelperService();
    const  objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.sub;

    this.roles = objJWT.roles;
  }
  public  isAdmin() {
    return this.roles.indexOf('Admin') >= 0;
  }
  public  isUser() {
    return this.roles.indexOf('User') >= 0;
  }
  public  isManager() {
    return this.roles.indexOf('Manager') >= 0;
  }
  public  isDG() {
    return this.roles.indexOf('DG') >= 0;
  }
  public  isRH() {
    return this.roles.indexOf('RH') >= 0;
  }
  public isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser() || this.isManager());
  }

  public loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }
  public isResp() {
    return ( this.isManager() || this.isDG() || this.isAdmin()) ;
  }
}
