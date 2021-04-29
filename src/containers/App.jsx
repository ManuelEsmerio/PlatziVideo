import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
    return (
        <>
            <Header />
            <Search />
            <Categories title="Mi lista!">
                <Carousel>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                    <Item/>
                </Carousel>
            </Categories>

            <Footer />
        </>
    )
}

export default App
