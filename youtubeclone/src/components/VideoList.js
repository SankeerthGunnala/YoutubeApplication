import React from 'react';

class VideoList extends React.Component{
    renderVideos(){
        let allVideosList=this.props.videos.map(
            video => {
                // return <li>{video.}</li>
                return <li onClick={() => {this.props.onVideoSelect(video)}} id={video.id.videoId}>{video.snippet.title} <br></br> <img src={video.snippet.thumbnails.default.url}></img></li>
            }
        )
        return allVideosList;
    }
    render(){
        return(
            <div>
                 <ul>
                     {this.renderVideos()}
                 </ul>
            </div>
        )
    }
}
export default VideoList;