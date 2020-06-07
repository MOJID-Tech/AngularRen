import { Injectable } from '@angular/core';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DemandeService {

   private baseUrl = 'http://localhost:8050/demande/DG';
   constructor(private http: HttpClient) {}

   createDemande(demande: Object): Observable<Object> {
        return this.http.post(`${this.baseUrl}`, demande);
   }

    createDemandee(montant : number , login : string): Observable<Object> {

        var mont = montant.toString();
        return this.http.post('http://localhost:8050/demande',
        {
           params : new HttpParams().set('montant_net',mont).set('login',login)

        }
);
    }

    getDemandeList(): Observable<any> {
       return this.http.get('http://localhost:8050/demande/Manager');
     }


       getDemandeListdg(): Observable<any> {
            return this.http.get('http://localhost:8050/demande/DG');
      }

}



