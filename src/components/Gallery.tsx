'use client';

import Image from 'next/image';
import { Carousel } from 'flowbite-react';
import React from 'react';
import imgList from '@/data/allshowpics.json';

// https://postimg.cc/gallery/2kRByDS/71381da4
// https://nextjs.org/docs/pages/building-your-application/optimizing/images

// interface Image {
//   url: string;
//   desc: string;
// }

// interface ImageProps {
//   jsonPath: Image[];
// }

const Gallery = () => {
  return (

      <Carousel slideInterval={5000} pauseOnHover>
        {imgList.map((image, index) => (
        <div key={index}>
          <img src={image.url} className="object-cover" alt={image.desc} />
          {/* <p>{image.desc}</p> */}
        </div>
        ))}
      </Carousel>

  );
}

export default Gallery;
