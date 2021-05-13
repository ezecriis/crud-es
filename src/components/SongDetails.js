import SongArtist from "./SongArtist";
import SongLiryc from "./SongLiryc";
import Message from "./Message";

const SongDetails = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <>
      {lyric.error || lyric.err || lyric.name === "AbortError" ? (
        <Message
          msg={`Error: no existe la cancion '${search.song}'`}
          bgColor="#dc3545"
        />
      ) : (
        <SongLiryc />
      )}
      {bio.artist ? <SongArtist /> : <Message
          msg={`Error: no existe el interprete '${search.artist}'`}
          bgColor="#dc3545"
        />}
    </>
  );
};

export default SongDetails;
