import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html'
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
