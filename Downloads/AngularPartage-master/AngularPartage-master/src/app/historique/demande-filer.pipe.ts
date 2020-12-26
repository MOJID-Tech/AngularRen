import {Pipe, PipeTransform} from '@angular/core';
import { Demande } from '../demande';
import {DatePipe} from '@angular/common';
import {formatDate} from '@angular/common';


@Pipe(
{
  name : 'demandeFilter'
}
)

export class DemandeFilterPipe implements PipeTransform
{


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
      return demandes.filter(demande => demande.prime_pdg.toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);

     }
           // par prime Finale
      else if(nombre==6)
          return demandes.filter(demande => demande.prime_finale.toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);
           // par Date demande
           // par date finale
     else if(nombre==7)
          {

          return demandes.filter(demande => formatDate(demande.date_debut, 'yyyy', 'en-US').toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1)  || demandes.filter(demande => formatDate(demande.date_fin, 'yyyy', 'en-US').toString().toLowerCase().indexOf(searchterm.toLowerCase()) !== -1);
;
          //return demandes.filter(demande => demande.date_fin.getFullYear()==parseInt(searchterm) );
          //return demandes.filter(demande => datePipe.transform(demande.date_fin, 'yyyy')==parseInt(searchterm) );

          }


     return demandes ;
   }

}
