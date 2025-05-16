import { Component, inject } from '@angular/core';
import { MasterDataService } from 'src/services/master-data.service'; 


@Component({
  selector: 'app-importers',
  standalone: false,
  templateUrl: './importers.component.html',
  styleUrl: './importers.component.scss'
})
export class ImportersComponent {
  private masterDataService = inject(MasterDataService);
  displayedImporterColumns: string[] = ['name', 'email', 'gstNo', 'address'];
  importers: any[] = [];

  constructor() {
    debugger;
    this.masterDataService.getImporters(1).subscribe((data) => {
      this.importers = data;
    });
  }
}
