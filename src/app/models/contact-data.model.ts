export class ContactData {
    prefix: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    isStatusActive: boolean;
    dateOfCreation: Date;
    secondaryPhoneNumber: number;
    address: string;
    company: string;

    constructor() {
        this.prefix = '';
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber;
        this.email = '';
        this.isStatusActive = true;
        this.dateOfCreation = new Date();
        this.secondaryPhoneNumber;
        this.address = '';
        this.company = '';
    }
}