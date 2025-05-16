import { Component, inject, OnInit } from '@angular/core';
import { MasterDataService } from 'src/services/master-data.service';
import { Cities } from 'src/models/cities.model';

@Component({
  selector: 'app-cities',standalone: false,
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent {
 private masterDataService = inject(MasterDataService);
 cities: Cities[] = []; 
 
  ngOnInit(): void {
    this.masterDataService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }
  displayedColumns: string[] = ['CityName','CityCode','StateName','CountryName', 'actions'];

  editCity(city: any) {
    console.log('Edit', city);
    // Add your edit logic here (e.g., open a dialog)
  }

  deleteCity(city: any) {
    console.log('Delete', city);
    this.cities = this.cities.filter(c => c !== city);
  }
}
