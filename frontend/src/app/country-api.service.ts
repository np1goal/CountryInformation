import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private http: HttpClient) { }

  public getCountryInfo() {
    return this.http.get('https://restcountries.eu/rest/v2/all')
  }

  public getRegionCountry(region: string) {
    return this.http.get('https://restcountries.eu/rest/v2/region/'+region)
  }

  public getSearchedCountry(value: string) {
    return this.http.get('https://restcountries.eu/rest/v2/name/'+value)
  }
}
