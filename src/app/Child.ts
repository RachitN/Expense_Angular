import { Component, OnInit, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component (
    {
        selector : "child",
        templateUrl :'./child.html'
    }
)

export class Child implements OnInit{
    ngOnInit(): void {
        this.event.emit("Hi");
    }
    @Output() event:any = new EventEmitter()
    message:any = "Message";
}