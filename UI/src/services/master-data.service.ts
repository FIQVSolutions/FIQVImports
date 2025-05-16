import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../models/country.model'
import { States } from 'src/models/states.models';
import { Cities } from 'src/models/cities.model';
import { Products } from 'src/models/product.model';
import {Importer} from 'src/models/importer.model';
import {Consignee} from 'src/models/consignee.model';

@Injectable({
  providedIn: 'root'
})
export class MasterDataService {
  private baseUrl = 'https://localhost:44342/api/import'; // adjust if hosted differently
 
   constructor(private http: HttpClient) {}
 
   getCountries(): Observable<Country[]> {
     return this.http.get<Country[]>(`${this.baseUrl}/country`);
   }
   getStates(): Observable<States[]> {
    return this.http.get<States[]>(`${this.baseUrl}/states`);
  }
  getCities(): Observable<Cities[]> {
    return this.http.get<Cities[]>(`${this.baseUrl}/Cities`);
  }
  getProducts(orgId: number): Observable<Products[]> {
    const params = new HttpParams().set('orgId', orgId);
    return this.http.get<Products[]>(`${this.baseUrl}/Products`, { params });
  }
  getImporters(orgId: number): Observable<Importer[]> {
    const params = new HttpParams().set('orgId', orgId);
    return this.http.get<Importer[]>(`${this.baseUrl}/Importers`, { params });
  }
  getConsignees(orgId: number): Observable<Consignee[]> {
    const params = new HttpParams().set('orgId', orgId);
    return this.http.get<Consignee[]>(`${this.baseUrl}/Consignees`, { params });
  }
}
