import { Component, OnInit } from '@angular/core';  
import { ActivatedRoute, Router } from '@angular/router';  
import { Employee } from '../posting';
import { EmployeeService } from '../posting.service';
  
@Component({  
  selector: 'app-employee-detail',  
  templateUrl: './employee-detail.component.html',  
  styleUrls: ['./employee-detail.component.css']  
})  
export class EmployeeDetailComponent implements OnInit {  
  pageTitle = 'Employee Detail';  
  errorMessage = '';  
  employee: Employee | undefined;  
  
  constructor(private route: ActivatedRoute,  
    private router: Router,  
    private employeeService: EmployeeService) { }  
  
  ngOnInit() {  
    const id = this.route.snapshot.paramMap.get('id');  
    const cityname = this.route.snapshot.paramMap.get('cityname');  
    if (id && cityname) {  
      this.getEmployee(id, cityname);  
    }  
  }  
  
  getEmployee(id: string, cityName: string) {  
    this.employeeService.getEmployee(id, cityName).subscribe(  
      employee => this.employee = employee,  
      error => this.errorMessage = <any>error);  
  }  
  
  onBack(): void {  
    this.router.navigate(['/employees']);  
  }  
}  