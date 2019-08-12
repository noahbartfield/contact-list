import api from "./api.js"
import render from "./dom.js"
import createContact from "./factory.js"


const submitButton = document.querySelector("#saveButton")
const contactList = document.querySelector("#contactList")
const name = document.querySelector("#nameInput")
const phoneNumber = document.querySelector("#phoneNumberInput")
const address = document.querySelector("#addressInput")

api.fetchContacts().then(contacts => {
    contacts.forEach(contact => {
        const htmlRepofContact = createContact(contact)
        render(htmlRepofContact)
    });
    console.log(contacts)
})

submitButton.addEventListener("click", () => {

    const newContact = {
        name: name.value,
        phoneNumber: phoneNumber.value,
        address: address.value
    }
    console.log(newContact);
    contactList.innerHTML = ""
    api.postContact(newContact).then(() => {
        api.fetchContacts().then(contacts => {
            contacts.forEach(contact => {
                const htmlRepofContact = createContact(contact)
                render(htmlRepofContact)
            });
            console.log(contacts)
        })
    })
    name.value = ""
    phoneNumber.value = ""
    address.value = ""
})