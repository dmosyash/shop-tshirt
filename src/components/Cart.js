import React, { Component } from 'react';
import CartTshirt from './CartTshirt';
import './cart.css';

/**
 * @class Cart
 * @description Cart is a smart component which get popular tshirts from API called in componentDidMount 
 * and changing state so tshirts will get render.
 * State of this Container is Tshirt List
 */

class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tshirtsList: [],
            previousProps: {},
            isCartShow: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        if (props.item.hasOwnProperty('id') && props.item.id !== state.previousProps.id) {
            state.tshirtsList.push(props.item);
            return {
                tshirtsList: state.tshirtsList,
                previousProps: props.item
            };
        } else {
            return null;
        }
    }

    removeItem = item => {
        this.props.removeItemFromCart(item);
        const list = this.state.tshirtsList.filter(tshirt => tshirt.id !== item.id);
        const stateJson = { tshirtsList: list };
        if (list.length === 0) {
            stateJson.isCartShow = false;
        }
        this.setState(stateJson);
    }

    renderTshirts = () => {
        return this.state.tshirtsList.map(tshirt => {
            return (<CartTshirt key={tshirt.id} tshirt={tshirt} onClick={this.goToTshirt} removeItem={this.removeItem}/>);
        })
    }

    goToTshirt = details => {
        localStorage.setItem('tshirtData', JSON.stringify(details));
        this.props.history.push(`/tshirt-details`);
    }

    toggleCart = () => {
        if (this.state.tshirtsList.length) {
            this.setState({ isCartShow: !this.state.isCartShow });
        }
    }

    getTotalAmount = () => this.state.tshirtsList.reduce((sum, item) => sum + item.price, 0);
    
    render() {
        return (<>
            <div className="cart-position" onClick={this.toggleCart}>
                <img src="/Icons/cart.png" />
                <span className="bubble">{this.state.tshirtsList.length}</span>
            </div>
            { this.state.isCartShow ? (
                <div className="cart-style">
                    <span className="close" onClick={this.toggleCart}>x</span>
                    {/* <div className="center"> */}
                        <img className="cart-icon" src="/Icons/cart.png" />
                        {/* <span style={bubbleStyle}>{this.state.tshirtsList.length}</span>
                        <span>Cart</span> */}
                    {/* </div> */}
                        {this.renderTshirts()}
                    <div className="cart-footer">
                        <span style={{fontSize: '18px'}}>Sub Total</span><span style={{color: '#333'}}>(rounded off)</span>
                        <span style={{ fontSize: '18px', textAlign: 'right', float: 'right' }}>$ {Math.ceil(this.getTotalAmount())}</span>
                        <div className="checkout-btn">CHECKOUT</div>
                    </div>
                </div>
            ): null}
        </>);
    }
}
    
export default Cart;