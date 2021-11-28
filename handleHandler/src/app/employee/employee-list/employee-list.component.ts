import { Component, OnInit } from '@angular/core';  
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
  
@Component({  
  selector: 'app-employee-list',  
  templateUrl: './employee-list.component.html',  
  styleUrls: ['./employee-list.component.css']  
})  
export class EmployeeListComponent implements OnInit {  
  pageTitle = 'Employee List';  
  filteredEmployees: Employee[] = [];  
  employees: Employee[] = [];  
  errorMessage = '';  
  
  _listFilter = '';  
  get listFilter(): string {  
    return this._listFilter;  
  }  
  set listFilter(value: string) {  
    this._listFilter = value;  
    this.filteredEmployees = this.listFilter ? this.performFilter(this.listFilter) : this.employees;  
  }  
  
  constructor(private employeeService: EmployeeService) { }  
  
  performFilter(filterBy: string): Employee[] {  
    filterBy = filterBy.toLocaleLowerCase();  
    return this.employees.filter((employee: Employee) =>  
      employee.name.toLocaleLowerCase().indexOf(filterBy) !== -1);  
  }  
  
  ngOnInit(): void {  
    this.employeeService.getEmployees().subscribe(  
      employees => {  
        this.employees = employees;  
        this.filteredEmployees = this.employees;  
      },  
      error => this.errorMessage = <any>error  
    );  
  }  
  
  deleteEmployee(id: string, name: string, cityname: string): void {  
    if (id === '') {  
      this.onSaveComplete();  
    } else {  
      if (confirm(`Are you sure want to delete this Employee: ${name}?`)) {  
        this.employeeService.deleteEmployee(id, cityname)  
          .subscribe(  
            () => this.onSaveComplete(),  
            (error: any) => this.errorMessage = <any>error  
          );  
      }  
    }  
  }  
  
  onSaveComplete(): void {  
    this.employeeService.getEmployees().subscribe(  
      employees => {  
        this.employees = employees;  
        this.filteredEmployees = this.employees;  
      },  
      error => this.errorMessage = <any>error  
    );  
  }  
  
}  