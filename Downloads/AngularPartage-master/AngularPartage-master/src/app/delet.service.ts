import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Message } from './message';
import {Observable} from 'rxjs';
import {AuthenticationService} from './auth.service';
import {Password} from "./Password";

@Injectable({
  providedIn: 'root'
})
export class DeletService implements OnInit {

  constructor(private http: HttpClient ,  private authenticationService: AuthenticationService) { }

  // tslint:disable-next-line:contextual-lifecycle
  private   urlput = 'http://localhost:8050/users';
  private   urlac = 'http://localhost:8050/users/activate';
  private   urldesa = 'http://localhost:8050/users/deactivate';
  public id:number;
  public Update= false;
  public Save ;
  public user;
  public  pass: string;
  public changepass = false;


  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    this.authenticationService.loadToken();
  }
    getUsers(size: any, page: any): Observable<any> {
      const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
      return this.http.get('http://localhost:8050/users?pageIndex=' + page + '&size=' + size  , {headers});

  }

  SaveUser(username: string, password: string, email: string) {
    const params = new HttpParams()
      .set('login', username)
      .set('password', password )
      .set('email', email );
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    // @ts-ignore
    return this.http.post<Response>('http://localhost:8050/users', params  , {headers});
  }

  UpdateUser(id: number, username: string, password: string) {
    const params = new HttpParams()
      .set('login', username)
      .set('password', password );
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    // @ts-ignore
    return this.http.put<Response>(`${this.urlput}/${id}`, params  , {headers});

  }

  desactiveUser(id: number) {
    const params = new HttpParams()
      .set('active', '0');
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    // @ts-ignore
    return this.http.post<Response>(`${this.urlput}/${id}/deactivate`, params,  {headers});


  }

  activeUser(id: number) {
    const params = new HttpParams()
      .set('active', '1');
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});

    return this.http.post<Response>(`${this.urlput }/${id}/activate`, params , {headers});

  }

  Addrole(id: number, selectedDevice: string) {
    const params = new HttpParams()
      .set('role', selectedDevice);
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});

    return this.http.post<Response>(`${this.urlput }/${id}/addrole`, params , {headers});

  }

  Removerole(id: number, selectedDevice: string) {
    const params = new HttpParams()
      .set('role', selectedDevice);
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});

    // @ts-ignore
    return this.http.delete(`${this.urlput }/${id}?role=` + selectedDevice , {headers} );
  }
  getroles(id): Observable<any> {
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    return this.http.get( `${this.urlput }/${id}/roles` , {headers});


  }

  getEmployee(login: string) {
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    return this.http.get( `${this.urlput }/user?login=` + login  , {headers});
  }

  passchange(mypass: Password) {

    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    // @ts-ignore
    return this.http.put( `${this.urlput }/changepassword` , mypass , {headers});
  }
}
