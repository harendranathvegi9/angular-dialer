import {EventEmitter,Injectable} from 'angular2/core';

@Injectable()

export class TimerService {
    public timer$:EventEmitter<number>;
    public pause$:EventEmitter<boolean>;

    private _time:number = 0;
    private _pause:boolean = false;

    constructor() {
        this.timer$ = new EventEmitter();
        this.pause$ = new EventEmitter();
    }

    pause():void {
        this.state = true;
    }

    set time(time:number){
        this._time = time;
    }
    get time():number {
        return this._time;
    }

    set state(state:boolean){
        this._pause = state;
    }

    get state():boolean {
        return this._pause;
    }

}