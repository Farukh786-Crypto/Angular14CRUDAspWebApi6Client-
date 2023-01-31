import { State } from "./State.Model";

export class Country
{
    countryId!:number;
    countryName!:string;
    states:Array<State>=new Array<State>(); 
}



