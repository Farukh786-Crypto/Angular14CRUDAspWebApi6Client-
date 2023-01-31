import { HttpClient } from "@angular/common/http";
import { ThisReceiver } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Employee } from "./employee.Model";

@Injectable()

export class EmployeeService{
    constructor(private httpc:HttpClient)
    {}
    getAllEmployee()
    {
        return this.httpc.get<Employee[]>("https://localhost:7206/api/Employees");
    }
    postEmployee(empData:any)
    {
        return this.httpc.post<Employee>("https://localhost:7206/api/Employees",empData);
    }
    getId(id:number)
    {
        return this.httpc.get<Employee>("https://localhost:7206/api/Employees/"+id);
    }
    updateEmployee(empData:any)
    {
        return this.httpc.put<Employee>("https://localhost:7206/api/Employees",empData);
    }
    deleteEmployee(id:number)
    {
        return this.httpc.delete<Employee>("https://localhost:7206/api/Employees/"+id);
    }
}









