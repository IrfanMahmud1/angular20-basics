import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName: string = "Angular 20";
  isActive: boolean = true;
  age: number = 20;
  minTextLength = 15;
  currentDate: Date = new Date();
  spanClassName = "secondary";
  constructor(){
    console.log(this.courseName);
    this.courseName = "Angular 20 tutorial";
    console.log(this.courseName);
    // this.courseName = "30";

    setTimeout(() =>{
      this.age = 5555;
    }, 10000)
  }
  showAlert(){
    alert("this is an alert")
  }
  onCityChanged(){
    alert("City changed successfully");
  }

  onWindowSizeChange(){
    console.log("window size has changed");
  }

  onMouseEnnter(){
    console.log("Mouse in");
  }
}
