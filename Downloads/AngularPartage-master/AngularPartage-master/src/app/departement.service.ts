import {Injectable, OnInit} from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators' ;
import {AuthenticationService} from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class DepartementService implements  OnInit {


   constructor(private http: HttpClient , private authenticationService: AuthenticationService ) {}
  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    this.authenticationService.loadToken();
  }
     getDepartementList(): Observable<any> {
       const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
       return this.http.get('http://localhost:8050/departements/ListDepar',{headers});
     }


   private baseUrl = 'http://localhost:8050/departements/Benefi';
   getBene(id : number): Observable<any> {
     const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});

     return this.http.get(`${this.baseUrl}/${id}`, {headers});
   }

   private baseUrlEquipe = 'http://localhost:8050/departements/equipes';
   getEquipeList(id : number) : Observable<any> {
     const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
     return this.http.get(`${this.baseUrlEquipe}/${id}`, {headers});
   }

     private baseUrlSal = 'http://localhost:8050/departements/membres';
     getmembres(id : number): Observable<any> {
          const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
          return this.http.get(`${this.baseUrlSal}/${id}`, {headers});
      }
     private baseUrlMan = 'http://localhost:8050/departements/manager';
     getmanagers(id : number): Observable<any> {
          const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
          return this.http.get(`${this.baseUrlMan}/${id}`, {headers});
      }

      private baseUrlTeam = 'http://localhost:8050/departements/team';
      getteam(id : number): Observable<any> {
              const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
              return this.http.get(`${this.baseUrlTeam}/${id}`, {headers});
      }

}
