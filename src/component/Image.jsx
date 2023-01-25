import React, { useEffect, useState } from 'react'

import '../css/image.css'
import axios from 'axios';

const Image = () => {

    var [catImage, setCatImage] = useState('');
    var [catQuote, setCatQuote] = useState('');
    const url = `https://api.thecatapi.com/v1/images/search?limit=1`;
    const api_key = "live_Fu9DpGTPqUlR8gY3roiE5JcJw7S9I5J3WmFyoBg1xgdrpNYH7OPFIo7EsYBpeqv3"

    useEffect(() => {
        updateCatImage();
        updateCatQuote();
    }, []);

    function updateCatImage() {
        fetch(url,{headers: {
            'x-api-key': api_key
          }})
       .then((response) => {
         return response.json();
       })
      .then((data) => {
        setCatImage(data[0].url);
      })
    }

    

    function updateCatQuote() {
        fetch('https://catfact.ninja/fact?max_length=140')
        .then(response => response.json())
        .then(response => setCatQuote(response.fact))
        .catch(err => console.error(err));
    }

    return (
        <div className='hero'>
            <div className="hero__caption">
                {catQuote}
            </div>
            <div className="v1_10">
                <div className="v1_3"></div>
                <div className="v1_4"></div>
                <div className="v1_5" style={{backgroundImage: `url(${catImage})` }}></div>
            </div>
        </div>
    )
}

export default Image