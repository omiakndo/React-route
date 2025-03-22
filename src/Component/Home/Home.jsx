import React from 'react';
import Header from '../Header/header';
import { Outlet, useNavigation } from 'react-router';

const Home = () => {

    const navigation = useNavigation();

    return (
        <div>
            <Header></Header>
          <div className='loader'>
          {navigation.state === 'loading' ? 'Loading...' : ''}
          </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;