import { Component, OnInit, Input } from '@angular/core';
import { ContactData } from 'src/app/models/contact-data.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent implements OnInit {
  @Input() contactObj;
  currentStatus: string;
  isEditing: boolean = false;
  contact: ContactData;
  editForm: FormGroup;
  submitted = false;
  formControls: any;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      prefix: [this.contactObj.prefix, Validators.required],
      firstName: [this.contactObj.firstName, Validators.required],
      lastName: [this.contactObj.lastName, Validators.required],
      phoneNumber: [this.contactObj.phoneNumber, Validators.required],
      email: [this.contactObj.email, [Validators.required, Validators.email]],
      secondaryPhoneNumber: [this.contactObj.secondaryPhoneNumber],
      address: [this.contactObj.address],
      company: [this.contactObj.company],
      statusActive: [true]
    });
    this.formControls = this.editForm.controls;
    // To set Active/Inactive toggle
    this.currentStatus = this.contactObj.status;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
  }

  statusChanged() {
    if (this.formControls.statusActive.value) {
      this.currentStatus = 'Active';
    } else {
      this.currentStatus = 'Inactive';
    }
  }

  saveEditedContact() {
    this.contactObj.prefix = this.formControls.prefix.value;
    this.contactObj.firstName = this.formControls.firstName.value;
    this.contactObj.lastName = this.formControls.lastName.value;
    this.contactObj.phoneNumber = this.formControls.phoneNumber.value;
    this.contactObj.email = this.formControls.email.value;
    this.contactObj.dateOfCreation = new Date();
    this.contactObj.secondaryPhoneNumber = this.formControls.secondaryPhoneNumber.value;
    this.contactObj.address = this.formControls.address.value;
    this.contactObj.company = this.formControls.company.value;
    this.contactObj.status = this.currentStatus;
    this.isEditing = false;
  }
}
