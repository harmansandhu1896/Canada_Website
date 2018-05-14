import { Component } from 'react';

export class Image extends Component{

    render(){
        const { imageUrl, title, farmId } = this.props;
        return (
            <div className="col-sm-3" style={{padding:'10px 10px 10px 10px' }}>
                <img className="img-responsive"style={{maxHeight: '100px',minHeight:'200px', width:'100%'}} src={"http://farm"+ farmId + ".staticflickr.com/" + imageUrl} />
            </div>
        )
    }
}