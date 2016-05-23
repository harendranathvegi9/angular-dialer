import {Component, Input } from '@angular/core';
import {TimerServiceEmitter} from '/app/dialer/timer/timer.service';

@Component({
    selector: 'timer',
    template: `<div (click)="toggle($event)"><span class='badge'>{{renderTime}}</span>&nbsp;<span>{{title}}</span></div>`,
})

// interface TimerComponentInterface {
//     time:number;
//     title:string;
// }

export class TimerComponent {

    private _interval:number  = 1000;
    private _intervalId:number;
    private _time = 0;

    public toggleState:boolean = false;
    public renderTime:string;
    public title:string;

    // setable properties
    @Input() time: number;
    @Input() seperator:string;
    
    /*
    * toTime
    * @return String formats the time counter based on
    * */
    private toTime(time:number, seperator:string = ':'):string {

        let secondNumber = Number(time);
        let hours = Math.floor(secondNumber / 3600);
        let minutes = Math.floor((secondNumber - (hours * 3600)) / 60);
        let seconds = secondNumber - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = String(0) + hours;
        }

        if (minutes < 10) {
            minutes = String(0) + minutes;
        }

        if (seconds < 10) {
            seconds = String(0) + seconds;
        }

        return `${hours}${seperator}${minutes}${seperator}${seconds}`;
    }

    ngOnInit():void {
        if(this.time){
            this.time = +this.time;
        }
        this.startTimer();
    }

    startTimer():void {
        let seperator = this.seperator;
        this.intervalId = setInterval(()=> {
            this.time += this.interval;
            this.renderTime = this.toTime(this.time/this.interval, seperator);
            this.TimerServiceEmitter.next(this.time);
            
        },this.interval);
    }

    pauseTimer():void {
        clearInterval(this.intervalId);
    }

    toggle(event):boolean{
        this.toggleState = !this.toggleState;
        this.TimerServiceEmitter.next(this.toggleState);
        return this.toggleState;
    }

    get time():number{
        return this._time;
    }

    set time(time:number){
        this._time = time;
    }

    get interval():number{
        return this._interval;
    }

    get intervalId():number{
        return this._intervalId;
    }

    set intervalId(newId:number){
        this._intervalId = newId;
    }

    constructor(private TimerServiceEmitter:TimerServiceEmitter){
        
    }

}


