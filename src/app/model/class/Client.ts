// whenever we want to create an object that we have to bind to the form then create a class
export class Client {
        clientId:          number;
        contactPersonName: string;
        companyName:       string;
        address:           string;
        city:              string;
        pincode:           string;
        state:             string;
        employeeStrength:  number;
        gstNo:             string;
        contactNo:         string;
        regNo:             string;
    
    constructor(){
        this.clientId = 0;
        this.employeeStrength = 0;
        this.address = '';
        this.city = '';
        this.companyName = '';
        this.contactNo = '';
        this.state = '';
        this.regNo = '';
        this.gstNo = '';
        this.pincode = '';
        this.contactPersonName = ''
    }
}