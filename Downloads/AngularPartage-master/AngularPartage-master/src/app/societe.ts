import { Departement } from './departement';
import { Budget } from './budget';

export class Societe {
    id_societe :  number;
    date_lancement : Date ;
    quartier : String;
    type : String;
    departements : Departement [];
    budgets : Budget [] ;
}

