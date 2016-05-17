import {Component, Input, Output } from 'angular2/core';
import {TimerService} from '/app/dialer/timer/timer.service';

@Component({
    selector: 'timer',
    template: `<span class='badge'>{{renderTime}}</span>&nbsp;<span>{{title}}</span>`,
    providers:[TimerService]
})

// interface TimerComponentInterface {
//     time:number;
//     title:string;
// }

export class TimerComponent {

    private _interval:number  = 1000;
    private _intervalId:number;

    public renderTime:string;
    public title:string;

    // setable properties
    @Input() time: number;
    @Input() seperator:string;

    @Output() toggle:EventEmitter<string> = new EventEmitter<string>();

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
            
        },this.interval);
    }

    pauseTimer():void {
        clearInterval(this.intervalId);
        this.TimerService.pause();
    }

    toggle():void{

    }

    get time():number{
        return this.TimerService.time;
    }

    set time(time:number){
        this.TimerService.time = time;
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



    constructor(private TimerService:TimerService){
        
    }

}


