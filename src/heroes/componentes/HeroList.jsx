import HeroCard from './HeroCard';
import React, { useEffect, useState } from 'react';
import md5 from 'md5';

export const HeroList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const publicKey = '5fd3f2fc6537d887620a5c8809440fa1';
        const privateKey = '372161ff438863451c432f67c7ec4c7ce0b3d899';
        const timestamp = new Date().getTime();
        const hash = md5(`${timestamp}${privateKey}${publicKey}`);

        const url = `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${timestamp}&limit=18`;
        console.log(url);
        const response = await fetch(url);
        const { data } = await response.json();
        setCharacters(data.results);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">
      {characters.map(hero => (
        <HeroCard
          key={hero.id}
          {...hero}
        />
      ))}
    </div>
  );
}
