import { Component, OnInit, Input } from '@angular/core';
import { ContractorService } from '../contractor.service';

@Component({
  selector: 'app-edit-contractor',
  templateUrl: './edit-contractor.component.html',
  styleUrls: ['./edit-contractor.component.scss'],
  providers: [ContractorService]
})

export class EditContractorComponent implements OnInit {
  @Input() selectedContractor;
  // public editContractor = false;

  constructor(public contractorService: ContractorService) { }

  ngOnInit() {
  }

  beginUpdatingContractor(contractorToUpdate) {
    this.contractorService.updateContract(contractorToUpdate);
    alert("Updated!");
  }

  beginDeleting(contractorToDelete) {
    alert("Are You sure you want to delete this contractor?");
    this.contractorService.deleteContractor(contractorToDelete);
  }
}
