import React from "react";
import { useContact } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { contacts } = useContact();
  const navigate = useNavigate();

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>My Contacts</h2>
        <button
          className="btn btn-success"
          onClick={() => navigate("/add")}
        >
          Add new contact
        </button>
      </div>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))
      )}
    </div>
  );
};

export default Home;

