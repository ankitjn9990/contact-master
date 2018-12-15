import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ContactData } from 'src/app/models/contact-data.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddContactService } from '../../services/add-contact.service';

@Component({
  selector: 'add-edit-contact',
  templateUrl: './add-edit-contact.component.html',
  styleUrls: ['./add-edit-contact.component.scss']
})
export class AddEditContactComponent implements OnInit {
  @Input() contactObj;
  @Input() index: number;
  @Input() filterString: string;
  @Output() contactDeleted = new EventEmitter<number>();
  isEditing: boolean = false;
  contact: ContactData;
  editForm: FormGroup;
  submitted = false;
  formControls: any;

  constructor(
    private formBuilder: FormBuilder,
    private addContactService: AddContactService) { }

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
      isStatusActive: [this.contactObj.isStatusActive]
    });
    this.formControls = this.editForm.controls;
  }

  deleteContact() {
    this.contactDeleted.emit(this.index);
  }

  saveEditedContact() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    this.contactObj.prefix = this.formControls.prefix.value;
    this.contactObj.firstName = this.formControls.firstName.value;
    this.contactObj.lastName = this.formControls.lastName.value;
    this.contactObj.phoneNumber = this.formControls.phoneNumber.value;
    this.contactObj.email = this.formControls.email.value;
    this.contactObj.dateOfCreation = new Date();
    this.contactObj.secondaryPhoneNumber = this.formControls.secondaryPhoneNumber.value;
    this.contactObj.address = this.formControls.address.value;
    this.contactObj.company = this.formControls.company.value;
    this.contactObj.isStatusActive = this.formControls.isStatusActive.value;
    this.isEditing = false;
    this.deleteContact();
    this.addContactService.contactAdded.next(this.contactObj);
  }
}
