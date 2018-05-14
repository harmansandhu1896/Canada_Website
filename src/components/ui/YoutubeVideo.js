import { Component } from 'react';

export class YoutubeVideo extends Component{

    render(){
        const { videoId, title, thumbnailUrl, channelTitle} = this.props;
        return (
            <div className="col-sm-3">
                <h3>{channelTitle}</h3>
                <a target="_blank" href={"https://www.youtube.com/watch?v=" +videoId}><img className="img-responsive" src={thumbnailUrl} alt="video thumbnail"/> </a>
                <p className="lead">{title}</p>
            </div>
        )
    }
}