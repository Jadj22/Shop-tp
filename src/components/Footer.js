import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-black py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Shop. Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
