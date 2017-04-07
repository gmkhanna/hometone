import { Component, OnInit } from '@angular/core';
import { Contractor } from '../contractor.model';
import { ContractorService } from '../contractor.service';
import { FirebaseObjectObservable, AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [ContractorService]
})
export class AdminComponent implements OnInit {

  constructor(public contractorService: ContractorService, public router: Router) { }

  ngOnInit() {
  }

  submitForm(newName: string, newSpecialization: string, newLicense?: number, newLicExp?: string, newContact?: string, newBackground?: string, newPortfolio?: string): void {
    var contractorNew: Contractor = new Contractor(newName, newSpecialization, newLicense, newLicExp, newContact, newBackground, newPortfolio);
    this.contractorService.addContractor(contractorNew);
    this.router.navigate(['main']);
  }

  toEditContractor(contractor) {

  }

}
