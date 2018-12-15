import { Component, OnInit, Input, Output } from '@angular/core';
import { ContactData } from 'src/app/models/contact-data.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddContactService } from 'src/app/services/add-contact.service';

@Component({
  selector: 'add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent implements OnInit {
  @Input() isAdding;
  addForm: FormGroup;
  currentStatus: string;
  isEditing: boolean = false;
  contact: ContactData;
  submitted = false;
  formControls: any;

  constructor(
    private formBuilder: FormBuilder,
    private addContactService: AddContactService) { }

  ngOnInit() {
    this.contact = new ContactData();

    this.addForm = this.formBuilder.group({
      prefix: [this.contact.prefix, Validators.required],
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      phoneNumber: [this.contact.phoneNumber, Validators.required],
      email: [this.contact.email, [Validators.required, Validators.email]],
      secondaryPhoneNumber: [this.contact.secondaryPhoneNumber],
      address: [this.contact.address],
      company: [this.contact.company],
      isStatusActive: [this.contact.isStatusActive]
    });
    this.formControls = this.addForm.controls;
    // To set Active/Inactive toggle
    // this.statusChanged();
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    this.setContactObject()
    this.addContactService.contactAdded.next(this.contact);
    this.contact = new ContactData();
    this.resetForm();
  }

  cancelClicked() {
    this.addContactService.contactAdded.next('');
  }

  setContactObject() {
    this.contact.prefix = this.formControls.prefix.value;
    this.contact.firstName = this.formControls.firstName.value;
    this.contact.lastName = this.formControls.lastName.value;
    this.contact.phoneNumber = this.formControls.phoneNumber.value;
    this.contact.email = this.formControls.email.value;
    this.contact.dateOfCreation = new Date();
    this.contact.secondaryPhoneNumber = this.formControls.secondaryPhoneNumber.value;
    this.contact.address = this.formControls.address.value;
    this.contact.company = this.formControls.company.value;
    this.contact.isStatusActive = this.formControls.isStatusActive.value;
  }

  resetForm() {
    this.formControls.prefix.value = this.contact.prefix;
    this.formControls.firstName.value = this.contact.firstName;
    this.formControls.lastName.value = this.contact.lastName;
    this.formControls.phoneNumber.value = this.contact.phoneNumber;
    this.formControls.email.value = this.contact.email;
    // this.contact.dateOfCreation = new Date();
    this.formControls.secondaryPhoneNumber.value = this.contact.secondaryPhoneNumber;
    this.formControls.address.value = this.contact.address;
    this.formControls.company.value = this.contact.company;
    this.formControls.isStatusActive.value = this.contact.isStatusActive;
  }
}
