import { Component, OnInit } from 'angular2/core';
import {TimerServiceEmitter} from "./timer.service";


@Component({
    selector: 'example',
    template: `current state: {{state}}`,
})

export class Example {

    public subscription:any = null;
    public state = '';

    constructor(private pubSubService:TimerServiceEmitter){
        console.log('from example' , pubSubService );
    }

    temp(state):void{
        this.state = state;
    }

    ngOnInit(){
        this.pubSubService.subscribe(state => this.temp(state))
    }

}
