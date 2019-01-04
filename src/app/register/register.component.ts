import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{Router} from '@angular/router';
import { rootRenderNodes } from '@angular/core/src/view';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
companyname="company name";
  constructor(private router:Router) { }

  ngOnInit() {
  }
 
  onselect(){

    this.router.navigate(['/register/', this.companyname]);
    

  }
}
