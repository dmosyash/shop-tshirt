import React from 'react';

const allSizes = ['XS', 'S', 'M', 'L', 'X', 'XL', 'XXL']

const Bubble = ({ isSelected, size, setFilter }) => {
    let bubbleStyle = {
        height: '20px',
        width: '20px',
        backgroundColor: '#bbb',
        borderRadius: '50%',
        display: 'inline-block',
        marginRight: '10px',
        marginBottom: '5px',
        textAlign: 'center',
        padding: '10px'
    };
    if (isSelected) {
        bubbleStyle.backgroundColor = '#282c34';
        bubbleStyle.color = '#eee';
    }
    return (<span style={bubbleStyle} onClick={() => setFilter(size)}>{size}</span>);
}

const renderBubbles = (selectedSizes, setFilter) => allSizes.map(size => (<Bubble key={size} isSelected={selectedSizes.indexOf(size) !== -1} size={size} setFilter={setFilter} />));

const Filters = ({ selectedSizes, setFilter }) => {
    return (
        <>
            <h3>Sizes:</h3>
            {renderBubbles(selectedSizes, setFilter)}
        </>
    );
}

export default Filters;