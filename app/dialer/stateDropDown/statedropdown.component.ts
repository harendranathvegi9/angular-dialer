import {Component,Input,Output,EventEmitter} from '@angular/core';
import {DROPDOWN_DIRECTIVES} from 'ng2-bootstrap/ng2-bootstrap';


@Component({
    selector: 'statedropdown',
    directives: [DROPDOWN_DIRECTIVES],
    template: `
    <div (click)="$event.preventDefault()">
        <div class="btn-group" dropdown (click)="toggled($event)" [(isOpen)]="status.isopen">
            <button id="single-button" type="button" class="btn btn-primary" dropdownToggle [disabled]="disabled">
                {{currentItem}}<span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu" aria-labelledby="single-button">
                <li *ngFor="let choice of items" role="menuitem"><a class="dropdown-item" href="#">{{choice}}</a></li>
            </ul>
        </div>
    </div>`
})
export class StateDropDown {

    @Input('init') items:Array<item>;
    @Output() change: EventEmitter<string> = new EventEmitter();

    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};
    public currentItem = 'Loading...';
    
    public toggled($event:MouseEvent):void {
        try {
            this.currentItem = $event.target.text;
            this.broadcastChange(this.currentItem);
        }catch(e){
            console.log('could not set stateDropDown option');
        }
    }

    ngOnInit():void{
        this.currentItem = this.items[0];
    }

    private broadcastChange(newState:string):any {
        console.log('emitting:' ,newState.toLowerCase());
        return this.change.emit(newState.toLowerCase());
    }

}