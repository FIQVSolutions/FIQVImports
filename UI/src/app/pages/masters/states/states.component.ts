import { Component, inject, OnInit } from '@angular/core';
import { MasterDataService } from 'src/services/master-data.service';
import { States } from 'src/models/states.models';
@Component({
  selector: 'app-states', standalone: false,
  templateUrl: './states.component.html',
  styleUrl: './states.component.scss'
})
export class StatesComponent implements OnInit {
  private masterDataService = inject(MasterDataService);
  states: States[] = []; 
 
  ngOnInit(): void {
    debugger;
    this.masterDataService.getStates().subscribe((data) => {
      this.states = data;
    });
  }
  displayedColumns: string[] = ['StateName', 'StateCode','CountryName', 'actions'];

  editState(state: any) {
    console.log('Edit', state);
    // Add your edit logic here (e.g., open a dialog)
  }

  deleteState(state: any) {
    console.log('Delete', state);
    this.states = this.states.filter(c => c !== state);
  }
}

