import React from 'react';
// import { imageBaseUrl } from '../services/apiService';

/**
 * @constant CartTshirt
 * @param {Object} tshirt this has all details of Tshirt
 * thumbnail of tshirt is getting from TMDb server of 185px width 
 */

const colStyle = {
    display: 'flex',
    marginTop: '10px'
}

const headingStyle = {
    fontSize: '16px',
    marginBlockStart: '10px',
    marginBlockEnd: '0px'
}

const detailsStyle = {
    fontSize: '12px',
    color: '#3f3f3f'
}

const closeCross = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    cursor: 'pointer',
    padding: '12px 16px',
    fontSize: '12px',
    transform: "translate(0%, -50%)"
}

const CartTshirt = ({ tshirt, removeItem }) => (
    <div style={colStyle}>
            <img style={{ width: '20%', margin: 'auto' }}
                src={tshirt.src_2}
                alt={tshirt.title}
        />
        <div style={{margin: 'auto', width: '50%'}}>
            <span style={headingStyle}>{tshirt.title}</span>
            <br />
            <span style={detailsStyle}>Size: {tshirt.availableSizes.toString()}</span>
            <br />
            <span style={detailsStyle}>Quantity: 1</span>
        </div>
        <div style={{margin: 'auto', position: 'relative'}}>
            <span style={closeCross} onClick={() => removeItem(tshirt)}>X</span>
            <br />
            <span style={headingStyle}>$ {tshirt.price}</span>
            <br />
        {/* <div style={buttonStyle} onClick={() => addToCart(tshirt)}>Add To Cart</div> */}
        </div>
    </div>
);

export default CartTshirt;