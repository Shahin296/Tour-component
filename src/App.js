import './App.css';
import Tour from './component/Tour';
import myData from './component/Packages';
import { useState } from 'react';

function App() {

const [currentData , setData] = useState(myData)
function removePlace(place){
  const newData = currentData.filter(v => v.id !== place.id);
  setData(newData);
}
  return (
    <div className="App">
      <h2>Our Tours</h2>
      <hr />
      <div className=''>
      {
        currentData.map((place, index) => <Tour place={place} removePlace={removePlace} key={place.id}/>)
       }
      </div>
    </div>
  );
}

export default App;
