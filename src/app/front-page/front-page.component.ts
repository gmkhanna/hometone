import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import { Contractor } from '../contractor.model';
import { ContractorService } from '../contractor.service';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.scss'],
  providers: [ContractorService]
})
export class FrontPageComponent implements OnInit {
  contractors: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  public filterSpecialty: string = "all";

  constructor(public contractorService: ContractorService, public router: Router) { }

  ngOnInit() {
    this.contractors = this.contractorService.getContractors();
    console.log(this.contractors);
  }

  toDetailPage(clickedContractor) {
    console.log(clickedContractor.$key);
    this.router.navigate(['contractors', clickedContractor.$key]);
  }

}
