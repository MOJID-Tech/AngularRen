import { Salarie } from './salarie';
export class Demande {
  id: number ;
  montant_net: string;
  montant_brut: number;
  prime_finale: number;
  prime_maximale: string ;
  prime_manager: string ;
  prime_pdg: string ;
  pourcentageContribution: number;
  valideM: boolean  ;
  valideDG: boolean ;
  date_validation: Date;
  date_debut: Date;
  date_fin: Date ;
  salarie:  Salarie;
}






