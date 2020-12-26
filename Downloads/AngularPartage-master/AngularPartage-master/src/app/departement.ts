import { Budgetdepartement } from './budgetdepartement';
import { Societe } from './societe';
import { Equipe } from './equipe';
export class Departement {


    id : number;
    nom_depar : String;
    societe : Societe;
    equipes : Equipe [];
    budgetDepartements : Budgetdepartement [];
    benefice : number ;

}
