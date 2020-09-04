import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/Layout'; 

function getJoke(props) {
  const [joke, setJoke] = useState('');
  useEffect(() => {
    getJoke();
  }, [])

  const getJoke = () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setJoke(data.value);
    })
    
  }

  return (
    <Layout title="Get Jokes">
      <p>{joke}</p>

    </Layout>
  );
}

export default getJoke;