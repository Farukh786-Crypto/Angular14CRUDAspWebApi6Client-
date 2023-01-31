import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { City } from "./City.Model";
import { Country } from "./Country.Model";
import { State } from "./State.Model";

@Injectable()

export class CascadingDropdownService{
    
    constructor(private cascadinghttp:HttpClient) {
    }
    getAllCountry()
    {
        return this.cascadinghttp.get<Country[]>("https://localhost:7206/api/casCadings/getAllCountryList");
    }
    getStateByCId(countryId:number)
    {
        return this.cascadinghttp.get<State[]>("https://localhost:7206/api/casCadings/GetStateById/"+countryId);
    }
    getCityBySId(stateId:number)
    {
        return this.cascadinghttp.get<City[]>("https://localhost:7206/api/casCadings/GetCityBystateId/"+stateId);
    }
}








