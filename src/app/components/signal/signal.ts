import { StringToken } from '@angular/compiler';
import { Component, signal, StreamingResourceOptions } from '@angular/core';
import { throttleTime } from 'rxjs';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName : string = "Angular";

  angularVersion = signal("20");

  courseDuration = signal<string>("2 months");

  cityList = signal<string[]>(["Dhaka","Chittagong","Cumilla"])

  studentObj = signal<any>({
    name: "Irfan",
    city: "Dhaka"
  })
  changeDuration(){
    this.courseDuration.set("3 months");
  }
  
  addCity(city : string){
    this.cityList.update((value : string[]) => [...value,city]);
  }

   addNewCity(){
    this.cityList.update((value : string[]) => [...value,"Bogura","Raj"]);
  }

  changeCity(){
    this.studentObj.update((oldObj: any) => ({...oldObj,city: "Rajshahi"}))
  }
}
