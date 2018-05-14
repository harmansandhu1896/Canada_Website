import data from '../data/data.xml';
const quebec = data.canada.quebec[0];
import { ProvinceImages } from './ProvinceImages';
export const Quebec = () =>
    <div className="container margin-top">
        <h2>Quebec</h2>
        <div className="row ">
            <div className="container">
                <p className="lead" > {quebec.description}</p>
            </div>
        </div>
        <div className="row">
            <ProvinceImages />
        </div>
    </div>