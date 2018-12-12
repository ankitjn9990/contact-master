export class ContactData {
    prefix: string;
    firstName: string;
    lastName: string;
    phoneNumber: number;
    email: string;
    status: string;
    dateOfCreation: Date;
    secondaryPhoneNumber: number;
    address: string;
    company: string;

    constructor() {
        this.prefix = '';
        this.firstName = '';
        this.lastName = '';
        this.phoneNumber = 0;
        this.email = '';
        this.status = 'Active';
        this.dateOfCreation = new Date();
        this.secondaryPhoneNumber = 0;
        this.address = '';
        this.company = '';
    }
}