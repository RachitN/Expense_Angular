import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Child } from './Child';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log(this.child.message)
  }

  obs = new Observable((observer)=>{
    observer.next(1)
    observer.next(2)
    observer.next(3)
    observer.next(3)
    observer.next(5)
  })
  @ViewChild(Child) child:any;
  name = new FormControl("");
  title = 'expense';
  eventValue:any;
  getValue = (name:any)=>{
    console.log(this.name)
  }
  getEventValue(event:any){
    this.eventValue = event;
    this.obs.subscribe((val)=>{
      console.log(val);
    })
  }
}
