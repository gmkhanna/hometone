import { Injectable } from '@angular/core';
import { Contractor } from './contractor.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ContractorService {
  contractors: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.contractors = angularFire.database.list('contractors');
  }

  getContractors() {
    return this.contractors;
  }

  specContractById(contId: string) {
    return this.angularFire.database.object('contractors/' + contId);
  }

  addContractor(contractorNew: Contractor){
    this.contractors.push(contractorNew);
  }

}
