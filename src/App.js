import './App.css';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { GrFormClose } from 'react-icons/gr'
import SearchResults from './components/SearchResults';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState([]);
  // console.log(input);
  // console.log(result);
  const fetchData = async (req, res) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
    const data = await response.json();
    // console.log("data", data);
    setResult(data);
    
  }

  useEffect(() => {
    fetchData();
  }, []);
  // console.log(input);
  function handlesubmit() {
    // console.log("submit",input);
    alert(`user is ${input}`);
  }

  return (
    <div className="App">
      <div className="search-bar-container">
        <div className="search">
          <input type="text" placeholder='Search..' value={input} onChange={e => setInput(e.target.value)} />
          <GrFormClose id='close-icon' onClick={() => setInput("")} />
          <FaSearch id='search-icon' onClick={handlesubmit} />
        </div>
        <div className="search-results">
          <SearchResults result={result} setResult={setResult} val={input} setVal={setInput} />
        </div>
      </div>
    </div>
  );
}

export default App;
