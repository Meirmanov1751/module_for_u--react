import React, {useContext} from 'react';
import logo from './img/logo.png'
import arrowDown from './img/arrow down.png'
import Header from "./header";

const HeaderContainer = () => {
    return (
        <Header logo={logo} arrowD={arrowDown}/>
    );
};

export default HeaderContainer;
