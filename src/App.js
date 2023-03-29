import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [imgData, setImgData] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(()=>{
      fetch(`https://pixabay.com/api/?key=34814083-66766f21879c55911aa329ca7&q=${term}&image_type=photo&pretty=true`)
      .then(res=> res.json())
      .then(data =>console.log(data.hits));
  },[term]);
  return (
    <div >
     
    </div>
  );
}

export default App;
