import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {
  render() {
    const { videos, onVideoSelect } = this.props;
    const rendered_list = videos.map((video) => {
      return <VideoItem onVideoSelect={ onVideoSelect } key={video.id.videoId} video={video} />
    });
    return (
      <div className="ui relaxed divided list"> { rendered_list } </div>
    );
  }
}

export default VideoList;