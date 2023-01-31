import { FormControl, FormGroup, Validators } from "@angular/forms";

export class Employee
{
    id!:number;
    name!:string;
    email!:string;
    password!:string;

    empForm!:FormGroup;
    constructor(){
        this.empForm=new FormGroup({
            name:new FormControl('',[Validators.required]),
            email:new FormControl('',[Validators.required]),
            password:new FormControl('',[Validators.required])
        })
    }
}