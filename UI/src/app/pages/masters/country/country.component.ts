import { Component, OnInit , inject} from '@angular/core';
import { MasterDataService } from 'src/services/master-data.service';
import { Country } from 'src/models/country.model';

@Component({
  selector: 'app-country', standalone: false,
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent implements OnInit {
  private masterDataService = inject(MasterDataService);
  countries: Country[] = []; 
 
  ngOnInit(): void {
    this.masterDataService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }
  displayedColumns: string[] = ['CountryName', 'CountryCode', 'actions'];

  editCountry(country: any) {
    console.log('Edit', country);
    // Add your edit logic here (e.g., open a dialog)
  }

  deleteCountry(country: any) {
    console.log('Delete', country);
    this.countries = this.countries.filter(c => c !== country);
  }
}
