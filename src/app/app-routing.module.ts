import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CompanyHomeComponent } from './company-home/company-home.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { MachineSetupComponent } from './machine-setup/machine-setup.component';
import { MonthlyAttendanceComponent } from './monthly-attendance/monthly-attendance.component';
const routes: Routes = [
{path:'',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'register/:companyname',component:CompanyHomeComponent},
{path:'companyname',component:CompanyHomeComponent},
{path:'employeedetails',component:AddEmployeeComponent},
{path:'newbranch',component:AddBranchComponent},
{path:'machinesetup',component: MachineSetupComponent },
{path:'monthlyattendance',component:MonthlyAttendanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
