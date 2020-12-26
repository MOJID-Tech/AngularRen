import { Budgetdepartement } from './budgetdepartement';
import { Societe } from './societe';
import { Equipe } from './equipe';
export class Budget {
    id :  number;
    consommation :  number;
    montant : number;
    pourcentage :  number;
    date_debut : Date;
    date_fin : Date;
    societe : Societe;
    budgetDepartements : Budgetdepartement [];
    equipe : Equipe ;

}
