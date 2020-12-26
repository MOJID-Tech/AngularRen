import { HttpClient , HttpHeaders , HttpParams} from '@angular/common/http';
import {Injectable, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import {AuthenticationService} from './auth.service';

@Injectable({
  providedIn: 'root',
})

export class DemandeService implements OnInit {
  constructor(private http: HttpClient, private authenticationService: AuthenticationService  ) {}
  private Urlvalidation = 'http://localhost:8050/demande/validate';
  private Urlrefus = 'http://localhost:8050/demande/refuse';

  private baseUrlEtat = 'http://localhost:8050/demande/etatdemande';
  // tslint:disable-next-line:ban-types
  /* createDemande(demande: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, demande);
   }*/

  // tslint:disable-next-line:ban-types
  public  createDemandee(montant: string , login: string) {
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    const params = new HttpParams()
      .set('MN', montant)
      .set('login', login );
    /*   const headers = new HttpHeaders()
       .set('Authorization', 'Basic xpto')
       .set('Content-Type', 'application/x-www-form-urlencoded');

    const httpOptions = {
       headers,
       params

     };*/
    // return this.http.post('http://localhost:8050/demande', {params} , new FormData(), headers);
    return this.http.post<Response>('http://localhost:8050/demande',  params, {headers} );
  }
  public validate( id: number , montantmanager: string, montantpdg: string, login: string) {

    const params = new HttpParams()

      .set('Prim_Manager', montantmanager)
      .set('Prim_DG', montantpdg )
      .set('login', login);
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    /* const headers = new HttpHeaders()
       .set("Authorization", "Basic xpto")
       .set("Content-Type", "application/x-www-form-urlencoded");

     const httpOptions = {
       headers,
       params,

     };*/
    // return this.http.post('http://localhost:8050/demande', {params} , new FormData(), headers);
    return this.http.post<Response>(`${this.Urlvalidation}/${id}`,  params, {headers});
  }
  public refuse( id: number , montantmanager: string, montantpdg: string, login: string) {
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    const params = new HttpParams()
      .set('Prim_Manager', montantmanager)
      .set('Prim_DG', montantpdg )
      . set('login', login);

    /*  const headers = new HttpHeaders()
        .set("Authorization", "Basic xpto")
        .set("Content-Type", "application/x-www-form-urlencoded");

      const httpOptions = {
        headers,
        params,

      };*/
    // return this.http.post('http://localhost:8050/demande', {params} , new FormData(), headers);
    return this.http.post<Response>(`${this.Urlrefus}/${id}`,  params, {headers});
  }

  public getDemandeList2(): Observable<any> {
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    return this.http.get('http://localhost:8050/demande/Manager', {headers});
  }
  public getDemandeList(): Observable<any> {
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    return this.http.get('http://localhost:8050/demande/alldemandes' ,{headers});
  }
  getEtatDemandeList(id: number): Observable<any> {
    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
    return this.http.get(`${this.baseUrlEtat}/${id}` , {headers});
  }
  public  getDemandeListdg(): Observable<any> {
    const  headers = new HttpHeaders({authorization : "Bearer " + this.authenticationService.jwt});
    return this.http.get("http://localhost:8050/demande/DG", {headers});
  }


  // tslint:disable-next-line:contextual-lifecycle
   ngOnInit(): void {
    this.authenticationService.loadToken();
  }


}
