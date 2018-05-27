import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-selected-country',
  templateUrl: './selected-country.component.html',
  styleUrls: ['./selected-country.component.css']
})
export class SelectedCountryComponent implements OnInit {

	@Input() selectedCountry1:string;
	@Input() selectedCountry2:string;

  constructor() { }

  ngOnInit() {
  }

}
