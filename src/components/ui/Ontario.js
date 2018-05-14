import data from '../data/data.xml';
const ontarioData = data.canada.ontario[0];
import { ProvinceImages } from './ProvinceImages';
export const Ontario = () =>
    <div className="container margin-top">
        <h2>Ontario</h2>
        <div className="row ">
            <div className="container">
                <p className="lead" > {ontarioData.description}</p>
            </div>
        </div>
        <div className="row">
            <ProvinceImages />
        </div>
    </div>