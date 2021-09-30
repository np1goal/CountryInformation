import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryApiService } from 'src/app/country-api.service';

@Component({
  selector: 'app-country-info',
  templateUrl: './country-info.component.html',
  styleUrls: ['./country-info.component.scss']
})
export class CountryInfoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private countryService: CountryApiService) { }

  countryInfo: any
  borderCountries: any = []

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('name'))
    this.countryService.getOneCountryInfo(this.activatedRoute.snapshot.paramMap.get('name')).subscribe((res) =>  {
      this.countryInfo = res
      if(this.countryInfo[0].borders) {
        this.getBorderCountries(this.countryInfo[0].borders.toString())
      } else {
        let emptyspan = document.createElement("span").appendChild(document.createTextNode('N/A'));
        (<HTMLElement>document.getElementById('border-countries')).appendChild(emptyspan)
      }
    })
  }

  getBorderCountries(countryCodes: any) {
    let countries: any = []
    this.countryService.getCountryInfoCode(countryCodes).subscribe((res) => {
      countries = res
      for(let country of countries) {
        let span = document.createElement("span")
        span.className = "border-country"
        span.style.display = 'inline-block';
        span.style.margin = '0 1vw 1vh 0';
        span.style.padding = '5px 10px';
        span.style.boxShadow = '0px 0px 5px 5px rgba(0,0,0,0.1)';
        span.style.fontSize = '12px';
        let text = document.createTextNode(country.name.common)
        span.appendChild(text);
        (<HTMLElement>document.getElementById('border-countries')).appendChild(span)
      }
    })
  }
}
