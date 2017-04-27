import { Injectable } from '@angular/core';
import {EventEmitter} from '@angular/core';


@Injectable()
export class AddEventService {

    public addEvent: EventEmitter<any>;
    public id = 0;

    constructor() {
        
        this.addEvent = new EventEmitter();
    }

    sendevent() {
        this.id += 1;
        this.addEvent.emit(this.id );
    }
}
