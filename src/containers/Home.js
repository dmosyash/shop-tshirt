import React, { Component } from 'react';
import Filters from './../components/Filters';
import productsData from './../data/products';
import TshirtCell from '../components/TshirtCell';

import './Home.css';

/**
 * @class Home
 * @description Home is a Container which get all tshirts from products file
 * and populate state so tshirts will get render.
 * State of this Container is Tshirt List
 * CSS Grid is used to show the tshirt list.
 */

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tshirtsList: productsData,
            order: 'select',
            selectedSizes: [],
            cartList: [],
            previousProps: {}
        };
    }

    // handle the state when props changes
    static getDerivedStateFromProps(props, state) {
        if (props.removedItem.hasOwnProperty('id') && props.removedItem.id !== state.previousProps.id) {
            return {
                tshirtsList: [props.removedItem, ...state.tshirtsList],
                cartList: state.cartList.filter(item => item.id !== props.removedItem.id),
                previousProps: props.removedItem
            };
        } else {
            return null;
        }
    }

    // filtering the list
    applyFilter = filters => {
        const list = this.removeCartItemsFromList(productsData, [ ...this.state.cartList ])
        if (filters.length === 0) {
            return list;
        }
        return list.filter(item => {
            for (let i = 0; i < filters.length; i++) {
                if (item.availableSizes.indexOf(filters[i]) !== -1)
                    return true;
            }
            return false;
        })
    }

    // setting the filter in state on user click 
    setFilter = size => {
        let selectedSizesArr = this.state.selectedSizes;
        const index = selectedSizesArr.indexOf(size);
        if (index === -1) {
            selectedSizesArr.push(size);
        } else {
            selectedSizesArr.splice(index, 1);
        }
        let result = this.applyFilter(selectedSizesArr);
        result = this.sortList(result, this.state.order);
        this.setState({ selectedSizes: selectedSizesArr, tshirtsList: result });
    }

    // to handle the cart operation: on removing a tshirt from cart and add it back into the list
    removeCartItemsFromList = (list, cart) => {
        return list.filter(tshirt => {
            for (let i = 0; i < cart.length; i++) {
                if (tshirt.id === cart[i].id) {
                    cart.splice(i, 1);
                    return false;
                }
            }
            return true;
        });
    }

    // to handle the cart operation: on add to cart, adding in cart and removing from list
    addToCart = item => {
        this.props.sendToCart(item);
        const cart = this.state.cartList;
        cart.push(item);
        const list = this.removeCartItemsFromList(this.state.tshirtsList, [...cart]);
        this.setState({ tshirtsList: list, cartList: cart });
    }

    // this function will show the tshirts on the page
    renderTshirts = () => {
        return this.state.tshirtsList.map(tshirt => {
            return <TshirtCell key={tshirt.id} tshirt={tshirt} onSelect={this.goToTshirt} addToCart={this.addToCart}/>
        })
    }

    // function to navigate to Tshirt Details View page
    goToTshirt = details => {
        localStorage.setItem('tshirtData', JSON.stringify(details));
        this.props.history.push(`/tshirt-details`);
    }

    // sort tshirsts on the bases of user's input i.e. either acending or descending on bases of price
    sortList = (list, sortBy) => {
        if (sortBy === 'select') return list;
        return list.sort((a, b) => parseInt(sortBy) ? b.price - a.price : a.price - b.price);
    }

    // to handle selectbox changes for sorting tshirts
    handleOrderChange = event => {
        const result = this.sortList([ ...this.state.tshirtsList ], event.target.value);
        this.setState({ tshirtsList: result, order: event.target.value });
    }

    render() {
        return (<>
            <div style={{ float: 'right', marginBottom: '10px' }}>
                <span >Order By: </span>
                <select value={this.state.order} onChange={this.handleOrderChange}>
                    <option value="select">Select</option>
                    <option value="0">Lowest to Highest</option>
                    <option value="1">Highest to Lowest</option>
                </select>
            </div>
            <br />
            <div className="wrapper">
                <div className="filter-wrapper">
                    <Filters selectedSizes={this.state.selectedSizes} setFilter={this.setFilter} />
                </div>
                <div className="list-wrapper">
                    {this.renderTshirts()}
                </div>
            </div>
        </>);
        }
    }
    
export default Home;