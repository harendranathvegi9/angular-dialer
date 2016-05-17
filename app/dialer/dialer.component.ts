import {Component} from 'angular2/core';
import {TimerComponent} from '/app/dialer/timer/timer.component';
import {Example} from '/app/dialer/timer/example';



@Component({
    selector: 'dialer',
    templateUrl: 'app/dialer/dialer.component.html',
    directives: [TimerComponent,Example]
})

export class DialerComponent {

}