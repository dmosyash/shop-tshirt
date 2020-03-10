import React from 'react';
import Cart from './Cart';

/**
 * @name Header
 * @description as name suggest it is Header of the whole App
 * It has two parts App's Logo and shopping cart.
 */

const headerStyle = {
    backgroundColor: '#282c34',
    minHeight: '5vh',
    fontSize: 'calc(10px + 0.5vmin)',
    display: 'flex',
    color: 'white',
    padding: '0px 80px'
};

const Header = props => (
    <header style={headerStyle}>
        <div onClick={props.goHome} style={{ cursor: 'pointer' }}><h2>Shop-Tshirt</h2></div>
        <Cart item={props.cartItem} removeItemFromCart={props.removeItemFromCart} />
    </header>
);

export default Header;