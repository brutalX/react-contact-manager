import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-5555"
        },
        {
          id: 2,
          name: "Francis Fajardo",
          email: "ff@gmail.com",
          phone: "123-456-7890"
        },
        {
          id: 3,
          name: "John Smith",
          email: "jsmith@gmail.com",
          phone: "123-123-1234"
        }
      ]
    };
  }
  deleteContact = id => {
    const { contacts } = this.state;
    const newContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: newContacts
    });
  };

  render() {
    const { contacts } = this.state;

    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteClickHandler={this.deleteContact.bind(this, contact.id)}
          />
        ))}
      </React.Fragment>
    );
  }
}
export default Contacts;
