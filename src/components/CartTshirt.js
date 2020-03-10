import React from 'react';

/**
 * @constant CartTshirt
 * @param {Object} tshirt this has all details of Tshirt
 * This is to show the details of tshirt in the cart  
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
    color: '#6f6f6f'
}

const closeCross = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    cursor: 'pointer',
    padding: '12px 16px',
    fontSize: '12px',
    transform: "translate(0%, -50%)",
    color: '#6f6f6f'
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
        </div>
    </div>
);

export default CartTshirt;