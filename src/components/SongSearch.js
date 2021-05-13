import React, { useState, useEffect } from "react";
import SongDetails from "./SongDetails";
import SongForm from "./SongForm";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fechData = async () => {
      const { artist, song } = search;

      let artistUri = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;
      let songUri = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistUri, songUri);

      const [artisRes, songRes] = await Promise.all([
        helpHttp().get(artistUri),
        helpHttp().get(songUri),
      ]);

      console.log(artisRes, songRes);

      setBio(artisRes);
      setLyric(songRes);
      setLoading(false);
    };

    fechData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>Song Search</h2>
      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      {search && !loading && (
        <SongDetails search={search} lyric={lyric} bio={bio} />
      )}
    </div>
  );
};

export default SongSearch;
