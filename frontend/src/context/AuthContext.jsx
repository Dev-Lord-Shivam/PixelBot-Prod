import { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();
const ContactModelContext = createContext();

export function AuthModalProvider({ children }) {
  const [isAuthOpen, setAuthOpen] = useState(false);

  return (
    <AuthModalContext.Provider value={{ isAuthOpen, setAuthOpen }}>
      {children}
    </AuthModalContext.Provider>
  );
}

export function ContactModelProvider({ children }) {
  const [isContactOpen, setContactOpen] = useState(false);

  return (
    <ContactModelContext.Provider value={{ isContactOpen, setContactOpen }}>
      {children}
    </ContactModelContext.Provider>
  );
}

export function useAuthModal() {
  return useContext(AuthModalContext);
}

export function useContactModal() {
  return useContext(ContactModelContext);
}