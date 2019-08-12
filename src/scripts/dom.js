const contactList = document.querySelector("#contactList")

const render = (htmlRep) => {
    contactList.innerHTML += htmlRep
}

export default render
