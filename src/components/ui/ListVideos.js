import { Component } from 'react';
import fetch from 'isomorphic-fetch';
const url = 'https://www.googleapis.com/youtube/v3/search?maxResults=16&';
import { YoutubeVideo } from './YoutubeVideo';
const params = {
    part: 'snippet',
    type: 'video',
    key: 'AIzaSyCg5o_iDqjku63PvVaUrHzetwwiO_yPpM0'
}
export class ListVideos extends Component {

    constructor(props){
        super(props);
        this.state = {
            videos: [],
            loading: false,
            error: false,
            message: ''
        }
        this.getVideos = this.getVideos.bind(this);
        this.searchVideo = this.searchVideo.bind(this);
    }
    searchVideo(e){
        e.preventDefault();
        this.getVideos(this.searchedVideo.value);
        this.searchedVideo.value = '';
        console.log(this.searchedVideo.value);
    }
    getVideos(filter){
        this.setState({loading: true});
            fetch(url + "part=" + params.part +"&type="+ params.type +"&key=" + params.key + "&q=" + filter)
            .then(response => response.json())
            .then((data) =>
                (typeof data.error != 'undefined' ) ?
                    this.setState({
                        loading: false,
                        videos: [],
                        error: true,
                        message: data.error.message
                    }) :

                    this.setState({
                        loading: false,
                        videos: data.items,
                        error: false,
                        message: ''
                    }));
        }
    componentDidMount(){
        this.setState({loading: true});
        this.getVideos('Java script');
    }

    render(){
        const { videos, loading, message, error } = this.state;
        return (
            <div className="container margin-top">
                <h2>Youtube Videos</h2>
                <div className="row">
                    <div className="container">
                        <form onSubmit={this.searchVideo}>
                            <div className="form-group">
                                <label htmlFor="search-video">Search Video</label>
                                <input placeholder="enter the video name" ref={input => this.searchedVideo = input} className="form-control" type="text" id="video"/>
                            </div>
                            <button className="btn btn-success">Search Video</button>
                        </form>
                    </div>
                </div>

                <div className="row">
                    {(loading) ?
                        <span className="alert alert-info">Loading... </span> : null
                    }
                    {(typeof videos.length == 'undefined' || error) ? <span className="alert alert-danger"> {message} </span> :
                    (videos.length)?
                        videos.map(
                            (video, i) =>
                               ((i != 0 && (i+1) % 4 ==0))? <div className="row">
                            <YoutubeVideo key={i}
                            videoId = {video.id.videoId}
                            title = {video.snippet.title}
                            thumbnailUrl = {video.snippet.thumbnails.high.url}
                            channelTitle = {video.snippet.channelTitle} />
                          </div> :
                                   <YoutubeVideo key={i}
                                                 videoId = {video.id.videoId}
                                                 title = {video.snippet.title}
                                                 thumbnailUrl = {video.snippet.thumbnails.high.url}
                                                 channelTitle = {video.snippet.channelTitle} />
                        ):
                        <span className="alert alert-danger">Currently 0 Videos Loaded.</span>
                }
                </div>
            </div>
        )
    }
}