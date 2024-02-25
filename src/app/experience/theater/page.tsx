import { NextPage } from 'next';
import ShowList from '@/components/ShowList';
import shows from '@/data/theater_shows.json';

const TheaterPage: NextPage = () => {
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold underline mb-6 text-center">Theater Shows</h1>
          <ShowList shows={shows} />
        </div>
      );
}

export default TheaterPage;