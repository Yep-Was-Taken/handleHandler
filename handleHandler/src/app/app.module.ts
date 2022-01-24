import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PostingComponent
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
