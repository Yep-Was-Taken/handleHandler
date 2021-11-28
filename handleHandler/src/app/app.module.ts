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
import { EmployeeListComponent } from './posting/posting-list/posting-list.component';
import { EmployeeEditComponent } from './posting/posting-edit/posting-edit.component';
import { EmployeeDetailComponent } from './posting/posting-detail/posting-detail.component';
import { EmployeeEditGuard } from './posting/posting-edit/posting-edit-guard';
import { EmployeeService } from './posting/posting.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    HomeComponent,
    EmployeeListComponent,
    EmployeeEditComponent,
    EmployeeDetailComponent
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
        path: 'employees',
        component: EmployeeListComponent
      },
      {
        path: 'employees/:id/:cityname',
        component: EmployeeDetailComponent
      },
      {
        path: 'employees/:id/:cityname/edit',
        canDeactivate: [EmployeeEditGuard],
        component: EmployeeEditComponent
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
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
