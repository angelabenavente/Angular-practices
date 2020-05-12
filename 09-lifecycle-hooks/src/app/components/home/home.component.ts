import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    console.log("onInit");
  }

  ngOnChanges() {
    console.log("onChanges");
  }
  ngDoCheck() {
    console.log("doCheck");
  }
  ngAfterContentInit() {
    console.log("afterContentInit");
  }
  ngAfterContentChecked() {
    console.log("afterContentChecked");
  }
  ngAfterViewInit() {
    console.log("afterViewInit");
  }
  ngAfterViewChecked() {
    console.log("afterViewChecked");
  }
  ngOnDestroy() {
    console.log("onDestroy");
  }

}
