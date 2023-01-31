import { Component, OnInit } from '@angular/core';
import { CascadingDropdownService } from './cascading-dropdown.service';
import { City } from './City.Model';
import { Country } from './Country.Model';
import { State } from './State.Model';

@Component({
  selector: 'app-cascading-dropdown',
  templateUrl: './cascading-dropdown.component.html',
  styleUrls: ['./cascading-dropdown.component.css']
})
export class CascadingDropdownComponent implements OnInit {

  countryObj: Country = new Country();
  stateObj: State = new State();
  cityObj:City=new City();

  countryList: Country[] = [];
  stateList: State[] = [];
  cityList:City[]=[];

  constructor(private cascadingDropdownService: CascadingDropdownService) { }

  ngOnInit(): void {
    this.getAllCountryForm();
  }
  getAllCountryForm() {
    this.cascadingDropdownService.getAllCountry().subscribe(res => {
      this.countryList = res;
      console.log(this.countryList);
    });
  }
  getAllStateByIdForm(event:any){
    const value=event.target.value;
    console.log("Value of countryId is",value);
    this.cascadingDropdownService.getStateByCId(value).subscribe(res=>{
        this.stateList=res;
        console.log("StateList is :",this.stateList);
    })
  }
  getAllCityByStateIdForm(event:any)
  {
    const value=event.target.value;
    console.log("Value of StateId is",value);
    this.cascadingDropdownService.getCityBySId(value).subscribe(res=>{
      this.cityList=res;
      console.log("cityList is :",this.cityList);
    })
  }
}
