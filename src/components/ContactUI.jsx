import React, { useState } from "react"
import database from "../api"

export default function ContactUI() {
    const [contacts, setContacts] = useState(database.contacts);

    const getInitials = (name) => {
        const nameParts = name.split(" ");
        const initials = nameParts.map(part => part[0]).join("");
        return initials;
    }

    return (
        <section className="contact-ui">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Company</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Last Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact.email}>
                            <td>
                                <span className="nameIcon">{getInitials(contact.name)}</span> {contact.name}
                            </td>
                            <td className="email">{contact.email}</td>
                            <td className="company">{contact.company}</td>
                            <td className="type">{contact.type}</td>
                            <td className="status">{contact.status}</td>
                            <td className="lastContact">{contact.lastContact}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    )
}