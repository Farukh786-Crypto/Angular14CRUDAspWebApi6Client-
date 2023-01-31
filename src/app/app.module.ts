import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './Employee/employee.component';
import { RouterModule } from '@angular/router'
import { myroute } from './Routing/Route.config';
import {  HttpClientModule } from '@angular/common/http'
import { EmployeeService } from './Employee/employee.service';
import { CascadingDropdownComponent } from './dropdown/cascading-dropdown/cascading-dropdown.component';
import { CascadingDropdownService } from './dropdown/cascading-dropdown/cascading-dropdown.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    CascadingDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [EmployeeService,CascadingDropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
