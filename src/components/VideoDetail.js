import React from "react";

class VideoDetail extends React.Component {
  render() {
    const { video } = this.props;
    if (!video) {
      return <div>Loading...</div>;
    }
    const video_src = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe src={video_src} title="No title"/>
        </div>
        <div className="ui segment">
          <h4 className="ui header">{video.snippet.title}</h4>
          <p> {video.snippet.description} </p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
