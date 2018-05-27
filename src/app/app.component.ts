import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToasterService } from './toaster-service.service';
import { SelectedCountryComponent } from './selected-country/selected-country.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  arr:any[];
  addButton:boolean = false;
  countryAdded:boolean = false;
  selectedCountry1:string;
  selectedCountry2:string;
  constructor(private httpClient: HttpClient, private toasterService: ToasterService){}

    ngOnInit(){
      this.getCountries();
    }

    //method to get the contries on page load
    getCountries(){
    	this.httpClient.get('https://web-travel-test.cc.uic.edu/countries').subscribe(
    		(data: any[]) => {
    			if(data.length){
    				this.arr = data;
    			}
    		}
    	)  	
    }

    //function to run on selecting a particular country
    /*onSelectCountry(country){
        if(country.threatLevel === 3 || country.threatLevel === 4){
          this.caution = country.threatText;
          this.Warning(this.caution);
        }
    }*/

    onSelectCountry(country){
      if(country.threatLevel === 3 || country.threatLevel === 4){
          //this.caution = country.threatText;
          this.toasterService.Warning(country.threatText);
        }
      else{
        this.addButton = true;
        this.selectedCountry1 = country.name;
        this.toasterService.Success("You can add one more country to the list.", "voila!!! Country added to your list successfully.");
      }  
    }

    addOneMoreCountry(country){
      this.selectedCountry2 = country.name;
      this.countryAdded = true;
    }
}
