import { EventEmitter, Injectable } from '@angular/core';

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
      public states = ['offline','available','busy','away'];
      private _state;
      
      constructor(){
           this._state = this.states[0];
      }
      
      set state(state:string){
          try{
          this._state = this.states[state];
          } catch(e){
              console.log('tried setting bad enum value on AgentStatus', e.stack);
          }
      }
      
      get state():string{
          return this._state; 
      }
      
      get model():any {
        return this.states;    
      }
}