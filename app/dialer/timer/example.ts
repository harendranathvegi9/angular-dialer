import { Component } from 'angular2/core';
import {TimerService} from "./timer.service";


@Component({
    selector: 'example',
    template: `current state: {{state}}`,
    providers: [TimerService]
})

export class Example {

    public state:string;

    constructor(private TimerService:TimerService){

    }

    get state():string{
        let state = this.TimerService.state;
        return state.toString();
    }
}
