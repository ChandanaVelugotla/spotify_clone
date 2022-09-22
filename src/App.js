import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import { getTokenFromUrl } from "./Components/Utilities/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import { useDataLayerValue } from "./DataLayer";

const Spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState();
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      Spotify.setAccessToken(_token);
      Spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      Spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
        // console.log("Playlist: ", playlists);
      });
      Spotify.getPlaylist("37i9dQZEVXcQ9COmYvdajy").then((repsonse) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: repsonse,
        });
        console.log("Weekly Tracks: ", repsonse);
      });
    }
  }, []);

  return <div>{token ? <Player spotify={Spotify} /> : <Login />}</div>;
}

export default App;
