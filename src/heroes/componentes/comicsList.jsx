import { useState,useEffect } from "react";
import { ComicCard } from "./comicsCard";
import md5 from 'md5';
const ComicList = () => {
    const [comics, setComics] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
         const publicKey = '5fd3f2fc6537d887620a5c8809440fa1';
         const privateKey = '372161ff438863451c432f67c7ec4c7ce0b3d899';
          const timestamp = new Date().getTime();
          const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  
          const url = `https://gateway.marvel.com:443/v1/public/comics?apikey=${publicKey}&hash=${hash}&ts=${timestamp}&limit=18&orderBy=-issueNumber`;
          
          const response = await fetch(url);
          const { data } = await response.json();
          setComics(data.results);
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {comics.map(comic => (
          <ComicCard
            key={comic.id}
            id={comic.id}
            title={comic.title}
            thumbnail={comic.thumbnail}
            description={comic.description}
          />
        ))}
      </div>
    );
  };
  
  export default ComicList;