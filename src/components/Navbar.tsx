'use client';

import { Dropdown, Navbar } from 'flowbite-react';
import ContactButton from '@/components/ContactButton';


export default function NavbarContainer() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="#">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">Sydney Knowland</span>
      </Navbar.Brand>
      <div className="flex">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Dropdown label={<Navbar.Link href="#">Experience</Navbar.Link>} inline>
          <Dropdown.Item href="/experience/theater">Theater</Dropdown.Item>
          <Dropdown.Item href="/experience/dance">Dance</Dropdown.Item>
          <Dropdown.Item href="/experience/opera">Opera</Dropdown.Item>
        </Dropdown>
        <Navbar.Link href="/resume">Resume</Navbar.Link>
        <ContactButton />
      </Navbar.Collapse>
    </Navbar>
  );
}
