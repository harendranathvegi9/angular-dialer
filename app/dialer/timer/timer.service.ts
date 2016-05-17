import {Injectable, EventEmitter} from 'angular2/core';

@Injectable()
export class TimerServiceEmitter extends EventEmitter{
    constructor() {
        super();
    }
}