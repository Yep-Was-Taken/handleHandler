import { Component, OnInit } from '@angular/core';  
import { ActivatedRoute, Router } from '@angular/router';  
import { Posting } from '../posting';
import { PostingService } from '../posting.service';
  
@Component({  
  selector: 'app-posting-detail',  
  templateUrl: './posting-detail.component.html',  
  styleUrls: ['./posting-detail.component.css']  
})  
export class PostingDetailComponent implements OnInit {  
  pageTitle = 'Posting Detail';  
  errorMessage = '';  
  posting: Posting | undefined;  
  
  constructor(private route: ActivatedRoute,  
    private router: Router,  
    private postingService: PostingService) { }  
  
  ngOnInit() {  
    const id = this.route.snapshot.paramMap.get('id');  
    const handle = this.route.snapshot.paramMap.get('handle');  
    if (id && handle) {  
      this.getPosting(id, handle);  
    }  
  }  
  
  getPosting(id: string, handle: string) {  
    this.postingService.getPosting(id, handle).subscribe(  
      posting => this.posting = posting,  
      error => this.errorMessage = <any>error);  
  }  
  
  onBack(): void {  
    this.router.navigate(['/postings']);  
  }  
}  