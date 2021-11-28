import { Injectable } from '@angular/core';  
import { CanDeactivate } from '@angular/router';  
import { Observable } from 'rxjs';  
import { PostingEditComponent } from './posting-edit.component';  
  
  
@Injectable({  
  providedIn: 'root'  
})  
export class PostingEditGuard implements CanDeactivate<PostingEditComponent> {  
  canDeactivate(component: PostingEditComponent): Observable<boolean> | Promise<boolean> | boolean {  
    if (component.postingForm.dirty) {  
      const name = component.postingForm.get('name').value || 'New Posting';  
      return confirm(`Navigate away and lose all changes to ${name}?`);  
    }  
    return true;  
  }  
}   