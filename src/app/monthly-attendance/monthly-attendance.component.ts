import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monthly-attendance',
  templateUrl: './monthly-attendance.component.html',
  styleUrls: ['./monthly-attendance.component.scss']
})
export class MonthlyAttendanceComponent implements OnInit {
submit_access=false;
  constructor() { }

  ngOnInit() {
  }
 onselect(){
   this.submit_access=true;
 }
}
