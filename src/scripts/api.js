const api = {
    fetchContacts () {
        return fetch("http://localhost:8088/contacts")
        .then (data => data.json())
    },
    postContact (newContact) {
        return fetch("http://localhost:8088/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newContact)
        })
        .then (data => data.json())
    }
}

export default api