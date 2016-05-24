import { EventEmitter, Output, Injectable } from '@angular/core';

// export enum AgentStatus {
//     available =1 ,
//     busy = 2,
//     away = 3,
//     offline = 0
// }

// export interface IAgentStatusService {
//     states: AgentStatus
// }
@Injectable()
export class AgentStatusService {

     @Output() modelEmitter: EventEmitter<any> = new EventEmitter();
     @Output() agentChangeEmitter : EventEmitter<any> = new EventEmitter();

      private _state;
      public states = ['available','busy','away','offline'];
      
      constructor(){
           this._state = this.states[0];
      }
      
      set state(state:string){
          try{
          this._state = state;
          this.agentChangeEmitter.emit(this._state);
          } catch(e){
              console.log('tried setting bad enum value on AgentStatus', e.stack);
          }
      }
      
      get state():string{
          return this._state; 
      }

      listenForChanges():any {
          return this.agentChangeEmitter;
      }

      listenForModel():any {
        setTimeout(()=>this.modelEmitter.emit(this.states),0);
        return this.modelEmitter;
      }
}