import { Demande } from './demande';
import { Etat } from './etat';

export class Etatdemande {

    id  : number;
    date_etat : Date;
    etat : Etat ; 
    demande : Demande ;

}
