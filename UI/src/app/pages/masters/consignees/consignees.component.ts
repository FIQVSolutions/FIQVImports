import { Component, inject } from '@angular/core';
import { MasterDataService } from 'src/services/master-data.service';
@Component({
  selector: 'app-consignees',
  standalone: false,
  templateUrl: './consignees.component.html',
  styleUrl: './consignees.component.scss'
})
export class ConsigneesComponent {
 private masterDataService = inject(MasterDataService);

  displayedConsigneeColumns: string[] = ['name', 'gstNo', 'address'];

  importers: any[] = [];
  consignees: any[] = [];

  constructor() {}

  ngOnInit(): void {
  this.masterDataService.getConsignees(1).subscribe((data) => {
      this.consignees = data;
    });
  }
}
