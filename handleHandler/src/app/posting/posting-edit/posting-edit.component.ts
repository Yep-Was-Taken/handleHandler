import { Component, OnInit, OnDestroy } from '@angular/core';  
import { FormGroup, FormBuilder, Validators } from '@angular/forms';  
import { Subscription } from 'rxjs';  
import { ActivatedRoute, Router } from '@angular/router';  
import { Posting } from '../posting';
import { PostingService } from '../posting.service';
import { GenericValidator } from 'src/app/shared/genericvalidator';
  
@Component({  
  selector: 'app-posting-edit',  
  templateUrl: './posting-edit.component.html',  
  styleUrls: ['./posting-edit.component.css']  
})  
export class PostingEditComponent implements OnInit, OnDestroy {  
  pageTitle = 'Posting Edit';  
  errorMessage: string;  
  postingForm: FormGroup;  
  tranMode: string;  
  posting: Posting;  
  private sub: Subscription;  
  
  displayMessage: { [key: string]: string } = {};  
  private validationMessages: { [key: string]: { [key: string]: string } };  
  genericValidator: GenericValidator;  
  
  
  constructor(private fb: FormBuilder,  
    private route: ActivatedRoute,  
    private router: Router,  
    private postingService: PostingService) {  
  
    this.validationMessages = {  
      name: {  
        required: 'Posting name is required.',  
        minlength: 'Posting name must be at least three characters.',  
        maxlength: 'Posting name cannot exceed 50 characters.'  
      },  
      cityname: {  
        required: 'Posting city name is required.',  
      }  
    };  
    this.genericValidator = new GenericValidator(this.validationMessages);  
  }  
  
  ngOnInit() {  
    this.tranMode = "new";  
    this.postingForm = this.fb.group({  
      name: ['', [Validators.required,  
      Validators.minLength(3),  
      Validators.maxLength(50)  
      ]],  
      address: '',  
      cityname: ['', [Validators.required]],  
      gender: '',  
      company: '',  
      designation: '',  
    });  
  
    this.sub = this.route.paramMap.subscribe(  
      params => {  
        const id = params.get('id');  
        const cityname = params.get('cityname');  
        if (id == '0') {  
          const posting: Posting = { id: "0", name: "", address: "", gender: "", company: "", designation: "", cityname: "" };  
          this.displayPosting(posting);  
        }  
        else {  
          this.getPosting(id, cityname);  
        }  
      }  
    );  
  }  
  
  ngOnDestroy(): void {  
    this.sub.unsubscribe();  
  }  
  
  getPosting(id: string, cityname: string): void {  
    this.postingService.getPosting(id, cityname)  
      .subscribe(  
        (posting: Posting) => this.displayPosting(posting),  
        (error: any) => this.errorMessage = <any>error  
      );  
  }  
  
  displayPosting(posting: Posting): void {  
    if (this.postingForm) {  
      this.postingForm.reset();  
    }  
    this.posting = posting;  
    if (this.posting.id == '0') {  
      this.pageTitle = 'Add Posting';  
    } else {  
      this.pageTitle = `Edit Posting: ${this.posting.name}`;  
    }  
    this.postingForm.patchValue({  
      name: this.posting.name,  
      address: this.posting.address,  
      gender: this.posting.gender,  
      company: this.posting.company,  
      designation: this.posting.designation,  
      cityname: this.posting.cityname  
    });  
  }  
  
  deletePosting(): void {  
    if (this.posting.id == '0') {  
      this.onSaveComplete();  
    } else {  
      if (confirm(`Are you sure want to delete this Posting: ${this.posting.name}?`)) {  
        this.postingService.deletePosting(this.posting.id, this.posting.cityname)  
          .subscribe(  
            () => this.onSaveComplete(),  
            (error: any) => this.errorMessage = <any>error  
          );  
      }  
    }  
  }  
  
  savePosting(): void {  
    if (this.postingForm.valid) {  
      if (this.postingForm.dirty) {  
        const p = { ...this.posting, ...this.postingForm.value };  
        if (p.id === '0') {  
          this.postingService.createPosting(p)  
            .subscribe(  
              () => this.onSaveComplete(),  
              (error: any) => this.errorMessage = <any>error  
            );  
        } else {  
          this.postingService.updatePosting(p)  
            .subscribe(  
              () => this.onSaveComplete(),  
              (error: any) => this.errorMessage = <any>error  
            );  
        }  
      } else {  
        this.onSaveComplete();  
      }  
    } else {  
      this.errorMessage = 'Please correct the validation errors.';  
    }  
  }  
  
  onSaveComplete(): void {  
    this.postingForm.reset();  
    this.router.navigate(['/postings']);  
  }  
}  