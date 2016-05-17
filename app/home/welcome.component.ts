import { Component } from 'angular2/core';
import { DialerComponent } from '../dialer/dialer.component';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [DialerComponent]
})
export class WelcomeComponent {
    public pageTitle: string = 'Dialer';
}
