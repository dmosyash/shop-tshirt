import React from 'react';

/**
 * @name Footer
 * @description It is footer of the whole App
 * it contains link to this app's github page and my emailId
 */

const footerStyle = {
    backgroundColor: '#282c34',
    minHeight: '3vh',
    fontSize: 'calc(10px + .5vmin)',
    color: 'white',
    padding: '1px 80px',
    textAlign: 'center'
}

const ulStyle = {
    width: '100%'
}

const liStyle = {
    listStyleType: 'none',
    display: 'inline',
    margin: '10px 40px'
}

const Footer = (props) => (
    <div style={footerStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <a className="github-button" href="https://github.com/dmosyash/shop-tshirt" data-icon="octicon-star" data-size="large" aria-label="Star dmosyash/shop-tshirt on GitHub">Star</a>
                </li>
                <li style={liStyle}>
                    <a className="github-button" href="https://github.com/dmosyash" data-size="large" aria-label="Follow @dmosyash on GitHub">Follow @dmosyash</a>
                </li>
            </ul>
        <h4>yash.kochar@hotmail.com</h4>
    </div>
);

export default Footer;