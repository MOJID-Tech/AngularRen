import { Demande } from './demande';
import { Users } from './Users';
import { Appartient  } from './appartient';


export class Salarie {
 id :  number;
 nomsalarie: string ;
 prenom_salarie : string ;
 emailsalarie : string ;
 tel_salarie : string ;
 date_naissance : Date ;
 demandes : Demande [];
 users : Users  [];
 appartients :  Appartient  [] ;

}
