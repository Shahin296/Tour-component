import React, { useState } from 'react';


const Tour = ({place, removePlace}) => {

    const [isTrue, setTrue] = useState(false)
 
    function handleShowWords(){
         setTrue(true)
    }
    function handleShowLess(){
        setTrue(false)
    }
   
    return (
      
    <div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
    <div className="col">
        <div className="card">
        <img src={place.image} className="card-img-top w-100" alt="..." />
        <div className="card-body">
           <div className="basic-idea d-flex justify-content-between">
               <h5 className="card-title">{place.title}</h5>
               <p>{place.price}$</p>
           </div>
           {!isTrue ?  <p class="card-text">{place.des.substring(0,20)}... <button className='condionalBtn' onClick={handleShowWords}>show more</button></p> : 
           <p class="card-text">{place.des}<button className='condionalBtn' onClick={handleShowLess}>show less</button></p>
           }
            <div className="btn-section">
               <button className='removeBtn' onClick={()=> removePlace(place)}>Not Interested</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    );
};

export default Tour;