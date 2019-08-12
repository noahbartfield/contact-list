const createContact = (contactObj) => {
    return `
    <section class="contactElement">
        <h1>${contactObj.name}</h1>
        <p>${contactObj.phoneNumber}</p>
        <p>${contactObj.address}</p>
    </section>
    `
}

export default createContact