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

  updateContract(localUpdatedContractor){
    var FBEntry = this.specContractById(localUpdatedContractor.$key);
    FBEntry.update({name: localUpdatedContractor.name,
    specialization: localUpdatedContractor.specialization,
  license: localUpdatedContractor.license, licexpire: localUpdatedContractor.licexpire, contact: localUpdatedContractor.contact, background: localUpdatedContractor.background, portfolio: localUpdatedContractor.portfolio});

  }

deleteContractor(localContractor) {
  var FBEntry = this.specContractById(localContractor.$key)
  FBEntry.remove();
}

}
