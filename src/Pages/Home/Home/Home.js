import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import ShowProducts from '../Products/ShowProducts';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <ShowProducts></ShowProducts>
            <Reviews></Reviews>
            <Footer></Footer>

        </div>
    );
};

export default Home;