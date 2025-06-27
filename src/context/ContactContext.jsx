import { createContext, useContext, useEffect, useState } from "react";

const ContactContext = createContext();

export const useContact = () => useContext(ContactContext);

const API = "https://playground.4geeks.com/contact/agendas/Nancy";

export const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    try {
      const res = await fetch(`${API}/contacts`);
      const data = await res.json();
      if (Array.isArray(data.contacts)) {
        setContacts(data.contacts);
      } else {
        setContacts([]);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const createAgendaIfNeeded = async () => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });
  };

  const addContact = async (contact) => {
    await fetch(`${API}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact),
    });
    getContacts();
  };

  const deleteContact = async (id) => {
    await fetch(`${API}/contacts/${id}`, {
      method: "DELETE",
    });
    getContacts();
  };

  const editContact = async (id, updatedContact) => {
    await fetch(`${API}/contacts/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedContact),
    });
    getContacts();
  };

  useEffect(() => {
    createAgendaIfNeeded().then(() => getContacts());
  }, []);

  return (
    <ContactContext.Provider
      value={{ contacts, addContact, deleteContact, editContact }}
    >
      {children}
    </ContactContext.Provider>
  );
};


