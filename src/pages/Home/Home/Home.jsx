import { Helmet } from "react-helmet-async";
// import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.png';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.png';
import img6 from '../../../assets/home/06.png';


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <div>
                <Carousel className="text-center">
                    <div>
                        <img src={img1} />
                    </div>
                    <div>
                        <img src={img2} />
                    </div>
                    <div>
                        <img src={img3} />
                    </div>
                    <div>
                        <img src={img4} />
                    </div>
                    <div>
                        <img src={img5} />
                    </div>
                    <div>
                        <img src={img6} />
                    </div>
                </Carousel>
            </div>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;