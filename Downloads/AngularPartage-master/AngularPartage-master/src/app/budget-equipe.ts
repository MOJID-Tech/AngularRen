import { Budgetdepartement } from './budgetdepartement';
import { Equipe } from './equipe';
export class BudgetEquipe {

    id :  number;
    consommation_horsmanager :  number;
    montant_horsmanager :  number;
    pourcentage_horsmanager :  number;
    consommation_manager :  number;
    montant_manager :  number;
    pourcentage_manager :  number;
    date_debut : Date;
    date_fin : Date;
    budgetDepartements : Budgetdepartement ;
    equipe : Equipe ;  
}
