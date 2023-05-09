import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './AoVivo.css'

const AoVivo = () => {
  const [channelInfo, setChannelInfo] = useState(null);
  const [liveVideos, setLiveVideos] = useState([]);
  const [limit, setLimit] = useState(10)

  const API_KEY = 'AIzaSyDqDj2XM2zn8AxTR-_JM0xtf0MDCyGGDSI';
  const CHANNEL_ID = 'UC4_255s7fdcjk9p21RZFY2w';

  function loadMore(){
      setLimit((prevLimit) => prevLimit + 10)
  }

  useEffect(() => {
    const getLiveVideos = async () => {
      // Obter o ID do playlist de vídeos ao vivo do canal
      const channelsResponse = await axios.get(
        'https://www.googleapis.com/youtube/v3/channels',
        {
          params: {
            part: 'contentDetails',
            id: CHANNEL_ID,
            key: API_KEY,
          },
        }
      );
      const playlistId =
        channelsResponse.data.items[0].contentDetails.relatedPlaylists.uploads;

      // Obter os detalhes dos vídeos da playlist de vídeos ao vivo
      const playlistResponse = await axios.get(
        'https://www.googleapis.com/youtube/v3/playlistItems',
        {
          params: {
            part: 'snippet',
            playlistId,
            key: API_KEY,
            maxResults: limit,
          },
        }
      );

      // Salvar informações de vídeo ao vivo no estado
      const liveVideosData = playlistResponse.data.items.map((item) => {
        const video = item.snippet;
        return {
          id: video.resourceId.videoId,
          title: video.title,
          description: video.description,
          thumbnailUrl: video.thumbnails.medium.url,
        };
      });
      setLiveVideos(liveVideosData);
    };

    getLiveVideos();
  }, [API_KEY, CHANNEL_ID, limit]);



  return (
    <div className="aovivo">
          <div className='container__video'>
        {liveVideos.map((video) => (
          <Link className='container__video_card' key={video.id} to={`https://www.youtube.com/watch?v=${video.id}`} target='blank'>
            <img src={video.thumbnailUrl} alt={`${video.title} Thumbnail`} />
            <p>{video.title}</p>          
          </Link>
        ))}          
    </div> 

    <button onClick={loadMore}>Carregar mais</button>
    </div>


  );
};

export default AoVivo;



