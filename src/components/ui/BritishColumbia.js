import data from '../data/data.xml';
const bcData = data.canada.britishcolumbia[0];
import { ProvinceImages } from './ProvinceImages';
export const BritishColumbia = () =>
    <div className="container margin-top">
        <h2>British Columbia</h2>
        <div className="row ">
            <div className="container">
                <p className="lead" > {bcData.description}</p>
            </div>
        </div>
        <div className="row">
            <ProvinceImages />
        </div>
    </div>