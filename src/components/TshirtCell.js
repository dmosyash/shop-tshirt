import React from 'react';
import '../containers/Home.css';

/**
 * @constant TshirtCell
 * @param {Object} tshirt this has all details of Tshirt
 * thumbnail of tshirt is getting from TMDb server of 185px width 
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