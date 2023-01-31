import { Routes } from "@angular/router";
import { CascadingDropdownComponent } from "../dropdown/cascading-dropdown/cascading-dropdown.component";
import { EmployeeComponent } from "../Employee/employee.component";

export const myroute:Routes=[
    {path:"create-employee",component:EmployeeComponent},
    {path:"cascade-dropdown",component:CascadingDropdownComponent}
]