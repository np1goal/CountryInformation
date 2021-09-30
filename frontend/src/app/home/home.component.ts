import { Component, OnInit } from '@angular/core';
import { CountryApiService } from 'src/app/country-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private countryService: CountryApiService) { }

  // displayCountries: Array<{alpha2Code: string, alpha3Code: string,altSpellings: string[], area: number, borders: string[], callingCodes: string[], capital: string, cioc: string, currencies: object[], demonym: string, flag: string, gini: number, languages: object[], latlng: number[], name: string, nativeName: string, numericCode: string, population: number, region: string, regionalBlocs: object[], subregion: string, timezones: string[], topLevelDomain: string[], translations: object}> = []
  displayCountries: any = [];
  ngOnInit(): void {
    this.countryService.getCountryInfo().subscribe((res) => { 
      this.displayCountries = res
      console.log(this.displayCountries)
    })
  }

  selectedRegion(region: string) {
    console.log(region)
    this.countryService.getRegionCountry(region).subscribe((res) => {
      this.displayCountries = res
      console.log(this.displayCountries)
    })
  }

  searchedCountry(value: string) {
    console.log(value)
    this.countryService.getSearchedCountry(value).subscribe((res) => {
      this.displayCountries = res
      console.log(this.displayCountries)
    })
  }
}
