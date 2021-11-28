import { Injectable } from '@angular/core';  
import { CanDeactivate } from '@angular/router';  
import { Observable } from 'rxjs';  
import { EmployeeEditComponent } from './employee-edit.component';  
  
  
@Injectable({  
  providedIn: 'root'  
})  
export class EmployeeEditGuard implements CanDeactivate<EmployeeEditComponent> {  
  canDeactivate(component: EmployeeEditComponent): Observable<boolean> | Promise<boolean> | boolean {  
    if (component.employeeForm.dirty) {  
      const name = component.employeeForm.get('name').value || 'New Employee';  
      return confirm(`Navigate away and lose all changes to ${name}?`);  
    }  
    return true;  
  }  
}   