import React from 'react';
import Navbar from '../components/Layout/Header/Navbar';
import Sidebar from '../components/Layout/Header/Sidebar';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Header;
