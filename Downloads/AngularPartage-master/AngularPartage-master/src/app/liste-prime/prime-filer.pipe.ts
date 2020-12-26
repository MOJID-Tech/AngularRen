import {Pipe, PipeTransform} from '@angular/core';
import { Demande } from '../demande';
import {DatePipe} from '@angular/common';
import {formatDate} from '@angular/common';


@Pipe(
{
  name : 'primeFilter'
}
)
export class PrimeFilterPipe implements PipeTransform
{
    
    multpile(prime : number)
    { 
       return prime * 100;
    } 
    
   

   private datePipe: DatePipe;
   transform(demandes : Demande [], searchterm : string,nombre : number) :  Demande []
   {
       console.log("search term : ",searchterm," nombre ",nombre);

       if(!demandes || !searchterm)
       {
        console.log("not exist");
         return demandes ;
       }

     if(nombre==1)
       return demandes.filter(demande => demande.montant_net.toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);

      else if(nombre==2)
       return demandes.filter(demande => demande.salarie.nomsalarie.toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);

          // par prime maximale

      else if(nombre ==3)
      {
       // return demandes.filter(demande =>  demande.prime_max==parseFloat(searchterm) );
        return demandes.filter(demande => demande.prime_maximale.toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);

      }

      // par prime manager
      else if(nombre==4)
      {
         console.log(" test : ",parseFloat(searchterm));
      return demandes.filter(demande => demande.prime_manager.toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);

      }
           // par prime DG
     else if(nombre==5)
     {
          console.log(" test : ",parseFloat(searchterm));
//          return demandes.filter(demande =>  demande.prime_DG==parseFloat(searchterm) );
      return demandes.filter(demande => this.multpile(demande.pourcentageContribution).toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);

     }
         // par Date demande
     else if(nombre==6)
          {
          return demandes.filter(demande => formatDate(demande.date_debut, 'yyyy', 'en-US').toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);
          }


     return demandes ;
   }

}
