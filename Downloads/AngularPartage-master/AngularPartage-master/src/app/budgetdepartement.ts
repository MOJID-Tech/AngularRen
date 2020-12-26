import { Budget } from './budget';
import { Departement} from './departement';
import { BudgetEquipe  } from './budget-equipe';

export class Budgetdepartement {

    id :  number;
    consommation :  number;
    montant : number;
    pourcentage :  number;
    date_debut : Date;
    date_fin : Date;
    budget : Budget ;
    departement :  Departement ;
    budgetEquipes : BudgetEquipe [];



}
