import React,{useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const[advice,Setadvice] = useState('');
  useEffect(() => {
    //console.log("Component Mount");
    const fetchAPI = () => {
      axios.get("https://api.adviceslip.com/advice")
      .then((response) => {
          Setadvice(response.data.slip.advice);
          //console.log(advice);
      })
      .catch((error) => {
          console.log(error);
      })
    }
    fetchAPI();
    // return(
    //   console.log("Component Unmount")
    // );
  },[advice]);

  const onClickHandler = () => {
    //console.log("Clicked");
    Setadvice('');
  }


  return (
    <div className="app">
      <div className="card">
        <div className="heading">
          {!advice && <p>Loading...</p>}
          <h1>{advice}</h1>
        </div>
        <button className="button" onClick={onClickHandler}>
          <span>Advice Me!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
