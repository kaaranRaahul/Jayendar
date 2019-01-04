import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-setup',
  templateUrl: './machine-setup.component.html',
  styleUrls: ['./machine-setup.component.scss']
})
export class MachineSetupComponent implements OnInit {
submit_access=false;
  constructor() { }

  ngOnInit() {
  }
  onselect()
  {
    this.submit_access=true;
  }

}
