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
      return confirm(`Navigate away and lose all changes?`);  
    }  
    return true;  
  }  
}   