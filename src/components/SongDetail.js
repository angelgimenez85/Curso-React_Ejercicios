import React from 'react';
import SongArtist from './SongArtist';
import SongLyric from './SongLyric';

const SongDetail = ({search, lyric, bio}) => {
  return (
    <div>
      <h2>Detalle:</h2>
      <SongArtist bio={bio}/>
      <SongLyric lyric={lyric}/>
    </div>
  );
};

export default SongDetail;
