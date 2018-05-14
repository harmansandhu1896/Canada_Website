import {NavbarMenu} from './NavbarMenu';
let bg_image = require('../images/bgImage.png');
const style = {
    backgroundImage: "url(" + bg_image + ")",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.9,
    minHeight: window.innerHeight + 'px'
}
const Home = () =>
    <div className="row" style={style}>
        <NavbarMenu />
        <div className="container-fluid">
            <div className="row">
                <div className="container margin-top">
                    <div className="col-md-4 ">
                        <img className="logo-image" src={require("../images/logo1.png")} />
                    </div>
                    <div className="col-md-8">
                        <h2 >EXPLORE CANADA </h2>
                        <article>
                            <p className="lead"> Canada is a North American country stretching from the U.S. in the south to the Arctic Circle in the north. Major cities include massive Toronto, west coast film centre Vancouver, French-speaking Montreal and Quebec City, and capital city Ottawa. Canada's vast swaths of wilderness include lake-filled Banff National Park in the Rocky Mountains. It's also home to Niagara Falls, a famous group of massive waterfalls.</p>
                            <p className="lead">Canada is an immense country. It is very diverse in its people, its landscape, its climate, and its way of life. However, Canadians do share the same important values. These values guide and influence much of our everyday life. These are values of pride, a belief in equality and diversity and respect for all individuals in society. Women, men, children and seniors are all equally respected in Canada. Canadians may be different from each other but it is these shared values that make Canada a friendly, caring, peace loving and secure society in which to live.</p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default Home