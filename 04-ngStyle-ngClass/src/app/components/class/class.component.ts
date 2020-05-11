import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styles: [ `
    .container {
      width: fit-content;
      padding: 10px;
    }
    .alert-danger {
      background-color: #d2a2ad;
      color: #6f0e0e;
    }
    .alert-success {
      background-color: #a2d2a2;
      color: #071707;
    }
  `]
})
export class ClassComponent implements OnInit {

  alert:string = 'alert-danger';

  properties: any = {
    success: true
  };

  loading:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  run(){
    this.loading = true;

    setTimeout( () => this.loading = false, 3000 );
  }
}
