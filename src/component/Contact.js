import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };
  onDeleteClick = () => {
    this.props.deleteClickHandler();
  };

  onShowClick = e => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };
  render() {
    const { name, email, phone } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="container">
        <div className="card card-body mb-3">
          <h4>
            {name} <i onClick={this.onShowClick} className="fas fa-sort-down" />
            <i onClick={this.onDeleteClick} className="fas fa-times delete" />
          </h4>
          {showContactInfo ? (
            <ul className="list-group">
              <li className="list-group-item">{email}</li>
              <li className="list-group-item">{phone}</li>
            </ul>
          ) : null}
        </div>
      </div>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
