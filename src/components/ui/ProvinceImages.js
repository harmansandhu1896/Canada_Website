import  fetch  from 'isomorphic-fetch';
import { Router, Route, hashHistory } from 'react-router';
import { Component } from 'react';
const url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&per_page=20&api_key=f3d09cc2dac27ff1f679df4c6a8eb2d6&format=json&nojsoncallback=1&text=";
import { Image } from './Image';
export class ProvinceImages extends Component{
    constructor(props){
        super(props);
        this.state = {
            provinceImages:[],
            loading: false,
            error: false,
            message: ""
        }
        this.getImages = this.getImages.bind(this);
    }

    getImages(provinceName){
        this.setState({loading: true});
        fetch(url + provinceName)
            .then(response => response.json())
            .then(data => this.setState({
                provinceImages:data.photos.photo,
                    loading: false,
                    error: false,
                    message: ""
            }));
    }
    componentDidMount(){
        this.setState({loading: true});
        this.hashHistoryListener = hashHistory.listen((event) => {
            let path = event.pathname.split('/');
            let searchProvince = path.pop();
            this.getImages(searchProvince);
            console.log(searchProvince);
        });
    }
    render (){
        const { provinceImages, loading, error, message} = this.state;
        return(
            <div className="row">
            {(loading)?
                <span className="alert alert-info">Loading... </span> :
                (provinceImages.length) ?
                    provinceImages.map(
                        (image, i) =>
                            ((i != 0 && (i+1) % 4 ==0))? <div className="row">
                        <Image key={i}
                                imageUrl = {image.server + "/" + image.id + '_' + image.secret + '.jpg'}
                                title = {image.title}
                                server = {image.server}
                                farmId = { image.farm}
                        />
                                </div>:
                                <Image key={i}
                                       imageUrl = {image.server + "/" + image.id + '_' + image.secret + '.jpg'}
                                       title = {image.title}
                                       server = {image.server}
                                       farmId = { image.farm}
                                />
                    ):
                    <span className="alert-danger"> No Images found for the province</span>
            }
            </div>
        )
    }
}