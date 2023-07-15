import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, addComment } from "../store/photosSlice";
import SingleItem from "../cmps/SingleItem2";
import Photo from "../cmps/Photo";
import Chat from "../cmps/Chat";
import "../style.css";

export default function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startGame, setStartGame] = useState(false);
  const inputRef = useRef(null);
  const [searchedPhotos, setSearchedPhotos] = useState([]);

  function fetchData() {
    fetch("http://localhost:3000/api/photo")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setPhotos(() => {
          return [...data];
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function useInputValue(inputRef) {
    console.log("function works!");
    if (photos.length > 0) {
      const filteredPhotos = photos.filter((photo) => {
        return (
          photo.artistName.toLowerCase().includes(inputRef.current.value.toLowerCase()) ||
          photo.name.toLowerCase().includes(inputRef.current.value.toLowerCase())
        );
      });

      setSearchedPhotos(() => {
        return filteredPhotos;
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  // useEffect(() => {
  //   const handleInput = () => {
  //     if (inputRef.current.value === '') {
  //       console.log('erase')
       
  //     }
  //   };

  //   inputRef.current.addEventListener('input', handleInput);

  //   return () => {
  //     inputRef.current.removeEventListener('input', handleInput);
  //   };
  // }, [searchedPhotos]);

  return (
    <div className="home-container">
      {photos.length > 0 && (
        <div>
          <label>search for photo</label>
          <input ref={inputRef} />
          <button onClick={() => useInputValue(inputRef)}>START</button>
        </div>
      )}

      {!photos.length && (
        <div className="loading">
          <h2>Loading</h2>
        </div>
      )}

      {photos.length && !searchedPhotos.length ? (
        <div className="listContainer">
          {photos.map((photo) => {
            return <Photo item={photo} alt={photo.name} />;
          })}
        </div>
      ) : (
        <div className="listContainer">
          <button alt={'see all items'} onClick={()=>setSearchText(()=>setSearchedPhotos(()=>[]))}>See all items</button>
          {searchedPhotos.map((photo) => {
            return <Photo item={photo} alt={photo.name} />;
          })}
        </div>
      )}

      {/* { {!photos || !photos.length ? (
        <div className="loading">
          <h2>Loading</h2>
        </div>
      ) : (
        <div className="listContainer">
          {photos.map((photo) => {
            return <Photo item={photo} />;
          })}
        </div> */}
      {/* )}  */}
    </div>
  );
}
