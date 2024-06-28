export class ContactsMemory {
    constructor(){
        this.contacts = [
            {
                name: "david",
                phone: 123456789,
                email: "davi@hola.com"
            }
        ]
    }

    get(){
        return this.contacts
    }

    post(contact){
        this.contacts.push(contact)
    }
}