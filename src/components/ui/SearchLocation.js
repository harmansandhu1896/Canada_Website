import { Component } from 'react';
import Map from './Map';
import Places from './Places';
import superagent from 'superagent';
export class SearchLocation extends Component{
    constructor(){
        super();
        this.state ={
            venues: [],
            currentLocation: {
                lat : 43.6414378,
                lng: -79.391541
            }
        }
        this.successGettingLocation = this.successGettingLocation.bind(this);
    }
    componentDidMount() {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( this.successGettingLocation);
        }
        const latLang = "ll=" + this.state.currentLocation.lat + "," + this.state.currentLocation.lng;
        const url = "https://api.foursquare.com/v2/venues/search?v=20170406&"+ latLang + "&client_id=VZZ1EUDOT0JYITGFDKVVMCLYHB3NURAYK3OHB5SK5N453NFD&client_secret=UAA15MIFIWVKZQRH22KPSYVWREIF2EMMH0GQ0ZKIQZC322NZ";
        superagent
            .get(url)
            .query(null)
            .set('Accept', 'text/json')
            .end((error, response) => {
                const venues = response.body.response.venues;
                this.setState({
                    venues: venues
                })
            });
    }
    successGettingLocation(location){
        this.setState({
            currentLocation : {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        });
    }
    render () {
        return (
            <div className="row margin-top">
                <div className="container-fluid">
                    <div className="col-md-6" style={{height:window.innerHeight}}>
                        <Map center ={this.state.currentLocation} markers = {this.state.venues} />
                    </div>
                    <div className="col-md-6">
                        <Places venues ={this.state.venues} />
                    </div>
                </div>
            </div>
        )
    }
}