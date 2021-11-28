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
    const cityname = this.route.snapshot.paramMap.get('cityname');  
    if (id && cityname) {  
      this.getPosting(id, cityname);  
    }  
  }  
  
  getPosting(id: string, cityName: string) {  
    this.postingService.getPosting(id, cityName).subscribe(  
      posting => this.posting = posting,  
      error => this.errorMessage = <any>error);  
  }  
  
  onBack(): void {  
    this.router.navigate(['/postings']);  
  }  
}  