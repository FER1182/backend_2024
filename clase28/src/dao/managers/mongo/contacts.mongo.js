import { contactsModel } from "../../models/contacts.model.js";

export class ContactsMongo{
    constructor(){
        this.model = contactsModel;
    }

    async get(){
        const contacts = await this.model.find()
        return contacts
    }

    async post(contact){
      await this.model.create(contact)
    }
}