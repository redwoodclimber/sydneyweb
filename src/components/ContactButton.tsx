'use client';

import { Button, Modal, Navbar } from 'flowbite-react';
import { useState } from 'react';

export default function ContactButton() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Navbar.Link href="#" onClick={() => setOpenModal(true)}>Contact</Navbar.Link>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Email Sydney?</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              sydneykona@gmail.com
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button href="mailto:sydneykona@gmail.com" onClick={() => setOpenModal(false)}>Open Email</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}