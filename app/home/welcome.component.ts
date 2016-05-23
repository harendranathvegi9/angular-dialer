import { Component } from '@angular/core';
import { DialerComponent } from '../dialer/dialer.component';

@Component({
    templateUrl: 'app/home/welcome.component.html',
    directives: [DialerComponent]
})
export class WelcomeComponent {
    public pageTitle: string = 'Dialer';
}
