import { Component } from '@angular/core';
import {  
   OnChanges,
  OnInit,  
  DoCheck,  
  OnDestroy,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy,AfterViewInit,AfterViewChecked,DoCheck,AfterContentInit,AfterContentChecked {
  title = 'Componentlifecycle';
  firstname:string="Sri";
  lastname:string="Vishnu";
  //phase:1
  ngOnInit(): void {
   
    console.log("Component getting Initialized" );
  }
  //phase:2
  ngDoCheck(): void {
    console.log("Component getting DoCheck" );
  }
  //phase:3
  ngAfterContentInit(): void {
    console.log("Component getting AfterContentInit" );
  }
  //phase:4
  ngAfterContentChecked(): void {
    console.log("Component getting AfterContentChecked" );
  }
  //phase:5
  ngAfterViewInit(): void {
    console.log("Component getting AfterViewInit" );
  }
  //phase:6
  ngAfterViewChecked(): void {
    console.log("Component getting AfterViewChecked" );
  }
  //phase:7
  ngOnChanges(): void {
    console.log("Component getting OnChanges" );
  }
  //phase:8
  ngOnDestroy(): void {
    
    console.log("Component getting Destroyed" );
  }
  addUser(){
    console.log(this.firstname);
    console.log(this.lastname);
  } 
}