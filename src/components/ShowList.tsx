import React from 'react';
import Gallery from '@/components/Gallery';
// import GalleryModal from '@/components/GalleryModal';


// Define the types for the props
interface Show {
  title: string;
  role: string;
  location: string;
  date: string;

  imageList: string[];
}

interface ShowListProps {
  shows: Show[];
}
 
const ShowList: React.FC<ShowListProps> = ({ shows }) => {
  return (
    <div className="flex flex-col justify-center space-y-4">
      {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96"> */}
      <div className="flex flex-row justify-center ">
        <div className="min-h-56 h-[60vh] w-3/5">
          <Gallery />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 ">
        {shows.map((show, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-md ">
            <h2 className="font-bold text-xl">{show.title}</h2>
            <p>{show.role}</p>
            <p>{show.location}</p>
            <p>{show.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowList;