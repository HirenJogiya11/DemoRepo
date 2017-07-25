import  { Component ,OnChanges, Input , Output , EventEmitter} from '@angular/core';
import  { passenger} from '../../Models/passenger.interface';

import { CommonModule } from '@angular/common';

@Component ({
  selector : 'passenger-detail',
  styleUrls :['./passenger-detail.component.css'],
  template : `<div>
                  <span class="status"
                  [class.checkedin]="detail.Checkdin"></span>
                  
                 <div *ngIf="editing"> 
                 <input 
                        type="text" 
                        [value]="detail.FirstName" 
                        (input)="onNameChange(name.value)"
                        #name
                        /> 
                  </div>
                        
                  <div *ngIf="!editing">
                   {{detail.FirstName}} 
                   </div>
               

                <div class="children">
                  Children : {{detail.children?.length || 0}}
                </div>
                    <Button (click)="ToggleEdit()">
                        {{ editing ? 'Done' : 'Edit'}}
                   </Button>
               
                   <Button (click)="OnRemove()">
                       Remove
                   </Button>
              </div>`

})

export class PassengerDetailComponent implements OnChanges{

  @Input()
  detail:passenger;

   @Output()
   edit:EventEmitter<any> = new EventEmitter();

  @Output()
  remove:EventEmitter<any> = new EventEmitter();
  editing:boolean = false;

  constructor() {
  }

   ngOnChanges(changes)
   {
      if(changes.detail)
      {
        this.detail = Object.assign({},changes.detail.currentValue);
      }
   }
  onNameChange(value:string)
  {
    this.detail.FirstName = value;
  }

  ToggleEdit(){
   if(this.editing){
   this.edit.emit(this.detail);
   }
  this.editing = !this.editing;
}

  OnRemove(){
    this.remove.emit(this.detail);
  }
}
