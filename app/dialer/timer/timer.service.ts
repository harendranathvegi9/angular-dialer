import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class TimerServiceEmitter extends EventEmitter<T>{
    constructor() {
        super();
    }
}