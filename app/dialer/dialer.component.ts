import {Component,EventEmitter} from '@angular/core';
import {TimerComponent} from '/app/dialer/timer/timer.component';
import {Example} from '/app/dialer/timer/example';
import {TimerServiceEmitter} from '/app/dialer/timer/timer.service';
import {StateDropDown} from "/app/dialer/stateDropDown/statedropdown.component";
import {AgentStatusService} from "/app/dialer/agent/agent.status.service";


@Component({
    selector: 'dialer',
    templateUrl: 'app/dialer/dialer.component.html',
    directives: [TimerComponent,Example,StateDropDown],
    providers:[AgentStatusService],
    viewProviders:[TimerServiceEmitter,StateDropDown]
})

export class DialerComponent {
    public agentStatusModel;
        
    constructor(private _agentStatusService:AgentStatusService) {
        this.agentStatusModel = _agentStatusService.model
    }
    
    listenForAgentChange():void{
        
    }
}