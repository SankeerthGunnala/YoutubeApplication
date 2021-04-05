import React from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';
import SearchBar from './components/SearchBar';

class App extends React.Component{

      constructor(){
        console.log('constructor called');
        super();

        this.state= {
          videos: [],
          selectedVideo: null
        }
      }

      componentDidMount =()=>{
        console.log("component did mount called!");
            //let v=this;
            this.videoSearch('cricket');
      }

       videoSearch(term){
        YTSearch({key:'AIzaSyBqS8dyklvaE6TSJn6SoIv53F7zcc4Qj0I',term:term},(videos) =>{
          console.log('videos',videos);
          this.setState({selectedVideo:videos[0]})
          this.setState({videos:videos})
      })
       }

      render(){
        console.log('render called');
           if(this.state.selectedVideo == null){
             return  <div>Loading.. Please wait!!</div>
           }
           else
           {
        return(
          <div>
            <h1>I am in app component</h1>
             <SearchBar searchTerm = { (term) => {this.videoSearch(term)} } />
            <VideoPlayer video={this.state.selectedVideo}></VideoPlayer>
              <VideoList onVideoSelect={(s) => {
                this.setState({selectedVideo:s})
                }} videos={this.state.videos}></VideoList>
          </div>
        )
           }
      }
}

export default App;


