import React, { Component } from 'react';

class Places extends Component{
    render(){
        const googleMap ="https://www.google.ca/maps/place/";
        const list = this.props.venues.map((venue, i)=> {
            return (

                <div key ={i} className="row">
                    <div className="container">
                        <h3> {venue.name} </h3>
                        <fieldset>
                            {(!venue.location.address || !venue.location.city ||
                        !venue.location.state || !venue.location.postalCode)?
                                <p className="lead">
                                    Address not available
                                </p> :
                                <p className="lead">
                                    {venue.location.address} ,{venue.location.city} <br />
                                    {venue.location.state} , {venue.location.postalCode}
                                </p>
                            }

                            <a href={googleMap + venue.name} target="blank" className="btn btn-success">See in google maps</a>
                        </fieldset>
                    </div>
                </div>
            )
        })
        return(
            <div className="list-group">
                <ol>
                    {list}
                </ol>
            </div>
        )
    }
}

export default Places