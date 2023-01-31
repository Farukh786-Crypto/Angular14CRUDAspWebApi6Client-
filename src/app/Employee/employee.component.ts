
import { Component, OnInit } from '@angular/core'
import { Employee } from './employee.Model';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'app-emp',
    templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

    title: string = 'Employee Comoponent Working !!';
    emps: Employee[] = [];
    btnSave: string = 'Save';
    empId: number = 0;
    empIdfromDatabase: number = 0
    // Create object of class
    employee: Employee = new Employee();

    constructor(private employeeService: EmployeeService) {
    }
    ngOnInit() {
        this.getemployeeData();
    }
    getemployeeData() {
        this.employeeService.getAllEmployee().subscribe(res => {
            console.log(res);
            this.emps = res;
        })
    }
    UpdateEmployeeById(id: number) {
        this.employeeService.getId(id).subscribe(res => {
            console.log("Resposne Data of Employee :" + res);
            console.log("Getting single id :" + res.id);
            this.empId = res.id; // getting id from response
            this.btnSave = 'Update';
            this.employee.empForm.patchValue(res); // compare with control and attach to form
        })
    }
    DeleteEmployeeById(id: number) {
        this.employeeService.deleteEmployee(id).subscribe(res => {
            console.log("Employee Deleted Succesfuly !!!");
            this.getemployeeData();
        })
    }
    OnSubmitB(empdata: any) {
        if (this.empId != null && this.empId > 0) {
            console.log("Employee id already present in our database " + this.empId);
            const employeeDTO={
                id:this.empId,
                name:this.employee.empForm.value.name,
                email:this.employee.empForm.value.email,
                password:this.employee.empForm.value.email
            }
            this.employeeService.updateEmployee(employeeDTO).subscribe(res => {
                    console.log("Updated Sucessfully !!");
                    this.getemployeeData();
                    this.employee.empForm.reset(); // Reset form
                    this.btnSave = "Save";
                

            })
        }
        else {
            console.log("Employee id not present in our database we create new ")
            this.employeeService.postEmployee(empdata).subscribe(res => {
                console.log("Save Data" + JSON.stringify(empdata));
                this.getemployeeData(); // Show on table
                this.employee.empForm.reset();
            })
        }
    }
}





