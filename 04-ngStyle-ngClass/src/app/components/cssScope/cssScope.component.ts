import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cssScope',
  template: `
    <p [style.fontSize.px]="size">
      Hola Mundo desde cssScope.component
    <p>
    `,
  styles: [ `
    p {
      color: red;
      font-size: 15px;
    }
  `]
})
export class CssScopeComponent implements OnInit {

  size:number = 30;

  constructor() { }

  ngOnInit(): void {
  }

}
