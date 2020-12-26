import { Demande } from './demande';
import { Users } from './Users';
import { Appartient  } from './appartient';


export class Salarie {
 id :  number;
 nom_salarie : string ;
 prenom_salarie : string ;
 email_salarie : string ;
 tel_salarie : string ;
 date_naissance : Date ;
 demandes : Demande [];
 users : Users  [];
 appartients :  Appartient  [] ;

}
