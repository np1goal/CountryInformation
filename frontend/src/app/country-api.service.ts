import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {

  constructor(private http: HttpClient) { }

  public getCountryInfo() {
    return this.http.get('https://restcountries.com/v2/all')
  }

  public getRegionCountry(region: string) {
    return this.http.get('https://restcountries.com/v2/continent/'+region)
  }

  public getSearchedCountry(value: string) {
    return this.http.get('https://restcountries.com/v2/name/'+value)
  }

  public getOneCountryInfo(country: any) {
    return this.http.get('https://restcountries.com/v2/name/'+ country +'?fullText=true')
  }

  public getCountryInfoCode(codes: any) {
    return this.http.get('https://restcountries.com/v3.1/alpha?codes='+ codes)
  }
}
