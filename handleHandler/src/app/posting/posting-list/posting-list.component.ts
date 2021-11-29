import { Component, OnInit } from '@angular/core';  
import { Posting } from '../posting';
import { PostingService } from '../posting.service';
  
@Component({  
  selector: 'app-posting-list',  
  templateUrl: './posting-list.component.html',  
  styleUrls: ['./posting-list.component.css']  
})  
export class PostingListComponent implements OnInit {  
  pageTitle = 'Posting List';  
  filteredPostings: Posting[] = [];  
  postings: Posting[] = [];  
  errorMessage = '';  
  
  _listFilter = '';  
  get listFilter(): string {  
    return this._listFilter;  
  }  
  set listFilter(value: string) {  
    this._listFilter = value;  
    this.filteredPostings = this.listFilter ? this.performFilter(this.listFilter) : this.postings;  
  }  
  
  constructor(private postingService: PostingService) { }  
  
  performFilter(filterBy: string): Posting[] {  
    filterBy = filterBy.toLocaleLowerCase();  
    return this.postings.filter((posting: Posting) =>  
      posting.handle.toLocaleLowerCase().indexOf(filterBy) !== -1);  
  }  
  
  ngOnInit(): void {  
    this.postingService.getPostings().subscribe(  
      postings => {  
        this.postings = postings;  
        this.filteredPostings = this.postings;  
      },  
      error => this.errorMessage = <any>error  
    );  
  }  
  
  deletePosting(id: string, handle: string): void {  
    if (id === '') {  
      this.onSaveComplete();  
    } else {  
      if (confirm(`Are you sure want to delete this Posting: ${handle}?`)) {  
        this.postingService.deletePosting(id, handle)  
          .subscribe(  
            () => this.onSaveComplete(),  
            (error: any) => this.errorMessage = <any>error  
          );  
      }  
    }  
  }  
  
  onSaveComplete(): void {  
    this.postingService.getPostings().subscribe(  
      postings => {  
        this.postings = postings;  
        this.filteredPostings = this.postings;  
      },  
      error => this.errorMessage = <any>error  
    );  
  }  
  
}  