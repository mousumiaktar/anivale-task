import { useEffect, useState } from 'react';
import './App.css';
import ImgCard from './pages/ImgCard';
import banner from "./images/island.jpg";
import Footer from './pages/Footer';

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
    <div>
      <div className='container mx-auto'>
        <div>
          <img className='h-96 w-full relative' src={banner} alt="" />
          <div className='flex justify-center'>
            <h1 className='absolute md:mt-[-250px] hidden md:block text-white text-3xl font-semibold'>Stunning free images & royalty free stock</h1>
            <input type="search" name="search" id=""
              onChange={(e) => setTerm(e.target.value)}
              placeholder='Search your favourite images....'
              className='outline-none border-2 gray-600 md:w-96  rounded-3xl px-2 py-2 absolute mt-[-200px]'
            />
          </div>
        </div>


        {!isLoading && imgData.length === 0 && (
          <h1 className="text-center text-4xl font-bold mt-8"><i>No Results Found!</i></h1>
        )}
        ;
        {isLoading ? (
          <h1 className="text-center text-4xl mt-8 font-bold"><i>Loading.....</i></h1>
        ) : (
          <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
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
      <Footer />
    </div>
  );
}

export default App;
