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
  allCount: number = 0;
  activeCount: number = 0;
  inactiveCount: number = 0;
  filterString: string = '';
  private subscription: Subscription;

  constructor(private addContactService: AddContactService) {
    this.subscription = this.addContactService.contactAdded.subscribe(this.getResp.bind(this), this.errorHandler.bind(this));
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addNewContact() {
    this.isAdding = true;
  }

  contactDeleted(evt) {
    this.contacts.splice(evt, 1);
    this.updateContactCount();
  }

  getResp(data) {
    if (data) {
      this.isAdding = false;
      this.contacts.push(data);
      this.allCount = this.contacts.length;
      this.updateContactCount();
    }
    if (data == '') {
      this.isAdding = false;
    }
  }

  errorHandler(error) {
    console.log(error);
  }

  updateFilter(value) {
    this.filterString = value;
  }

  updateContactCount() {
    // Reset counters
    this.allCount = 0;
    this.activeCount = 0;
    this.inactiveCount = 0;

    this.allCount = this.contacts.length;
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].isStatusActive) {
        this.activeCount++;
      }
    }
    this.inactiveCount = this.allCount - this.activeCount;
  }
}
