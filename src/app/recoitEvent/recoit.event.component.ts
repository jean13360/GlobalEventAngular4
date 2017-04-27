import { Component } from '@angular/core';
import {AddEventService} from '../globalEvent/global.event.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ReceiveEvent',
  templateUrl: './recoit.event.component.html',
  styleUrls: ['./recoit.event.component.css']
})
export class ReceiveEventComponent {
    valeurRecu;
    event;
    constructor(private service: AddEventService) {
        service.addEvent.subscribe(item => this.onItemAdded(item));
    }

    onItemAdded(item: any): void {
        console.log(item);
        this.event = item;
        this.valeurRecu = item;
    }
}
