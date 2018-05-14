import data from '../data/data.xml';
const albertaData = data.canada.alberta[0];
import { ProvinceImages } from './ProvinceImages';
export const Alberta = () =>
    <div className="container margin-top">
        <h2>Alberta</h2>
        <div className="row ">
            <div className="container">
                <p className="lead" > {albertaData.description}</p>
            </div>
        </div>
        <div className="row">
            <ProvinceImages />
        </div>
    </div>