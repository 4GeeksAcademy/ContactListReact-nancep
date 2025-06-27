import React from "react";
import { useContact } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContact();
  const navigate = useNavigate();

  return (
    <div className="card mb-3 contact-card">
      <div className="row g-0">
        <div className="col-md-2 d-flex align-items-center justify-content-center">
          <img
            src="https://picsum.photos/id/237/100/100"
            alt="profile"
            className="img-fluid rounded-circle p-2"
            style={{ width: "100px", height: "100px", objectFit: "cover" }}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text">
              <i className="fas fa-map-marker-alt me-2"></i>
              {contact.address}
            </p>
            <p className="card-text">
              <i className="fas fa-phone me-2"></i>
              {contact.phone}
            </p>
            <p className="card-text">
              <i className="fas fa-envelope me-2"></i>
              {contact.email}
            </p>
          </div>
        </div>
        <div className="col-md-2 d-flex flex-column justify-content-center align-items-center">
          <button
            className="btn btn-link text-dark"
            onClick={() => navigate(`/edit/${contact.id}`)}
          >
            <i className="fas fa-pencil-alt"></i>
          </button>
          <button
            className="btn btn-link text-danger"
            onClick={() => deleteContact(contact.id)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;


