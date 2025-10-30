import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class Admin implements OnInit, AfterViewInit, OnDestroy {
  constructor(){
    console.log("Constructor executed");
  }

  ngOnInit(): void {
    console.log("ngOnInit executed");
    // api call
    // subscription
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit executed");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy executed");
  }
}
