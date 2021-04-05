import React from 'react';
class VideoPlayer extends React.Component{
    render(){
        console.log('selected video', this.props.video.id.videoId);
        return(
            <div>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${this.props.video.id.videoId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}
export default VideoPlayer;