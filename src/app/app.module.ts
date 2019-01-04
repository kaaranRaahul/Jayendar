import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { MachineSetupComponent } from './machine-setup/machine-setup.component';
import { MonthlyAttendanceComponent } from './monthly-attendance/monthly-attendance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CompanyHomeComponent,
    AddEmployeeComponent,
    AddBranchComponent,
    MachineSetupComponent,
    MonthlyAttendanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
