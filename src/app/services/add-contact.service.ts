import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';



@Injectable()
export class AddContactService {
    contactAdded = new BehaviorSubject<any>('');
    constructor() { }
}