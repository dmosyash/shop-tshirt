import React from 'react';

/**
 * @name TshirtDetailView
 * @description this is dumb component used to show the Tshirt's data
 * Data is gethered from localStorage.
 * tshirtData : Contains all the details of the tshirt required to show on the page. 
 */

const TshirtDetailView = () => {
    const tshirtData = JSON.parse(localStorage.getItem('tshirtData'));
    return (
        <>
        <img width={240} height={364} src={tshirtData.src_1} alt={tshirtData.title} />
                
                    <h2>{tshirtData.title}</h2>
                    <h6>{tshirtData.description}</h6>
                            <span className="sub-key">Size: {tshirtData.availableSizes.toString()}</span><br />
                            <span className="sub-key">Style: {tshirtData.style}</span><br />
                            <span className="sub-key">Price: {tshirtData.currencyFormat} {tshirtData.price}</span><br />
                    <br />
                        <span className="key">Installments: {tshirtData.installments}</span><br />
                        <span className="key">Free Shipping: {tshirtData.isFreeShipping ? 'Yes' : 'No'}</span>
            </>            
    );
}

export default TshirtDetailView;