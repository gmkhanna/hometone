import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from "angularfire2";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Contractor } from '../contractor.model';
import { ContractorService } from "../contractor.service";


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ContractorService]
})
export class DetailComponent implements OnInit {
  contId: string;
  contToDisplay;

  constructor(public route: ActivatedRoute,
    public location: Location,
    public contractorService: ContractorService) { }

  ngOnInit() {
    this.route.params.forEach((urlParam) => {
        this.contId = urlParam['id'];
    });
    this.contToDisplay = this.contractorService.specContractById(this.contId);
  }
}
