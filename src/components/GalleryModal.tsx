
'use client';

import { Button, Modal } from 'flowbite-react';
import { useState } from 'react';
import Gallery from '@/components/Gallery';

export default function GalleryModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)}>Expand Gallery</Button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Body>
          <div className="space-y-4">
            <div className="h-screen">
              <Gallery />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
