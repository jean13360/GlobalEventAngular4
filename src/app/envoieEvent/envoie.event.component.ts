import { Component } from '@angular/core';
import {AddEventService} from '../globalEvent/global.event.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'EmitEvent',
  templateUrl: './envoie.event.component.html',
  styleUrls: ['./envoie.event.component.css']
})
export class EmitEventComponent {
    title = 'app works!';

    constructor(private service: AddEventService) {}

    sendEvent() {
        this.service.sendevent();
    }
}
