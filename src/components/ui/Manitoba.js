import data from '../data/data.xml';
const manitobaData = data.canada.manitoba[0];
import { ProvinceImages } from './ProvinceImages';
export const Manitoba = () =>
    <div className="container margin-top">
        <h2>Manitoba</h2>
        <div className="row ">
            <div className="container">
                <p className="lead" > {manitobaData.description}</p>
            </div>
        </div>
        <div className="row">
            <ProvinceImages />
        </div>
    </div>