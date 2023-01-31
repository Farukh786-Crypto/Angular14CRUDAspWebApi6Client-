import { City } from "./City.Model";

export class State
{
    stateId!:number;
    stateName!:string;
    countryId!:number;
    Cities:Array<City>=new Array<City>();
}