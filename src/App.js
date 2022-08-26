import React, { useState, useEffect } from "react";

export default function App(){

  const [location, setLocation ] = useState({});

  useEffect(() =>{
    const watchID = navigator.geolocation.watchPosition(handlePositionReceived)
    return () => navigator.geolocation.clearWatch(watchID);
  }, []);

  function handlePositionReceived({coords}){
    const {latitude, longitude} = coords;
    setLocation({latitude, longitude});
  }

  // const [repositories, setRepositories] = useState([]);

  // useEffect(()=>{
  //   const filtered = repositories.filter(repo => repo.favorite);
  //   document.title = `Você tem ${filtered.length} favoritos`
  // }, [repositories]);

  // useEffect(async () => {
  //   const response = await fetch('https://api.github.com/users/diego3g/repos');
  //   const data = await response.json();
  //   setRepositories(data)
  // },[]);

  // function handleFavorite (id){
  //   const newRepositories = repositories.map(repo => {
  //     return repo.id === id ? {...repo, favorite: !repo.favorite} : repo
  //   });
  //   setRepositories(newRepositories);
  // }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}
