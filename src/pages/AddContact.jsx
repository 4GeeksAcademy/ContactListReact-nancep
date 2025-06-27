import React, { useState, useEffect } from "react";
import { useContact } from "../context/ContactContext";
import { useNavigate, useParams } from "react-router-dom";

const AddContact = () => {
  const { addContact, contacts, editContact } = useContact();
  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  useEffect(() => {
    if (id) {
      const contact = contacts.find((c) => c.id === parseInt(id));
      if (contact) {
        setForm(contact);
      }
    }
  }, [id, contacts]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      editContact(id, form);
    } else {
      addContact(form);
    }
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2>{id ? "Edit Contact" : "Add a new contact"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="email"
          className="form-control mb-2"
          placeholder="Enter email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter phone"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          required
        />
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Enter address"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
          required
        />
        <button className="btn btn-primary w-100">Save</button>
        <p className="mt-2">
          or{" "}
          <span
            role="button"
            className="text-primary"
            onClick={() => navigate("/")}
          >
            get back to contacts
          </span>
        </p>
      </form>
    </div>
  );
};

export default AddContact;

