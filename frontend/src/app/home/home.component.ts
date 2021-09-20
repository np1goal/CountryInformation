import { Component, OnInit } from '@angular/core';
import { CountryApiService } from 'src/app/country-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private countryService: CountryApiService) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    let data = await this.countryService.getCountryInfo().subscribe((res) => console.log(res))
  }

}
