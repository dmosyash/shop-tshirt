import React from 'react';
import '../containers/Home.css';

/**
 * @constant TshirtCell
 * @param {Object} tshirt this has a few details of Tshirt
 * image, title and price of tshirt 
 * It has Add To Cart button, which will call parent(Home) function addToCart
 */

const TshirtCell = ({ onSelect, tshirt, addToCart }) => (
    <div className="cell-style">
        <div style={{height: '90%'}} onClick={() => onSelect(tshirt)}>
            <img style={{ width: '90%' }}
                src={tshirt.src_1}
                alt={tshirt.title}
            />
            <div className="heading-style">
                <span>{tshirt.title}</span>
            </div>
            <span className="heading-style">$ {tshirt.price}</span>
        </div>
        <div className="button-style" onClick={() => addToCart(tshirt)}>Add To Cart</div>
    </div>
);

export default TshirtCell;