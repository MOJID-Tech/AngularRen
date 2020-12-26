import { Departement } from './departement';
import { Appartient } from './appartient';
import { BudgetEquipe  } from './budget-equipe';

export class Equipe {

    id :  number;
    nom_equipe : String;
    departement : Departement ;
    budgetEquipes : BudgetEquipe [];
    equipe_membre  : Appartient [];



}
