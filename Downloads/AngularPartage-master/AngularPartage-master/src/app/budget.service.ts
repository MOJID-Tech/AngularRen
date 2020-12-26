import {Injectable, OnInit} from '@angular/core';
import { HttpClient , HttpParams , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthenticationService} from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class BudgetService implements OnInit {
     constructor(private http: HttpClient , private authenticationService: AuthenticationService  ) {}
      public montant_budget :  number[]=[];
      headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*'});

       private baseUrlM = 'http://localhost:8050/budgetequipe/BeneficeManager';

       private baseUrlH = 'http://localhost:8050/budgetequipe/BeneficeHorsManager';

       private baseUrlBD = 'http://localhost:8050/budget/BudgetDepartement';

        private baseUrlBE = 'http://localhost:8050/budgetequipe/BudgetEquipe';
  // tslint:disable-next-line:contextual-lifecycle
  ngOnInit(): void {
    this.authenticationService.loadToken();
  }


      savebudget(id: number,value : number)
      {
           this.montant_budget[id]=value;
      }

      getbudget(id : number)
      {
        return this.montant_budget[id];
      }
      createBudgetDepartement(id: string, montant: string ) {
        const params = new HttpParams()
          .set('montant', montant)
          .set('IDDepartement', id);

        /*const headers = new HttpHeaders()
          .set('Authorization', 'Basic xpto')
          .set('Content-Type', 'application/x-www-form-urlencoded');

        const httpOptions = {
          headers,
          params

        };*/
        const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});

        return this.http.post<Response>('http://localhost:8050/budget',  params , {headers} );
      }



       createBudgetEquipe(id: string, montantH: string , montantM: string) {
              const params = new HttpParams()
                .set('montantH', montantH)
                .set('montantM', montantM)
                .set('IDEquipe', id );

           /*   const headers = new HttpHeaders()
                .set('Authorization', 'Basic xpto')
                .set('Content-Type', 'application/x-www-form-urlencoded');

              const httpOptions = {
                headers,
                params

              };*/
         const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});

              return this.http.post<Response>('http://localhost:8050/budgetequipe',  params , {headers} );
       }
       getBeneficeManager(id: number): Observable<any> {
         const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
         return this.http.get(`${this.baseUrlM}/${id}`, {headers});
       }
       getBeneficeHorsManager(id: number): Observable<any> {
         const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
         return this.http.get(`${this.baseUrlH}/${id}`, {headers});
       }

       getBudgetDepartement(id: number ): Observable<any> {
         const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
         return this.http.get(`${this.baseUrlBD}/${id}`,{headers});
       }


       private baseUrlBDM = 'http://localhost:8050/budget/MontantBudgetDepartement';
       getMontantBudgetDepa(id:number): Observable<any> {
                       const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
                       return this.http.get(`${this.baseUrlBDM}/${id}`, {headers});
       }

        getBudgetEquipe(id: number ): Observable<any> {
          const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
          return this.http.get(`${this.baseUrlBE}/${id}`, {headers});
       }

         private baseUrlCE = 'http://localhost:8050/benefices/ContributionEquipe';
        getContributionEquipe(id:number): Observable<any> {
         const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
         return this.http.get(`${this.baseUrlCE}/${id}`, {headers});
        }




        private baseUrlCSE = 'http://localhost:8050/benefices/ContributionSalarie';
        getContrSalarieEquipe(id :number , idequipe : number): Observable<any> {
             const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
             return this.http.get(`${this.baseUrlCSE}/${id}/${idequipe}`, {headers});
       }


       private baseUrlCEQ = 'http://localhost:8050/benefices/Equipes';
       getEquipeSalarie(id :number): Observable<any> {
                    const  headers = new HttpHeaders({authorization : 'Bearer ' + this.authenticationService.jwt});
                    return this.http.get(`${this.baseUrlCEQ}/${id}`, {headers});
       }
}
