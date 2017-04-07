import { Injectable } from '@angular/core';
import { Contractor } from './contractor.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ContractorService {
  contractors: FirebaseListObservable<any[]>;
  specReqOutput = [];

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

specReqKitchen(req: string) {
        this.contractors.subscribe(contractors => {
            console.log(contractors);
            console.log(this.contractors);
            contractors.forEach(contractor => {
                // console.log(project);
                // console.log(project.category);
                if (contractor.specialty === req)
                {
                    this.specReqOutput.push(contractor);
                }
                // else {
                //     this.specProjectByCategoryOutput.push(project);
                // }
            });
            return this.specReqOutput;
        });
      }
}
