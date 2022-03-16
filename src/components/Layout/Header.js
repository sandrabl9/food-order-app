import React, {Fragment} from 'react';

import HeaderCartButton from './HeaderCartButton';
import icecreamImage from '../../assets/imgheader.jpg';
import classes from './Header.module.css';


const Header = props => {
    return (
    <Fragment>
        <header className={classes.header}>
    <h1><span>Frozen</span> Ice-cream</h1>
    <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={icecreamImage} alt="flavours ice-cream"/>
                
        </div>

    </Fragment>
    );
}

export default Header;