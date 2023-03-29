import { useEffect, useState } from 'react';
import './App.css';
import ImgCard from './pages/ImgCard';

function App() {
  const [imgData, setImgData] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=34814083-66766f21879c55911aa329ca7&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => setImgData(data.hits));
    setIsLoading(false);
  }, [term]);

  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <input type="search" name="search" id=""
          onChange={(e) => setTerm(e.target.value)}
          placeholder='Search your favourite images....'
          className='outline-none border-2 gray-600 md:w-96 py-1 rounded-3xl px-2 mt-2'
        />
      </div>
      {!isLoading && imgData.length === 0 && (
        <h1 className="text-center text-4xl font-bold mt-8"><i>No Results Found!</i></h1>
      )}
      ;
      {isLoading ? (
        <h1 className="text-center text-4xl mt-8 font-bold"><i>Loading.....</i></h1>
      ) : (
        <div className='grid md:grid-cols-4 gap-4 mt-8'>
          {
            imgData.map((image) => (
              <ImgCard
                key={image.id}
                image={image} />
            ))
          }
        </div>
      )}
    </div>
  );
}

export default App;
