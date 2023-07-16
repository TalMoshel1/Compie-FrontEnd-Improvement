import React, { useContext, useEffect, useRef, useState } from "react";
import Photo from "../cmps/Photo";
import "../style.css";
import PhotoDetails from "../cmps/PhotoDetails";

export default function HomePage() {
  const [photos, setPhotos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [startGame, setStartGame] = useState(false);
  const inputRef = useRef(null);
  const [searchedPhotos, setSearchedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

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
return      });
  }

  function useInputValue(inputRef) {
    if (photos.length > 0) {
      const filteredPhotos = photos.filter((photo) => {
        return (
          photo.artistName
            .toLowerCase()
            .includes(inputRef.current.value.toLowerCase()) ||
          photo.name
            .toLowerCase()
            .includes(inputRef.current.value.toLowerCase())
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

  return (
    <div className="home-container">
      {selectedPhoto && (
        <div className="back-to-gallery-container">
          <button
            className="back-to-gallery-button"
            onClick={() => setSelectedPhoto(null)}
          >
            Back To Gallery
          </button>{" "}
          <PhotoDetails item={selectedPhoto} />
        </div>
      )}

      {photos.length > 0 && !selectedPhoto && (
        <div>
          <label className="home-page-label">Search for photo's name or artist name  </label>

          <input ref={inputRef} />
          <button
            onClick={() => useInputValue(inputRef)}
            onMouseEnter={() => (document.body.style.cursor = "pointer")}
            onMouseLeave={() => (document.body.style.cursor = "auto")}
          >
            Search
          </button>
        </div>
      )}

      {!photos.length && (
        <div className="loading">
          <h2>Loading</h2>
        </div>
      )}

      {photos.length && !searchedPhotos.length && !selectedPhoto && (
        <>
          <label className="home-page-label">Click on a photo to open it</label>
          <div className="list-container">
            {photos.map((photo) => {
              return (
                <div
                  className="photo-container"
                  key={photo._id}
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <Photo item={photo} alt={photo.name} />;
                </div>
              );
            })}
          </div>
        </>
      )}

      {photos.length && searchedPhotos.length > 0 && !selectedPhoto && (
        <div className="list-container">
          <button
            className="see-all-items"
            alt={"see all items"}
            onClick={() => setSearchText(() => setSearchedPhotos(() => []))}
          >
            Back to Gallery
          </button>
          {searchedPhotos.map((photo) => {
            return (
              <div
                className="photo-container"
                key={photo._id}
                onClick={() => setSelectedPhoto(photo)}
              >
                <Photo item={photo} alt={photo.name} />;
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
