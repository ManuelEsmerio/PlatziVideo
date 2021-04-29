import React , { useEffect, useState } from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import Item from '../components/Item';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';



const App = () => {

    const API = 'http://localhost:3000/initialstate';

    const { mylist, trends, originals } = useInitialState(API);

    return (
        <>
            <Header />
            <Search />

            { mylist.length > 0 &&
                <Categories title="Mi lista!">
                    <Carousel>
                        {mylist.map(item =>
                                <Item key={ item.id } {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            { trends.length > 0 &&
                <Categories title="Tendencias">
                    <Carousel>
                        {trends.map(item =>
                                <Item key={ item.id } {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            { originals.length > 0 &&
                <Categories title="Originales de PlatziVideo">
                    <Carousel>
                        {originals.map(item =>
                                <Item key={ item.id } {...item} />
                        )}
                    </Carousel>
                </Categories>
            }

            <Footer />
        </>
    )
}

export default App
