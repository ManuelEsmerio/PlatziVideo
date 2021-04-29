import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';

import '../assets/styles/App.scss';

const App = () => {
    return (
        <>
            <Header />
            <Search />
            <Categories>
                <Carousel>
                    <Item/>
                </Carousel>
            </Categories>
        </>
    )
}

export default App
