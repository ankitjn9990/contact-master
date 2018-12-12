import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactData } from 'src/app/models/contact-data.model';
import { Subscription } from 'rxjs';
import { AddContactService } from 'src/app/services/add-contact.service';

@Component({
  selector: 'app-main',
  templateUrl: './app-main.component.html',
  styleUrls: ['./app-main.component.scss']
})
export class AppMainComponent implements OnInit, OnDestroy {
  contacts: ContactData[] = [];
  isAdding: boolean = false;
  newContact: ContactData;
  private subscription: Subscription;

  constructor(private addContactService: AddContactService) {
    this.subscription = this.addContactService.contactAdded.subscribe(data =>{
      this.isAdding = false;
      this.contacts.push(data);
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addNewContact() {
    this.isAdding = true;
  }

  // saveNewContact() {
  //   // Emit new object to subject
  //   this.isAdding = false;
  // }

}
