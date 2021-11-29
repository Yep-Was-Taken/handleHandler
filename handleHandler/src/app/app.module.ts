import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LayoutComponent } from './ui/layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PostingListComponent } from './posting/posting-list/posting-list.component';
import { PostingEditComponent } from './posting/posting-edit/posting-edit.component';
import { PostingDetailComponent } from './posting/posting-detail/posting-detail.component';
import { PostingEditGuard } from './posting/posting-edit/posting-edit-guard';
import { PostingService } from './posting/posting.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    PostingListComponent,
    PostingEditComponent,
    PostingDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'postings',
        component: PostingListComponent
      },
      {
        path: 'postings/:id/:handle',
        component: PostingDetailComponent
      },
      {
        path: 'postings/:id/:handle/edit',
        canDeactivate: [PostingEditGuard],
        component: PostingEditComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [
    PostingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
