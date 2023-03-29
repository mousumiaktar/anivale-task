import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imgData, setImgData] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=34814083-66766f21879c55911aa329ca7&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => console.log(data.hits));
  }, [term]);
  return (
    <div className='container max-auto'>
      <div className='flex justify-center'>
          <input type="search" name="search" id=""
          placeholder='Search your favourite images....'
          className='outline-none border-2 gray-600 w-64 py-1 rounded-3xl px-2 mt-2'
           />
      </div>
    </div>
  );
}

export default App;
